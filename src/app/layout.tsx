import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Manrope, Staatliches } from "next/font/google";

import Footer from "@components/footer";
import Navbar from "@components/navbar";
import { Links } from "@lib/links";

import "@app/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-staatliches",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://growandconnecttherapy.com"),
  title: {
    template: "%s | Grow and Connect Therapy",
    default: "Grow and Connect Therapy",
  },
  description: "A therapist you can trust.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  const navLinks: Links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Our Story", path: "/our-story" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <html lang="en" className={`${staatliches.variable} ${manrope.variable}`}>
      <body className="font-sans bg-theme-white text-theme-black flex flex-col min-h-screen">
        <Navbar links={navLinks} />
        <div className="flex-grow">{props.children}</div>
        <Footer links={navLinks} />
      </body>
    </html>
  );
}
