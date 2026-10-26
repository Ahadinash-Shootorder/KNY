"use client";

import React from "react";
import Image from "next/image";

export default function WhatsAppFloating() {
  const whatsappUrl =
    "https://wa.me/918043694577?text=Hello%20KNY%20Service%20Apartments,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20stay.";

  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-50 select-none">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="inline-flex items-center gap-2 sm:gap-2.5 transition-all duration-200 hover:scale-105 active:scale-95 group cursor-pointer"
      >
        {/* Pill with CHAT ON WHATSAPP text (matches Figma exact styling) */}
        {/* <div className="px-3.5 sm:px-4 py-2 sm:py-3.5 bg-white group-hover:bg-stone-50 rounded-[49px] shadow-[2px_4px_19px_0px_rgba(0,0,0,0.14)] border border-stone-200/80 flex items-center justify-center transition-colors">
          <span className="text-stone-900 text-xs sm:text-sm font-semibold font-['Inter'] whitespace-nowrap tracking-wide">
            CHAT ON WHATSAPP
          </span>
        </div> */}

        {/* WhatsApp Icon Circle */}
        <div className="size-12 sm:size-14 lg:size-16 relative rounded-full overflow-hidden flex-shrink-0">
          <Image
            src="/icons/whatsapp.svg"
            alt="WhatsApp Icon"
            fill
            className="object-cover"
            priority
          />
        </div>
      </a>
    </aside>
  );
}
