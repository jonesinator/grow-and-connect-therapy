import type { Metadata } from "next";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

import ArrowButton from "@components/arrow-button";
import PhotoCarousel from "@components/photo-carousel";
import SlideHeader from "@components/slide-header";
import Story from "@components/story";

import hero_bg from "./images/hero-bg.svg";
import couple_holding_hands from "./images/couple-holding-hands.jpg";
import medical from "./images/medical.jpg";
import woman_window from "./images/woman-window.jpg";
import woman_with_dogs from "./images/woman-with-dogs.jpg";
import woman_dog_bench from "./images/woman-dog-bench.jpg";
import dog_man_sit_dock from "./images/dog-man-sit-dock.jpg";
import walking_dog from "./images/walking-dog.jpg";
import hand_grass from "./images/hand-grass.jpg";
import man_reading from "./images/man-reading.jpg";
import woman_ocean from "./images/woman-ocean.jpg";
import dog_muzzle from "./images/dog-muzzle.jpg";
import dog_woods from "./images/dog-woods.jpg";

export const metadata: Metadata = {
  title: "Specialties",
};

export default function Specialties() {
  return (
    <>
      <div className="py-20 w-full bg-theme-white"></div>
      <div className="overflow-hidden text-center w-full h-full bg-theme-white pb-20">
        <div className="top-20 sm:top-10 md:top-0 absolute hue-rotate-[115deg] opacity-45 left-[25%]">
          <Image src={hero_bg as StaticImageData} alt="Man" />
        </div>
        <SlideHeader className="pt-2 pb-8 md:pt-8 md:pb-20">
          <h1 className="theme-text-huge">Specialty Areas</h1>
        </SlideHeader>
        <Marquee autoFill>
          <Image
            src={couple_holding_hands}
            alt="Tree"
            className="rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg object-cover h-[20em] md:h-[20em] w-[20em]"
          />
          <Image
            src={medical}
            alt="Woman"
            className="rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg object-cover h-[20em] md:h-[20em] w-[20em]"
          />
          <Image
            src={woman_window}
            alt="Man"
            className="rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg object-cover h-[20em] md:h-[20em] w-[20em]"
          />
          <Image
            src={woman_with_dogs}
            alt="Man"
            className="rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg object-cover h-[20em] md:h-[20em] w-[20em]"
          />
          <Image
            src={hand_grass}
            alt="Man"
            className="rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg object-cover h-[20em] md:h-[20em] w-[20em]"
          />
          <Image
            src={man_reading}
            alt="Man"
            className="rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg object-cover h-[20em] md:h-[20em] w-[20em]"
          />
          <Image
            src={woman_ocean}
            alt="Man"
            className="rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg object-cover h-[20em] md:h-[20em] w-[15em]"
          />
        </Marquee>
        <p
          className="theme-text-h6 max-w-[50em] mx-auto mt-12 text-justify px-8"
          style={{ textAlignLast: "center" }}
        >
          I’m committed to providing safe, affirming, and unbiased therapy to
          all identities and bodies. If you are polyamorous, feminist, fat, into
          kink, or in the LGBTQIA+ community, I want you in particular to know
          that I am an open and nonjudgmental therapist. Everyone deserves
          access to quality care.
        </p>
      </div>
      <Story image={woman_window} alt="foo" imagePosition="right" colors="dark">
        <SlideHeader>
          <h2 className="theme-text-h3">
            Anxiety, Depression, Out of Control Emotions
          </h2>
        </SlideHeader>
        <p className="text-justify" style={{ textAlignLast: "right" }}>
          People aren’t born knowing what to do when we experience overwhelming,
          uncomfortable emotions. We learn through observation of others or
          trial and error, and we occasionally develop unhealthy and destructive
          ways of making ourselves feel better. Not knowing what to do when we
          have strong emotions often leads to more painful experiences. It can
          put strain on relationships, negatively impact how we think of and
          treat ourselves, and fuel behavior that in turn fuels more unpleasant
          emotions. Every person experiences emotions differently - some seem to
          be more sensitive, while others may feel entirely out of touch with
          their emotions and both circumstances can be equally painful and
          limiting. Some people land on what seems the opposite end of the
          spectrum and struggle to feel any emotion at all; the numbness feels
          like a bog, slowly pulling us under and hindering our movement.
        </p>
        <p className="text-justify" style={{ textAlignLast: "right" }}>
          Fortunately, it’s possible to learn new ways to navigate our emotions.
          This may include learning to better identify the emotions we feel,
          learning to keep our emotions from dictating our behavior, and
          learning to decrease the intensity of our emotions. Mindfulness plays
          a central role in how I approach emotion management, though its
          inclusion is secular in nature. You are more than the emotions you
          feel and the thoughts that you have!
        </p>
        <ArrowButton>
          <Link href="/contact">Get Support</Link>
        </ArrowButton>
      </Story>
      <Story image={medical} alt="foo" imagePosition="left">
        <SlideHeader className="self-start">
          <h2 className="theme-text-h3">Chronic Illness</h2>
        </SlideHeader>
        <p className="text-justify">
          I am a therapist with firsthand experience of the ups and downs (and
          downs and downs and downs) of chronic illness and pain. I know what it
          is to have to give up dreams, rearrange your life, be victimized by
          the medical system, lose relationships - all because of chronic
          illness. I know what it is to have to rebuild your life from the
          ground up. Chronic pain can feel like it zaps you of all energy and
          desire, robs you of your future, and isolates you from the world
          around you. Worse yet, the connection of our mind and body means that
          often our physical symptoms have significant negative impacts on our
          mental health as well. It becomes a feedback loop that feels like
          razor wire, restricting us from even ourselves.
        </p>
        <p className="text-justify">
          I want to help you find joy and meaning despite your chronic illness.
          I can help you decrease the emotional distress associated with your
          symptoms. Allow me to help you navigate your downs and downs and downs
          and downs.
        </p>
        <ArrowButton className="self-start">
          <Link href="/contact">Reach Out</Link>
        </ArrowButton>
      </Story>
      <Story
        image={couple_holding_hands}
        alt="foo"
        imagePosition="right"
        colors="bright"
      >
        <SlideHeader>
          <h2 className="theme-text-h3 self-start">
            Relationship/Couples Therapy
          </h2>
        </SlideHeader>
        <p className="text-justify" style={{ textAlignLast: "right" }}>
          “Relationships take work” said almost every couples therapist, life
          coach or relationships expert ever. But how do we know what type of
          work to put in to change or improve things? Often it can feel like
          we’re working so very hard only to spin our wheels without any
          meaningful movement. It can be incredibly painful to be in a
          relationship that has been fulfilling and to know it can be fulfilling
          again when you feel stuck in where you are now. And intimate
          relationships don’t come with a road map or guide to get you from
          where you are to where you want to be. Finding any hope or your own
          path forward is difficult when it takes everything you have just to
          get through each day.
        </p>
        <p className="text-justify" style={{ textAlignLast: "right" }}>
          As a therapist who works with intimate partners, my goals are to help
          you communicate effectively, be heard in your relationship and
          increase overall intimacy. All relationships are complex and often go
          through significant changes that can be tough to know how to navigate.
          Intimate relationships are not exempt from this and often come with
          additional complexities and struggles. My work assists you in
          thoroughly assessing your relationship, building friendship and
          intimacy, and improving communication. Fighting alone doesn’t mean you
          should end the relationship - learning how to fight in a healthy way
          can make all the difference.
        </p>
        <p className="text-justify" style={{ textAlignLast: "right" }}>
          The work I do with intimate partners is heavily influenced by the work
          and teachings of&nbsp;
          <Link href="https://www.gottman.com/" className="underline">
            The Gottman Institute
          </Link>
          &nbsp;and&nbsp;
          <Link
            href="https://www.instituteforrelationalintimacy.com/"
            className="underline"
          >
            The Institute for Relational Intimacy
          </Link>
          . I’m affirming of both monogamous and polyamorous relationships.
          Regardless of the structure, it’s important to know how to communicate
          clearly, negotiate boundaries and expectations, and live your values
          within the context of your relationship.
        </p>
        <ArrowButton>
          <Link href="/contact">Get in Touch</Link>
        </ArrowButton>
      </Story>
      <PhotoCarousel
        colors="light"
        carouselPosition="top"
        borders="top"
        images={
          <>
            <Image
              src={woman_with_dogs}
              alt="Tree"
              className="w-auto h-[12em] md:h-[25em] rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg object-cover"
            />
            <Image
              src={dog_man_sit_dock}
              alt="Tree"
              className="w-auto h-[12em] md:h-[25em] rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg object-cover"
            />
            <Image
              src={woman_dog_bench}
              alt="Tree"
              className="h-[12em] md:h-[25em] rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg w-[15em] md:w-[20em] object-cover"
            />
            <Image
              src={walking_dog}
              alt="Tree"
              className="w-auto h-[12em] md:h-[25em] rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg object-cover"
            />
            <Image
              src={dog_muzzle}
              alt="Tree"
              className="w-auto h-[12em] md:h-[25em] rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg object-cover"
            />
            <Image
              src={dog_woods}
              alt="Tree"
              className="h-[12em] md:h-[25em] rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg object-cover w-[20em]"
            />
          </>
        }
      >
        <SlideHeader className="basis-1/2 flex justify-center max-w-[40em] mx-3">
          <h3>High Needs Dog Owners</h3>
        </SlideHeader>
        <div className="text-justify basis-1/2 mx-4 max-w-[50em] flex flex-col gap-6">
          <p>
            Not all pet owners know the isolation and anxiety that it is to love
            a behaviorally or medically needy animal. It’s become popular,
            especially in Colorado, to bring your beloved dog with you wherever
            you can and it’s so painful to know that you may never be able to
            have those experiences with your pet. Or that your dog may never
            play with other dogs, meet strangers without fear, or easily attend
            vet appointments. Being a responsible and loving pet owner ends up
            taking far more effort and sacrifice than we ever anticipated and
            can have a significant impact on our own mental health. The effort
            to engage in what we think should be normal, easy activities and
            often the financial cost can increase depression and anxiety in our
            day-to-day lives.
          </p>
          <p>
            I know exactly what it is to have to leave my dog at home, to have
            to medicate him due to fear, to not have dog friends or even human
            friends that can visit freely. I know how much it can take to manage
            behaviors and medical needs that limit your choices for both your
            life and the life of your pet. I <b>am not</b> a dog trainer and do
            not offer training services for your pet, but I can support you
            through the struggle, isolation, and frequent judgment that comes
            with loving a high needs pet.
          </p>
          <ArrowButton className="place-self-start">
            <Link href="/contact">Find Help</Link>
          </ArrowButton>
        </div>
      </PhotoCarousel>
    </>
  );
}
