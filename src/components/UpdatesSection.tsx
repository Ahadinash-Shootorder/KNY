"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Article {
  id: string;
  image: string;
  date: string;
  title: string;
  excerpt: string;
}

const articles: Article[] = [
  {
    id: "1",
    image: "/images/media-living-room.png",
    date: "Oct 19th, 2026 10:02 AM",
    title:
      "KNY Serviced Apartments in Hyderabad provides an ideal solution for both short-term and long-term.",
    excerpt:
      "Whether you are visiting Hyderabad for a business conference, executive relocation, or a leisurely staycation with family.",
  },
  {
    id: "2",
    image: "/images/media-twin-room.jpg",
    date: "Oct 16th, 2026 10:01 AM",
    title:
      "KNY Service Apartments Professionally managed serviced apartments near Hitech City in Hyderabad.",
    excerpt:
      "Enjoy full hotel-style amenities with the supreme comfort, space, and privacy of home in prime Kondapur.",
  },
  {
    id: "3",
    image: "/images/news-3.png",
    date: "Oct 15th, 2026 10:05 AM",
    title: "We offer special economic packages to corporates...",
    excerpt:
      "Discover tailored corporate accommodation packages with customized billing, dedicated concierge, and meeting access.",
  },
];

export default function UpdatesSection() {
  return (
    <section id="updates" className="w-full bg-white py-16 sm:py-24 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 sm:pb-14">
          <div className="max-w-[830px] flex flex-col items-start gap-3 sm:gap-4">
            <span className="text-stone-900 text-sm sm:text-base font-semibold tracking-wider uppercase">
              STAY INFORMED
            </span>
            <h2 className="text-stone-900 text-3xl sm:text-4xl lg:text-5xl font-medium font-crimson leading-tight lg:leading-[60.32px] tracking-tight">
              Latest Updates
            </h2>
            <p className="text-stone-500 text-sm sm:text-base font-normal leading-relaxed sm:leading-7">
              News, milestones and new arrivals from our team.
            </p>
          </div>

          <Link
            href="#updates"
            className="h-11 sm:h-12 px-6 rounded-full border border-neutral-700 hover:border-stone-950 hover:bg-stone-50 inline-flex items-center gap-4 text-stone-900 text-sm font-semibold transition-all duration-200 w-fit group"
          >
            <span>ALL UPDATES</span>
            <Image
              src="/icons/arrow-up-right.svg"
              alt="arrow"
              width={14}
              height={14}
              className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8">
          {articles.map((item) => (
            <article
              key={item.id}
              className="flex flex-col gap-4 sm:gap-5 group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 405px"
                />
              </div>

              {/* Timestamp */}
              <time className="text-stone-500 text-xs sm:text-sm font-normal">
                {item.date}
              </time>

              {/* Title */}
              <h3 className="text-stone-900 text-xl sm:text-2xl font-normal font-crimson leading-snug sm:leading-9 group-hover:text-lime-700 transition-colors line-clamp-3">
                {item.title}
              </h3>

              {/* Bottom Border & Read More Link */}
              <div className="mt-auto pt-3 border-t border-stone-200 flex justify-between items-center text-stone-900 text-sm font-semibold">
                <span>READ MORE</span>
                <Image
                  src="/icons/arrow-up-right.svg"
                  alt="arrow"
                  width={14}
                  height={14}
                  className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
