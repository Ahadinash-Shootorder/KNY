"use client";

import React from "react";
import Image from "next/image";

interface AboutLocationProps {
  bgClass?: string;
  showEmail?: boolean;
}

export default function AboutLocation({
  bgClass = "bg-white",
  showEmail = true,
}: AboutLocationProps) {
  return (
    <section id="location" className={`w-full ${bgClass} py-16 sm:py-20 lg:py-24`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-24">
          {/* Left Column: Address & Details */}
          <div className="flex-1 flex flex-col items-start gap-6">
            <span className="text-stone-900 text-sm font-semibold font-['Inter'] tracking-wider uppercase">
              AT HOME IN HYDERABAD
            </span>

            <h2 className="text-stone-900 text-3xl sm:text-4xl lg:text-5xl font-medium font-crimson leading-tight lg:leading-[60.32px] tracking-tight">
              A comfortable base
              <br />
              in HITECH City
            </h2>

            <p className="text-stone-500 text-base sm:text-lg lg:text-xl font-normal font-['Inter'] leading-relaxed lg:leading-9">
              Find KNY in Kothaguda, Kondapur, near the Google office and adjacent to Vijetha Super Market. A practical base for business travel, short visits and longer stays.
            </p>

            <div className="self-stretch pt-6 border-t border-stone-200 flex flex-col items-start gap-3">
              <span className="text-stone-900 text-sm font-semibold font-['Inter'] tracking-wider uppercase">
                FIND US
              </span>
              <p className="text-stone-500 text-sm sm:text-base font-normal font-['Inter'] leading-relaxed sm:leading-7">
                Temple square apartment, sreebagh colony, adjacent to vijetha super market, near google office, kothaguda, kondapur, Hyderabad- 500084., Hyderabad, 500084, India
              </p>
              {showEmail && (
                <a
                  href="mailto:reservations@knystay.com"
                  className="text-stone-900 text-sm sm:text-base font-normal font-['Inter'] hover:text-lime-700 transition-colors"
                >
                  reservations@knystay.com
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Facade Image */}
          <div className="w-full lg:w-[568px] flex flex-col gap-4">
            <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[440px] rounded-2xl overflow-hidden shadow-md group">
              <Image
                src="/images/room-3bhk.jpg"
                alt="KNY Service Apartments Courtyard"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 568px"
              />
            </div>
            <div className="flex justify-between items-center text-xs sm:text-sm text-stone-900 font-['Inter'] px-1">
              <span className="font-medium tracking-wide">KNY SERVICE APARTMENTS</span>
              <span className="text-stone-500">Kondapur, Hyderabad</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
