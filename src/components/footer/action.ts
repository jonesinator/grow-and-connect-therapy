"use server";

import { Resend } from "resend";
import { z } from "zod";

export type SubscribeResponse = {
  success: boolean;
  error?: string;
} | null;

export async function subscribe(
  _prevState: unknown,
  formData: FormData,
): Promise<SubscribeResponse> {
  const JoinNewsletterProps = z.object({ email: z.string().email() });
  const parsedFormData = JoinNewsletterProps.parse(
    Object.fromEntries(formData.entries()),
  );
  const resend = new Resend(process.env["RESEND_API_KEY"]);
  const response = await resend.contacts.create({
    email: parsedFormData.email,
    unsubscribed: false,
    audienceId: "d269f2b7-61cc-466c-b330-9fc9deec867a",
  });
  if (response.error || !response.data) {
    return { success: false, error: "Unable to subscribe." };
  } else {
    const response2 = await resend.contacts.update({
      id: response.data.id,
      unsubscribed: false,
      audienceId: "d269f2b7-61cc-466c-b330-9fc9deec867a",
    });
    if (response2.error) {
      return { success: false, error: "Unable to subscribe." };
    }
    return { success: true };
  }
}
