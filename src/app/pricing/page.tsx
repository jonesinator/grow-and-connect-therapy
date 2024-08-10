import type { Metadata } from "next";

import MainHeader from "@components/main-header";
import SlideHeader from "@components/slide-header";

export const metadata: Metadata = {
  title: "Pricing",
};

export default function Pricing() {
  return (
    <MainHeader>
      <SlideHeader>
        <h1>Pricing</h1>
      </SlideHeader>
    </MainHeader>
  );
}
