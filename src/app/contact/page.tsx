import type { Metadata } from "next";
import type { FC } from "react";
import { Resend } from "resend";
import { z } from "zod";

import MainHeader from "@components/main-header";
import SlideHeader from "@components/slide-header";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Page() {
  async function sendEmail(formData: FormData) {
    "use server";

    const EmailProps = z.object({
      email: z.string().email(),
      message: z.string(),
    });

    const parsedFormData = EmailProps.parse(
      Object.fromEntries(formData.entries()),
    );

    const Email: FC<z.infer<typeof EmailProps>> = (props) => (
      <div>
        <h1>Initial Contact</h1>
        <p>From: {props.email}</p>
        <p>Message: {props.message}</p>
      </div>
    );

    const resend = new Resend(process.env["RESEND_API_KEY"]);
    const response = await resend.emails.send({
      from: "Incoming <jamie@growandconnecttherapy.com>",
      to: ["Jamie Thompson <jamie@growandconnecttherapy.com>"],
      subject: "Testing Email",
      react: Email(parsedFormData),
    });

    if (response.error) {
      return { errors: response.error };
    } else {
      return { success: true };
    }
  }

  return (
    <>
      <MainHeader>
        <SlideHeader>
          <h1>Contact</h1>
        </SlideHeader>
        {/* eslint-disable-next-line */}
        <form action={sendEmail}>
          <label htmlFor="email">Email:</label>
          <input required type="email" id="email" name="email" />
          <label htmlFor="messager">Message:</label>
          <input required type="text" id="message" name="message" />
          <button type="submit">Submit</button>
        </form>
      </MainHeader>
    </>
  );
}
