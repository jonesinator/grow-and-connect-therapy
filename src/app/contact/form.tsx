"use client";

import {
  BuildingOffice2Icon,
  ClockIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";

import ArrowButton from "@components/arrow-button";
import SlideHeader from "@components/slide-header";

import { sendEmail, type SendEmailResponse } from "./action";

function FormButton({ state }: { state: SendEmailResponse }) {
  const { pending: sendEmailPending } = useFormStatus();
  const done = sendEmailPending || state !== null;

  return (
    <>
      <button
        type="submit"
        className="my-2"
        disabled={done}
        aria-label="Send Message"
      >
        <ArrowButton
          className={sendEmailPending ? "animate-pulse" : ""}
          variant={done ? "disabled" : "default"}
        >
          {sendEmailPending
            ? "Sending Message..."
            : state === null
              ? "Send Message"
              : state.success
                ? "Message Sent"
                : "Error Sending Message 😭"}
        </ArrowButton>
      </button>
      {state !== null && state.error !== undefined ? (
        <p className="text-yellow-400">{state.error}</p>
      ) : (
        ""
      )}
    </>
  );
}

export default function ContactForm() {
  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, null);
  const done = sendEmailState?.success === true;

  return (
    <>
      <div className="py-16 w-full"></div>
      <div className="py-10 px-4 flex mx-auto max-w-[100em] flex-col md:flex-row">
        <div className="flex flex-col gap-y-4 max-w-[30em] mx-4">
          <h1 className="theme-text-label">Contact</h1>
          <SlideHeader>
            <h2 className="theme-text-h1 py-8">Get In Touch</h2>
          </SlideHeader>
          <div className="flex flex-row place-items-center gap-6">
            <div className="p-4 rounded-full border border-theme-black bg-background-orange">
              <EnvelopeIcon className="size-8" />
            </div>
            <div className="flex flex-col gap-y-2">
              <h3 className="theme-text-regular">Email</h3>
              <Link
                className="underline"
                href="mailto:jamie@growandconnecttherapy.com"
              >
                jamie@growandconnecttherapy.com
              </Link>
            </div>
          </div>
          <div className="flex flex-row place-items-center gap-6">
            <div className="p-4 rounded-full border border-theme-black bg-background-orange">
              <PhoneIcon className="size-8" />
            </div>
            <div className="flex flex-col gap-y-2">
              <h3 className="theme-text-regular">Phone</h3>
              <Link className="underline" href="tel:17205045388">
                (720) 504-5388
              </Link>
            </div>
          </div>
          <div className="flex flex-row place-items-center gap-6">
            <div className="p-4 rounded-full border border-theme-black bg-background-orange">
              <BuildingOffice2Icon className="size-8" />
            </div>
            <div className="flex flex-col gap-y-2">
              <h3 className="theme-text-regular">Location</h3>
              <p>Denver, Colorado</p>
            </div>
          </div>
          <div className="flex flex-row place-items-center gap-6">
            <div className="p-4 rounded-full border border-theme-black bg-background-orange">
              <ClockIcon className="size-8" />
            </div>
            <div className="flex flex-col gap-y-2">
              <h3 className="theme-text-regular">Hours</h3>
              <p>9-5 Monday through Thursday</p>
            </div>
          </div>
        </div>
        <div
          className={`mr-auto md:mr-0 md:ml-auto rounded-3xl border border-theme-black p-12 my-10 md:my-0 max-w-[50em] mx-4 ${done ? "hidden" : ""}`}
        >
          <h2 className="theme-text-h4 mb-8">Send me a message</h2>
          {/* eslint-disable-next-line */}
          <form action={sendEmailAction}>
            <input
              required
              type="text"
              id="name"
              name="name"
              placeholder="Name(s)"
              className="bg-transparent border border-theme-black rounded-2xl p-3 my-2 w-full placeholder:text-theme-black placeholder:focus:text-theme-white"
            />
            <input
              required
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              className="bg-transparent border border-theme-black rounded-2xl p-3 my-2 w-full placeholder:text-theme-black placeholder:focus:text-theme-white"
            />
            <input
              required
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="bg-transparent border border-theme-black rounded-2xl p-3 my-2 w-full placeholder:text-theme-black placeholder:focus:text-theme-white"
            />
            <textarea
              required
              id="message"
              name="message"
              placeholder="Message"
              className="bg-transparent border border-theme-black rounded-2xl p-3 my-2 w-full h-48 placeholder:text-theme-black placeholder:focus:text-theme-white"
            />
            <div className="w-full flex flex-row items-start my-2">
              <input
                required
                type="checkbox"
                className="mx-2 mt-1"
                id="acknowledgement"
                name="acknowledgement"
              />
              <label htmlFor="acknowledgement" className="text-justify">
                I understand that Grow and Connect Therapy is an out-of-network
                provider for all insurance companies. I also understand that if
                I am insured under Colorado Medicaid I am unable to be seen
                through Grow and Connect Therapy and will need to seek services
                from an in-network Medicaid provider.
              </label>
            </div>
            <FormButton state={sendEmailState} />
          </form>
        </div>
        <div
          className={`mr-auto md:mr-0 md:ml-auto rounded-3xl border border-theme-black p-12 my-10 md:my-0 max-w-[50em] w-full mx-4 ${done ? "" : "hidden"}`}
        >
          <h2 className="theme-text-h4 mb-8 w-full">Thanks!</h2>
          <p>I'll be in touch soon.</p>
        </div>
      </div>
    </>
  );
}
