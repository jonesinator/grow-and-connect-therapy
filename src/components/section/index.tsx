import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

import { cn } from "@lib/utils";

const sectionVariants = cva("pb-10 md:py-20 flex place-items-center gap-10", {
  variants: {
    colors: {
      bright: "bg-theme-white text-black",
      light: "bg-background-light text-black",
      dark: "bg-background-muddy text-black",
    },
    borders: {
      top: "border-t",
      bottom: "border-b",
      both: "border-t border-b",
      none: "",
    },
    borderColor: {
      black: "border-theme-black",
      white: "border-theme-white",
    },
  },
  defaultVariants: {
    colors: "light",
    borders: "top",
    borderColor: "black",
  },
});

export type SectionVariants = VariantProps<typeof sectionVariants> & {
  children: ReactNode;
  className?: string;
};

export default function Section(props: SectionVariants) {
  return (
    <section className={cn(sectionVariants({ ...props }))}>
      {props.children}
    </section>
  );
}
