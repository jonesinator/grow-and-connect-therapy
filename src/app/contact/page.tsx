import type { Metadata } from "next";

import MainHeader from "@components/main-header";
import SlideHeader from "@components/slide-header";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Page() {
  return (
    <MainHeader>
      <SlideHeader>
        <h1>Contact</h1>
        <h2>Contact</h2>
        <h3>Contact</h3>
        <h4>Contact</h4>
        <h5>Contact</h5>
        <h6>Contact</h6>
        <p className="theme-text-large">How about that?</p>
        <p>How about that?</p>
        <p className="theme-text-label">How about that?</p>
      </SlideHeader>
    </MainHeader>
  );
}
