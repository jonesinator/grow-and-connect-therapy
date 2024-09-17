import type { Metadata } from "next";

import SlideHeader from "@components/slide-header";

import jamie_1 from "./images/jamie-1.jpg";
import jamie_2 from "./images/jamie-2.jpg";
import Story from "@components/story";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
};

export default function AboutMe() {
  return (
    <>
      <div className="py-16 border-b border-theme-black md:border-none md:py-10 w-full"></div>
      <Story
        image={jamie_1}
        alt="Jamie is kneeling outdoors by a tree with a calm, gray and white dog by her side. She has long, reddish-brown hair and glasses, wearing a casual black outfit with a green cover-up, smiling warmly."
        borders="none"
      >
        <SlideHeader className="text-left">
          <h1 className="theme-text-h2">Thoughts on Therapy</h1>
        </SlideHeader>
        <p className="text-justify">
          If you’re here, I’ll assume you’re at least curious about exploring
          therapy. I think that everyone can benefit from therapy if you find
          the right combination of therapeutic approach and therapist
          personality. I know how uncomfortable it can be to allow yourself to
          be vulnerable with a stranger. Not every therapist is going to be a
          good fit for every person or circumstance and frankly, it’s wildly
          unfair that it can take a lot of effort and patience just to find a
          person with whom to get started. It’s useful to explore that before
          deciding on a therapist, which is why I find it so helpful to have a
          free,&nbsp;
          <Link href="/contact" className="underline">
            brief consultation
          </Link>
          &nbsp;before deciding whether or not to work together. I have
          firsthand experience with how life changing it is to work with the
          right person for you.
        </p>
        <p className="text-justify">
          I believe that you are the expert on you - your life, your needs, your
          values, and your goals. I would be honored to support you in achieving
          those goals in a way that validates your life and your values.
        </p>
      </Story>
      <Story
        image={jamie_2}
        alt="Jamie is smiling warmly while sitting indoors, with long reddish-brown hair and glasses. The background features plants and stained glass, adding to the cozy, welcoming atmosphere."
        imagePosition="right"
        colors="bright"
      >
        <SlideHeader>
          <h2 className="theme-text-h2">Jamie L Thompson, LCSW</h2>
        </SlideHeader>
        <p className="text-justify">
          I grew up in Kansas where I completed my Masters of Social Work at
          Wichita State University in 2012. I’ve lived in Colorado since 2015,
          and completed my clinical qualification in 2018. I currently live with
          my partner and two chaotic dogs, Cash and Juniper. I have lots of
          hobbies and interests, but spend most of my time reading, playing
          video games, or working with my dogs. I occasionally get or caught up
          doom scrolling, like many of us these days. I hate blue holiday lights
          - it’s like they somehow suck light out of the space around them. I
          use the skills that I teach in therapy and have a personal mindfulness
          practice that has been incredibly helpful in my own life.
        </p>
        <p className="text-justify">
          I use she/her pronouns and am committed to providing accepting and
          empathetic therapy for all identities, bodies and abilities. I strive
          to cultivate a therapeutic space that makes you feel safe and
          comfortable so that deeply important work can happen there. While I
          think good therapy is a healing and validating relationship for folks,
          I believe it is important to acknowledge the significant impact of
          capitalism, the current political climate, and many other large
          systems on individual lives. It is also important to acknowledge that,
          unfortunately, individual therapy will always be insufficient to
          address systemic issues that widely contribute to mental health issues
          in our country.
        </p>
      </Story>
    </>
  );
}
