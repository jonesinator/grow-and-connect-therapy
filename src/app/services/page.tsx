import type { Metadata } from "next";
import Image from "next/image";

import SlideHeader from "@components/slide-header";

import hero from "./images/hero.jpg";

export const metadata: Metadata = {
  title: "Services",
};

export default function Services() {
  return (
    <>
      <div className="relative overflow-hidden w-full h-full min-h-[30em]">
        <div className="absolute w-full h-full 2xl:top-[-15em]">
          <Image
            src={hero}
            alt="Woman on Laptop"
            className="w-full min-h-[30em] sm:min-h-[40em] md:min-h-[52em] object-cover"
          />
        </div>
        <div className="pt-52 sm:pt-72 w-full"></div>
        <SlideHeader className="pt-2 pb-8 md:pt-8 md:pb-20 max-w-[50em]">
          <h1 className="theme-text-huge text-white px-8">Online Therapy</h1>
          <p className="text-white px-8 py-8 theme-text-h6">
            Therapy for where you are
          </p>
        </SlideHeader>
      </div>
    </>
  );
}
