"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-white relative scroll-mt-20">
      <div id="location" className="absolute -top-24" />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 pt-16 sm:pt-24 lg:pt-28 pb-12 sm:pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-24">
          {/* Left Column: Image with Location Badge */}
          <div className="w-full lg:w-[568px] flex-shrink-0">
            <div className="relative w-full h-[360px] sm:h-[460px] lg:h-[520px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/about-living.jpg"
                alt="KNY Service Apartments Living Lounge"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 568px"
              />

              {/* Location Badge */}
              <div className="absolute left-4 sm:left-6 bottom-4 sm:bottom-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-full shadow-[0px_6px_18px_0px_rgba(0,0,0,0.07)] border border-neutral-300 inline-flex items-center gap-2">
                <Image
                  src="/icons/map-pin.svg"
                  alt="location pin"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                <span className="text-stone-900 text-xs sm:text-sm font-normal tracking-wide">
                  HITECH CITY, HYDERABAD
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Action */}
          <div className="flex-1 flex flex-col items-start gap-5 sm:gap-7">
            <div className="inline-flex items-center gap-3">
              <span className="text-stone-900 text-sm sm:text-base font-semibold tracking-wider uppercase">
                ABOUT KNY
              </span>
            </div>

            <h2 className="text-stone-900 text-3xl sm:text-5xl lg:text-6xl font-medium font-crimson leading-[1.15] lg:leading-[64.96px] tracking-tight">
              Service Apartments
            </h2>

            <p className="text-stone-500 text-base sm:text-xl lg:text-2xl font-normal leading-relaxed lg:leading-9">
              Strategically located in the center of business city, KNY is a well known service apartment in Hitech City area. Featuring an outdoor pool and private parking the property stands to be a well known place for business travellers. Services like outdoor pool, Gym, currency exchange.
            </p>

            <div className="pt-2">
              <Link
                href="#media"
                className="h-12 px-6 rounded-full border border-neutral-700 hover:border-stone-950 hover:bg-stone-50 inline-flex items-center gap-5 text-stone-900 text-sm font-semibold transition-all duration-200 group"
              >
                <span>KNOW MORE ABOUT US</span>
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
      </div>
    </section>
  );
}
