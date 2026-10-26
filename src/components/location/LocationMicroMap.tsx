"use client";

import React from "react";
import Image from "next/image";

export default function LocationMicroMap() {
  return (
    <div className="w-full bg-white flex flex-col justify-start items-center overflow-hidden border-b border-stone-200">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 lg:px-20 py-16 sm:py-20 lg:py-24 flex flex-col justify-start items-start gap-2.5">
        <div className="self-stretch p-6 sm:p-8 relative bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-stone-300/40 flex flex-col justify-start items-start gap-6 shadow-[0px_20px_40px_-16px_rgba(26,28,26,0.06)]">
          {/* Header Row */}
          <div className="self-stretch flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="pt-1.5 inline-flex flex-col justify-start items-start gap-1">
              <div className="justify-start text-stone-900 text-sm font-semibold font-['Inter'] uppercase tracking-wider">
                SURROUNDING CORRIDOR
              </div>
              <div className="justify-start text-stone-900 text-3xl sm:text-4xl font-normal font-crimson leading-10">
                Strategic Micro-Location Map
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap justify-start items-center gap-2">
              <div className="px-3 py-1 bg-gray-200 rounded-full flex justify-start items-center gap-1.5">
                <div className="size-2 bg-lime-800 rounded-full" />
                <div className="justify-center text-stone-600 text-sm sm:text-base font-medium font-jakarta leading-4">
                  Walking Zone (&lt;15m)
                </div>
              </div>
              <div className="px-3 py-1 bg-gray-200 rounded-full flex justify-start items-center gap-1.5">
                <div className="size-2 bg-lime-500 rounded-full" />
                <div className="justify-center text-stone-600 text-sm sm:text-base font-medium font-jakarta leading-4">
                  Drive Zone (&lt;10m)
                </div>
              </div>
            </div>
          </div>

          {/* Map Viewport Wrapper with horizontal scroll on small screens */}
          <div className="w-full overflow-x-auto no-scrollbar">
            <div className="min-w-[1100px] xl:min-w-full h-[460px] relative bg-stone-100 rounded-2xl outline outline-1 outline-offset-[-1px] outline-stone-300/30 flex justify-center items-center overflow-hidden">
              {/* Radial background effect */}
              <div className="w-full h-full left-0 top-0 absolute opacity-30 bg-radial from-stone-500 to-transparent pointer-events-none" />

              {/* Outer zone ring */}
              <div className="size-96 left-1/2 -translate-x-[240px] top-[20px] absolute rounded-full border border-lime-800/25 pointer-events-none" />

              {/* Inner zone ring */}
              <div className="size-56 left-1/2 -translate-x-[140px] top-[120px] absolute bg-lime-500/5 rounded-full border border-lime-500/40 pointer-events-none" />

              {/* Directions in Google Maps pill: left-[17px] top-[405px] */}
              <a
                href="https://maps.google.com/?q=17.4618,78.3672"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 left-[17px] top-[400px] absolute bg-white/90 rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-stone-300/40 backdrop-blur-md flex justify-start items-center gap-4 hover:bg-white transition-all cursor-pointer z-20 group"
              >
                <div className="inline-flex flex-col justify-start items-start">
                  <div className="justify-center text-stone-600 text-sm sm:text-base font-medium font-jakarta leading-4">
                    Need live navigation?
                  </div>
                </div>
                <div className="flex justify-start items-center gap-1.5">
                  <div className="justify-center text-lime-800 text-xs font-bold font-jakarta uppercase leading-4 tracking-wide group-hover:underline">
                    DIRECTIONS IN GOOGLE MAPS
                  </div>
                  <div className="inline-flex flex-col justify-start items-start">
                    <Image
                      src="/icons/location-icons/Icon-1.svg"
                      alt="Arrow"
                      width={10}
                      height={10}
                      className="size-2.5 object-contain"
                    />
                  </div>
                </div>
              </a>

              {/* Google Campus Pin: left-[740px] top-[120px] */}
              <div className="px-4 py-2.5 left-1/2 translate-x-[180px] top-[115px] absolute bg-white/95 rounded-full outline outline-1 outline-offset-[-1px] outline-stone-300/30 backdrop-blur-sm flex justify-start items-center gap-2 shadow-sm hover:scale-105 transition-transform z-10">
                <div className="size-2.5 bg-lime-800 rounded-full" />
                <div className="pb-[2.50px] inline-flex flex-col justify-start items-start">
                  <div className="justify-center text-zinc-900 text-sm font-bold font-jakarta leading-tight">
                    Google Campus
                  </div>
                  <div className="justify-center text-stone-600 text-xs font-medium font-jakarta leading-tight">
                    12 min walk (850m)
                  </div>
                </div>
              </div>

              {/* Center Beacon: KNY STAY */}
              <div className="inline-flex flex-col justify-start items-center relative z-20">
                <div className="relative inline-flex justify-center items-center">
                  <div className="size-12 absolute bg-lime-500/30 rounded-full animate-ping pointer-events-none" />
                  <div className="size-11 relative bg-lime-800 rounded-full flex justify-center items-center shadow-lg ring-4 ring-white">
                    <Image
                      src="/icons/location-icons/Icon-8.svg"
                      alt="KNY Stay"
                      width={18}
                      height={18}
                      className="size-4 object-contain"
                    />
                  </div>
                </div>
                <div className="pt-2 flex flex-col justify-start items-start">
                  <div className="px-4 py-2 bg-white rounded-[33px] inline-flex justify-start items-center gap-2.5 shadow-md border border-stone-200">
                    <div className="size-3.5 bg-lime-500 rounded-full" />
                    <div className="pb-[2.50px] inline-flex flex-col justify-start items-start">
                      <div className="justify-center text-zinc-900 text-sm font-bold font-jakarta leading-tight">
                        KNY STAY
                      </div>
                      <div className="justify-center text-stone-600 text-xs font-medium font-jakarta leading-tight">
                        Whitefields, Kondapur
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* HITEX & HICC Arena: left-[512px] top-[63px] */}
              <div className="px-4 py-2.5 left-1/2 -translate-x-[40px] top-[50px] absolute bg-white rounded-[33px] flex justify-start items-center gap-2.5 shadow-sm hover:scale-105 transition-transform z-10">
                <div className="size-3.5 bg-lime-500 rounded-full" />
                <div className="pb-[2.50px] inline-flex flex-col justify-start items-start">
                  <div className="justify-center text-zinc-900 text-sm font-bold font-jakarta leading-tight">
                    HITEX &amp; HICC Arena
                  </div>
                  <div className="justify-center text-stone-600 text-xs font-medium font-jakarta leading-tight">
                    9 min drive (3.8 km)
                  </div>
                </div>
              </div>

              {/* Tech Mahindra Infocity: left-[326px] top-[133px] */}
              <div className="px-4 py-2.5 left-1/2 -translate-x-[280px] top-[130px] absolute bg-white rounded-[33px] flex justify-start items-center gap-2.5 shadow-sm hover:scale-105 transition-transform z-10">
                <div className="size-3.5 bg-lime-500 rounded-full" />
                <div className="pb-[2.50px] inline-flex flex-col justify-start items-start">
                  <div className="justify-center text-zinc-900 text-sm font-bold font-jakarta leading-tight">
                    Tech Mahindra Infocity
                  </div>
                  <div className="justify-center text-stone-600 text-xs font-medium font-jakarta leading-tight">
                    11 min walk (750m)
                  </div>
                </div>
              </div>

              {/* Medicover Hospital: left-[388px] top-[299px] */}
              <div className="px-4 py-2.5 left-1/2 -translate-x-[200px] top-[300px] absolute bg-white rounded-[33px] flex justify-start items-center gap-2.5 shadow-sm hover:scale-105 transition-transform z-10">
                <div className="size-3.5 bg-lime-500 rounded-full" />
                <div className="pb-[2.50px] inline-flex flex-col justify-start items-start">
                  <div className="justify-center text-zinc-900 text-sm font-bold font-jakarta leading-tight">
                    Medicover Hospital
                  </div>
                  <div className="justify-center text-stone-600 text-xs font-medium font-jakarta leading-tight">
                    2 min walk (180m)
                  </div>
                </div>
              </div>

              {/* Cyber Towers & Metro: left-[694px] top-[331px] */}
              <div className="px-4 py-2.5 left-1/2 translate-x-[140px] top-[320px] absolute bg-white rounded-[48px] flex justify-start items-center gap-2.5 shadow-sm hover:scale-105 transition-transform z-10">
                <div className="size-3.5 bg-lime-500 rounded-full" />
                <div className="pb-[2.50px] inline-flex flex-col justify-start items-start">
                  <div className="justify-center text-zinc-900 text-sm font-bold font-jakarta leading-tight">
                    Cyber Towers &amp; Metro
                  </div>
                  <div className="justify-center text-stone-600 text-xs font-medium font-jakarta leading-tight">
                    10-13 min drive
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
