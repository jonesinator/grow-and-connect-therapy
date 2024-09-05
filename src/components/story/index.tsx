import { cva, VariantProps } from "class-variance-authority";
import { type ReactNode } from "react";
import { cn } from "@lib/utils";
import Image, { type StaticImageData } from "next/image";

import Section, { type SectionVariants } from "@components/section";

const storyVariants = cva("", {
  variants: {
    imagePosition: {
      left: "md:flex-row",
      right: "md:flex-row-reverse",
    },
    textAlign: {
      right: "text-right",
      center: "text-center",
      left: "text-left",
    },
  },
  defaultVariants: {
    imagePosition: "left",
    textAlign: "right",
  },
});

const alignVariants = cva("", {
  variants: {
    textAlign: {
      right: "place-items-end",
      center: "place-items-center",
      left: "place-items-start",
    },
  },
  defaultVariants: {
    textAlign: "right",
  },
});

type StoryProps = VariantProps<typeof storyVariants> &
  VariantProps<typeof alignVariants> &
  SectionVariants & {
    children: ReactNode;
    alt: string;
    image: StaticImageData;
    className?: string;
    sectionClassName?: string;
  };

export default function Story({
  imagePosition,
  textAlign,
  sectionClassName,
  className,
  ...props
}: StoryProps) {
  return (
    <Section {...props} className={sectionClassName || ""}>
      <div
        className={cn(
          storyVariants({ imagePosition, textAlign }),
          "w-full h-full mx-auto flex flex-col md:max-w-[100em] place-items-center",
          className,
        )}
      >
        <div className="basis-1/2 flex justify-center place-items-center mx-0 md:mx-3 w-full">
          <Image
            alt={props.alt}
            src={props.image}
            className="w-full h-[25em] md:h-auto md:h-max-[50em] md:w-[30em] md:rounded-b-2xl md:rounded-t-[20em] md:aspect-[1.33/2] border-b md:border border-theme-black object-cover md:mx-3 md:drop-shadow-lg"
          />
        </div>
        <div className="basis-1/2 mx-3 mt-3 md:mt-0">
          <div
            className={cn(
              alignVariants({ textAlign }),
              "max-w-[40em] flex flex-col gap-5 mx-0 md:mx-3",
            )}
          >
            {props.children}
          </div>
        </div>
      </div>
    </Section>
  );
}
