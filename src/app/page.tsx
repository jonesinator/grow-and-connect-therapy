import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import ReactFastMarquee from "react-fast-marquee";
import {
  BoltIcon,
  FaceSmileIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

import MainHeader from "@components/main-header";
import SlideHeader from "@components/slide-header";
import ArrowButton from "@components/arrow-button";
import Story from "@components/story";
import PhotoCarousel from "@components/photo-carousel";
import VideoBlock from "@components/video-block";

import woman from "./images/woman.jpg";
import man from "./images/man.jpg";
import tree from "./images/tree.jpg";
import hero_bg from "./images/hero-bg.svg";

export default function Page() {
  type MarqueeProps = { backgroundColor: string; contents: string }[];

  const marquee_1: MarqueeProps = [
    { backgroundColor: "bg-blue-300", contents: "Depression" },
    { backgroundColor: "bg-pink-500", contents: "Abuse Recovery" },
    { backgroundColor: "bg-orange-500", contents: "Trauma" },
    { backgroundColor: "bg-black", contents: "Anxiety" },
    { backgroundColor: "bg-yellow-300", contents: "PTSD" },
    { backgroundColor: "bg-green-500", contents: "Bipolar Disorder" },
  ];

  const marquee_2: MarqueeProps = [
    { backgroundColor: "bg-pink-500", contents: "Bulimia" },
    { backgroundColor: "bg-black", contents: "Trauma" },
    { backgroundColor: "bg-yellow-300", contents: "Insomnia" },
    { backgroundColor: "bg-green-500", contents: "Grief and Loss" },
    { backgroundColor: "bg-blue-300", contents: "Grief and Loss" },
  ];

  const makeMarquee = (marqueeProps: MarqueeProps): ReactNode => {
    return marqueeProps.map((item) => (
      <div
        key={item.contents}
        className={`${item.backgroundColor} text-theme-white rounded-full px-4 py-2 mx-1 my-1.5 md:px-8 md:py-4 md:mx-2 md:my-3 theme-text-h3`}
      >
        {item.contents}
      </div>
    ));
  };

  return (
    <>
      <MainHeader>
        <SlideHeader>
          <h1 className="mb-10">Grow and Connect Therapy</h1>
        </SlideHeader>
        <Link href="/contact">
          <ArrowButton>Get in Touch</ArrowButton>
        </Link>
      </MainHeader>

      <section>
        <div className="mx-auto max-w-[1600px]">
          <div className="mt-[-270px] mx-auto relative flex justify-center">
            <Image
              src={hero_bg as StaticImageData}
              alt=""
              className="absolute bottom-[50%] md:bottom-[25%] hue-rotate-60 saturate-80 opacity-80"
              style={{ height: "auto" }}
              priority={true}
            />
            <Image
              src={tree}
              alt="Some text describing the picture."
              className="md:mx-6 object-cover border-t border-b md:border border-theme-black rounded-0 md:rounded-[64px] relative overflow-hidden max-h-[600px]"
              priority={true}
            />
          </div>
        </div>
        <h4 className="mx-auto my-16 text-center md:max-w-[830px] px-3">
          We believe
          <HeartIcon className="size-11 text-red-500 mx-1 inline-block" />
          that by prioritizing mental well-being, we can foster a happier
          <FaceSmileIcon className="size-11 text-green-500 mx-1 inline-block" />
          and more
          <BoltIcon className="size-10 text-yellow-500 mx-1 inline-block" />
          productive workforce.
        </h4>
        <ReactFastMarquee autoFill={true} direction="left" className="pt-10">
          {makeMarquee(marquee_1)}
        </ReactFastMarquee>
        <ReactFastMarquee autoFill={true} direction="right" className="pb-10">
          {makeMarquee(marquee_2)}
        </ReactFastMarquee>
      </section>

      <Story image={man} colors="dark">
        <p className="theme-text-label">Our Mission</p>
        <SlideHeader>
          <h2>Care for a Happier Life</h2>
        </SlideHeader>
        <p className="theme-text-large">
          At our company, we have simplified the process of accessing mental
          health care services and support. Whether you're seeking therapy,
          counseling, or guidance, we make it easy for you to get the help you
          need.
        </p>
      </Story>

      <PhotoCarousel
        images={
          <>
            <Image
              src={woman}
              alt=""
              className="w-auto max-h-[200px] md:max-h-[400px] rounded-2xl border border-theme-black mx-3"
            />
            <Image
              src={man}
              alt=""
              className="w-auto max-h-[200px] md:max-h-[400px] rounded-2xl border border-theme-black mx-3"
            />
          </>
        }
      >
        <SlideHeader className="basis-1/2 flex justify-start md:justify-center md:w-[450px] mx-3">
          <h2>Prioritizing Wellbeing</h2>
        </SlideHeader>
        <p className="theme-text-large basis-1/2 flex justify-center place-items-center mx-3 mt-3 md:mt-0 max-w-[600px]">
          At our company, we have simplified the process of accessing mental
          health care services and support. Whether you're seeking therapy,
          counseling, or guidance, we make it easy for you to get the help you
          need.
        </p>
      </PhotoCarousel>

      <Story image={woman} colors="dark" imagePosition="right" textAlign="left">
        <p className="theme-text-label">What the Hell</p>
        <SlideHeader>
          <h2>Disrespect Your Surroundings 🤣</h2>
        </SlideHeader>
        <p className="theme-text-large">
          At our company, we have simplified the process of accessing mental
          health care services and support. Whether you're seeking therapy,
          counseling, or guidance, we make it easy for you to get the help you
          need.
        </p>
        <Link href="/contact">
          <ArrowButton>Get Punched!</ArrowButton>
        </Link>
      </Story>

      <Story
        image={woman}
        colors="bright"
        imagePosition="right"
        textAlign="center"
      >
        <p className="theme-text-label">Shit your pants!</p>
        <SlideHeader>
          <h2>Where is your God now?</h2>
        </SlideHeader>
        <p className="theme-text-large">
          At our company, we have simplified the process of accessing mental
          health care services and support. Whether you're seeking therapy,
          counseling, or guidance, we make it easy for you to get the help you
          need.
        </p>
        <Link href="/contact">
          <ArrowButton>Get Punched!</ArrowButton>
        </Link>
      </Story>

      <Story image={man} colors="dark" imagePosition="right" textAlign="right">
        <SlideHeader>
          <h2>Where is your God now?</h2>
        </SlideHeader>
        <p className="theme-text-large">
          At our company, we have simplified the process of accessing mental
          health care services and support. Whether you're seeking therapy,
          counseling, or guidance, we make it easy for you to get the help you
          need.
        </p>
        <Link href="/contact">
          <ArrowButton>Get Punched!</ArrowButton>
        </Link>
      </Story>

      <Story
        image={woman}
        colors="bright"
        imagePosition="left"
        textAlign="left"
      >
        <p className="theme-text-label">What the Hell</p>
        <SlideHeader>
          <h2>Disrespect Your Surroundings 🤣</h2>
        </SlideHeader>
        <p className="theme-text-large">
          At our company, we have simplified the process of accessing mental
          health care services and support. Whether you're seeking therapy,
          counseling, or guidance, we make it easy for you to get the help you
          need.
        </p>
        <Link href="/contact">
          <ArrowButton>Get Punched!</ArrowButton>
        </Link>
      </Story>

      <Story
        image={woman}
        colors="dark"
        imagePosition="left"
        textAlign="center"
      >
        <p className="theme-text-label">Shit your pants!</p>
        <SlideHeader>
          <h2>Where is your God now?</h2>
        </SlideHeader>
        <p className="theme-text-large">
          At our company, we have simplified the process of accessing mental
          health care services and support. Whether you're seeking therapy,
          counseling, or guidance, we make it easy for you to get the help you
          need.
        </p>
        <Link href="/contact">
          <ArrowButton>Get Punched!</ArrowButton>
        </Link>
      </Story>

      <Story image={man} colors="light" imagePosition="left" textAlign="right">
        <SlideHeader>
          <h2>Where is your God now?</h2>
        </SlideHeader>
        <p className="theme-text-large">
          At our company, we have simplified the process of accessing mental
          health care services and support. Whether you're seeking therapy,
          counseling, or guidance, we make it easy for you to get the help you
          need.
        </p>
        <Link href="/contact">
          <ArrowButton>Get Punched!</ArrowButton>
        </Link>
      </Story>

      <VideoBlock
        videos={["/video/girl-in-field.webm", "/video/girl-in-field.mp4"]}
        background="/video/girl-in-field.jpg"
      >
        <p className="theme-text-label text-theme-white">Hello</p>
        <SlideHeader>
          <h1 className="text-theme-white my-10">
            This is a <div className="inline-block text-red-500">test</div>
            <BoltIcon className="size-32 inline-block mb-8" />
          </h1>
        </SlideHeader>
        <ArrowButton>Shut up</ArrowButton>
      </VideoBlock>

      <PhotoCarousel
        colors="bright"
        carouselPosition="top"
        className="text-red-500"
        borders="none"
        direction="right"
        images={
          <>
            <Image
              src={tree}
              alt=""
              className="w-auto max-h-[200px] md:max-h-[400px] rounded-2xl border border-theme-black mx-3"
            />
            <Image
              src={woman}
              alt=""
              className="w-auto max-h-[200px] md:max-h-[400px] rounded-2xl border border-theme-black mx-3"
            />
            <Image
              src={man}
              alt=""
              className="w-auto max-h-[200px] md:max-h-[400px] rounded-2xl border border-theme-black mx-3"
            />
          </>
        }
      >
        <p className="theme-text-large basis-1/2 flex justify-center max-w-[600px] mx-3 overflow-visible">
          At our company, we have simplified the process of accessing mental
          health care services and support. Whether you're seeking therapy,
          counseling, or guidance, we make it easy for you to get the help you
          need.
        </p>
        <SlideHeader className="basis-1/2 flex justify-center max-w-[600px] mx-3 overflow-visible">
          <h2>Prioritizing Wellbeing</h2>
        </SlideHeader>
      </PhotoCarousel>
    </>
  );
}
