import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import Marquee from "react-fast-marquee";

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
        {marqueeProps.map((item) => (
          <li
            key={item.contents}
            className={cn(
              "text-gray-600 rounded-full px-4 py-2 mx-1 my-1.5 md:px-8 md:py-4 md:mx-2 md:my-3 theme-text-h3 inline-block drop-shadow-md md:drop-shadow-lg",
              item.className,
            )}
          >
            {item.contents}
          </li>
        ))}
      </ul>
    );

    return (
      <Marquee autoFill direction={direction}>
        {marqueeList}
      </Marquee>
    );
  };

  return (
    <>
      <section className="pt-[8em] md:pt-[10em] pb-[12em] md:pb-[19em] border-b border-theme-black bg-gradient-to-t from-background-orange to-background-orange via-theme-white">
        <div className="w-full max-w-[100em] mx-auto px-4 md:px-6">
          <div className="flex items-center justify-center flex-col">
            <div className="z-[1]">
              <div className="max-w-[75em] text-center flex items-center justify-center flex-col">
                <SlideHeader>
                  <h1 className="theme-text-h2 mb-8">
                    Grow &amp; Connect Therapy
                  </h1>
                </SlideHeader>
                <p className="theme-text-label">
                  “We have more possibilities available in each moment than we
                  realize.”
                </p>
                <p className="italic theme-text-label ml-auto mr-10 md:mr-40">
                  - Thich Nhat Hanh
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10 md:mb-20">
        <div className="mx-auto max-w-[100em]">
          <div className="mt-[-10em] md:mt-[-16.875em] mx-auto relative flex justify-center">
            <Image
              src={mountains_1}
              alt="View of a serene mountain valley with towering peaks, dense evergreen forests, and a bright blue sky, conveying a sense of calm and natural beauty."
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
              There’s no wrong time to seek help and it’s never too late to
              start.
            </p>
          </div>
          <div className="mt-16 flex flex-col md:flex-row gap-y-12 md:gap-6 place-items-center">
            <div className="relative max-w-[35rem] md:max-w-none md:w-[25%] flex flex-col transition-all duration-500 hover:md:w-[50%] drop-shadow-lg">
              <div className="absolute flex w-full h-full text-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <p className="w-full theme-text-h3 text-white">Be Accepted</p>
              </div>
              <Image
                src={expand_left}
                alt="A couple embracing affectionately, with one partner gently kissing the other’s head. They are outdoors on a cloudy day, creating a warm and intimate moment of connection."
                className="w-full h-[30rem] object-cover border border-theme-black rounded-b-3xl rounded-t-[24em]"
              />
              <h3 className="theme-text-h6 pt-4">Open and Affirming Therapy</h3>
              <p className="pt-2">Empathetic and Validating Care</p>
            </div>
            <div className="relative max-w-[35rem] md:max-w-none md:w-[50%] flex flex-col items-center drop-shadow-lg">
              <div className="absolute flex w-full h-full text-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <p className="w-full theme-text-h3 text-white">Meet Online</p>
              </div>
              <Image
                src={expand_middle}
                alt="A cozy scene featuring a person sitting on a bed with a laptop, while a golden retriever sleeps peacefully nearby, creating a calm and inviting home atmosphere."
                className="w-full h-[30rem] object-cover border border-theme-black rounded-full"
              />
              <h3 className="theme-text-h6 pt-4">Teletherapy</h3>
              <p className="pt-2">Meet from the comfort of your home</p>
            </div>
            <div className="relative max-w-[35rem] md:max-w-none md:w-[25%] md:min-w-[25%] flex flex-col items-end transition-all duration-500 md:hover:w-[50%] drop-shadow-lg">
              <div className="absolute flex w-full h-full text-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <p className="w-full theme-text-h3 text-white">Make Changes</p>
              </div>
              <Image
                src={expand_right}
                alt="A person sitting cross-legged on a large rock in a peaceful outdoor setting, meditating with eyes closed and hands resting on their knees, surrounded by tall grass and natural serenity."
                className="h-[30rem] object-cover border border-theme-black rounded-tl-3xl rounded-tr-[10em] rounded-bl-[10em] rounded-br-3xl"
              />
              <h3 className="theme-text-h6 pt-4">
                Mindful and Supportive Therapy
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
              alt="A woman sitting on a bed, sipping from a mug while working on a laptop placed on a wooden tray. An open book and notes are scattered nearby, creating a cozy and focused atmosphere."
              className="w-auto max-h-[12em] md:max-h-[25em] rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg"
            />
            <Image
              src={couple_in_snow}
              alt="A joyful couple standing back-to-back in a snowy forest, dressed in warm winter clothes, laughing as snow falls gently around them, with a snow-covered tree in the background."
              className="w-auto max-h-[12em] md:max-h-[25em] rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg"
            />
            <Image
              src={man_with_dogs}
              alt="A man in a hoodie standing on a misty beach, looking down at two dogs sitting attentively at his feet, with a large rock formation in the background, creating a peaceful and introspective scene."
              className="w-auto max-h-[12em] md:max-h-[25em] rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg"
            />
            <Image
              src={man_and_woman_with_flowers}
              alt="A woman gently resting her head on a man’s back while holding a colorful bouquet of flowers in an open, grassy field with rolling hills in the background, evoking a peaceful and intimate moment."
              className="w-auto max-h-[12em] md:max-h-[25em] rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg"
            />
            <Image
              src={man_and_child}
              alt="A smiling man carrying a young child on his shoulders during an outdoor walk, with tall grasses and trees in the background, capturing a joyful and playful moment."
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

      <Story
        image={jamie}
        alt="Jamie L. Thompson stands confidently in front of lush green foliage. She has long, reddish-brown hair and glasses, wearing a black, textured top, and offering a calm, relaxed expression."
        colors="dark"
        borders="top"
      >
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
        label="A young woman in a blue dress dancing joyfully in a green field with several black and white cows."
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
              defaultValue={["item-1"]}
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
