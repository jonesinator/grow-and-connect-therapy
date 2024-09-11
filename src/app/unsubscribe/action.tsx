"use server";

import { Resend } from "resend";
import { z } from "zod";

const UnsubscribeProps = z.object({
  email: z.string().email(),
});

export type UnsubscribeResponse = {
  success: boolean;
  email?: string;
  error?: string;
} | null;

export async function unsubscribe(
  _prevState: unknown,
  formData: FormData,
): Promise<UnsubscribeResponse> {
  const parsedFormData = UnsubscribeProps.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!parsedFormData.success) {
    return { success: false, error: parsedFormData.error.toString() };
  }

  try {
    const resend = new Resend(process.env["RESEND_API_KEY"]);

    const list_response = await resend.contacts.list({
      audienceId: "d269f2b7-61cc-466c-b330-9fc9deec867a",
    });

    if (list_response.error || list_response.data === null) {
      console.log("LIST ERROR: ", list_response.error);
      return { success: false, error: "Unable to unsubscribe." };
    }

    for (const contact of list_response.data.data) {
      if (
        parsedFormData.data.email.toLowerCase() === contact.email.toLowerCase()
      ) {
        console.log("FOUND EMAIL");
        const update_response = await resend.contacts.update({
          id: contact.id,
          audienceId: "d269f2b7-61cc-466c-b330-9fc9deec867a",
          unsubscribed: true,
        });

        if (update_response.error) {
          console.log("UPDATE ERROR: ", update_response.error);
          return { success: false, error: "Unable to unsubscribe." };
        } else {
          console.log("UNSUBSCRIBED");
        }

        break;
      }
    }

    return { success: true, email: parsedFormData.data.email };
  } catch (err) {
    if (err instanceof Error) {
      return { success: false, error: err.message };
    } else {
      return { success: false, error: "Unknown error" };
    }
  }
}
