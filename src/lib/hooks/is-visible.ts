import { useEffect, useState, type MutableRefObject } from "react";

export function useIsVisible(
  ref: MutableRefObject<Element | null>,
  margin = "0",
  shouldTrack = true,
) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!shouldTrack || !ref.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) {
          setIntersecting(entry.isIntersecting);
        }
      },
      { rootMargin: margin },
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, shouldTrack]);

  return isIntersecting;
}
