"use client";

import React from "react";
import Image from "next/image";

interface RoomFeaturesSplitProps {
  roomTag: string;
  headline?: string;
  description: string;
  bhkLabel: string;
  image: string;
  onOpenBooking: () => void;
}

export default function RoomFeaturesSplit({
  roomTag,
  headline = "Room to live.\nSpace to feel at home.",
  description,
  bhkLabel,
  image,
  onOpenBooking,
}: RoomFeaturesSplitProps) {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          {/* Left Column: Copy & Actions */}
          <div className="w-full lg:w-[680px] flex flex-col justify-start items-start gap-8 sm:gap-10">
            <div className="flex flex-col items-start gap-4">
              <span className="text-stone-900 text-xs font-semibold font-['Inter'] uppercase tracking-wider">
                {roomTag}
              </span>

              <h2 className="text-stone-900 text-4xl sm:text-5xl lg:text-7xl font-normal font-crimson leading-tight lg:leading-[71.40px] tracking-tight">
                Room to live.
                <br />
                Space to feel at home.
              </h2>

              <p className="text-stone-500 text-sm sm:text-base font-normal font-['Inter'] leading-relaxed sm:leading-6 pt-2">
                {description}
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="h-12 px-6 bg-lime-400 hover:bg-lime-500 rounded-full inline-flex items-center gap-3 shadow-[0px_8px_20px_0px_rgba(0,0,0,0.08)] transition-all duration-200 transform hover:-translate-y-0.5 group"
                >
                  <span className="text-stone-900 text-xs font-bold font-['Inter'] uppercase tracking-wider">
                    SEND BOOKING ENQUIRY
                  </span>
                  <Image
                    src="/icons/arrow-up-right.svg"
                    alt="arrow"
                    width={14}
                    height={14}
                    className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </button>
              </div>
            </div>

            {/* Feature Badges with exact SVGs */}
            <div className="w-full pt-7 border-t border-stone-200 grid grid-cols-3 gap-4 sm:gap-6">
              {/* Feature 1: BHK */}
              <div className="flex flex-col items-start gap-1.5">
                <div className="size-6 relative flex items-center justify-start">
                  <Image
                    src="/images/Rooms-Dropdown.svg"
                    alt="BHK icon"
                    width={20}
                    height={14}
                    className="object-contain"
                  />
                </div>
                <div className="text-stone-900 text-xl sm:text-2xl font-normal font-crimson">
                  {bhkLabel}
                </div>
                <div className="text-stone-500 text-xs font-normal font-['Inter']">
                  Apartment living
                </div>
              </div>

              {/* Feature 2: Short & Long */}
              <div className="flex flex-col items-start gap-1.5">
                <div className="size-6 relative flex items-center justify-start">
                  <Image
                    src="/images/calendar.svg"
                    alt="Calendar icon"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
                <div className="text-stone-900 text-xl sm:text-2xl font-normal font-crimson">
                  Short &amp; long
                </div>
                <div className="text-stone-500 text-xs font-normal font-['Inter']">
                  Stays to suit you
                </div>
              </div>

              {/* Feature 3: 24/7 Help Desk */}
              <div className="flex flex-col items-start gap-1.5">
                <div className="size-6 relative flex items-center justify-start">
                  <Image
                    src="/images/headphones.svg"
                    alt="Headphones icon"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
                <div className="text-stone-900 text-xl sm:text-2xl font-normal font-crimson">
                  24/7
                </div>
                <div className="text-stone-500 text-xs font-normal font-['Inter']">
                  Help Desk
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Room Image */}
          <div className="w-full lg:w-[588px] flex-shrink-0">
            <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[620px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src={image}
                alt="Room Interior"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 588px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
