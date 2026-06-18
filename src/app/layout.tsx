import type { Metadata } from "next";
import { Pathway_Gothic_One, Karma, Shantell_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const pathway = Pathway_Gothic_One({
  variable: "--font-pathway",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const karma = Karma({
  variable: "--font-karma",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Punk hand-drawn display face — the star of the headlines (graffiti artist Shantell Martin's font)
const punk = Shantell_Sans({
  variable: "--font-punk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atomivox.com"),
  title: "Atomivox — Brand Strategy and Messaging for B2B Founders",
  description:
    "Atomivox is a B2B brand studio. We build the brand position, message, and story your marketing has been missing. Based in Ireland.",
  openGraph: {
    title: "Atomivox — Brand Strategy and Messaging for B2B Founders",
    description:
      "We build the brand position, message, and story your marketing has been missing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pathway.variable} ${karma.variable} ${punk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
