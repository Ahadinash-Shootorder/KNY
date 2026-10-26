"use client";

import React, { useState } from "react";
import Image from "next/image";

type CategoryType = "tech" | "healthcare" | "conventions" | "transit";

interface DestinationItem {
  id: string;
  badge: string;
  isWalk: boolean;
  distance: string;
  title: string;
  description: string;
}

const destinationsData: Record<CategoryType, DestinationItem[]> = {
  tech: [
    {
      id: "tech-1",
      badge: "11 Min Walk",
      isWalk: true,
      distance: "750 m",
      title: "Tech Mahindra Infocity",
      description:
        "Direct corridor via Tech Mahindra SEZ Road. Zero traffic, simple walking route ideal for morning briefings.",
    },
    {
      id: "tech-2",
      badge: "12 Min Walk",
      isWalk: true,
      distance: "850 m",
      title: "Google Hyderabad",
      description:
        "Direct pedestrian route along the campus corridor in White Fields. Quick stroll for engineering consultants.",
    },
    {
      id: "tech-3",
      badge: "4 Min Drive",
      isWalk: false,
      distance: "1.6 km",
      title: "Oracle India Technology",
      description:
        "Located on Kondapur Main Road. 18 min leisure walk or under 5 minutes by auto-rickshaw or taxi.",
    },
    {
      id: "tech-4",
      badge: "~10 Min Drive",
      isWalk: false,
      distance: "2.2 km",
      title: "Cyber Towers & Cyber Gateway",
      description:
        "The symbolic heart of HITEC City. Quick transit access via HITEC City main artery.",
    },
    {
      id: "tech-5",
      badge: "16 Min Drive",
      isWalk: false,
      distance: "4.7 km",
      title: "Raheja Mindspace IT Park",
      description:
        "Home to multinational campuses including IBM, Qualcomm, Cognizant, and Bank of America.",
    },
    {
      id: "tech-6",
      badge: "~25 Min Drive",
      isWalk: false,
      distance: "9.2 km",
      title: "Financial District (Nanakramguda)",
      description:
        "Direct Outer Ring Road (ORR) link to Amazon Campus, Microsoft, and global banking centers.",
    },
  ],
  healthcare: [
    {
      id: "health-1",
      badge: "2 Min Walk",
      isWalk: true,
      distance: "180 m",
      title: "Medicover Hospital",
      description:
        "Premier multispecialty healthcare center directly accessible via residential White Fields walk.",
    },
    {
      id: "health-2",
      badge: "5 Min Drive",
      isWalk: false,
      distance: "2.0 km",
      title: "KIMS Hospitals Kondapur",
      description:
        "Comprehensive tertiary hospital with 24/7 emergency care, specialized oncology, and diagnostics.",
    },
    {
      id: "health-3",
      badge: "12 Min Drive",
      isWalk: false,
      distance: "4.5 km",
      title: "AIG Hospitals Gachibowli",
      description:
        "Internationally renowned super-specialty medical institute with leading gastroenterology specialists.",
    },
    {
      id: "health-4",
      badge: "6 Min Drive",
      isWalk: false,
      distance: "2.3 km",
      title: "Apollo Cradle & Children's Hospital",
      description:
        "Specialized maternal, pediatric, and neonatal emergency care center situated in Kondapur.",
    },
  ],
  conventions: [
    {
      id: "conv-1",
      badge: "9 Min Drive",
      isWalk: false,
      distance: "3.8 km",
      title: "HITEX Exhibition Centre",
      description:
        "India's premier multi-purpose venue for international industrial exhibitions and trade summits.",
    },
    {
      id: "conv-2",
      badge: "9 Min Drive",
      isWalk: false,
      distance: "3.8 km",
      title: "Hyderabad International Convention Centre (HICC)",
      description:
        "South Asia's leading convention facility hosting global tech conferences and international delegate summits.",
    },
    {
      id: "conv-3",
      badge: "10 Min Drive",
      isWalk: false,
      distance: "4.0 km",
      title: "Novotel HICC Arena",
      description:
        "Executive hospitality, luxury banqueting, and high-level corporate leadership conclaves.",
    },
  ],
  transit: [
    {
      id: "trans-1",
      badge: "40 Min Drive",
      isWalk: false,
      distance: "33 km",
      title: "Rajiv Gandhi International Airport (RGIA)",
      description:
        "Direct, signal-free expressway commute via Nehru Outer Ring Road (ORR) Gachibowli interchange.",
    },
    {
      id: "trans-2",
      badge: "10 Min Drive",
      isWalk: false,
      distance: "2.8 km",
      title: "HITEC City Metro Station",
      description:
        "Blue Line rapid transit connecting directly to Ameerpet, Jubilee Hills, and Secunderabad.",
    },
    {
      id: "trans-3",
      badge: "12 Min Drive",
      isWalk: false,
      distance: "3.5 km",
      title: "Raidurg Metro Station",
      description:
        "Terminal metro hub serving Raheja Mindspace, Knowledge City, and IKEA corridor.",
    },
    {
      id: "trans-4",
      badge: "35 Min Drive",
      isWalk: false,
      distance: "18 km",
      title: "Secunderabad Railway Station",
      description:
        "Direct high-speed rail junction connecting Hyderabad to nationwide destinations.",
    },
  ],
};

export default function LocationCommuteIndex() {
  const [activeTab, setActiveTab] = useState<CategoryType>("tech");

  const tabs: { key: CategoryType; label: string }[] = [
    { key: "tech", label: "TECH & CORPORATE" },
    { key: "healthcare", label: "HEALTHCARE" },
    { key: "conventions", label: "CONVENTIONS & EXPOS" },
    { key: "transit", label: "TRANSIT & AIRPORT" },
  ];

  const currentItems = destinationsData[activeTab];

  return (
    <div className="w-full bg-stone-100 flex flex-col justify-start items-center overflow-hidden border-b border-stone-200">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 lg:px-20 py-16 sm:py-20 lg:py-24 flex flex-col justify-start items-center gap-12">
        {/* Header Block */}
        <div className="w-full max-w-4xl pt-1.5 flex flex-col justify-start items-center gap-2.5 text-center">
          <div className="justify-start text-stone-900 text-sm font-semibold font-['Inter'] uppercase tracking-wider">
            COMMUTE &amp; ACCESS INDEX
          </div>
          <div className="flex flex-col justify-start items-center">
            <h2 className="text-stone-900 text-3xl sm:text-4xl lg:text-5xl font-medium font-crimson leading-tight lg:leading-[60.32px] sm:whitespace-nowrap">
              Minutes to Every Crucial Destination
            </h2>
          </div>
          <div className="self-stretch pt-1.5 flex flex-col justify-start items-center">
            <p className="text-center text-stone-500 text-sm sm:text-base font-normal font-['Inter'] leading-relaxed sm:leading-7">
              Grouped by purpose: plan client commutes, hospital visits, convention arrivals, and<br className="hidden sm:block" />airport flights with absolute clarity.
            </p>
          </div>
        </div>

        {/* Filter Pills from Figma */}
        <div className="p-1.5 bg-gray-200 rounded-full outline outline-1 outline-offset-[-1px] outline-stone-300/30 inline-flex justify-center items-start gap-1 flex-wrap content-start">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2 rounded-full inline-flex flex-col justify-center items-center transition-all cursor-pointer ${
                  isActive
                    ? "bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                    : "hover:bg-white/50"
                }`}
              >
                <span
                  className={`text-center text-xs sm:text-sm font-bold font-jakarta uppercase leading-4 tracking-wide ${
                    isActive ? "text-zinc-900" : "text-stone-600 font-semibold"
                  }`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* 6 Cards Grid (Figma exact structure) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="p-6 relative bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-stone-300/40 inline-flex flex-col justify-between items-start gap-3 shadow-[0px_10px_24px_-10px_rgba(26,28,26,0.05)] hover:shadow-md transition-shadow"
            >
              <div className="self-stretch inline-flex justify-between items-center">
                {/* Walk or Drive badge */}
                <div
                  className={`px-3 py-1 rounded-full flex justify-start items-center gap-1.5 ${
                    item.isWalk ? "bg-lime-500/20" : "bg-stone-200"
                  }`}
                >
                  <div className="inline-flex flex-col justify-start items-start">
                    <Image
                      src={
                        item.isWalk
                          ? "/icons/location-icons/Icon.svg"
                          : "/icons/location-icons/Icon-10.svg"
                      }
                      alt={item.isWalk ? "Walk" : "Drive"}
                      width={12}
                      height={12}
                      className="size-3 object-contain"
                    />
                  </div>
                  <div
                    className={`justify-center text-xs font-bold font-jakarta leading-4 ${
                      item.isWalk ? "text-lime-950" : "text-zinc-900"
                    }`}
                  >
                    {item.badge}
                  </div>
                </div>

                {/* Distance text */}
                <div className="inline-flex flex-col justify-start items-start">
                  <div className="justify-center text-stone-600 text-sm font-semibold font-jakarta leading-4">
                    {item.distance}
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
                <div className="self-stretch pt-1 flex flex-col justify-start items-start">
                  <h3 className="justify-start text-stone-900 text-2xl font-normal font-crimson leading-8">
                    {item.title}
                  </h3>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                  <p className="self-stretch text-stone-600 text-sm font-normal font-['Inter'] leading-5">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
