"use client";

import React, { useState } from "react";
import Image from "next/image";

interface LocationHeroProps {
  onOpenBooking: () => void;
}

export default function LocationHero({ onOpenBooking }: LocationHeroProps) {
  const [copied, setCopied] = useState(false);

  const fullAddress =
    "2-91/58/Sr/105, Sy. No. 9, White Fields, Kondapur, HITEC City, Hyderabad, Telangana 500084, India";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="w-full relative bg-stone-100 overflow-hidden">
      {/* Background with Living Room and Figma Gradient Overlay */}
      <div className="w-full h-full left-0 top-0 absolute bg-white overflow-hidden pointer-events-none">
        <Image
          src="/images/hero-bg.jpg"
          alt="At Home in Hyderabad"
          fill
          className="w-full h-full object-cover object-center"
          priority
        />
        <div className="w-full h-full left-0 top-0 absolute bg-gradient-to-l from-neutral-300/50 via-white/80 to-white" />
      </div>

      {/* Main Figma Container: w-[1440px] h-[779px] px-20 py-24 */}
      <div className="w-full max-w-[1440px] min-h-[700px] lg:h-[779px] mx-auto px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-24 relative flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-24">
        {/* Left Column: w-[699px] */}
        <div className="w-full lg:w-[699px] inline-flex flex-col justify-start items-start gap-6">
          <div className="justify-start text-stone-900 text-sm font-semibold font-['Inter'] uppercase tracking-wider">
            AT HOME IN HYDERABAD
          </div>

          <h1 className="self-stretch justify-start text-stone-900 text-4xl sm:text-5xl lg:text-6xl font-medium font-crimson leading-tight lg:leading-[74.24px]">
            Stay Minutes from<br />Cyberabad’s Tech Corridor
          </h1>

          <p className="self-stretch justify-start text-stone-600 text-base sm:text-lg font-normal font-jakarta leading-7">
            Positioned directly within the serene residential pocket of White Fields in Kondapur, AtHome pairs tranquil apartment seclusion with effortless walking and road access to Hyderabad’s major tech campuses, hospitals, and convention centers.
          </p>

          {/* 3 Pills from Figma */}
          <div className="w-full flex flex-wrap items-center gap-3 pt-2">
            {/* Pill 1: 11 min to Tech Mahindra */}
            <div className="h-10 px-4 py-2.5 bg-white rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-stone-300/50 inline-flex justify-start items-center gap-2">
              <div className="inline-flex flex-col justify-start items-start">
                <Image
                  src="/icons/location-icons/Icon.svg"
                  alt="Walk"
                  width={10}
                  height={16}
                  className="w-2.5 h-4 object-contain"
                />
              </div>
              <div className="inline-flex flex-col justify-start items-start">
                <div className="justify-center">
                  <span className="text-zinc-900 text-sm font-bold font-jakarta leading-4">
                    11 min
                  </span>
                  <span className="text-zinc-900 text-sm font-medium font-jakarta leading-4">
                    {" "}to Tech Mahindra
                  </span>
                </div>
              </div>
            </div>

            {/* Pill 2: 2 min walk to Medicover */}
            <div className="h-10 px-4 py-2.5 bg-white rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-stone-300/50 inline-flex justify-start items-center gap-2">
              <div className="inline-flex flex-col justify-start items-start">
                <Image
                  src="/icons/location-icons/Icon-4.svg"
                  alt="Hospital"
                  width={14}
                  height={14}
                  className="size-3.5 object-contain"
                />
              </div>
              <div className="inline-flex flex-col justify-start items-start">
                <div className="justify-center">
                  <span className="text-zinc-900 text-sm font-bold font-jakarta leading-4">
                    2 min walk
                  </span>
                  <span className="text-zinc-900 text-sm font-medium font-jakarta leading-4">
                    {" "}to Medicover
                  </span>
                </div>
              </div>
            </div>

            {/* Pill 3: 40 min to RGIA via ORR */}
            <div className="h-10 px-4 py-2.5 bg-white rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-stone-300/50 inline-flex justify-start items-center gap-2">
              <div className="inline-flex flex-col justify-start items-start">
                <Image
                  src="/icons/location-icons/Icon-10.svg"
                  alt="Drive"
                  width={16}
                  height={10}
                  className="w-4 h-2.5 object-contain"
                />
              </div>
              <div className="inline-flex flex-col justify-start items-start">
                <div className="justify-center">
                  <span className="text-zinc-900 text-sm font-bold font-jakarta leading-4">
                    40 min
                  </span>
                  <span className="text-zinc-900 text-sm font-medium font-jakarta leading-4">
                    {" "}to RGIA via ORR
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Key Coordinates card (Exact Figma markup) */}
        <div className="w-full lg:w-[490px] flex-1 p-6 sm:p-8 relative bg-white rounded-3xl shadow-[0px_20px_40px_-16px_rgba(26,28,26,0.06)] outline outline-1 outline-offset-[-1px] outline-stone-300/40 inline-flex flex-col justify-start items-start overflow-hidden">
          {/* Header Row */}
          <div className="self-stretch pr-[0.01px] pb-6 border-b border-stone-200 inline-flex justify-between items-center">
            <div className="pt-1.5 inline-flex flex-col justify-start items-start gap-1">
              <div className="justify-center text-stone-600 text-[10px] font-bold font-jakarta uppercase leading-4 tracking-widest">
                LOCATION DISPATCH
              </div>
              <div className="justify-start text-stone-900 text-3xl sm:text-4xl font-normal font-crimson leading-10">
                Key Coordinates
              </div>
            </div>
            <div className="h-6 px-3 relative bg-neutral-200/50 rounded-full inline-flex items-center gap-2">
              <div className="size-1.5 bg-lime-500 rounded-full animate-pulse" />
              <div className="justify-center text-zinc-900 text-xs font-semibold font-jakarta leading-4">
                24/7 Front Desk
              </div>
            </div>
          </div>

          {/* Physical Address Block */}
          <div className="self-stretch pt-7 pb-6 border-b border-stone-200 flex flex-col justify-start items-start gap-2.5">
            <div className="justify-center text-stone-600 text-[10px] font-bold font-jakarta uppercase leading-4 tracking-wide">
              PHYSICAL PROPERTY ADDRESS
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch justify-start text-neutral-700 text-sm sm:text-base font-normal font-['Inter'] leading-6">
                2-91/58/Sr/105, Sy. No. 9, White Fields, Kondapur,<br />
                HITEC City, Hyderabad, Telangana 500084, India
              </div>
            </div>
            <button
              onClick={handleCopy}
              className="pt-0.5 inline-flex justify-start items-center gap-1.5 text-lime-800 hover:text-lime-900 transition-colors group cursor-pointer"
            >
              <div className="inline-flex flex-col justify-start items-center">
                <Image
                  src="/icons/location-icons/Icon-7.svg"
                  alt="Copy"
                  width={12}
                  height={14}
                  className="w-3 h-3.5 object-contain"
                />
              </div>
              <div className="inline-flex flex-col justify-start items-center">
                <div className="text-center justify-center text-lime-800 text-xs font-bold font-jakarta uppercase leading-4 tracking-wide">
                  {copied ? "ADDRESS COPIED!" : "COPY FULL ADDRESS"}
                </div>
              </div>
            </button>
          </div>

          {/* Contacts, GPS & Uber Box */}
          <div className="self-stretch pt-6 pb-6 flex flex-col justify-start items-start gap-3.5">
            {/* Front Desk & Concierge */}
            <div className="self-stretch pr-[0.01px] inline-flex justify-between items-center">
              <div className="inline-flex flex-col justify-start items-start">
                <div className="justify-center text-stone-600 text-xs font-medium font-jakarta leading-4">
                  Front Desk &amp; Concierge:
                </div>
              </div>
              <a
                href="tel:+919701006789"
                className="flex justify-start items-center gap-1 text-zinc-900 hover:text-lime-800 transition-colors"
              >
                <div className="inline-flex flex-col justify-start items-start">
                  <Image
                    src="/icons/location-icons/Icon-3.svg"
                    alt="Phone"
                    width={12}
                    height={12}
                    className="size-3 object-contain"
                  />
                </div>
                <div className="justify-center text-zinc-900 text-xs font-bold font-jakarta leading-4">
                  +91 97010 06789
                </div>
              </a>
            </div>

            {/* GPS Landmark */}
            <div className="self-stretch pr-[0.01px] inline-flex justify-between items-center">
              <div className="inline-flex flex-col justify-start items-start">
                <div className="justify-center text-stone-600 text-xs font-medium font-jakarta leading-4">
                  GPS Landmark:
                </div>
              </div>
              <div className="inline-flex flex-col justify-start items-start">
                <div className="justify-center text-zinc-900 text-xs font-normal font-mono leading-4">
                  17.4618° N, 78.3672° E
                </div>
              </div>
            </div>

            {/* Ola / Uber Note Box */}
            <div className="self-stretch p-3.5 bg-stone-100 rounded-2xl inline-flex justify-start items-start gap-2.5">
              <div className="pt-0.5 inline-flex flex-col justify-start items-start flex-shrink-0">
                <Image
                  src="/icons/location-icons/Icon-2.svg"
                  alt="Cab"
                  width={14}
                  height={14}
                  className="size-3.5 object-contain"
                />
              </div>
              <div className="text-stone-600 text-xs font-normal font-jakarta leading-4">
                <span>Ola / Uber destination: search </span>
                <span className="font-bold text-stone-800">
                  &quot;AtHome Hotel Kondapur White Fields&quot;
                </span>
                <span> for exact gate-drop precision.</span>
              </div>
            </div>
          </div>

          {/* Action Button: full card width matching Figma */}
          <button
            onClick={onOpenBooking}
            className="self-stretch w-full h-12 px-6 bg-lime-400 hover:bg-lime-500 rounded-full inline-flex justify-center items-center gap-3 overflow-hidden transition-all duration-200 transform hover:-translate-y-0.5 group cursor-pointer shadow-sm"
          >
            <span className="text-stone-900 text-sm font-semibold font-['Inter'] tracking-wide">
              ENQUIRE ABOUT YOUR STAY
            </span>
            <Image
              src="/icons/location-icons/Arrow.svg"
              alt="Arrow"
              width={14}
              height={14}
              className="w-3.5 h-3.5 object-contain group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </button>

          {/* Ambient Glow */}
          <div className="size-44 left-[372.32px] top-[-63px] absolute bg-lime-500/10 rounded-full blur-2xl pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
