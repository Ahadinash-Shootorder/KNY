"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative w-full min-h-[680px] lg:h-[740px] bg-slate-900 flex flex-col justify-between overflow-hidden">
      {/* Background Image: exactly 1440x740 aspect ratio & position */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="KNY Service Apartments Luxury Suite"
          fill
          className="object-cover object-center lg:object-[center_right]"
          priority
          sizes="100vw"
        />
        {/* Figma Exact Gradient Overlay: from white/95 via white/90 (42%) to white/0 */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 md:via-white/85 md:w-[70%] lg:w-[62%] to-transparent" />
        <div className="absolute inset-0 bg-white/40 md:hidden" />
      </div>

      {/* Main Content Area: Strictly wrapped within max-w-[1440px] container */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-20 pt-12 sm:pt-20 lg:pt-24 flex-1 flex flex-col justify-center">
        <div className="max-w-[690px] flex flex-col items-start gap-5 sm:gap-6">
          <h1 className="text-stone-900 text-4xl sm:text-5xl lg:text-6xl font-medium font-crimson leading-[1.15] lg:leading-[74.24px] tracking-tight">
            KNY Service Apartments
          </h1>

          <p className="max-w-[580px] text-neutral-700 text-base sm:text-lg lg:text-xl font-normal leading-relaxed sm:leading-8 lg:leading-9 font-['Inter',sans-serif]">
            Service apartments in the center of the business city. Spacious 2 &amp; 3 BHK suites in HITECH City, designed for comfort and convenience.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              href="#rooms"
              className="h-12 px-7 bg-lime-400 hover:bg-lime-500 rounded-full shadow-[0px_8px_20px_0px_rgba(0,0,0,0.08)] inline-flex items-center gap-3.5 text-stone-900 text-sm font-semibold transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>EXPLORE OUR ROOMS</span>
              <Image
                src="/icons/arrow-up-right.svg"
                alt="arrow"
                width={14}
                height={14}
                className="w-3.5 h-3.5"
              />
            </Link>

            <button
              onClick={onOpenBooking}
              className="h-12 px-6 rounded-full border border-stone-800 hover:bg-stone-900 hover:text-white text-stone-900 text-sm font-semibold transition-colors duration-200 sm:hidden"
            >
              BOOK NOW
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-10 sm:mt-14 lg:mt-16 inline-flex flex-wrap items-center gap-6 sm:gap-10 lg:gap-12 py-3 bg-white/70 backdrop-blur-sm sm:bg-transparent rounded-2xl px-4 sm:px-0 w-fit">
          <div className="flex flex-col items-start">
            <div className="text-stone-900 text-2xl sm:text-3xl font-bold font-crimson">
              2 &amp; 3
            </div>
            <div className="text-neutral-700 text-xs sm:text-sm font-normal tracking-wide">
              BHK SUITES
            </div>
          </div>

          <div className="w-px h-8 sm:h-9 bg-stone-300 sm:bg-stone-200" />

          <div className="flex flex-col items-start">
            <div className="text-stone-900 text-2xl sm:text-3xl font-bold font-crimson">
              120
            </div>
            <div className="text-neutral-700 text-xs sm:text-sm font-normal tracking-wide">
              ROOMS
            </div>
          </div>

          <div className="w-px h-8 sm:h-9 bg-stone-300 sm:bg-stone-200" />

          <div className="flex flex-col items-start">
            <div className="text-stone-900 text-2xl sm:text-3xl font-bold font-crimson">
              24/7
            </div>
            <div className="text-neutral-700 text-xs sm:text-sm font-normal tracking-wide">
              HELP DESK
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-bar */}
      <div className="relative z-10 w-full border-t border-stone-200/60 bg-white/40 backdrop-blur-sm sm:bg-transparent">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-3.5 flex justify-between items-center text-xs sm:text-sm font-normal text-stone-900">
          <div className="tracking-wider uppercase">
            KNY SERVICE APARTMENTS / HYDERABAD
          </div>
          <Link
            href="#about"
            className="flex items-center gap-2 hover:text-stone-600 transition-colors group cursor-pointer"
          >
            <span>DISCOVER KNY</span>
            <Image
              src="/icons/arrow-down.svg"
              alt="Scroll down"
              width={16}
              height={16}
              className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
