import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";

import { Links } from "@lib/links";

import bg_image from "./images/bg.svg";

export default function MainFooter({ links }: { links: Links }) {
  return (
    <footer className="relative border-t border-theme-black pt-20 pb-20 overflow-hidden">
      <div className="w-full px-4 mx-auto md:max-w-[45em] lg:max-w-[100em]">
        <div className="flex flex-col gap-10 relative md:flex-row justify-self-start">
          <div className="flex flex-col items-start theme-text-h4 basis-1/3">
            {links.map((link) => (
              <Link key={link.name} href={link.path}>
                {link.name}
              </Link>
            ))}
          </div>
          <p className="theme-text-large basis-1/3 justify-self-center w-full">
            I don't know what should go here...
          </p>
          <div className="gap-4 flex flex-col md:flex-row md:gap-10 theme-text-large basis-1/3">
            <ul className="flex flex-col theme-text-large w-full text-left md:text-right">
              <li>
                <a href="http://www.instagram.com">Instagram</a>
              </li>
              <li>
                <a href="http://www.facebook.com">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 sm:mt-20 md:mt-24">
          <p className="text-center text-[5rem] sm:text-[7.5rem] md:text-[12rem] lg:text-[16rem] leading-[12rem] tracking-[-.03rem] font-mono">
            Grow &amp; Connect
          </p>
          <div className="gap-4 flex-col mt-5 md:mt-0 md:gap-10 md:flex-row text-center justify-between items-center flex">
            <p className="theme-text-label">Made in Colorado</p>
            <p className="theme-text-label">
              ©2024 Grow and Connect Therapy, PLLC
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-0 m-0 p-0 bg-background-light w-full h-full z-[-1]">
        <Image
          src={bg_image as StaticImageData}
          alt="Spray Painted Background"
          className="mx-auto absolute bottom-0 hue-rotate-60 saturate-80 opacity-80"
          sizes="100vw"
          fill
          quality={100}
        />
      </div>
    </footer>
  );
}
