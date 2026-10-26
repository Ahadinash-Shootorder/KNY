"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface RoomHeroProps {
  breadcrumb: string;
  title: string;
  description: string;
  onOpenBooking: () => void;
}

export default function RoomHero({
  breadcrumb,
  title,
  description,
  onOpenBooking,
}: RoomHeroProps) {
  return (
    <section className="relative w-full h-[540px] sm:h-[600px] bg-slate-900 flex flex-col justify-between overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt={title}
          fill
          className="object-cover object-center lg:object-[center_right]"
          priority
          sizes="100vw"
        />
        {/* Figma Exact Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 md:via-white/85 md:w-[70%] lg:w-[62%] to-transparent" />
        <div className="absolute inset-0 bg-white/40 md:hidden" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-20 pt-8 sm:pt-10 flex-1 flex flex-col justify-between">
        {/* Breadcrumbs */}
        <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-normal font-['Inter']">
          <Link href="/" className="text-stone-500 hover:text-stone-800 transition-colors">
            HOME
          </Link>
          <span className="text-stone-400">/</span>
          <span className="text-stone-900 font-medium tracking-wide">{breadcrumb}</span>
        </div>

        {/* Hero Copy */}
        <div className="max-w-[690px] flex flex-col items-start gap-4 sm:gap-6 py-6">
          <span className="text-stone-900 text-sm font-semibold font-['Inter'] tracking-wider uppercase">
            YOUR SPACE AT KNY
          </span>

          <h1 className="text-stone-900 text-4xl sm:text-5xl lg:text-6xl font-medium font-crimson leading-[1.15] lg:leading-[74.24px] tracking-tight">
            {title}
          </h1>

          <p className="max-w-[565px] text-neutral-700 text-base sm:text-lg lg:text-xl font-normal font-['Inter'] leading-relaxed sm:leading-9">
            {description}
          </p>

          <div className="pt-1">
            <button
              onClick={onOpenBooking}
              className="h-12 px-6 bg-lime-400 hover:bg-lime-500 rounded-full shadow-[0px_8px_20px_0px_rgba(0,0,0,0.08)] inline-flex items-center gap-4 sm:gap-5 text-stone-900 text-sm font-semibold font-['Inter'] transition-all duration-200 transform hover:-translate-y-0.5 group"
            >
              <span>ENQUIRE ABOUT YOUR STAY</span>
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

        {/* Bottom Sub-bar */}
        <div className="py-4 border-t border-stone-200/70 flex justify-between items-center text-xs sm:text-sm font-normal text-stone-900 font-['Inter']">
          <span className="tracking-wider uppercase">
            KNY SERVICE APARTMENTS / HYDERABAD
          </span>
        </div>
      </div>
    </section>
  );
}
