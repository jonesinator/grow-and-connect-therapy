import { type MutableRefObject, useEffect, useState } from "react";

import { useIsVisible } from "./is-visible";

export function useIsSeen(ref: MutableRefObject<Element | null>) {
  const [seen, setSeen] = useState(false);
  const isVisible = useIsVisible(ref, !seen);

  useEffect(() => {
    if (!seen && isVisible) {
      setSeen(true);
    }
  }, [isVisible]);

  return seen;
}
