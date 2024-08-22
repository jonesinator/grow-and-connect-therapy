import type { Metadata } from "next";

import MainHeader from "@components/main-header";
import SlideHeader from "@components/slide-header";

export const metadata: Metadata = {
  title: "About Me",
};

export default function AboutMe() {
  return (
    <MainHeader>
      <SlideHeader>
        <h1>About Me</h1>
      </SlideHeader>
    </MainHeader>
  );
}
