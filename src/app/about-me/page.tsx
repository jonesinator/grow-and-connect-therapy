import type { Metadata } from "next";

import SlideHeader from "@components/slide-header";

export const metadata: Metadata = {
  title: "About Me",
};

export default function AboutMe() {
  return (
    <>
      <div className="py-20 w-full"></div>
      <div className="overflow-hidden text-center w-full h-full pb-4">
        <SlideHeader>
          <h1>About Me</h1>
        </SlideHeader>
      </div>
    </>
  );
}
