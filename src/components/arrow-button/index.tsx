"use client";

import { VariantProps, cva } from "class-variance-authority";
import type { FC, ReactNode } from "react";
import { motion } from "framer-motion";

import { cn } from "@lib/utils";

const arrowButtonVariants = cva(
  "px-6 py-2.5 rounded-full hover:transition-colors theme-text-button",
  {
    variants: {
      variant: {
        default:
          "bg-theme-black text-theme-white hover:bg-background-orange hover:text-theme-black",
        nav: "text-theme-black bg-transparent hover:bg-transparent underline md:bg-theme-black md:hover:bg-background-orange md:hover:text-theme-black md:hover:transition-colors md:text-theme-white md:rounded-full md:no-underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface ArrowButtonProps extends VariantProps<typeof arrowButtonVariants> {
  className?: string;
  children: ReactNode;
}

const ArrowButton: FC<ArrowButtonProps> = ({
  className,
  variant,
  children,
}) => {
  const variants = {
    visible: { opacity: 1, width: 20 },
    hidden: { opacity: 0, width: 0 },
  };

  return (
    <motion.button
      initial="hidden"
      animate="hidden"
      whileHover="visible"
      className={`justify-center flex gap-0.5 py-2 ${cn(arrowButtonVariants({ variant, className }))}`}
    >
      {children}
      <motion.svg
        variants={variants}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        aria-label=""
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </motion.svg>
    </motion.button>
  );
};

export default ArrowButton;
