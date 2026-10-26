"use client";

import React, { useState } from "react";
import Image from "next/image";

interface RoomGalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

const galleryItems: RoomGalleryItem[] = [
  {
    id: "master",
    title: "Master Bedroom",
    category: "KNY PROPERTY",
    image: "/images/media-master-bedroom.png",
  },
  {
    id: "twin",
    title: "Twin Room",
    category: "KNY PROPERTY",
    image: "/images/media-twin-room.jpg",
  },
  {
    id: "living",
    title: "Living Room",
    category: "KNY PROPERTY",
    image: "/images/media-living-room.png",
  },
];

export default function RoomGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="w-full bg-[#F5F6F0] py-16 sm:py-20 lg:py-24 border-y border-stone-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 flex flex-col gap-10 sm:gap-12">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-[680px] flex flex-col items-start gap-3 sm:gap-4">
            <span className="text-stone-900 text-sm font-semibold font-['Inter'] tracking-wider uppercase">
              PHOTO GALLERY
            </span>
            <h2 className="text-stone-900 text-3xl sm:text-4xl lg:text-5xl font-medium font-crimson leading-tight lg:leading-[60.32px] tracking-tight">
              A closer look at KNY
            </h2>
          </div>

          <p className="max-w-xl text-stone-500 text-sm sm:text-base font-normal font-['Inter'] leading-relaxed sm:leading-7">
            Explore bedroom and living spaces from our property gallery, and get a feel for life at KNY.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item.image)}
              className="flex flex-col gap-4 group cursor-pointer"
            >
              <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 405px"
                />
              </div>

              <div className="flex justify-between items-baseline px-1">
                <h3 className="text-stone-900 text-2xl sm:text-3xl font-normal font-crimson group-hover:text-lime-700 transition-colors">
                  {item.title}
                </h3>
                <span className="text-stone-500 text-xs font-normal font-['Inter'] tracking-wider">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] w-full h-[600px]">
            <Image
              src={selectedImage}
              alt="Gallery Preview"
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
