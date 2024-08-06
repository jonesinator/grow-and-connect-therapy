import { ReactNode } from "react";

interface VideoBlockProps {
  videos: string[];
  background: string;
  children: ReactNode;
}

export default function VideoBlock(props: VideoBlockProps) {
  return (
    <section
      className="relative border-y border-black py-[200px] flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url("${props.background}")` }}
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
