import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import ReactFastMarquee, { MarqueeProps } from "react-fast-marquee";

import Section, { type SectionVariants } from "@components/section";

import { cn } from "@lib/utils";

const photoCarouselVariants = cva(
  "py-10 md:py-20 flex place-items-center gap-10 flex-col",
  {
    variants: {
      carouselPosition: {
        top: "flex-col-reverse",
        bottom: "flex-col",
      },
    },
    defaultVariants: {
      carouselPosition: "bottom",
    },
  },
);

type PhotoCarouselProps = VariantProps<typeof photoCarouselVariants> &
  SectionVariants &
  MarqueeProps & {
    children: ReactNode;
    images: ReactNode;
    className?: string;
    sectionClassName?: string;
  };

export default function PhotoCarousel({
  className,
  carouselPosition,
  sectionClassName,
  ...props
}: PhotoCarouselProps) {
  return (
    <Section
      {...props}
      className={cn(
        sectionClassName,
        photoCarouselVariants({ carouselPosition }),
      )}
    >
      <div
        className={cn(
          "flex flex-col md:flex-row mx-auto gap-10 justify-center",
          className,
        )}
      >
        {props.children}
      </div>
      <ReactFastMarquee {...props} autoFill={true}>
        {props.images}
      </ReactFastMarquee>
    </Section>
  );
}
