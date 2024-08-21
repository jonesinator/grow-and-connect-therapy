import type { ReactNode } from "react";

interface MainHeaderProps {
  children: ReactNode;
}

export default function MainHeader(props: MainHeaderProps) {
  return (
    <section className="pt-[8em] md:pt-[10em] pb-[12em] md:pb-[22em] border-b border-theme-black bg-background-orange">
      <div className="w-full max-w-[100em] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center flex-col">
          <div className="z-[1]">
            <div className="max-w-[75em] text-center flex items-center justify-center flex-col">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
