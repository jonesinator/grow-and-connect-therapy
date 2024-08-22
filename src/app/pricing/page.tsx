import type { Metadata } from "next";

import SlideHeader from "@components/slide-header";

export const metadata: Metadata = {
  title: "Pricing",
};

export default function Pricing() {
  return (
    <>
      <div className="py-16 w-full"></div>
      <div className="overflow-hidden text-center w-full h-full pb-4">
        <SlideHeader>
          <h1>Pricing for Services</h1>
        </SlideHeader>
      </div>
      <div className="mx-auto max-w-[100em] py-10 px-4 text-center">
        <div className="flex flex-row">
          <SlideHeader className="basis-1/3 mx-3">
            <div className="rounded-2xl border border-theme-black">
              Poop
              <br />
              poop
              <br />
              poop
            </div>
          </SlideHeader>
          <SlideHeader className="basis-1/3 mx-3">
            <div className="rounded-2xl border border-theme-black">Poop</div>
          </SlideHeader>
          <SlideHeader className="basis-1/3 mx-3">
            <div className="rounded-2xl border border-theme-black">Poop</div>
          </SlideHeader>
        </div>
      </div>
    </>
  );
}
