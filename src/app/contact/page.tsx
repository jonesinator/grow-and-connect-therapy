import type { Metadata } from "next";
import { FC } from "react";
import { Resend } from "resend";
import { z } from "zod";

import MainHeader from "@components/main-header";
import SlideHeader from "@components/slide-header";

export const EmailProps = z.object({
  email: z.string().email(),
  message: z.string(),
});

const Email: FC<z.infer<typeof EmailProps>> = (props) => (
  <div>
    <h1>Initial Contact</h1>
    <p>From: {props.email}</p>
    <p>Message: {props.message}</p>
  </div>
);

export const metadata: Metadata = {
  title: "Contact",
};

export default function Page() {
  async function sendEmail(formData: FormData) {
    "use server";

    const parsedFormData = EmailProps.safeParse({
      email: formData.get("email"),
      message: formData.get("message"),
    });

    if (!parsedFormData.success) {
      return {
        errors: parsedFormData.error.flatten().fieldErrors,
      };
    }

    const resend = new Resend(process.env["RESEND_API_KEY"]);
    const response = await resend.emails.send({
      from: "Incoming <jamie@growandconnecttherapy.com>",
      to: ["Jamie Thompson <jamie@growandconnecttherapy.com>"],
      subject: "Testing Email",
      react: Email(parsedFormData.data),
    });

    if (response.error) {
      return {
        errors: response.error,
      };
    }

    return {
      success: true,
    };
  }

  return (
    <MainHeader>
      <SlideHeader>
        <h1>Contact</h1>
        <h2>Contact</h2>
        <h3>Contact</h3>
        <h4>Contact</h4>
        <h5>Contact</h5>
        <h6>Contact</h6>
        <p className="theme-text-large">How about that?</p>
        <p>How about that?</p>
        <p className="theme-text-label">How about that?</p>
        {/* This seems to work in next.js, but eslint complans... */}
        {/* eslint-disable-next-line */}
        <form action={sendEmail}>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" />
          <label htmlFor="messager">Message:</label>
          <input type="text" id="message" name="message" />
          <button type="submit">Submit</button>
        </form>
      </SlideHeader>
    </MainHeader>
  );
}
