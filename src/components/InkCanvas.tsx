"use client";

import { useEffect, useRef } from "react";

const VERT = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;
varying vec2 v_uv;
uniform float u_time;
uniform vec2 u_res;
uniform vec2 u_mouse;
uniform float u_progress;

float vhash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
float vnoise(vec2 p){
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = vhash(i);
  float b = vhash(i + vec2(1.0, 0.0));
  float c = vhash(i + vec2(0.0, 1.0));
  float d = vhash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * vnoise(p);
    p = p * 2.0;
    a *= 0.5;
  }
  return v;
}

void main() {
  float aspect = u_res.x / u_res.y;
  vec2 sp = vec2(v_uv.x * aspect, v_uv.y) * 2.2;
  float t = u_time * 0.05;

  vec2 q = vec2(fbm(sp + vec2(0.0, t)), fbm(sp + vec2(5.2, 1.3) - t));
  vec2 r = vec2(fbm(sp + 2.0 * q + vec2(1.7, 9.2) + t), fbm(sp + 2.0 * q + vec2(8.3, 2.8) - t));
  float f = fbm(sp + 2.5 * r);

  vec2 m = vec2(u_mouse.x * aspect, u_mouse.y) * 2.2;
  float bloom = smoothstep(1.1, 0.0, distance(sp, m)) * 0.35;
  f += bloom;

  vec2 focal = vec2(0.30 * aspect, 0.38) * 2.2;
  float bias = smoothstep(2.3, 0.0, distance(sp, focal));
  float smoke = 0.40 + 0.60 * f;
  float a = bias * bias * smoke + bloom * 0.45;
  a *= clamp(u_progress, 0.0, 1.0);
  a = clamp(a, 0.0, 0.6);

  vec3 pink = vec3(0.906, 0.176, 0.310);
  vec3 plum = vec3(0.231, 0.024, 0.208);
  vec3 col = mix(pink, plum, smoothstep(0.42, 0.9, f));

  gl_FragColor = vec4(col, a);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const sh = gl.createShader(type)!;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    console.warn("shader error", gl.getShaderInfoLog(sh));
    return null;
  }
  return sh;
}

export default function InkCanvas({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const cv: HTMLCanvasElement = canvas;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let gl: WebGLRenderingContext | null = null;
    try {
      gl = (canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false }) ||
        canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    } catch {
      gl = null;
    }
    if (!gl) return;

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes = gl.getUniformLocation(prog, "u_res");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");
    const uProg = gl.getUniformLocation(prog, "u_progress");

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    function resize() {
      const w = cv.clientWidth || window.innerWidth;
      const h = cv.clientHeight || window.innerHeight;
      cv.width = Math.floor(w * dpr);
      cv.height = Math.floor(h * dpr);
      gl!.viewport(0, 0, cv.width, cv.height);
    }
    resize();
    window.addEventListener("resize", resize);

    const mouse = { x: 0.34, y: 0.6 };
    const target = { x: 0.34, y: 0.6 };
    function onMove(e: PointerEvent) {
      target.x = e.clientX / window.innerWidth;
      target.y = 1 - e.clientY / window.innerHeight;
    }
    window.addEventListener("pointermove", onMove);

    let raf = 0;
    let progress = 0;
    const start = performance.now();
    function frame(now: number) {
      const time = (now - start) / 1000;
      progress += (1 - progress) * 0.025;
      mouse.x += (target.x - mouse.x) * 0.06;
      mouse.y += (target.y - mouse.y) * 0.06;
      gl!.uniform1f(uTime, reduce ? 2.0 : time);
      gl!.uniform2f(uRes, cv.width, cv.height);
      gl!.uniform2f(uMouse, mouse.x, mouse.y);
      gl!.uniform1f(uProg, progress);
      gl!.drawArrays(gl!.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      const lose = gl!.getExtension("WEBGL_lose_context");
      lose?.loseContext();
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={className} />;
}
