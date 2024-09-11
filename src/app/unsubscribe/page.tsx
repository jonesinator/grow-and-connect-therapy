import type { Metadata } from "next";
import UnsubscribeForm from "./form";

export const metadata: Metadata = {
  title: "Unsubscribe",
};

export default function Unsubscribe() {
  return <UnsubscribeForm />;
}
