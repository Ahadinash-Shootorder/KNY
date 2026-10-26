"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#404040] text-stone-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 pt-16 sm:pt-20 pb-8 flex flex-col gap-10 sm:gap-14">
        {/* Top Header Row with Logo & Phone */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="relative w-40 sm:w-48 lg:w-52 h-20 sm:h-24 filter brightness-0 invert">
            <Image
              src="/images/logo.png"
              alt="KNY STAY"
              fill
              className="object-contain object-left"
            />
          </div>

          <div className="flex flex-col sm:items-end gap-1.5 sm:gap-2">
            <a
              href="tel:08043694577"
              className="text-white text-3xl sm:text-4xl font-normal font-crimson hover:text-lime-400 transition-colors tracking-wide"
            >
              08043694577
            </a>
            <p className="text-stone-300 text-xs sm:text-sm font-normal">
              Please keep 0 before dialling the number.
            </p>
          </div>
        </div>

        {/* 4 Column Directory Links */}
        <div className="pt-8 sm:pt-10 border-t border-white/20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
          {/* Column 1: Reach Us On */}
          <div className="lg:col-span-5 flex flex-col items-start gap-3 sm:gap-4">
            <span className="text-white text-sm font-semibold tracking-wider uppercase font-['Inter',sans-serif]">
              REACH US ON
            </span>
            <p className="text-stone-300 text-xs sm:text-sm font-normal leading-relaxed sm:leading-7">
              Temple square apartment, sreebagh colony, adjacent to vijetha super market, near google office, kothaguda, kondapur, Hyderabad- 500084., Hyderabad, 500084, India
            </p>
            <a
              href="mailto:reservations@knystay.com"
              className="text-stone-300 text-xs sm:text-sm font-normal hover:text-lime-400 transition-colors"
            >
              reservations@knystay.com
            </a>
          </div>

          {/* Column 2: Top Room Categories */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4 sm:gap-5">
            <span className="text-white text-sm font-semibold tracking-wider uppercase font-['Inter',sans-serif]">
              TOP ROOMS CATEGORIES
            </span>
            <div className="flex flex-col gap-2.5">
              <Link
                href="#rooms"
                className="text-stone-300 text-xs sm:text-sm font-normal hover:text-white transition-colors"
              >
                Premium
              </Link>
              <Link
                href="#rooms"
                className="text-stone-300 text-xs sm:text-sm font-normal hover:text-white transition-colors"
              >
                2 BHK Suites
              </Link>
              <Link
                href="#rooms"
                className="text-stone-300 text-xs sm:text-sm font-normal hover:text-white transition-colors"
              >
                3 BHK Suites
              </Link>
            </div>
          </div>

          {/* Column 3: Explore */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4 sm:gap-5">
            <span className="text-white text-sm font-semibold tracking-wider uppercase font-['Inter',sans-serif]">
              EXPLORE
            </span>
            <div className="flex flex-col gap-2.5">
              <Link
                href="#about"
                className="text-stone-300 text-xs sm:text-sm font-normal hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                href="#updates"
                className="text-stone-300 text-xs sm:text-sm font-normal hover:text-white transition-colors"
              >
                Latest Updates
              </Link>
              <Link
                href="#contact"
                className="text-stone-300 text-xs sm:text-sm font-normal hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Link
                href="#media"
                className="text-stone-300 text-xs sm:text-sm font-normal hover:text-white transition-colors"
              >
                Gallery
              </Link>
            </div>
          </div>

          {/* Column 4: Our Other Website */}
          <div className="lg:col-span-3 flex flex-col items-start gap-4 sm:gap-5">
            <span className="text-white text-sm font-semibold tracking-wider uppercase font-['Inter',sans-serif]">
              OUR OTHER WEBSITE
            </span>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-300 text-xs sm:text-sm font-normal hover:text-lime-400 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Facebook</span>
                <span className="text-xs">↗</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-300 text-xs sm:text-sm font-normal hover:text-lime-400 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Instagram</span>
                <span className="text-xs">↗</span>
              </a>
              <a
                href="https://wa.me/918043694577"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-300 text-xs sm:text-sm font-normal hover:text-lime-400 transition-colors inline-flex items-center gap-1.5"
              >
                <span>WhatsApp Concierge</span>
                <span className="text-xs">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-stone-300">
          <div>© 2026 | Built with ShootOrder</div>

          <div className="flex items-center gap-6 sm:gap-7">
            <a href="#" className="hover:text-white transition-colors">
              Terms &amp; conditions
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
