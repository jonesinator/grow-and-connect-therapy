import type { Metadata } from "next";
import Link from "next/link";
import {
  DocumentArrowUpIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

import SlideHeader from "@components/slide-header";
import ArrowButton from "@components/arrow-button";

export const metadata: Metadata = {
  title: "Pricing",
};

export default function Pricing() {
  return (
    <>
      <div className="py-20 w-full"></div>
      <div className="overflow-hidden text-center w-full h-full pb-4">
        <SlideHeader>
          <h1>Pricing for Services</h1>
        </SlideHeader>
        <p className="theme-text-label mt-8">
          I'm currently accepting new clients.
        </p>
      </div>
      <div className="mx-auto max-w-[100em] py-10 px-4">
        <div className="flex flex-col md:flex-row">
          <div className="basis-1/3 mx-3 rounded-2xl border border-theme-black bg-background-muddy py-4 mb-6 md:mb-0 flex flex-col">
            <div className="flex flex-row place-items-center gap-6 pt-4">
              <UserIcon className="size-8 ml-6" />
              <div className="flex flex-col">
                <h2 className="theme-text-h6 pr-6">Individual Therapy</h2>
              </div>
            </div>
            <div className="my-4 mx-6 py-8 border-y border-theme-black">
              <p className="theme-text-h3 mb-2">$165</p>
              <p>per session</p>
            </div>
            <p className="mx-6 grow">
              Individual sessions are 45 minutes long (CPT code 90834), ongoing
              scheduling offered at end of intake appointment.
            </p>
            <div className="mt-8 mb-4 mx-4">
              <Link href="/contact">
                <ArrowButton className="w-full">Schedule Now</ArrowButton>
              </Link>
            </div>
          </div>
          <div className="basis-1/3 mx-3 rounded-2xl border border-theme-black bg-background-muddy py-4 mb-6 md:mb-0 flex flex-col">
            <div className="flex flex-row place-items-center gap-6 pt-4">
              <UsersIcon className="size-8 ml-6" />
              <div className="flex flex-col">
                <h2 className="theme-text-h6 pr-6">
                  Couples / Relationship Therapy
                </h2>
              </div>
            </div>
            <div className="my-4 mx-6 py-8 border-y border-theme-black">
              <p className="theme-text-h3 mb-2">$200</p>
              <p>per session</p>
            </div>
            <p className="mx-6 grow">
              60 minute sessions (CPT codes 90846 or 90847), ongoing scheduling
              offered at end of intake appointment, longer appointments
              available if needed.
            </p>
            <div className="mt-8 mb-4 mx-4">
              <Link href="/contact">
                <ArrowButton className="w-full">Schedule Now</ArrowButton>
              </Link>
            </div>
          </div>
          <div className="basis-1/3 mx-3 rounded-2xl border border-theme-black bg-background-muddy py-4 mb-6 md:mb-0 flex flex-col">
            <div className="flex flex-row place-items-center gap-6 pt-4">
              <DocumentArrowUpIcon className="size-8 ml-6" />
              <div className="flex flex-col">
                <h2 className="theme-text-h6 pr-6">Intake Session</h2>
              </div>
            </div>
            <div className="my-4 mx-6 py-8 border-y border-theme-black">
              <p className="theme-text-h3 mb-2">$200</p>
              <p>per session</p>
            </div>
            <p className="mx-6 grow">
              60 minute session (CPT code 90791), same for individual or
              couples/relationship therapy.
            </p>
            <div className="mt-8 mb-4 mx-4">
              <Link href="/contact">
                <ArrowButton className="w-full">Schedule Now</ArrowButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-8 mb-10 md:mx-auto py-6 border-y border-theme-white max-w-[60em]">
        <p className="theme-text-label text-justify">
          Please note that I am out of network for all insurance providers. This
          means that I do not accept your insurance, but I will provide you with
          super bills that you can use to seek reimbursement from your insurance
          provider. Further note that if you are covered under Colorado
          Medicaid, I cannot see you even as an out of network provider.
        </p>
      </div>
      <div className="mx-auto max-w-[55em] mb-10 px-4 text-justify">
        <h2 className="text-center mb-4">Good Faith Estimate</h2>
        <p className="mb-2">
          Under Section 2799B-6 of the Public Health Service Act, health care
          providers and health care facilities are required to inform
          individuals who are not enrolled in a plan or coverage or a Federal
          health care program, or not seeking to file a claim with their plan or
          coverage both orally and in writing of their ability, upon request or
          at the time of scheduling health care items and services, to receive a
          “Good Faith Estimate” of expected charges.
        </p>
        <p className="mb-2">
          You have the right to receive a “Good Faith Estimate” explaining how
          much your medical care will cost.
        </p>
        <p className="mb-2">
          Under the law, health care providers need to give patients who don’t
          have insurance or who are not using insurance an estimate of the bill
          for medical items and services.
        </p>
        <p className="mb-2">
          You have the right to receive a Good Faith Estimate for the total
          expected cost of any non-emergency items or services. This includes
          related costs like medical tests, prescription drugs, equipment, and
          hospital fees.
        </p>
        <p className="mb-2">
          Make sure your health care provider gives you a Good Faith Estimate in
          writing at least 1 business day before your medical service or item.
          You can also ask your health care provider, and any other provider you
          choose, for a Good Faith Estimate before you schedule an item or
          service.
        </p>
        <p className="mb-2">
          If you receive a bill that is at least $400 more than your Good Faith
          Estimate, you can dispute the bill.
        </p>
        <p className="mb-2">
          Make sure to save a copy or picture of your Good Faith Estimate. For
          questions or more information about your right to a Good Faith
          Estimate, visit&nbsp;
          <Link className="underline" href="https://www.cms.gov/nosurprises">
            https://www.cms.gov/nosurprises
          </Link>
          .
        </p>
      </div>
    </>
  );
}
