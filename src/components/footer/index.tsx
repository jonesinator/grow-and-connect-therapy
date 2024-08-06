import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";

import { Links } from "@lib/links";

import bg_image from "./images/bg.svg";

interface MainFooterProps {
  links: Links;
}

export default function MainFooter(props: MainFooterProps) {
  return (
    <footer className="border-t border-theme-black pt-20 pb-20 relative overflow-hidden bg-background-light z-[-1]">
      <div className="block w-full max-w-none px-4 mx-auto sm:px-6 md:max-w-[728px] lg:max-w-[1600px]">
        <div className="grid grid-cols-1 gap-10 relative grid-rows-[auto] sm:grid-cols-2 md:grid-cols-3 z-[1]">
          <div className="flex flex-col items-start">
            {props.links.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className="theme-text-h4"
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="gap-4 justify-around flex flex-col md:flex-row md:gap-10 theme-text-large">
            <p className="my-0 max-w-40 theme-text-large">
              I don't know what should go here...
            </p>
            <ul className="flex flex-col theme-text-large">
              <li>
                <a href="http://www.instagram.com">Instagram</a>
              </li>
              <li>
                <a href="http://www.facebook.com">Facebook</a>
              </li>
              <li>
                <a href="http://www.tiktok.com">TikTok</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 sm:mt-20 md:mt-24 footer-bottom-wrap">
          <p className="text-center text-[80px] sm:text-[120px] md:text-[190px] lg:text-[256px] leading-[95%] tracking-[-.03em] font-mono">
            Grow / Connect
          </p>
          <div className="gap-4 flex-col mt-5 md:mt-0 md:gap-10 md:flex-row text-center justify-between items-center flex">
            <p className="theme-text-label">Made in Colorado</p>
            <p className="theme-text-label">
              ©2024 Grow and Connect Therapy, PLLC
            </p>
          </div>
        </div>
      </div>
      <Image
        src={bg_image as StaticImageData}
        alt="Spray Painted Background"
        className="height-[40%] md:height-full mx-auto absolute bottom-0 z-[-1] hue-rotate-60 saturate-80 opacity-80"
        fill
      />
    </footer>
  );
}
