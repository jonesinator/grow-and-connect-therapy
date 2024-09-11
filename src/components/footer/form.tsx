"use client";

import Image, { type StaticImageData } from "next/image";
import { useFormState, useFormStatus } from "react-dom";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

import { subscribe, type SubscribeResponse } from "./action";

import spinner from "./images/spinner.svg";

function FormButton({ state }: { state: SubscribeResponse }) {
  const { pending: subscribePending } = useFormStatus();
  const done = subscribePending || state !== null;

  return (
    <>
      <button type="submit" disabled={done}>
        {subscribePending ? (
          <Image
            src={spinner as StaticImageData}
            alt="spinner"
            className="ml-[-1em] w-8 h-8"
          />
        ) : state === null ? (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-label=""
            className="w-3.5 h-3.5 ml-[-1em]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        ) : (
          <CheckCircleIcon className="size-8 ml-[-1em] w-6 h-6" />
        )}
      </button>
    </>
  );

  /*
    {subscribePending
      ? "Unsubscribing..."
      : state === null
        ? "Unsubscribe"
        : state.success
          ? `Unsubscribed`
          : "Error Unsubscribing 😭"}
          */
}

export default function SubscribeForm() {
  const [subscribeState, subscribeAction] = useFormState(subscribe, null);
  return (
    <>
      {/* eslint-disable-next-line */}
      <form action={subscribeAction} className="pt-4">
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="mr-[1em] bg-transparent placeholder:theme-text-regular placeholder:text-theme-black focus:outline-none focus:border-theme-white border-b border-black focus:placeholder:text-theme-white"
        />
        <FormButton state={subscribeState} />
      </form>
    </>
  );
}
