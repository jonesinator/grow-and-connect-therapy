import { useEffect, useState, type MutableRefObject } from "react";

export function useIsVisible(
  ref: MutableRefObject<Element | null>,
  shouldTrack = true,
) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!shouldTrack || !ref.current) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry) {
        setIntersecting(entry.isIntersecting);
      }
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, shouldTrack]);

  return isIntersecting;
}
