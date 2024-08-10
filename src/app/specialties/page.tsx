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
        <h1>Specialties</h1>
      </SlideHeader>
    </MainHeader>
  );
}
