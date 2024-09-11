import type { Metadata } from "next";
import { Suspense } from "react";

import UnsubscribeForm from "./form";

export const metadata: Metadata = {
  title: "Unsubscribe",
};

export default function Unsubscribe() {
  return (
    <Suspense>
      <UnsubscribeForm />
    </Suspense>
  );
}
