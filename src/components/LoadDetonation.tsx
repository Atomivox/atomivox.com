"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

export default function LoadDetonation() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("av_intro")) return;
    sessionStorage.setItem("av_intro", "1");
    setShow(true);
    const t = setTimeout(() => setShow(false), 1050);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bone"
          initial={{ clipPath: "inset(0 0 0 0)" }}
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <motion.div
            initial={{ scale: 0.35, opacity: 0, rotate: -14 }}
            animate={{
              scale: 1,
              opacity: 1,
              rotate: 0,
              transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
            }}
          >
            <Image src="/brand/bug-pink.png" alt="Atomivox" width={722} height={718} priority className="h-28 w-28" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
