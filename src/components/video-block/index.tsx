"use client";

import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";

import { useIsSeen } from "@lib/hooks/is-seen";

interface VideoBlockProps {
  videos: string[];
  background: string;
  children: ReactNode;
}

export default function VideoBlock(props: VideoBlockProps) {
  const [bgClass, setBgClass] = useState<CSSProperties>({});
  const ref = useRef<HTMLElement | null>(null);
  const isSeen = useIsSeen(ref, "100px");

  useEffect(() => {
    if (isSeen) {
      setBgClass({ backgroundImage: `url("${props.background}")` });
    }
  }, [isSeen]);

  return (
    <section
      ref={ref}
      className="relative border-y border-black py-[200px] flex flex-col bg-cover bg-center"
      style={bgClass}
    >
      <video
        className="w-full h-full object-cover m-auto absolute top-[-100%] bottom-[-100%] left-[-100%] right-[-100%]"
        preload="none"
        autoPlay
        loop
        muted
        playsInline
      >
        {props.videos.map((video) => (
          <source key={video} src={video} />
        ))}
      </video>
      <div className="z-[1] flex flex-col place-items-center">
        {props.children}
      </div>
    </section>
  );
}
