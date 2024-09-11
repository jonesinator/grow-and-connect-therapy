"use server";

import type { FC } from "react";
import { Resend } from "resend";
import { z } from "zod";

const EmailProps = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  message: z.string(),
  acknowledgement: z.string(),
});

export type SendEmailResponse = {
  success: boolean;
  error?: string;
} | null;

export async function sendEmail(
  _prevState: unknown,
  formData: FormData,
): Promise<SendEmailResponse> {
  const parsedFormData = EmailProps.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!parsedFormData.success) {
    return { success: false, error: parsedFormData.error.toString() };
  }

  const Email: FC<z.infer<typeof EmailProps>> = (props) => (
    <div>
      <h1>Initial Contact</h1>
      <p>Name: {props.name}</p>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
      <p>Message: {props.message}</p>
      <p>Acknowledgement: {props.acknowledgement}</p>
    </div>
  );

  try {
    const resend = new Resend(process.env["RESEND_API_KEY"]);
    const response = await resend.emails.send({
      from: "Contact Form <jamie@growandconnecttherapy.com>",
      to: ["Jamie Thompson <jamie@growandconnecttherapy.com>"],
      subject: "growandconnecttherapy.com contact form submission",
      react: Email(parsedFormData.data),
    });

    if (response.error) {
      return { success: false, error: response.error.message };
    } else {
      return { success: true };
    }
  } catch (err) {
    if (err instanceof Error) {
      return { success: false, error: err.message };
    } else {
      return { success: false, error: "Unknown error" };
    }
  }
}
