import type { Metadata } from "next";
import ContactForm from "./form";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return <ContactForm />;
}
