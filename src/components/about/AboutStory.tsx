"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutStory() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 flex flex-col gap-12 sm:gap-16">
        {/* Top Split: Image + Story Copy */}
        <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-24">
          {/* Left Column: Living Image */}
          <div className="w-full lg:w-[568px] flex-shrink-0">
            <div className="relative w-full h-[360px] sm:h-[460px] lg:h-[520px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/about-living.jpg"
                alt="Room to live. Space to feel at home."
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 568px"
              />
            </div>
          </div>

          {/* Right Column: Copy */}
          <div className="flex-1 flex flex-col items-start gap-5 sm:gap-6">
            <span className="text-stone-900 text-sm font-semibold font-['Inter'] tracking-wider uppercase">
              ABOUT KNY
            </span>

            <h2 className="text-stone-900 text-3xl sm:text-4xl lg:text-5xl font-medium font-crimson leading-tight lg:leading-[60.32px] tracking-tight">
              Room to live.
              <br />
              Space to feel at home.
            </h2>

            <p className="text-stone-500 text-base sm:text-lg lg:text-xl font-normal font-['Inter'] leading-relaxed lg:leading-9">
              KNY Service Apartments offers spacious 2 BHK and 3 BHK serviced apartments in HITECH City, Hyderabad. Designed for business travel, short visits and longer stays, KNY combines the comfort of apartment-style living with a professionally managed stay.
            </p>

            <p className="text-stone-500 text-base sm:text-lg lg:text-xl font-normal font-['Inter'] leading-relaxed lg:leading-9">
              Strategically located in Hyderabad’s business district, KNY is a comfortable base for business travellers. Choose a 2 BHK or 3 BHK apartment to suit your stay, with a 24/7 help desk for support.
            </p>

            <div className="pt-2">
              <Link
                href="#rooms"
                className="h-12 px-6 rounded-full border border-neutral-700 hover:border-stone-950 hover:bg-stone-50 inline-flex items-center gap-5 text-stone-900 text-sm font-semibold transition-all duration-200 group"
              >
                <span>EXPLORE OUR ROOMS</span>
                <Image
                  src="/icons/arrow-up-right.svg"
                  alt="arrow"
                  width={14}
                  height={14}
                  className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="pt-10 border-t border-stone-200 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Stat 1 */}
          <div className="flex items-center gap-6">
            <div className="text-stone-900 text-4xl sm:text-5xl font-medium font-crimson flex-shrink-0">
              2 &amp; 3
            </div>
            <div className="flex flex-col items-start gap-1">
              <div className="text-stone-900 text-sm font-semibold font-['Inter'] tracking-wider">
                BHK APARTMENTS
              </div>
              <div className="text-stone-500 text-xs sm:text-sm font-normal font-['Inter'] leading-5">
                Space for your everyday routine
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-6">
            <div className="text-stone-900 text-4xl sm:text-5xl font-medium font-crimson flex-shrink-0">
              120
            </div>
            <div className="flex flex-col items-start gap-1">
              <div className="text-stone-900 text-sm font-semibold font-['Inter'] tracking-wider">
                ROOMS
              </div>
              <div className="text-stone-500 text-xs sm:text-sm font-normal font-['Inter'] leading-5">
                A comfortable place to settle in
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-6">
            <div className="text-stone-900 text-4xl sm:text-5xl font-medium font-crimson flex-shrink-0">
              24/7
            </div>
            <div className="flex flex-col items-start gap-1">
              <div className="text-stone-900 text-sm font-semibold font-['Inter'] tracking-wider">
                HELP DESK
              </div>
              <div className="text-stone-500 text-xs sm:text-sm font-normal font-['Inter'] leading-5">
                Support throughout your stay
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
