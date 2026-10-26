"use client";

import React from "react";
import Image from "next/image";

export default function LocationNeighborhood() {
  const cards = [
    {
      id: "serai",
      badge: "In-House Dining",
      image: "/images/neighborhood-dining.png",
      title: "Serai Kitchen & Cafes",
      description:
        "Fresh artisanal breakfasts and rich South Indian culinary selections served right on-site.",
      location: "On-Site",
      distance: "In-Hotel",
    },
    {
      id: "sarath",
      badge: "Shopping",
      image: "/images/neighborhood-shopping.png",
      title: "Sarath City Capital Mall",
      description:
        "India’s largest shopping center featuring international fashion brands, IMAX, and entertainment.",
      location: "Kondapur",
      distance: "2.1 km · 6 min",
    },
    {
      id: "shilparamam",
      badge: "Art & Crafts",
      image: "/images/neighborhood-art.png",
      title: "Shilparamam Village",
      description:
        "Artisan pavilions, authentic handlooms, traditional terracotta, and open-air classical concerts.",
      location: "HITEC City",
      distance: "2.2 km · 7 min",
    },
    {
      id: "durgam",
      badge: "Heritage & Lakes",
      image: "/images/neighborhood-heritage.png",
      title: "Durgam Cheruvu & Fort",
      description:
        "Scenic cable-stayed bridge, waterfront dining promenades, and historic Golconda ramparts nearby.",
      location: "HITEC Lakefront",
      distance: "4.2 km · 12 min",
    },
  ];

  return (
    <div className="w-full bg-stone-100 flex flex-col justify-start items-center overflow-hidden border-b border-stone-200">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 lg:px-20 py-16 sm:py-20 lg:py-24 flex flex-col justify-start items-start gap-12">
        {/* Header Row */}
        <div className="self-stretch flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <div className="max-w-[672px] pt-1.5 inline-flex flex-col justify-start items-start gap-2.5">
            <div className="justify-start text-stone-900 text-sm font-semibold font-['Inter'] uppercase tracking-wider">
              AROUND THE NEIGHBORHOOD
            </div>
            <div className="flex flex-col justify-start items-start">
              <h2 className="justify-start text-stone-900 text-3xl sm:text-4xl lg:text-5xl font-medium font-crimson leading-tight lg:leading-[60.32px]">
                Culture, Retail &amp; Gastronomy
              </h2>
            </div>
          </div>
          <div className="pt-1.5 inline-flex flex-col justify-start items-start">
            <p className="justify-start text-stone-500 text-sm sm:text-base font-normal font-['Inter'] leading-relaxed sm:leading-7 max-w-xl">
              From India’s premier retail mall to authentic Hyderabadi culinary<br className="hidden sm:block" />
              hubs, experience vibrant leisure minutes from your suite.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid (Figma exact markup) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-1 bg-white rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-stone-300/40 inline-flex flex-col justify-start items-start overflow-hidden hover:shadow-md transition-shadow group"
            >
              {/* Image & Badge */}
              <div className="self-stretch h-44 relative flex flex-col justify-center items-start overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                />
                <div className="px-2.5 py-0.5 left-[12px] top-[12px] absolute bg-white/90 rounded-full backdrop-blur-md flex flex-col justify-start items-start shadow-sm">
                  <div className="justify-center text-zinc-900 text-xs sm:text-sm font-bold font-jakarta leading-4">
                    {card.badge}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="self-stretch p-5 flex flex-col justify-between flex-1 gap-4">
                <div className="flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <h3 className="self-stretch justify-center text-zinc-900 text-2xl font-semibold font-crimson leading-7">
                      {card.title}
                    </h3>
                  </div>
                  <div className="self-stretch pb-1 flex flex-col justify-start items-start">
                    <p className="self-stretch justify-center text-stone-600 text-sm font-normal font-['Inter'] leading-5">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="self-stretch pt-3 border-t border-gray-200 inline-flex justify-between items-center">
                  <div className="justify-center text-stone-600 text-xs sm:text-sm font-normal font-jakarta leading-4">
                    {card.location}
                  </div>
                  <div className="justify-center text-lime-800 text-xs sm:text-sm font-bold font-jakarta leading-4">
                    {card.distance}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
