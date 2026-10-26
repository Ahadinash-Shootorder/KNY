"use client";

import React from "react";
import Image from "next/image";

interface Amenity {
  title: string;
  image: string;
  description: string;
}

const amenities: Amenity[] = [
  {
    title: "Outdoor pool",
    image: "/images/amenity-pool.jpg",
    description: "Relaxing temperature-controlled open air pool",
  },
  {
    title: "Private Parking",
    image: "/images/amenity-parking.jpg",
    description: "Dedicated and secure 24/7 on-site parking",
  },
  {
    title: "Gym",
    image: "/images/amenity-gym.jpg",
    description: "Fully equipped modern fitness center",
  },
  {
    title: "Currency Exchange",
    image: "/images/amenity-currency.jpg",
    description: "Convenient on-desk international currency support",
  },
];

export default function AmenitiesSection() {
  return (
    <section className="w-full bg-white pb-20 sm:pb-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
        <div className="flex flex-col items-center gap-10 sm:gap-14">
          <h2 className="text-center text-stone-900 text-3xl sm:text-4xl lg:text-5xl font-medium font-crimson leading-tight lg:leading-[60.32px]">
            Amenities
          </h2>

          {/* Grid of 4 circular amenities */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 justify-items-center">
            {amenities.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-4 group cursor-pointer"
              >
                <div className="relative size-36 sm:size-44 lg:size-52 rounded-full overflow-hidden shadow-md border-2 border-stone-100 transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 150px, (max-width: 1024px) 180px, 210px"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                <div className="text-stone-900 text-lg sm:text-xl lg:text-2xl font-medium font-['IBM_Plex_Sans',sans-serif] tracking-tight group-hover:text-lime-700 transition-colors">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
