import type { Metadata } from "next";

import MainHeader from "@components/main-header";
import SlideHeader from "@components/slide-header";

export const metadata: Metadata = {
  title: "Our Story",
};

export default function Page() {
  return (
    <MainHeader>
      <SlideHeader>
        <h1 className="tracking-tight my-0 mt-5 mb-3 text-[136px] leading-[82%] font-normal font-mono">
          Our Story
        </h1>
      </SlideHeader>
    </MainHeader>
  );
}
