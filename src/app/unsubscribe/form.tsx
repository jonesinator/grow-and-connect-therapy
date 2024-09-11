"use client";

import { useSearchParams } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";

import ArrowButton from "@components/arrow-button";

import { unsubscribe, type UnsubscribeResponse } from "./action";
import { createRef, useEffect, useRef } from "react";

function FormButton({ state }: { state: UnsubscribeResponse }) {
  const { pending: unsubscribePending } = useFormStatus();
  const done = unsubscribePending || state !== null;

  return (
    <>
      <button type="submit" className="my-2" disabled={done}>
        <ArrowButton
          className={unsubscribePending ? "animate-pulse" : ""}
          variant={done ? "disabled" : "default"}
        >
          {unsubscribePending
            ? "Unsubscribing..."
            : state === null
              ? "Unsubscribe"
              : state.success
                ? `Unsubscribed ${state.email ?? "?"}`
                : "Error Unsubscribing 😭"}
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

export default function UnsubscribeForm() {
  const autoSubmit = useRef(false);
  const [unsubscribeState, unsubscribeAction] = useFormState(unsubscribe, null);
  const searchParams = useSearchParams();
  const emailParam = searchParams.get("email");
  const formRef = createRef<HTMLFormElement>();

  if (emailParam) {
    useEffect(() => {
      if (!autoSubmit.current) {
        autoSubmit.current = true;
        formRef.current?.requestSubmit();
      }
    }, []);
  }

  return (
    <>
      <div className="py-16 w-full"></div>
      <div className="py-10 px-4 mx-auto max-w-[100em] text-center">
        <h2 className="theme-text-h4">Unsubscribe</h2>
        <p>Sorry to see you go! Resubscribe any time!</p>
        {/* eslint-disable-next-line */}
        <form ref={formRef} action={unsubscribeAction}>
          <input
            required
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="bg-transparent border border-theme-black rounded-2xl p-3 my-2 placeholder:text-theme-black placeholder:focus:text-theme-white w-96"
            defaultValue={emailParam !== null ? emailParam : ""}
            hidden={unsubscribeState !== null}
          />
          <br />
          <FormButton state={unsubscribeState} />
        </form>
      </div>
    </>
  );
}
