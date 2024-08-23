import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import * as Accordion from "@radix-ui/react-accordion";

import MainHeader from "@components/main-header";
import SlideHeader from "@components/slide-header";
import ArrowButton from "@components/arrow-button";
import Story from "@components/story";
import PhotoCarousel from "@components/photo-carousel";
import VideoBlock from "@components/video-block";

import expand_left from "./images/expand-left.jpg";
import expand_middle from "./images/expand-middle.jpg";
import expand_right from "./images/expand-right.jpg";
import mountains_1 from "./images/mountains-1.jpg";
import couple_in_snow from "./images/couple-in-snow.jpg";
import man_with_dogs from "./images/man-with-dogs.jpg";
import man_and_child from "./images/man-and-child.jpg";
import man_and_woman_with_flowers from "./images/man-and-woman-with-flowers.jpg";
import woman_with_laptop from "./images/woman-with-laptop.jpg";
import jamie from "./images/jamie.jpg";

import { cn } from "@lib/utils";

export default function Page() {
  type MarqueeProps = { className: string; contents: string }[];

  const marquee_1: MarqueeProps = [
    { className: "bg-green-200", contents: "Mindfulness" },
    { className: "bg-pink-200", contents: "Recover" },
    { className: "bg-orange-200", contents: "Depression" },
    { className: "bg-gray-200", contents: "Hope" },
    { className: "bg-yellow-200", contents: "Anxiety" },
  ];

  const marquee_2: MarqueeProps = [
    { className: "bg-green-200", contents: "Chronic Illness" },
    { className: "bg-yellow-200", contents: "Relationships" },
    { className: "bg-pink-200", contents: "Pain" },
    { className: "bg-green-200", contents: "Fatigue" },
    { className: "bg-fuchsia-200", contents: "Emotions" },
    { className: "bg-indigo-200", contents: "Therapy" },
  ];

  const makeMarquee = (
    marqueeProps: MarqueeProps,
    direction: "left" | "right",
  ): ReactNode => {
    const marqueeList = (
      <ul>
        {Array.from({ length: 2 }).map(() =>
          marqueeProps.map((item) => (
            <li
              key={item.contents}
              className={cn(
                "text-gray-600 rounded-full px-4 py-2 mx-1 my-1.5 md:px-8 md:py-4 md:mx-2 md:my-3 theme-text-h3 inline-block drop-shadow-md md:drop-shadow-lg",
                item.className,
              )}
            >
              {item.contents}
            </li>
          )),
        )}
      </ul>
    );

    const animate_1 =
      direction === "left"
        ? "animate-marquee-left-1"
        : "animate-marquee-right-1";
    const animate_2 =
      direction === "left"
        ? "animate-marquee-left-2"
        : "animate-marquee-right-2";

    return (
      <div className="relative flex overflow-x-hidden">
        <div className={`${animate_1} whitespace-nowrap`}>{marqueeList}</div>
        <div className={`${animate_2} absolute top-0 whitespace-nowrap`}>
          {marqueeList}
        </div>
      </div>
    );
  };

  return (
    <>
      <MainHeader>
        <SlideHeader>
          <h1 className="theme-text-h2 mb-8">Grow &amp; Connect Therapy</h1>
        </SlideHeader>
        <p className="theme-text-label">
          Affirming care for you &mdash; exactly as you are
        </p>
      </MainHeader>

      <section className="mb-10 md:mb-20">
        <div className="mx-auto max-w-[100em]">
          <div className="mt-[-10em] md:mt-[-16.875em] mx-auto relative flex justify-center">
            <Image
              src={mountains_1}
              alt="Tree in a field."
              className="md:mx-6 object-cover border-t border-b md:border border-theme-black rounded-0 md:rounded-[4em] relative overflow-hidden max-h-[45em] md:drop-shadow-lg"
              priority={true}
            />
          </div>
        </div>
        <h2 className="theme-text-h5 md:theme-text-h4 mx-auto my-10 md:my-16 md:max-w-[25em] px-3 [text-align-last:center] text-justify">
          Welcome to Grow and Connect Therapy! I know things seem hopeless and
          chaotic right now, but they don’t have to be this way forever. Though
          the step is hard, starting therapy is one of the best ways to
          prioritize yourself.
        </h2>
        {makeMarquee(marquee_1, "left")}
        {makeMarquee(marquee_2, "right")}
      </section>

      <div className="border-t border-theme-black bg-background-orange pt-16 md:pt-32">
        <div className="pb-16 md:pb-32 px-6 mx-auto max-w-[100rem]">
          <div className="px-6 max-w-[60em]">
            <SlideHeader>
              <h2 className="">Find the Therapy Support You Need Today</h2>
            </SlideHeader>
            <p className="theme-text-large pt-6">
              There’s no wrong time to seek help and it’s never too late to take
              care of you.
            </p>
          </div>
          <div className="mt-16 flex gap-6">
            <div className="relative w-[25%] min-w-[25%] h-[35rem] flex flex-col transition-all duration-500 hover:w-[80%] drop-shadow-lg">
              <div className="absolute flex w-full h-full text-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <p className="w-full theme-text-h3 text-white">Be Accepted</p>
              </div>
              <Image
                src={expand_left}
                alt=""
                className="w-full h-full object-cover border border-theme-black rounded-b-3xl rounded-t-[24em]"
              />
              <h3 className="theme-text-h6 pt-4">
                Open and Affirming Therapy?
              </h3>
              <p className="pt-2">Empathetic and Validating Care</p>
            </div>
            <div className="relative w-[50%] h-[35rem] flex flex-col items-center drop-shadow-lg">
              <div className="absolute flex w-full h-full text-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <p className="w-full theme-text-h3 text-white">Meet Online</p>
              </div>
              <Image
                src={expand_middle}
                alt=""
                className="w-full h-full object-cover border border-theme-black rounded-full"
              />
              <h3 className="theme-text-h6 pt-4">Teletherapy</h3>
              <p className="pt-2">Meet from the comfort of your home</p>
            </div>
            <div className="relative w-[25%] min-w-[25%] h-[35rem] flex flex-col items-end transition-all duration-500 hover:w-[80%] drop-shadow-lg">
              <div className="absolute flex w-full h-full text-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <p className="w-full theme-text-h3 text-white">
                  Make Connection
                </p>
              </div>
              <Image
                src={expand_right}
                alt=""
                className="w-full h-full object-cover border border-theme-black rounded-tl-3xl rounded-tr-[10em] rounded-bl-[10em] rounded-br-3xl"
              />
              <h3 className="theme-text-h6 pt-4">
                Mindful and Compassionate Therapy
              </h3>
              <p className="pt-2">Deepen Understanding of Yourself</p>
            </div>
          </div>
        </div>
      </div>

      <PhotoCarousel
        colors="bright"
        carouselPosition="top"
        borders="top"
        images={
          <>
            <Image
              src={woman_with_laptop}
              alt="Tree"
              className="w-auto max-h-[12em] md:max-h-[25em] rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg"
            />
            <Image
              src={couple_in_snow}
              alt="Woman"
              className="w-auto max-h-[12em] md:max-h-[25em] rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg"
            />
            <Image
              src={man_with_dogs}
              alt="Man"
              className="w-auto max-h-[12em] md:max-h-[25em] rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg"
            />
            <Image
              src={man_and_woman_with_flowers}
              alt="Man"
              className="w-auto max-h-[12em] md:max-h-[25em] rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg"
            />
            <Image
              src={man_and_child}
              alt="Man"
              className="w-auto max-h-[12em] md:max-h-[25em] rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg"
            />
          </>
        }
      >
        <SlideHeader className="basis-1/2 flex justify-center max-w-[40em] mx-3 overflow-visible">
          <h2>Prioritize Your Well-Being</h2>
        </SlideHeader>
        <p className="theme-text-large text-justify basis-1/2 flex justify-center max-w-[40em] mx-3 overflow-visible">
          Do you feel stuck, but can’t find a way forward when you look around?
          Like it takes all that you have just to make it through each day? Are
          you disconnected from your loved ones and wish things could be
          different? Is your mind full of racing and repetitive thoughts that
          demand your attention? Do you struggle to feel anything other than sad
          and tired? Are you drowning in symptoms of chronic illness or pain and
          feel like you are missing out on life? I would love to support and
          assist you in your pursuit of mental wellness.
        </p>
      </PhotoCarousel>

      <Story image={jamie} alt="Man" colors="dark" borders="top">
        <SlideHeader className="pt-6">
          <h2>Grow In Yourself, Connect With Your People</h2>
        </SlideHeader>
        <p className="theme-text-label">Jamie L. Thompson, LCSW</p>
        <p className="theme-text-large text-justify">
          Finding a therapist isn’t just about finding someone that specializes
          in your unique needs. Equally important is finding a good connection
          with a therapist with whom you can be vulnerable. I want you to feel
          safe and comfortable in the therapeutic relationship so that you can
          get the most out of our work together. I offer a free 15 minute
          consultation for us to briefly discuss your needs and explore if we
          are a good fit.
        </p>
        <Link href="/contact">
          <ArrowButton>Let's Chat</ArrowButton>
        </Link>
      </Story>

      <VideoBlock
        videos={["/video/girl-in-field.webm", "/video/girl-in-field.mp4"]}
        background="/video/girl-in-field.jpg"
      >
        <p className="theme-text-label text-white">Get relief</p>
        <SlideHeader>
          <h2 className="theme-text-h1 text-white my-10 text-center">
            You Are So Worth It
          </h2>
        </SlideHeader>
        <Link href="/contact">
          <ArrowButton>Reach Out</ArrowButton>
        </Link>
      </VideoBlock>

      <div className="border-t border-theme-black bg-background-muddy pt-10 md:pt-20 pb-1">
        <div className="px-6 mx-auto max-w-[100rem]">
          <div className="px-6 max-w-[540px] mb-10">
            <SlideHeader>
              <h2>Frequently Asked Questions</h2>
            </SlideHeader>
          </div>
          <div className="max-w-[640px] ml-auto mr-0">
            <Accordion.Root
              type="multiple"
              className="border-t border-theme-black mb-10"
            >
              <Accordion.Item
                value="item-1"
                className="border-b border-theme-black py-10"
              >
                <Accordion.Header asChild>
                  <Accordion.Trigger asChild>
                    <div className="flex gap-[3rem]">
                      <div className="theme-text-h4 text-theme-white font-mono">
                        01
                      </div>
                      <h4>What therapy do you offer?</h4>
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content
                  className="pt-8 overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down theme-text-large"
                  asChild
                >
                  <p className="text-justify">
                    I use cognitive behavioral therapy (
                    <Link href="/services#cbt" className="text-theme-white">
                      CBT
                    </Link>
                    ), dialectical behavior therapy (
                    <Link href="/services#dbt" className="text-theme-white">
                      DBT
                    </Link>
                    ), and&nbsp;
                    <Link
                      href="/services#strategies"
                      className="text-theme-white"
                    >
                      mindfulness and self-compassion strategies
                    </Link>
                    &nbsp;in my therapeutic work with individual clients. I use
                    the&nbsp;
                    <Link href="/services#gottman" className="text-theme-white">
                      Gottman approach
                    </Link>
                    &nbsp;in addition, to guide my work with multiple clients in
                    relationships. I’m happy to explain what this looks like
                    more in a&nbsp;
                    <Link href="/contact" className="text-theme-white">
                      consultation call
                    </Link>
                    .
                  </p>
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item
                value="item-2"
                className="border-b border-theme-black py-10"
              >
                <Accordion.Header asChild>
                  <Accordion.Trigger asChild>
                    <div className="flex gap-[3rem]">
                      <div className="theme-text-h4 text-theme-white font-mono">
                        02
                      </div>
                      <h4>How does the process work?</h4>
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content
                  className="pt-8 overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down theme-text-large"
                  asChild
                >
                  <p className="text-justify">
                    I like to have a free 15 minute consultation phone call with
                    you before scheduling an intake appointment to give you a
                    chance to ask questions and see that we are a good fit. We
                    can schedule an intake appointment on the phone call and
                    you’ll be sent an email linking you to my intake paperwork
                    in your client portal. You’ll also get an online calendar
                    invite through Google for your teletherapy intake
                    appointment. Join the Google Meet at the right time and
                    we’re started!
                  </p>
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item
                value="item-3"
                className="border-b border-theme-black py-10"
              >
                <Accordion.Header asChild>
                  <Accordion.Trigger asChild>
                    <div className="flex gap-[3rem]">
                      <div className="theme-text-h4 text-theme-white font-mono">
                        03
                      </div>
                      <h4>Do you take insurance?</h4>
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content
                  className="pt-8 overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down theme-text-large"
                  asChild={true}
                >
                  <p className="text-justify">
                    I do not take insurance, although if you have out of network
                    benefits, you may be eligible for reimbursement from your
                    insurance for our work together. See my&nbsp;
                    <Link href="/pricing" className="text-theme-white">
                      pricing
                    </Link>
                    &nbsp;for more information.
                  </p>
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item
                value="item-4"
                className="border-b border-theme-black py-10"
              >
                <Accordion.Header asChild>
                  <Accordion.Trigger asChild>
                    <div className="flex gap-[3rem]">
                      <div className="theme-text-h4 text-theme-white font-mono">
                        04
                      </div>
                      <h4>How can I get started?</h4>
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content
                  className="pt-8 overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down theme-text-large"
                  asChild
                >
                  <p className="text-justify">
                    <Link href="/contact" className="text-theme-white">
                      Contact
                    </Link>{" "}
                    &nbsp;me today for your free 15 minute consultation call!
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </div>
      </div>
    </>
  );
}
