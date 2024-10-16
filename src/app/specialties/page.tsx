import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

import ArrowButton from "@components/arrow-button";
import PhotoCarousel from "@components/photo-carousel";
import SlideHeader from "@components/slide-header";
import Story from "@components/story";

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
        <SlideHeader className="pt-2 pb-8 md:pt-8 md:pb-20">
          <h1 className="theme-text-huge">Specialty Areas</h1>
        </SlideHeader>
        <Marquee autoFill>
          <Image
            src={couple_holding_hands}
            alt="Two people sitting at a table, gently holding hands in an intimate moment. Mugs of coffee are on the table, and soft natural light streams in from a nearby window, creating a peaceful and tender atmosphere."
            className="rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg object-cover h-[20em] md:h-[20em] w-[20em]"
          />
          <Image
            src={medical}
            alt="A person sitting on a hospital bed wearing a blue medical gown, holding a disposable blue cap in their hands. The scene suggests a quiet, reflective moment before or after a medical procedure."
            className="rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg object-cover h-[20em] md:h-[20em] w-[20em]"
          />
          <Image
            src={woman_window}
            alt="A young woman rests her head on her hand while gazing through window blinds. The dim lighting and her contemplative expression evoke a sense of introspection or quiet reflection."
            className="rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg object-cover h-[20em] md:h-[20em] w-[20em]"
          />
          <Image
            src={woman_with_dogs}
            alt="A woman stands by a calm lake in a forest, accompanied by two dogs. The sunlight filters through the trees, creating a serene and peaceful outdoor setting."
            className="rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg object-cover h-[20em] md:h-[20em] w-[20em]"
          />
          <Image
            src={hand_grass}
            alt="A single hand is raised above tall grass in a vast field, with cloudy skies in the background. The image evokes a sense of reaching out or seeking in an expansive, natural setting."
            className="rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg object-cover h-[20em] md:h-[20em] w-[20em]"
          />
          <Image
            src={man_reading}
            alt="A man sits on a bench in a grassy area near the water, absorbed in reading a book. The sunlight creates a warm, peaceful atmosphere, with nature and the open sky in the background."
            className="rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg object-cover h-[20em] md:h-[20em] w-[20em]"
          />
          <Image
            src={woman_ocean}
            alt="A person stands near the edge of a grassy cliff overlooking the ocean at sunset, with their back turned and hands behind them holding a small bouquet of flowers. The calm water and soft light create a peaceful, reflective mood."
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
      <Story
        image={woman_window}
        alt="A young woman rests her head on her hand while gazing through window blinds. The dim lighting and her contemplative expression evoke a sense of introspection or quiet reflection."
        imagePosition="right"
        colors="dark"
      >
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
      <Story
        image={medical}
        alt="A person sitting on a hospital bed wearing a blue medical gown, holding a disposable blue cap in their hands. The scene suggests a quiet, reflective moment before or after a medical procedure."
        imagePosition="left"
      >
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
        alt="Two people sitting at a table, gently holding hands in an intimate moment. Mugs of coffee are on the table, and soft natural light streams in from a nearby window, creating a peaceful and tender atmosphere."
        imagePosition="right"
        colors="bright"
      >
        <SlideHeader>
          <h2 className="theme-text-h3 self-start">Relationship Therapy</h2>
        </SlideHeader>
        <p className="text-justify" style={{ textAlignLast: "right" }}>
          “Relationships take work” said almost every therapist, life coach, or
          relationship expert ever. But how do we know what type of work to put
          in so that we can change or improve things? Often it can feel like
          we’re giving everything we have, but spinning our wheels rather than
          moving forward. It can be incredibly painful to look around and be so
          far away from where we want to be and what we want our relationships
          to look like. Unfortunately, there is no universal road map that gets
          everyone from point A to point B reliably. And many of the maps are
          outdated, or in a different language, or seem to be made for someone
          who is not like you.
        </p>
        <p className="text-justify" style={{ textAlignLast: "right" }}>
          As a therapist who works with intimate partners, I specialize in
          working with folks who are polyamorous of all relationship structures.
          Being polyamorous doesn’t automatically mean that there aren’t things
          that cause problems in relationships, or that you don’t need someone
          to give you directions from time to time. I also enjoy working with
          people who are polycurious, who perhaps want to explore that further
          or are considering opening up their relationship. Polyamorous
          relationships look all sorts of different ways, and I would be honored
          to guide you while you decide what you want without bias.
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
              alt="A woman stands by a calm lake in a forest, accompanied by two dogs. The sunlight filters through the trees, creating a serene and peaceful outdoor setting."
              className="w-auto h-[12em] md:h-[25em] rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg object-cover"
            />
            <Image
              src={dog_man_sit_dock}
              alt="A man and a dog sit side by side at the end of a wooden dock, overlooking a calm lake surrounded by trees. The peaceful setting conveys a sense of companionship and quiet reflection."
              className="w-auto h-[12em] md:h-[25em] rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg object-cover"
            />
            <Image
              src={woman_dog_bench}
              alt="A woman with tattoos sits on a tree stump in a lush outdoor setting, smiling as she shakes hands with a black dog. The scene is playful and full of warmth, surrounded by greenery."
              className="h-[12em] md:h-[25em] rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg w-[15em] md:w-[20em] object-cover"
            />
            <Image
              src={walking_dog}
              alt="A person walks their dog along a tree-lined path covered with autumn leaves. The vibrant fall colors and peaceful atmosphere create a serene outdoor scene."
              className="w-auto h-[12em] md:h-[25em] rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg object-cover"
            />
            <Image
              src={dog_muzzle}
              alt="A man holds a large dog wearing a muzzle, with a calm expression on his face. The outdoor setting includes a building in the background, and the moment appears quiet and reflective."
              className="w-auto h-[12em] md:h-[25em] rounded-2xl border border-theme-black mx-3 my-3 inline-block drop-shadow-lg object-cover"
            />
            <Image
              src={dog_woods}
              alt="A person stands in a forest with a dog wearing a muzzle, both looking ahead. The person is dressed in outdoor gear, including a backpack and a beanie, suggesting they are on a hike through the tall trees of the woods."
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
