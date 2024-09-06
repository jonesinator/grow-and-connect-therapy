import type { Metadata } from "next";
import Image from "next/image";

import SlideHeader from "@components/slide-header";

import hero from "./images/hero.jpg";
import man_coffee from "./images/man-coffee.jpg";
import woman_couch from "./images/woman-couch.webp";
import woman_with_dog from "./images/woman-with-dog.jpg";

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
      <div className="border-t border-theme-black bg-background-orange pt-16 md:pt-32">
        <div className="pb-16 md:pb-32 px-6 mx-auto max-w-[100rem]">
          <div className="px-6 flex flex-col md:flex-row">
            <SlideHeader className="basis-1/2 flex mb-6 md:mb-0 md:justify-center max-w-[40em] mx-3 overflow-visible">
              <h2>Bring Therapy to You</h2>
            </SlideHeader>
            <p className="theme-text-large text-justify basis-1/2 flex justify-center max-w-[40em] mx-3 overflow-visible">
              There are a million things that keep you from seeking help when
              you need it &mdash; chronic illness prevents you from traveling
              often or easily to meet with providers, distance keeps you from
              having many (or any) therapists to choose from in your area, work
              is so demanding that taking more than an hour out of your day for
              an appointment is just impossible. Teletherapy allows you more
              freedom to see your therapist at your workplace, from your home,
              and even when traveling in state.
            </p>
          </div>
          <div className="mt-16 flex gap-6">
            <div className="relative w-[25%] flex flex-col transition-all duration-500 drop-shadow-lg">
              <Image
                src={man_coffee}
                alt=""
                className="w-full h-[30rem] object-cover border border-theme-black rounded-b-3xl rounded-t-[24em]"
              />
            </div>
            <div className="relative w-[50%] flex flex-col items-center drop-shadow-lg">
              <div className="absolute flex w-full h-full text-center items-center">
                <p className="w-full theme-text-h3 text-white">Meet Online</p>
              </div>
              <Image
                src={woman_couch}
                alt=""
                className="w-full h-[30rem] object-cover border border-theme-black rounded-full"
              />
              <h3 className="theme-text-h6 pt-4">Teletherapy</h3>
              <p className="pt-2">Easy and Secure</p>
            </div>
            <div className="relative w-[25%] min-w-[25%] flex flex-col items-end transition-all duration-500 drop-shadow-lg">
              <Image
                src={woman_with_dog}
                alt=""
                className="h-[30rem] object-cover border border-theme-black rounded-tl-3xl rounded-tr-[10em] rounded-bl-[10em] rounded-br-3xl object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
