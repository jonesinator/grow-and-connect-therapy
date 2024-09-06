import type { Metadata } from "next";
import Image from "next/image";

import SlideHeader from "@components/slide-header";

import dwarf from "./images/dwarf.jpg";
import hero from "./images/hero.jpg";
import man_coffee from "./images/man-coffee.jpg";
import woman_couch from "./images/woman-couch.webp";
import woman_with_dog from "./images/woman-with-dog.jpg";
import icon_1 from "./images/icon-1.png";
import icon_2 from "./images/icon-2.png";
import icon_3 from "./images/icon-3.png";

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
            <div className="relative w-[25%] flex flex-col drop-shadow-lg">
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

        <div className="bg-theme-white border-t border-theme-black px-8 sm:py-20 md:py-40">
          <div className="flex flex-col-reverse md:flex-row justify-center gap-10 max-w-[100em] mx-auto">
            <div className="basis-1/2 flex flex-col gap-y-4 max-w-[50em] mx-4">
              <div className="flex flex-row place-items-center gap-6 border-b pb-8 border-theme-black">
                <div className="self-start">
                  <Image src={icon_1} alt="foo" />
                </div>
                <div className="flex flex-col gap-y-2">
                  <h3 className="theme-text-h5">
                    Dialectical Behavior Therapy
                  </h3>
                  <p className="text-justify">
                    Dialectical Behavioral Therapy (DBT) is helpful because it
                    combines cognitive-behavioral techniques with mindfulness
                    practices to help individuals manage intense emotions,
                    reduce harmful behaviors, and improve relationships. DBT has
                    proven effective for various mental health conditions,
                    including depression, anxiety, eating disorders, and
                    substance abuse. Overall, DBT helps individuals lead more
                    stable, fulfilling lives by building practical skills for
                    managing emotions and improving interactions with others.
                  </p>
                </div>
              </div>
              <div className="flex flex-row place-items-center gap-6 border-b pb-8 border-theme-black">
                <div className="self-start">
                  <Image src={icon_2} alt="foo" />
                </div>
                <div className="flex flex-col gap-y-2">
                  <h3 className="theme-text-h5">Cognitive Behavior Therapy</h3>
                  <p className="text-justify">
                    Cognitive Behavioral Therapy (CBT) is helpful because it
                    focuses on identifying and changing negative thought
                    patterns and behaviors that contribute to emotional distress
                    and mental health challenges. It is evidence-based and
                    effective for treating a variety of conditions, including
                    depression, anxiety, PTSD, and obsessive-compulsive
                    disorder. Overall, CBT is a practical, hands-on therapy that
                    empowers individuals to make positive changes in their
                    thinking and behavior, leading to better emotional health
                    and resilience.
                  </p>
                </div>
              </div>
              <div className="flex flex-row place-items-center gap-6 border-b pb-8 border-theme-black">
                <div className="self-start">
                  <Image src={icon_3} alt="foo" />
                </div>
                <div className="flex flex-col gap-y-2">
                  <h3 className="theme-text-h5">
                    Mindfulness and Self-Compassion
                  </h3>
                  <p className="text-justify">
                    Mindfulness and self-compassion strategies are helpful in
                    therapy because they promote emotional regulation,
                    self-acceptance, and overall mental well-being. These
                    approaches encourage individuals to develop a healthier
                    relationship with their thoughts and emotions, reducing
                    stress and increasing resilience. Overall, mindfulness and
                    self-compassion in therapy help individuals develop
                    healthier coping mechanisms, enhance emotional regulation,
                    and create a more supportive, balanced internal dialogue,
                    leading to improved mental health and well-being.
                  </p>
                </div>
              </div>
              <div className="flex flex-row place-items-center gap-6 pb-8">
                <div className="self-start">
                  <Image src={icon_3} alt="foo" />
                </div>
                <div className="flex flex-col gap-y-2">
                  <h3 className="theme-text-h5">Gottman Method</h3>
                  <p className="text-justify">
                    Mindfulness and self-compassion strategies are helpful in
                    therapy because they promote emotional regulation,
                    self-acceptance, and overall mental well-being. These
                    approaches encourage individuals to develop a healthier
                    relationship with their thoughts and emotions, reducing
                    stress and increasing resilience. Overall, mindfulness and
                    self-compassion in therapy help individuals develop
                    healthier coping mechanisms, enhance emotional regulation,
                    and create a more supportive, balanced internal dialogue,
                    leading to improved mental health and well-being.
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:self-center md:self-auto drop-shadow-lg md:max-h-[50em] mt-20 md:mt-0">
              <Image
                src={dwarf}
                alt=""
                className="h-full object-cover md:object-center border border-theme-black rounded-tl-xl md:rounded-tl-3xl rounded-tr-[5em] md:rounded-tr-[10em] rounded-bl-[5em] md:rounded-bl-[10em] rounded-br-xl md:rounded-br-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
