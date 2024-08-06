import type { ReactNode } from "react";

interface MainHeaderProps {
  children: ReactNode;
}

export default function MainHeader(props: MainHeaderProps) {
  return (
    <section className="pt-[200px] pb-[330px] border-b border-theme-black bg-background-light">
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center flex-col">
          <div className="z-[1]">
            <div className="max-w-[1200px] text-center flex items-center justify-center flex-col">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
