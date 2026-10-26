"use client";

import React from "react";
import Image from "next/image";

interface CustomBannerProps {
  onOpenBooking: () => void;
  tag?: string;
  headline?: string;
  subtext?: string;
}

export default function CustomBanner({
  onOpenBooking,
  tag = "LET’S PLAN YOUR STAY",
  headline = "Have any custom requirements?",
  subtext,
}: CustomBannerProps) {
  return (
    <section className="w-full bg-lime-400 border-y border-stone-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-10 sm:py-14">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8">
          <div className="max-w-[880px] flex flex-col items-start gap-2.5 sm:gap-3">
            <span className="text-stone-900 text-sm sm:text-base font-semibold tracking-wider uppercase font-['Inter',sans-serif]">
              {tag}
            </span>
            <h2 className="text-stone-900 text-3xl sm:text-4xl lg:text-5xl font-medium font-crimson leading-tight lg:leading-[48.72px] tracking-tight">
              {headline}
            </h2>
            {subtext && (
              <p className="text-neutral-800 text-sm sm:text-base font-normal font-['Inter',sans-serif] leading-relaxed">
                {subtext}
              </p>
            )}
          </div>

          <button
            onClick={onOpenBooking}
            className="h-12 px-6 bg-white hover:bg-stone-50 rounded-full shadow-[0px_6px_18px_0px_rgba(0,0,0,0.07)] border border-neutral-300 inline-flex items-center gap-4 sm:gap-5 text-stone-900 text-sm font-semibold transition-all duration-200 transform hover:-translate-y-0.5 whitespace-nowrap group"
          >
            <span>GET A FREE QUOTE</span>
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
    </section>
  );
}
