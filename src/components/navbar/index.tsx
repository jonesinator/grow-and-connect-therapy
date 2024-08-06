"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

import ArrowButton from "@components/arrow-button";
import { Links } from "@lib/links";

import logo_image from "./images/logo.svg";
import menu_image from "./images/menu.svg";
import close_image from "./images/close.svg";

interface NavbarProps {
  links: Links;
}

interface MenuState {
  open: boolean;
  classNames: string;
  currentClassNames: string;
  nonCurrentClassNames: string;
}

export default function Navbar(props: NavbarProps) {
  const pathname = usePathname();
  const menuShouldShow = useMediaQuery("(max-width: 928px)");
  const commonClassNames = "rounded-[32px] px-4";
  const closedMenuState: MenuState = {
    open: false,
    classNames:
      "transition-all duration-350 hover:bg-background-orange py-2 theme-link-nav",
    currentClassNames: "bg-background-orange",
    nonCurrentClassNames: "",
  };
  const openMenuState: MenuState = {
    open: true,
    classNames:
      "block relative text-center py-0 mb-2 rounded-[32px] transition-all duration-350 px-2 theme-text-h2",
    currentClassNames: "",
    nonCurrentClassNames: "hover:bg-background-orange",
  };
  const [menuState, setMenuState] = useState<MenuState>(closedMenuState);
  const handleMenuShow = () => {
    setMenuState(openMenuState);
  };
  const handleMenuHide = () => {
    setMenuState(closedMenuState);
  };

  useEffect(() => {
    if (!menuShouldShow && menuState.open) {
      handleMenuHide();
    }
  }, [menuShouldShow, menuState.open]);

  return (
    <div className="z-10 gap-6 flex-col flex fixed top-0 right-0 left-0 bottom-auto theme-text-regular">
      <div className="gap-3 border-b border-theme-black bg-background-orange justify-center align-center flex py-2 px-6">
        <p>We are under construction</p>
        <Link href="/blog" className="underline">
          Click this Please
        </Link>
      </div>
      <div
        className={`bg-transparent before:table after:table before:col-start-1 after:col-start-1 before:row-start-1 after:row-start-1 before:column-end-2 after:column-end-2 before:row-end-2 after:row-end-2 after:clear-both ${menuState.open ? "" : ""}`}
      >
        <div className="border border-theme-black backdrop-blur-md text-center bg-theme-white bg-opacity-50 rounded-full p-2 gap-4 justify-center items-center w-[94%] max-w-[1600px] mx-auto flex relative md:border-none md:backdrop-blur-none md:bg-transparent">
          <Link
            href="/"
            className="z-10 rounded-full h-10 w-10 absolute inset-x-0 p-0 mx-auto md:mx-0 md:p-1 md:left-6 md:backdrop-blur-md md:bg-theme-white md:bg-opacity-50"
          >
            <Image
              src={logo_image as StaticImageData}
              loading="lazy"
              alt="Logo Image"
              className="h-full transition-all duration-500 hover:rotate-180"
              style={{ width: "auto" }}
            />
          </Link>
          <nav
            role="navigation"
            className={`z-10 border border-theme-black backdrop-blur-md bg-theme-white bg-opacity-50 mt-2 px-0 py-10 md:gap-1 rounded-[32px] md:border-none md:items-center md:p-1 md:flex ${menuState.open ? "absolute top-full inset-x-0 text-center overflow-visible min-w-[200px]" : "hidden"} md:block`}
          >
            {props.links.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`${commonClassNames} ${menuState.classNames} ${link.path == pathname ? menuState.currentClassNames : menuState.nonCurrentClassNames}`}
                  onClick={handleMenuHide}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="justify-between w-full flex flex-row-reverse static items-center gap-3 md:absolute md:right-6">
            <Link href="/contact">
              <ArrowButton variant="nav">Get in Touch</ArrowButton>
            </Link>
            <div className="block relative float-right text-2xl cursor-pointer select-none md:hidden ml-4">
              <Image
                src={menu_image as StaticImageData}
                alt="Menu Open Button"
                onClick={handleMenuShow}
                hidden={menuState.open}
              />
              <Image
                src={close_image as StaticImageData}
                alt="Menu Close Button"
                onClick={handleMenuHide}
                hidden={!menuState.open}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
