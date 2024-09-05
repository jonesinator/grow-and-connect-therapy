import type { Metadata } from "next";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import SlideHeader from "@components/slide-header";

import hero_bg from "./images/hero-bg.svg";
import couple_holding_hands from "./images/couple-holding-hands.jpg";
import medical from "./images/medical.jpg";
import woman_window from "./images/woman-window.jpg";
import woman_with_dogs from "./images/woman-with-dogs.jpg";

export const metadata: Metadata = {
  title: "Specialties",
};

export default function Pricing() {
  return (
    <>
      <div className="py-20 w-full bg-theme-white"></div>
      <div className="overflow-hidden text-center w-full h-full bg-theme-white pb-40">
        <div className="top-20 sm:top-10 md:top-0 absolute hue-rotate-[115deg] opacity-45 left-[25%]">
          <Image src={hero_bg} alt="Man" />
        </div>
        <SlideHeader className="pt-2 pb-8 md:pt-8 md:pb-20">
          <h1 className="theme-text-huge">Specialty Areas</h1>
        </SlideHeader>
        <Marquee autoFill>
          <Image
            src={couple_holding_hands}
            alt="Tree"
            className="rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg object-cover h-[20em] md:h-[25em]"
          />
          <Image
            src={medical}
            alt="Woman"
            className="rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg object-cover h-[20em] md:h-[25em]"
          />
          <Image
            src={woman_window}
            alt="Man"
            className="rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg object-cover h-[20em] md:h-[25em]"
          />
          <Image
            src={woman_with_dogs}
            alt="Man"
            className="rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg object-cover h-[20em] md:h-[25em]"
          />
        </Marquee>
      </div>
    </>
  );
}
