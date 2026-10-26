"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AboutRoomsProps {
  onOpenBooking: (roomType?: string) => void;
}

export default function AboutRooms({ onOpenBooking }: AboutRoomsProps) {
  return (
    <section id="rooms" className="w-full bg-[#F5F6F0] py-16 sm:py-20 lg:py-24 border-y border-stone-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 flex flex-col gap-10 sm:gap-12">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-[680px] flex flex-col items-start gap-3 sm:gap-4">
            <span className="text-stone-900 text-sm font-semibold font-['Inter'] tracking-wider uppercase">
              ROOM CHOICES
            </span>
            <h2 className="max-w-[588px] text-stone-900 text-3xl sm:text-4xl lg:text-5xl font-medium font-crimson leading-tight lg:leading-[60.32px] tracking-tight">
              Choose the space that fits your stay
            </h2>
          </div>

          <p className="max-w-xl text-stone-500 text-sm sm:text-base font-normal font-['Inter'] leading-relaxed sm:leading-7">
            From short visits to longer stays, KNY offers 2 BHK and 3 BHK serviced apartments with the comfort of apartment-style living.
          </p>
        </div>

        {/* 2 Room Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Card 1: 2 Bedroom Apartment */}
          <div className="flex flex-col gap-5 sm:gap-6 group">
            <Link
              href="/rooms/2-bedroom"
              className="relative w-full h-[280px] sm:h-[340px] lg:h-[384px] rounded-2xl overflow-hidden shadow-md block cursor-pointer"
            >
              <Image
                src="/images/room-2bhk.jpg"
                alt="2 Bedroom Apartment"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 624px"
              />
              <div className="absolute left-4 sm:left-6 top-4 sm:top-6 bg-white rounded-full outline outline-1 outline-offset-[-1px] outline-neutral-300 px-4 py-1.5 sm:py-2 shadow-sm">
                <span className="text-stone-900 text-sm sm:text-base font-normal font-['Inter']">
                  2 BHK
                </span>
              </div>
            </Link>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-4">
              <Link
                href="/rooms/2-bedroom"
                className="flex-1 text-stone-900 text-2xl sm:text-3xl lg:text-4xl font-normal font-crimson leading-tight sm:leading-10 hover:text-lime-700 transition-colors"
              >
                2 Bedroom Apartment
              </Link>
              <div className="flex sm:flex-col items-baseline sm:items-end gap-2 sm:gap-1">
                <div className="text-stone-900 text-2xl sm:text-3xl font-medium font-crimson">
                  INR 12500
                </div>
                <div className="text-stone-500 text-xs sm:text-sm font-normal font-['Inter'] line-through">
                  INR 14750
                </div>
              </div>
            </div>

            <div className="pt-1 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenBooking("2 Bedroom Apartment")}
                className="h-12 px-6 bg-lime-400 hover:bg-lime-500 text-stone-900 text-sm font-semibold font-['Inter'] rounded-full shadow-[0px_8px_20px_0px_rgba(0,0,0,0.08)] inline-flex items-center gap-5 transition-all duration-200 transform hover:-translate-y-0.5 group/btn"
              >
                <span>BOOK YOUR STAY</span>
                <Image
                  src="/icons/arrow-up-right.svg"
                  alt="arrow"
                  width={14}
                  height={14}
                  className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                />
              </button>

              <Link
                href="/rooms/2-bedroom"
                className="h-12 px-5 rounded-full border border-stone-300 hover:border-stone-900 text-stone-800 text-xs sm:text-sm font-semibold font-['Inter'] inline-flex items-center gap-2 transition-colors"
              >
                <span>EXPLORE DETAILS</span>
              </Link>
            </div>
          </div>

          {/* Card 2: 3 Bedroom Apartment */}
          <div className="flex flex-col gap-5 sm:gap-6 group">
            <Link
              href="/rooms/3-bedroom"
              className="relative w-full h-[280px] sm:h-[340px] lg:h-[384px] rounded-2xl overflow-hidden shadow-md block cursor-pointer"
            >
              <Image
                src="/images/room-3bhk.jpg"
                alt="3 Bedroom Apartment"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 624px"
              />
              <div className="absolute left-4 sm:left-6 top-4 sm:top-6 bg-white rounded-full outline outline-1 outline-offset-[-1px] outline-neutral-300 px-4 py-1.5 sm:py-2 shadow-sm">
                <span className="text-stone-900 text-sm sm:text-base font-normal font-['Inter']">
                  3 BHK
                </span>
              </div>
            </Link>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-4">
              <Link
                href="/rooms/3-bedroom"
                className="flex-1 text-stone-900 text-2xl sm:text-3xl lg:text-4xl font-normal font-crimson leading-tight sm:leading-10 hover:text-lime-700 transition-colors"
              >
                3 Bedroom Apartment
              </Link>
              <div className="flex sm:flex-col items-baseline sm:items-end gap-2 sm:gap-1">
                <div className="text-stone-900 text-2xl sm:text-3xl font-medium font-crimson">
                  INR 15000
                </div>
                <div className="text-stone-500 text-xs sm:text-sm font-normal font-['Inter'] line-through">
                  INR 17550
                </div>
              </div>
            </div>

            <div className="pt-1 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenBooking("3 Bedroom Apartment")}
                className="h-12 px-6 bg-lime-400 hover:bg-lime-500 text-stone-900 text-sm font-semibold font-['Inter'] rounded-full shadow-[0px_8px_20px_0px_rgba(0,0,0,0.08)] inline-flex items-center gap-5 transition-all duration-200 transform hover:-translate-y-0.5 group/btn"
              >
                <span>BUY YOUR STAY</span>
                <Image
                  src="/icons/arrow-up-right.svg"
                  alt="arrow"
                  width={14}
                  height={14}
                  className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                />
              </button>

              <Link
                href="/rooms/3-bedroom"
                className="h-12 px-5 rounded-full border border-stone-300 hover:border-stone-900 text-stone-800 text-xs sm:text-sm font-semibold font-['Inter'] inline-flex items-center gap-2 transition-colors"
              >
                <span>EXPLORE DETAILS</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
