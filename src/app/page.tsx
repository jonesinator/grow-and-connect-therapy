import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import ReactFastMarquee from "react-fast-marquee";
import { BoltIcon } from "@heroicons/react/24/outline";

import MainHeader from "@components/main-header";
import SlideHeader from "@components/slide-header";
import ArrowButton from "@components/arrow-button";
import Story from "@components/story";
import PhotoCarousel from "@components/photo-carousel";
import VideoBlock from "@components/video-block";

import * as Accordion from "@radix-ui/react-accordion";

import woman from "./images/woman.jpg";
import man from "./images/man.jpg";
import tree from "./images/tree.jpg";

import expand_left from "./images/expand-left.jpg";
import expand_middle from "./images/expand-middle.jpg";
import expand_right from "./images/expand-right.jpg";
import mountains_1 from "./images/mountains-1.jpg";

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

  const makeMarquee = (marqueeProps: MarqueeProps): ReactNode => {
    return (
      <ul>
        {marqueeProps.map((item) => (
          <li
            key={item.contents}
            className={cn(
              "text-gray-600 rounded-full px-4 py-2 mx-1 my-1.5 md:px-8 md:py-4 md:mx-2 md:my-3 theme-text-h3 inline-block",
              item.className,
            )}
          >
            {item.contents}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <MainHeader>
        <SlideHeader>
          <h1 className="theme-text-h2 mb-8">Grow &amp; Connect Therapy</h1>
        </SlideHeader>
        <p className="theme-text-label mb-8">
          Affirming care for you &mdash; exactly as you are
        </p>
        <Link href="/contact">
          <ArrowButton>Get in Touch</ArrowButton>
        </Link>
      </MainHeader>

      <section>
        <div className="mx-auto max-w-[100em]">
          <div className="mt-[-16.875em] mx-auto relative flex justify-center">
            <Image
              src={mountains_1}
              alt="Tree in a field."
              className="md:mx-6 object-cover object-left border-t border-b md:border border-theme-black rounded-0 md:rounded-[4em] relative overflow-hidden max-h-[60em]"
              priority={true}
            />
          </div>
        </div>
        <h2 className="theme-text-h4 mx-auto my-16 text-center md:max-w-[25em] px-3">
          I believe all people deserve joy and fulfillment, but how to get those
          things isn’t always clear. Let me assist you in building the life you
          want to have. Not everything has to be suffering.
        </h2>
        <ReactFastMarquee autoFill={true} direction="left" className="pt-10">
          {makeMarquee(marquee_1)}
        </ReactFastMarquee>
        <ReactFastMarquee autoFill={true} direction="right" className="pb-10">
          {makeMarquee(marquee_2)}
        </ReactFastMarquee>
      </section>

      <div className="border-t border-b border-theme-black bg-background-orange pt-20">
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
                    We offer a range of therapy options tailored to individual
                    needs, including cognitive-behavioral therapy (CBT),
                    mindfulness-based therapy, and couples counseling. Our focus
                    is on providing modern, effective treatment modalities
                    suitable for issues like anxiety, depression, relationship
                    challenges, and more.
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
                    We offer a range of therapy options tailored to individual
                    needs, including cognitive-behavioral therapy (CBT),
                    mindfulness-based therapy, and couples counseling. Our focus
                    is on providing modern, effective treatment modalities
                    suitable for issues like anxiety, depression, relationship
                    challenges, and more.
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
                      <h4>Who are your typical clients?</h4>
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content
                  className="pt-8 overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down theme-text-large"
                  asChild={true}
                >
                  <p className="text-justify">
                    We offer a range of therapy options tailored to individual
                    needs, including cognitive-behavioral therapy (CBT),
                    mindfulness-based therapy, and couples counseling. Our focus
                    is on providing modern, effective treatment modalities
                    suitable for issues like anxiety, depression, relationship
                    challenges, and more.
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
                    We offer a range of therapy options tailored to individual
                    needs, including cognitive-behavioral therapy (CBT),
                    mindfulness-based therapy, and couples counseling. Our focus
                    is on providing modern, effective treatment modalities
                    suitable for issues like anxiety, depression, relationship
                    challenges, and more.
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </div>
      </div>

      <div className="border-b border-theme-black bg-background-light pt-40">
        <div className="mb-28 px-6 mx-auto max-w-[100rem]">
          <div className="px-6 max-w-[50em]">
            <SlideHeader>
              <h2>Therapy</h2>
            </SlideHeader>
            <p className="theme-text-large pt-6">
              I want to help you make change in your life and relationships.
            </p>
          </div>
          <div className="mt-16 flex gap-6">
            <div className="relative w-[25%] min-w-[25%] h-[35rem] flex flex-col transition-all duration-500 hover:w-[80%]">
              <div className="absolute flex w-full h-full text-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <p className="w-full theme-text-h3 text-white">For Couples</p>
              </div>
              <Image
                src={expand_left}
                alt=""
                className="w-full h-full object-cover border border-theme-black rounded-b-3xl rounded-t-[24em]"
              />
              <h3 className="theme-text-h6 pt-4">Couples Therapy</h3>
              <p className="pt-2">Support for all relationship structures</p>
            </div>
            <div className="relative w-[50%] h-[35rem] flex flex-col items-center">
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
            <div className="relative w-[25%] min-w-[25%] h-[35rem] flex flex-col items-end transition-all duration-500 hover:w-[80%]">
              <div className="absolute flex w-full h-full text-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <p className="w-full theme-text-h3 text-white">
                  Chronic Illness
                </p>
              </div>
              <Image
                src={expand_right}
                alt=""
                className="w-full h-full object-cover border border-theme-black rounded-tl-3xl rounded-tr-[10em] rounded-bl-[10em] rounded-br-3xl"
              />
              <h3 className="theme-text-h6 pt-4">Mindfulness Strategies</h3>
              <p className="pt-2">Compassionate and validating care</p>
            </div>
          </div>
        </div>
      </div>

      <Story image={man} alt="Man" colors="dark" borders="none">
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
              alt="Woman"
              className="w-auto max-h-[12.5em] md:max-h-[25em] rounded-2xl border border-theme-black mx-3"
            />
            <Image
              src={man}
              alt="Man"
              className="w-auto max-h-[12.5em] md:max-h-[25em] rounded-2xl border border-theme-black mx-3"
            />
          </>
        }
      >
        <SlideHeader className="basis-1/2 flex justify-start md:justify-center md:w-[30em] mx-3">
          <h2>Prioritizing Wellbeing</h2>
        </SlideHeader>
        <p className="theme-text-large basis-1/2 flex justify-center place-items-center mx-3 mt-3 md:mt-0 max-w-[40em]">
          Her breath exited her mouth in big puffs as if she were smoking a
          cigarette. The morning dew had made her clothes damp and she shivered
          from the chill in the air. There was only one thing that could get her
          up and out this early in the morning.
        </p>
      </PhotoCarousel>

      <Story
        image={woman}
        alt="Woman"
        colors="dark"
        imagePosition="right"
        textAlign="left"
      >
        <p className="theme-text-label">What the Hell</p>
        <SlideHeader>
          <h2>Disrespect Your Surroundings 🤣</h2>
        </SlideHeader>
        <p className="theme-text-large">
          Breastfeeding is good for babies and moms. Infants that are breastfed
          get antibodies from their mothers against common illnesses. Breastfed
          babies have less chance of being obese as an adult. Breastfeeding a
          baby lets the infant-mother pair bond in a very unique way. Mother’s
          who breastfeed lower their chances of developing breast cancer.
          Usually, mothers who breastfeed lose their pregnancy weight more
          quickly and easily. The benefits of breastfeeding are numerous.
        </p>
        <Link href="/contact">
          <ArrowButton>Get Punched!</ArrowButton>
        </Link>
      </Story>

      <Story
        image={woman}
        alt="Woman"
        colors="bright"
        imagePosition="right"
        textAlign="center"
      >
        <p className="theme-text-label">Shit your pants!</p>
        <SlideHeader>
          <h2>Where is your dog now?</h2>
        </SlideHeader>
        <p className="theme-text-large">
          It was their first date and she had been looking forward to it the
          entire week. She had her eyes on him for months, and it had taken a
          convoluted scheme with several friends to make it happen, but he'd
          finally taken the hint and asked her out. After all the time and
          effort she'd invested into it, she never thought that it would be
          anything but wonderful. It goes without saying that things didn't work
          out quite as she expected.
        </p>
        <Link href="/contact">
          <ArrowButton>Get Punched Very Hard!</ArrowButton>
        </Link>
      </Story>

      <Story
        image={man}
        alt="Man"
        colors="dark"
        imagePosition="right"
        textAlign="right"
      >
        <SlideHeader>
          <h2>There is no Spoon</h2>
        </SlideHeader>
        <p className="theme-text-large">
          Green vines attached to the trunk of the tree had wound themselves
          toward the top of the canopy. Ants used the vine as their private
          highway, avoiding all the creases and crags of the bark, to freely
          move at top speed from top to bottom or bottom to top depending on
          their current chore. At least this was the way it was supposed to be.
          Something had damaged the vine overnight halfway up the tree leaving a
          gap in the once pristine ant highway.
        </p>
        <Link href="/contact">
          <ArrowButton>It's Time</ArrowButton>
        </Link>
      </Story>

      <Story
        image={woman}
        alt="Woman"
        colors="bright"
        imagePosition="left"
        textAlign="left"
      >
        <p className="theme-text-label">What the Heck?</p>
        <SlideHeader>
          <h2>Have You No Decency?</h2>
        </SlideHeader>
        <p className="theme-text-large">
          It was that terrifying feeling you have as you tightly hold the covers
          over you with the knowledge that there is something hiding under your
          bed. You want to look, but you don't at the same time. You're frozen
          with fear and unable to act. That's where she found herself and she
          didn't know what to do next
        </p>
        <Link href="/contact">
          <ArrowButton>Get Punched!</ArrowButton>
        </Link>
      </Story>

      <Story
        image={woman}
        alt="Woman"
        colors="dark"
        imagePosition="left"
        textAlign="center"
      >
        <p className="theme-text-label">
          Bond, James Bond Bond, James Bond Bond, James Bond Bond, James Bond
          Bond, James Bond Bond, James Bond Bond, James Bond Bond, James Bond{" "}
        </p>
        <SlideHeader>
          <h6>
            Shaken, not Stirred is a phrase or something I don't know don't talk
            to me.
          </h6>
        </SlideHeader>
        <p className="theme-text-large">
          My pincher collar is snapped on. Then comes the electric zapper
          collar. Finally, my purple at-home collar is taken off and I know I’m
          going for a walk to the dog park. I’m so excited to see my friends. I
          hope Spike or Thunder are there already. They're the most fun to chase
          and tumble with. My human is pretty strict with me. I’m only allowed
          on the grass and not on the sidewalks. I think she’s afraid I’m going
          to jump on the other humans. I don’t understand why everyone else gets
          to jump on the benches and run wild on the sidewalks. They don’t
          listen to their humans. I know I could ignore mine but if I do she may
          zap me and it’s just not worth it. She probably wouldn’t let me back
          at the dog park if I didn’t listen to her. I just love the dog park.
        </p>
        <Link href="/contact">
          <ArrowButton>Do Something!</ArrowButton>
        </Link>
      </Story>

      <Story
        image={man}
        alt="Man"
        colors="light"
        imagePosition="left"
        textAlign="right"
      >
        <SlideHeader>
          <h2>There's a Snake in my Boots</h2>
        </SlideHeader>
        <p className="theme-text-large">
          Colors bounced around in her head. They mixed and threaded themselves
          together. Even colors that had no business being together. They were
          all one, yet distinctly separate at the same time. How was she going
          to explain this to the others?
        </p>
        <Link href="/contact">
          <ArrowButton>Get the Snake Out!</ArrowButton>
        </Link>
      </Story>

      <VideoBlock
        videos={["/video/girl-in-field.webm", "/video/girl-in-field.mp4"]}
        background="/video/girl-in-field.jpg"
      >
        <p className="theme-text-label text-theme-white">Hello</p>
        <SlideHeader>
          <h2 className="theme-text-h1 text-theme-white my-10">
            This is a <div className="inline-block text-red-500">test</div>
            <BoltIcon className="size-32 inline-block mb-8" />
          </h2>
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
              alt="Tree"
              className="w-auto max-h-[12em] md:max-h-[25em] rounded-2xl border border-theme-black mx-3"
            />
            <Image
              src={woman}
              alt="Woman"
              className="w-auto max-h-[12em] md:max-h-[25em] rounded-2xl border border-theme-black mx-3"
            />
            <Image
              src={man}
              alt="Man"
              className="w-auto max-h-[12em] md:max-h-[25em] rounded-2xl border border-theme-black mx-3"
            />
          </>
        }
      >
        <p className="theme-text-large basis-1/2 flex justify-center max-w-[40em] mx-3 overflow-visible">
          All he could think about was how it would all end. There was still a
          bit of uncertainty in the equation, but the basics were there for
          anyone to see. No matter how much he tried to see the positive, it
          wasn't anywhere to be seen. The end was coming and it wasn't going to
          be pretty.
        </p>
        <SlideHeader className="basis-1/2 flex justify-center max-w-[40em] mx-3 overflow-visible">
          <h2>Think About It</h2>
        </SlideHeader>
      </PhotoCarousel>
    </>
  );
}
