import Link from "next/link";

import { Links } from "@lib/links";

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
          <div className="theme-text-large basis-1/3 justify-self-center w-full">
            <p>
              I do not offer crisis services - if this is a mental health
              emergency, please contact the Colorado Crisis Line at
              844.493.8255.
            </p>
            <br />
            <p>
              This website is intended for a general audience, for educational
              and informational purposes only. The content is not a substitute
              for individual treatment by a qualified medical professional.
              Visiting the website and viewing its content does not create a
              therapist/ patient relationship between visitors and Jamie L
              Thompson, LCSW or Grow and Connect Therapy.
            </p>
          </div>
          <div className="gap-4 flex flex-col md:flex-row md:gap-10 theme-text-large basis-1/3">
            <ul className="flex flex-col theme-text-large w-full text-left md:text-right">
              <li>
                <a href="mailto:jamie@growandconnecttherapy.com">
                  jamie@growandconnecttherapy.com
                </a>
              </li>
              <li>
                <a href="tel:17205045388">(720) 504-5388</a>
              </li>
              <li>
                <a href="https://www.instagram.com/growandconnect_therapy/">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=61564946903297">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 sm:mt-20 md:mt-24">
          <p className="text-center text-[4.3rem] sm:text-[6.5rem] lg:text-[10rem] leading-[80%] tracking-[-.03rem] font-mono md:mb-8 lg:mb-10">
            Grow &amp; Connect
          </p>
          <div className="gap-4 flex-col mt-5 md:mt-0 md:gap-10 md:flex-row text-center justify-between items-center flex">
            <Link href="/privacy" className="theme-text-label">
              Privacy Policy
            </Link>
            <Link href="/terms" className="theme-text-label">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute top-0 m-0 p-0 bg-background-orange w-full h-full z-[-1]"></div>
    </footer>
  );
}
