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
  description:
    "Providing DBT and CBT-based therapy in Colorado to people from all walks of life.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  const navLinks: Links = [
    { name: "Home", path: "/" },
    { name: "Specialties", path: "/specialties" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Resources", path: "/resources" },
    { name: "About Me", path: "/about-me" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <html lang="en" className={`${staatliches.variable} ${manrope.variable}`}>
      <body className="font-sans bg-background-light text-theme-black flex flex-col min-h-screen">
        <Navbar links={navLinks} />
        <main className="flex-grow">{props.children}</main>
        <Footer links={navLinks} />
      </body>
    </html>
  );
}
