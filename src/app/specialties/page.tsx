import type { Metadata } from "next";

import MainHeader from "@components/main-header";
import SlideHeader from "@components/slide-header";

export const metadata: Metadata = {
  title: "Specialties",
};

export default function Pricing() {
  return (
    <MainHeader>
      <SlideHeader>
        <h1 className="tracking-tight my-0 mt-5 mb-3 text-[136px] leading-[82%] font-normal font-mono">
          Specialties
        </h1>
      </SlideHeader>
    </MainHeader>
  );
}
