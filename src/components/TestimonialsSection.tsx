"use client";

import React from "react";
import Image from "next/image";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Everything was Awesome",
    author: "Devdatta",
    role: "Verified Guest",
  },
  {
    id: "2",
    quote: "Stay was very comfortable",
    author: "Bhavik Joshi",
    role: "Business Traveller",
  },
  {
    id: "3",
    quote: "Everything is excellent, very good service.",
    author: "Dhiraj",
    role: "Long-term Resident",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#F5F6F0] py-16 sm:py-20 lg:py-24 border-t border-stone-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16">
          <div className="max-w-[850px] flex flex-col items-start gap-3 sm:gap-4">
            <span className="text-stone-900 text-sm sm:text-base font-semibold tracking-wider uppercase">
              TESTIMONIALS
            </span>
            <h2 className="text-stone-900 text-3xl sm:text-4xl lg:text-5xl font-medium font-crimson leading-tight lg:leading-[60.32px] tracking-tight">
              What our clients say
            </h2>
          </div>

          <a
            href="https://www.google.com/maps/search/KNY+Service+Apartments+Hyderabad"
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 sm:h-12 px-6 rounded-full border border-neutral-700 hover:border-stone-950 hover:bg-white inline-flex items-center gap-4 text-stone-900 text-sm font-semibold transition-all duration-200 w-fit group"
          >
            <span>VIEW ALL REVIEWS</span>
            <Image
              src="/icons/arrow-up-right.svg"
              alt="arrow"
              width={14}
              height={14}
              className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-11">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white/80 md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none shadow-sm md:shadow-none flex flex-col items-start gap-4 sm:gap-5"
            >
              {/* Decorative Lime Quote Mark (Playfair Display) */}
              <div className="text-lime-400 text-5xl sm:text-6xl font-normal font-['Playfair_Display',serif] leading-none select-none">
                “
              </div>

              {/* Review Statement */}
              <p className="text-stone-900 text-2xl sm:text-3xl font-normal font-crimson leading-snug sm:leading-10 min-h-[60px] sm:min-h-[80px]">
                {item.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-2 pt-2 border-t border-stone-200/80 w-full">
                <span className="text-stone-900 text-sm font-medium font-['Inter',sans-serif]">
                  {item.author}
                </span>
                <span className="text-stone-400 text-xs">• {item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
