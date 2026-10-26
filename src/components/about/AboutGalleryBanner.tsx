"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function AboutGalleryBanner() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <section id="gallery" className="w-full bg-[#F5F6F0] py-16 sm:py-20 lg:py-24 border-y border-stone-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 flex flex-col gap-10 sm:gap-12">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-[680px] flex flex-col items-start gap-3 sm:gap-4">
            <span className="text-stone-900 text-sm font-semibold font-['Inter'] tracking-wider uppercase">
              PHOTO GALLERY
            </span>
            <h2 className="max-w-[588px] text-stone-900 text-3xl sm:text-4xl lg:text-5xl font-medium font-crimson leading-tight lg:leading-[60.32px] tracking-tight">
              Explore the spaces and details
            </h2>
          </div>

          <p className="max-w-xl text-stone-500 text-sm sm:text-base font-normal font-['Inter'] leading-relaxed sm:leading-7">
            Browse a curated selection of apartment interiors, amenities, and common areas to get a better sense of your stay.
          </p>
        </div>

        {/* Full-width Photo Card */}
        <div className="w-full flex flex-col gap-6 group">
          <div
            onClick={() => setIsLightboxOpen(true)}
            className="relative w-full h-[320px] sm:h-[420px] lg:h-[460px] rounded-2xl overflow-hidden shadow-md cursor-pointer"
          >
            <Image
              src="/images/media-closer-look.jpg"
              alt="Explore the spaces and details"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute left-4 sm:left-6 top-4 sm:top-6 bg-white rounded-full outline outline-1 outline-offset-[-1px] outline-neutral-300 px-4 py-2 shadow-sm">
              <span className="text-stone-900 text-sm sm:text-base font-normal font-['Inter']">
                PHOTO GALLERY
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-stone-900 text-2xl sm:text-3xl lg:text-4xl font-normal font-crimson leading-tight sm:leading-10">
                Photo Gallery
              </h3>
              <p className="text-stone-500 text-sm font-normal font-['Inter']">
                Explore all photos
              </p>
            </div>

            <button
              onClick={() => setIsLightboxOpen(true)}
              className="h-12 px-6 bg-lime-400 hover:bg-lime-500 text-stone-900 text-sm font-semibold font-['Inter'] rounded-full shadow-[0px_8px_20px_0px_rgba(0,0,0,0.08)] inline-flex items-center gap-5 transition-all duration-200 transform hover:-translate-y-0.5 group/btn"
            >
              <span>VIEW GALLERY</span>
              <Image
                src="/icons/arrow-up-right.svg"
                alt="arrow"
                width={14}
                height={14}
                className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative max-w-5xl max-h-[85vh] w-full h-[650px]">
            <Image
              src="/images/media-closer-look.jpg"
              alt="Photo Gallery"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setIsLightboxOpen(false)}
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
