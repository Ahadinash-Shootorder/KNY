"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface RoomsSectionProps {
  onOpenBooking: (roomType?: string) => void;
}

export default function RoomsSection({ onOpenBooking }: RoomsSectionProps) {
  const rooms = [
    {
      id: "3bhk",
      title: "3 Bedroom Apartment",
      type: "PREMIUM",
      price: "INR 15,000/-",
      originalPrice: "INR 17550",
      ctaText: "BUY YOUR STAY",
      image: "/images/room-3bhk.jpg",
      description:
        "Expansive 3 BHK serviced suite with master ensuite, contemporary living lounge, modular kitchenette, and panoramic balcony view.",
    },
    {
      id: "2bhk",
      title: "2 Bedroom Apartment",
      type: "PREMIUM",
      price: "INR 12,500/-",
      originalPrice: "INR 14750",
      ctaText: "BOOK YOUR STAY",
      image: "/images/room-2bhk.jpg",
      description:
        "Comfortable 2 BHK executive suite crafted for corporate travellers and families seeking central connectivity in HITECH City.",
    },
  ];

  return (
    <section id="rooms" className="w-full bg-[#F5F6F0] border-y border-stone-200 py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 sm:pb-14">
          <div className="max-w-[800px] flex flex-col items-start gap-3 sm:gap-4">
            <span className="text-stone-900 text-sm sm:text-base font-semibold tracking-wider uppercase">
              PREMIUM ROOMS
            </span>
            <h2 className="text-stone-900 text-3xl sm:text-4xl lg:text-5xl font-medium font-crimson leading-tight lg:leading-[60.32px] tracking-tight">
              Find Your Comfort Apartment
            </h2>
          </div>

          <button
            onClick={() => onOpenBooking()}
            className="h-11 sm:h-12 px-6 rounded-full border border-neutral-700 hover:border-stone-950 hover:bg-white inline-flex items-center gap-4 text-stone-900 text-sm font-semibold transition-all duration-200 w-fit group"
          >
            <span>ALL ROOMS</span>
            <Image
              src="/icons/arrow-up-right.svg"
              alt="arrow"
              width={14}
              height={14}
              className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </button>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {rooms.map((room) => {
            const roomHref = room.id === "3bhk" ? "/rooms/3-bedroom" : "/rooms/2-bedroom";
            return (
              <div
                key={room.id}
                className="flex flex-col gap-5 sm:gap-6 group"
              >
                {/* Image Container with Badge */}
                <Link
                  href={roomHref}
                  className="relative w-full h-[280px] sm:h-[340px] lg:h-[384px] rounded-2xl overflow-hidden shadow-md block cursor-pointer"
                >
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 624px"
                  />

                  {/* Badge */}
                  <div className="absolute left-4 sm:left-6 top-4 sm:top-6 bg-white/95 backdrop-blur-sm px-4 py-1.5 sm:py-2 rounded-full shadow-[0px_6px_18px_0px_rgba(0,0,0,0.07)] border border-neutral-300">
                    <span className="text-stone-900 text-xs sm:text-sm font-medium tracking-wider">
                      {room.type}
                    </span>
                  </div>
                </Link>

                {/* Title & Price Row */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-4">
                  <Link
                    href={roomHref}
                    className="text-stone-900 text-2xl sm:text-3xl lg:text-4xl font-normal font-crimson tracking-tight hover:text-lime-700 transition-colors"
                  >
                    {room.title}
                  </Link>

                  <div className="flex sm:flex-col items-baseline sm:items-end gap-2 sm:gap-1">
                    <div className="text-stone-900 text-2xl sm:text-3xl font-medium font-crimson">
                      {room.price}
                    </div>
                    <div className="text-stone-500 text-xs sm:text-sm font-normal line-through">
                      {room.originalPrice}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-1 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenBooking(room.title)}
                    className="h-12 px-6 sm:px-7 bg-lime-400 hover:bg-lime-500 text-stone-900 text-sm font-semibold rounded-full shadow-[0px_8px_20px_0px_rgba(0,0,0,0.08)] inline-flex items-center gap-4 transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    <span>{room.ctaText}</span>
                    <Image
                      src="/icons/arrow-up-right.svg"
                      alt="arrow"
                      width={14}
                      height={14}
                      className="w-3.5 h-3.5"
                    />
                  </button>

                  <Link
                    href={roomHref}
                    className="h-12 px-5 rounded-full border border-stone-300 hover:border-stone-900 text-stone-800 text-xs sm:text-sm font-semibold font-['Inter'] inline-flex items-center gap-2 transition-colors"
                  >
                    <span>EXPLORE DETAILS</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
