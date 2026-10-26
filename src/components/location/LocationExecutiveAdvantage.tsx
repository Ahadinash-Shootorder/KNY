"use client";

import React from "react";
import Image from "next/image";

export default function LocationExecutiveAdvantage() {
  return (
    <div className="w-full bg-stone-100 flex flex-col justify-start items-center overflow-hidden border-b border-stone-200">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 lg:px-20 py-16 sm:py-20 lg:py-24 flex flex-col justify-start items-center gap-12">
        {/* Header Block */}
        <div className="w-full max-w-4xl pt-1.5 flex flex-col justify-start items-center gap-2.5 text-center">
          <div className="justify-start text-stone-900 text-sm font-semibold font-['Inter'] uppercase tracking-wider">
            THE EXECUTIVE ADVANTAGE
          </div>
          <div className="flex flex-col justify-start items-center">
            <h2 className="text-stone-900 text-3xl sm:text-4xl lg:text-5xl font-medium font-crimson leading-tight lg:leading-[60.32px] sm:whitespace-nowrap">
              Designed for Prolonged Stays
            </h2>
          </div>
          <div className="self-stretch pt-1.5 flex flex-col justify-start items-center">
            <p className="text-center text-stone-500 text-sm sm:text-base font-normal font-['Inter'] leading-relaxed sm:leading-7">
              Why corporate expatriates and business leaders favor White Fields over hotel rows.
            </p>
          </div>
        </div>

        {/* 3 Horizontal Cards (Figma exact markup) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Zero Commute Fatigue */}
          <div className="flex-1 p-6 sm:p-8 relative bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-stone-300/30 inline-flex flex-col justify-between items-start gap-7 shadow-[0px_12px_30px_-10px_rgba(26,28,26,0.04)] hover:shadow-md transition-shadow">
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <div className="size-12 py-3 bg-lime-500/20 rounded-2xl inline-flex justify-center items-center">
                <div className="text-center justify-center text-lime-800 text-base font-bold font-jakarta leading-6">
                  01
                </div>
              </div>
              <div className="self-stretch pt-3 flex flex-col justify-start items-start">
                <h3 className="self-stretch justify-center text-zinc-900 text-2xl font-semibold font-crimson leading-7">
                  Zero Commute Fatigue
                </h3>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <p className="self-stretch justify-center text-stone-600 text-sm font-normal font-['Inter'] leading-5">
                  Avoid hours caught in Cyberabad gridlock. Walk comfortably to meetings at Google or Tech Mahindra and preserve your focus for what truly matters.
                </p>
              </div>
            </div>
            <div className="self-stretch pt-6 sm:pt-8 flex flex-col justify-start items-start">
              <div className="self-stretch pt-4 border-t border-gray-200 inline-flex justify-start items-center gap-2">
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
                  <div className="justify-center text-lime-800 text-sm sm:text-base font-semibold font-jakarta leading-4">
                    100% Pedestrian Access
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Peaceful White Fields Sanctuary */}
          <div className="flex-1 p-6 sm:p-8 relative bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-stone-300/30 inline-flex flex-col justify-between items-start gap-7 shadow-[0px_12px_30px_-10px_rgba(26,28,26,0.04)] hover:shadow-md transition-shadow">
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <div className="size-12 py-3 bg-stone-200 rounded-2xl inline-flex justify-center items-center">
                <div className="text-center justify-center text-zinc-900 text-base font-bold font-jakarta leading-6">
                  02
                </div>
              </div>
              <div className="self-stretch pt-3 flex flex-col justify-start items-start">
                <h3 className="self-stretch justify-center text-zinc-900 text-2xl font-semibold font-crimson leading-7">
                  Peaceful White Fields<br className="hidden sm:block" />Sanctuary
                </h3>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <p className="self-stretch justify-center text-stone-600 text-sm font-normal font-['Inter'] leading-5">
                  Set within a secluded, leafy residential neighborhood just 200m off the high-energy main road. Enjoy restful nights free from street traffic horns.
                </p>
              </div>
            </div>
            <div className="self-stretch pt-6 sm:pt-8 flex flex-col justify-start items-start">
              <div className="self-stretch pt-4 border-t border-gray-200 inline-flex justify-start items-center gap-2">
                <div className="inline-flex flex-col justify-start items-start">
                  <Image
                    src="/images/Rooms-Dropdown.svg"
                    alt="Residential"
                    width={14}
                    height={10}
                    className="w-3.5 h-2.5 object-contain"
                  />
                </div>
                <div className="inline-flex flex-col justify-start items-start">
                  <div className="justify-center text-stone-600 text-sm sm:text-base font-semibold font-jakarta leading-4">
                    Quiet Residential Quietude
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Chauffeur & Airport Dispatch */}
          <div className="flex-1 p-6 sm:p-8 relative bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-stone-300/30 inline-flex flex-col justify-between items-start gap-7 shadow-[0px_12px_30px_-10px_rgba(26,28,26,0.04)] hover:shadow-md transition-shadow">
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <div className="size-12 py-3 bg-stone-200 rounded-2xl inline-flex justify-center items-center">
                <div className="text-center justify-center text-zinc-900 text-base font-bold font-jakarta leading-6">
                  03
                </div>
              </div>
              <div className="self-stretch pt-3 flex flex-col justify-start items-start">
                <h3 className="self-stretch justify-center text-zinc-900 text-2xl font-semibold font-crimson leading-7">
                  Chauffeur &amp; Airport<br className="hidden sm:block" />Dispatch
                </h3>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <p className="self-stretch justify-center text-stone-600 text-sm font-normal font-['Inter'] leading-5">
                  Seamless door-to-terminal travel. Our front desk coordinates punctual, vetted airport transfers via the Outer Ring Road (ORR) around the clock.
                </p>
              </div>
            </div>
            <div className="self-stretch pt-6 sm:pt-8 flex flex-col justify-start items-start">
              <div className="self-stretch pt-4 border-t border-gray-200 inline-flex justify-start items-center gap-2">
                <div className="inline-flex flex-col justify-start items-start">
                  <Image
                    src="/icons/location-icons/Icon-6.svg"
                    alt="Airport"
                    width={14}
                    height={14}
                    className="size-3.5 object-contain"
                  />
                </div>
                <div className="inline-flex flex-col justify-start items-start">
                  <div className="justify-center text-stone-600 text-sm sm:text-base font-semibold font-jakarta leading-4">
                    Direct ORR Connectivity
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
