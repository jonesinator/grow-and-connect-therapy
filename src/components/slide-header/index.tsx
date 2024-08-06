"use client";

import { useRef, type ReactNode } from "react";
import { useIsSeen } from "@lib/hooks/is-seen";

interface SlideHeaderProps {
  children: ReactNode;
  className?: string;
}

export default function SlideHeader(props: SlideHeaderProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const seen = useIsSeen(ref);

  return (
    <div ref={ref} className={`overflow-hidden ${props.className || ""}`}>
      <div className={seen ? "animate-slide-up" : "invisible"}>
        {props.children}
      </div>
    </div>
  );
}
