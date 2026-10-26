"use client";

import React from "react";
import Image from "next/image";

interface AmenityDetail {
  title: string;
  image: string;
  description: string;
}

const amenitiesData: AmenityDetail[] = [
  {
    title: "Outdoor pool",
    image: "/images/amenity-pool.jpg",
    description: "Make a little time to slow down and unwind.",
  },
  {
    title: "Private Parking",
    image: "/images/amenity-parking.jpg",
    description: "A convenient place to park during your stay.",
  },
  {
    title: "Gym",
    image: "/images/amenity-gym.jpg",
    description: "Keep your fitness routine part of your day.",
  },
  {
    title: "Currency Exchange",
    image: "/images/amenity-currency.jpg",
    description: "An added convenience when travelling.",
  },
];

export default function AboutAmenities() {
  return (
    <section className="w-full bg-[#F5F6F0] py-16 sm:py-20 lg:py-24 border-b border-stone-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 flex flex-col gap-12 sm:gap-16">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-[680px] flex flex-col items-start gap-3 sm:gap-4">
            <span className="text-stone-900 text-sm font-semibold font-['Inter'] tracking-wider uppercase">
              THE EVERYDAY, MADE EASIER
            </span>
            <h2 className="text-stone-900 text-3xl sm:text-4xl lg:text-5xl font-medium font-crimson leading-tight lg:leading-[60.32px] tracking-tight">
              Comfort beyond your apartment
            </h2>
          </div>

          <p className="max-w-xl text-stone-500 text-sm sm:text-base font-normal font-['Inter'] leading-relaxed sm:leading-7">
            A swim, a workout, or help when you need it. Thoughtful conveniences to complement your stay.
          </p>
        </div>

        {/* 4 Circular Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 justify-items-center">
          {amenitiesData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4 group cursor-pointer"
            >
              <div className="relative size-44 sm:size-48 lg:size-52 rounded-full overflow-hidden shadow-md border-2 border-white transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 180px, (max-width: 1024px) 200px, 210px"
                />
              </div>

              <div className="text-stone-900 text-lg sm:text-xl font-medium font-['Inter']">
                {item.title}
              </div>

              <div className="max-w-[260px] text-stone-500 text-sm sm:text-base font-normal font-['Inter'] leading-6">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
