import Link from "next/link";

import { Links } from "@lib/links";

import SubscribeForm from "./form";

export default function Footer({ links }: { links: Links }) {
  return (
    <footer className="relative border-t border-theme-black pt-10 md:pt-20 pb-20 overflow-hidden bg-gradient-to-t from-theme-white to-background-orange">
      <div className="w-full px-4 mx-auto md:max-w-[45em] lg:max-w-[100em]">
        <div className="flex flex-col gap-10 xl:gap-40 relative xl:flex-row justify-self-start">
          <div className="flex flex-col items-start theme-text-h4">
            {links.map((link) => (
              <Link key={link.name} href={link.path}>
                {link.name}
              </Link>
            ))}
          </div>
          <div className="theme-text-large justify-self-center w-full max-w-[30em]">
            <p className="text-justify">
              I do not offer crisis services - if this is a mental health
              emergency, please contact&nbsp;
              <Link
                href="https://coloradocrisisservices.org/"
                className="underline"
              >
                Colorado Crisis Services
              </Link>
              &nbsp;at
              <Link href="tel:18444938255" className="underline">
                (844) 493-8255
              </Link>
              .
            </p>
            <br />
            <p className="text-justify">
              This website is intended for a general audience, for educational
              and informational purposes only. The content is not a substitute
              for individual treatment by a qualified medical professional.
              Visiting the website and viewing its content does not create a
              therapist/ patient relationship between visitors and Jamie L
              Thompson, LCSW or Grow and Connect Therapy.
            </p>
          </div>
          <div className="text-left xl:text-right">
            <p className="theme-text-h5">Join my newsletter</p>
            <SubscribeForm />
            <ul className="flex flex-col theme-text-large w-full text-left xl:text-right mt-12">
              <li>
                <Link href="mailto:jamie@growandconnecttherapy.com">
                  jamie@growandconnecttherapy.com
                </Link>
              </li>
              <li>
                <Link href="tel:17205045388">(720) 504-5388</Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/growandconnect_therapy/">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/profile.php?id=61564946903297">
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 sm:mt-20 md:mt-24">
          <p className="text-center text-[4.3rem] sm:text-[6.5rem] lg:text-[10rem] leading-[80%] tracking-[-.03rem] font-mono md:mb-8 lg:mb-10">
            Grow &amp; Connect
          </p>
          <div className="gap-4 flex-col mt-5 md:mt-0 md:gap-10 md:flex-row text-center justify-between items-center flex">
            <Link href="/privacy-policy" className="theme-text-label">
              Privacy Policy
            </Link>
            <Link href="/privacy-practices" className="theme-text-label">
              Privacy Practices
            </Link>
            <Link href="/terms" className="theme-text-label">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
