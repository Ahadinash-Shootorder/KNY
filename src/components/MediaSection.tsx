"use client";

import React, { useState } from "react";
import Image from "next/image";

interface MediaItem {
  id: string;
  category: string;
  title: string;
  image: string;
}

export default function MediaSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const rightCards: MediaItem[] = [
    {
      id: "master",
      category: "PROPERTY FEATURES",
      title: "Master Bedroom",
      image: "/images/media-master-bedroom.png",
    },
    {
      id: "twin",
      category: "PROPERTY FEATURES",
      title: "Twin Room",
      image: "/images/media-twin-room.jpg",
    },
    {
      id: "living",
      category: "PROPERTY FEATURES",
      title: "Living Room",
      image: "/images/media-living-room.png",
    },
    {
      id: "detail",
      category: "PROPERTY FEATURES",
      title: "Property Detail",
      image: "/images/about-living.jpg",
    },
  ];

  return (
    <section id="media" className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3 sm:gap-4 pb-10 sm:pb-12">
          <span className="text-stone-900 text-sm sm:text-base font-semibold tracking-wider uppercase">
            IMAGES
          </span>
          <h2 className="text-stone-900 text-3xl sm:text-4xl lg:text-5xl font-medium font-crimson leading-tight lg:leading-[60.32px] tracking-tight">
            Media
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {/* Left Large Card */}
          <div
            onClick={() => setSelectedImage("/images/media-closer-look.jpg")}
            className="w-full h-[460px] sm:h-[540px] lg:h-[618px] bg-white rounded-3xl border border-stone-300 flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
          >
            {/* Header portion */}
            <div className="p-6 sm:p-10 lg:pl-12 lg:pr-9 lg:pt-12 lg:pb-10 flex flex-col items-start gap-3 bg-white z-20">
              <span className="text-neutral-500 text-xs sm:text-sm font-medium tracking-[4px] uppercase font-['Inter',sans-serif]">
                KNY PROPERTY
              </span>
              <h3 className="text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-normal font-crimson leading-tight lg:leading-[49.50px]">
                A closer look at KNY
              </h3>
              <div className="w-16 h-0.5 bg-lime-400 mt-1" />
            </div>

            {/* Image Area with Top Fade */}
            <div className="relative flex-1 w-full overflow-hidden">
              <Image
                src="/images/media-closer-look.jpg"
                alt="A closer look at KNY"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 616px"
              />
              <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
            </div>
          </div>

          {/* Right 2x2 Grid of Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-3 lg:gap-3.5">
            {rightCards.map((card) => (
              <div
                key={card.id}
                onClick={() => setSelectedImage(card.image)}
                className="h-[260px] sm:h-[280px] lg:h-[298px] bg-white rounded-3xl border border-stone-300 flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                {/* Text header */}
                <div className="px-4 pt-5 pb-3 sm:px-5 sm:pt-6 sm:pb-3.5 flex flex-col items-center text-center gap-1.5 sm:gap-2 bg-white z-20">
                  <span className="text-neutral-500 text-[11px] sm:text-xs font-medium tracking-[3.6px] uppercase font-['Inter',sans-serif]">
                    {card.category}
                  </span>
                  <h4 className="text-zinc-900 text-xl sm:text-2xl font-normal font-crimson">
                    {card.title}
                  </h4>
                  <div className="w-14 sm:w-16 h-0.5 bg-lime-400" />
                </div>

                {/* Photo area */}
                <div className="relative flex-1 w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 300px"
                  />
                  <div className="absolute top-0 inset-x-0 h-16 sm:h-20 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] w-full h-[600px]">
            <Image
              src={selectedImage}
              alt="Preview"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-lime-400 font-bold text-xl px-3 py-1"
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
