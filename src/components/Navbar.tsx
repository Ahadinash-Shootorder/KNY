"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  onOpenBooking: (roomType?: string) => void;
  activePage?: "home" | "about" | "rooms" | "location";
}

export default function Navbar({ onOpenBooking, activePage = "home" }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isRoomsDropdownOpen, setIsRoomsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
        isScrolled
          ? "shadow-sm border-b border-stone-200"
          : "border-b border-stone-200"
      }`}
    >
      <div className="max-w-[1440px] mx-auto h-20 lg:h-24 px-4 sm:px-8 lg:px-20 flex justify-between items-center">
        {/* Logo: w-28 h-20 as per Figma */}
        <Link href="/" className="relative flex items-center group flex-shrink-0">
          <div className="relative w-24 sm:w-28 h-16 sm:h-20 transition-transform group-hover:scale-[1.02]">
            <Image
              src="/images/logo.png"
              alt="KNY STAY - Experience Elevated Stay"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7">
          {/* HOME */}
          <Link
            href="/"
            className="h-7 relative inline-flex flex-col justify-center items-start gap-2 overflow-hidden group cursor-pointer"
          >
            <span className="justify-start text-stone-900 text-sm font-semibold font-['Inter'] hover:text-stone-600 transition-colors">
              HOME
            </span>
            {activePage === "home" && (
              <div className="w-14 h-0.5 left-[-1px] top-[26px] absolute bg-lime-400" />
            )}
          </Link>

          {/* ABOUT */}
          <Link
            href="/about"
            className="h-7 relative inline-flex flex-col justify-center items-start gap-2 overflow-hidden text-stone-900 hover:text-stone-600 transition-colors cursor-pointer"
          >
            <span className="justify-start text-stone-900 text-sm font-semibold font-['Inter']">
              ABOUT
            </span>
            {activePage === "about" && (
              <div className="w-14 h-0.5 left-[-1px] top-[26px] absolute bg-lime-400" />
            )}
          </Link>

          {/* ROOMS (with dropdown) */}
          <div
            className="h-7 relative inline-flex items-center gap-2 cursor-pointer text-stone-900 hover:text-stone-600 transition-colors"
            onMouseEnter={() => setIsRoomsDropdownOpen(true)}
            onMouseLeave={() => setIsRoomsDropdownOpen(false)}
          >
            <span className="justify-start text-stone-900 text-sm font-semibold font-['Inter']">
              ROOMS
            </span>
            <Image
              src="/icons/Dropdown chevron.svg"
              alt="dropdown"
              width={10}
              height={6}
              className={`transition-transform duration-200 ${
                isRoomsDropdownOpen ? "rotate-180" : ""
              }`}
            />
            {activePage === "rooms" && (
              <div className="w-14 h-0.5 left-[-1px] top-[26px] absolute bg-lime-400" />
            )}

            {/* Custom Figma Rooms Dropdown */}
            {isRoomsDropdownOpen && (
              <div className="absolute top-full left-0 pt-2 z-50">
                <div className="w-52 px-4 py-3 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-lime-400 shadow-xl inline-flex flex-col justify-start items-start gap-2 overflow-hidden animate-in fade-in duration-150">
                  {/* 2 Bedroom Option */}
                  <Link
                    href="/rooms/2-bedroom"
                    onClick={() => setIsRoomsDropdownOpen(false)}
                    className="self-stretch px-3 py-2.5 rounded-lg inline-flex justify-start items-center gap-2.5 overflow-hidden hover:bg-stone-50 cursor-pointer transition-colors group/item"
                  >
                    <div className="w-5 h-3 flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/images/Rooms-Dropdown.svg"
                        alt="2 Bedroom"
                        width={20}
                        height={12}
                        className="object-contain"
                      />
                    </div>
                    <span className="justify-start text-stone-900 group-hover:item:text-lime-700 text-sm font-semibold font-['Inter'] transition-colors">
                      2 Bedroom
                    </span>
                  </Link>

                  {/* Divider */}
                  <div className="self-stretch h-px bg-stone-200" />

                  {/* 3 Bedroom Option */}
                  <Link
                    href="/rooms/3-bedroom"
                    onClick={() => setIsRoomsDropdownOpen(false)}
                    className="self-stretch px-3 py-2.5 rounded-lg inline-flex justify-start items-center gap-2.5 overflow-hidden hover:bg-stone-50 cursor-pointer transition-colors group/item"
                  >
                    <div className="w-5 h-3 flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/images/Rooms-Dropdown.svg"
                        alt="3 Bedroom"
                        width={20}
                        height={12}
                        className="object-contain"
                      />
                    </div>
                    <span className="justify-start text-stone-900 group-hover:item:text-lime-700 text-sm font-semibold font-['Inter'] transition-colors">
                      3 Bedroom
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* LATEST NEWS */}
          <Link
            href={activePage === "about" ? "/#updates" : "#updates"}
            className="h-7 inline-flex flex-col justify-center items-start gap-2 overflow-hidden text-stone-900 hover:text-stone-600 transition-colors"
          >
            <span className="justify-start text-stone-900 text-sm font-semibold font-['Inter']">
              LATEST NEWS
            </span>
          </Link>

          {/* GALLERY */}
          <Link
            href={activePage === "about" ? "#gallery" : "#media"}
            className="h-7 inline-flex flex-col justify-center items-start gap-2 overflow-hidden text-stone-900 hover:text-stone-600 transition-colors"
          >
            <span className="justify-start text-stone-900 text-sm font-semibold font-['Inter']">
              GALLERY
            </span>
          </Link>

          {/* LOCATION */}
          <Link
            href="/location"
            className="h-7 relative inline-flex flex-col justify-center items-start gap-2 overflow-hidden text-stone-900 hover:text-stone-600 transition-colors cursor-pointer"
          >
            <span className="justify-start text-stone-900 text-sm font-semibold font-['Inter']">
              LOCATION
            </span>
            {activePage === "location" && (
              <div className="w-20 h-0.5 left-[-1px] top-[26px] absolute bg-lime-400" />
            )}
          </Link>

          {/* CONTACT */}
          <button
            onClick={() => onOpenBooking()}
            className="h-7 inline-flex flex-col justify-center items-start gap-2 overflow-hidden text-stone-900 hover:text-stone-600 transition-colors cursor-pointer"
          >
            <span className="justify-start text-stone-900 text-sm font-semibold font-['Inter']">
              CONTACT
            </span>
          </button>
        </nav>

        {/* Medium Screen Nav (lg to xl) */}
        <nav className="hidden lg:flex xl:hidden items-center gap-4 text-xs font-semibold">
          <Link href="/" className={`hover:text-lime-600 ${activePage === "home" ? "text-lime-600" : "text-stone-900"}`}>HOME</Link>
          <Link href="/about" className={`hover:text-lime-600 ${activePage === "about" ? "text-lime-600" : "text-stone-900"}`}>ABOUT</Link>
          <Link href="/rooms/2-bedroom" className={`hover:text-lime-600 ${activePage === "rooms" ? "text-lime-600" : "text-stone-900"}`}>ROOMS</Link>
          <Link href="/#updates" className="text-stone-900">NEWS</Link>
          <Link href="/#media" className="text-stone-900">GALLERY</Link>
          <Link href="/location" className={`hover:text-lime-600 ${activePage === "location" ? "text-lime-600 font-bold" : "text-stone-900"}`}>LOCATION</Link>
          <button onClick={() => onOpenBooking()} className="text-stone-900 hover:text-lime-600">CONTACT</button>
        </nav>

        {/* Action Buttons: Phone & Book Your Stay */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4 flex-shrink-0">
          {/* Phone Button */}
          <a
            href="tel:+918043694577"
            className="h-12 px-4 lg:px-6 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-lime-400 hover:bg-lime-50 flex justify-start items-center gap-2 overflow-hidden transition-colors duration-200"
          >
            <Image
              src="/icons/phone.svg"
              alt="Call KNY"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span className="justify-start text-stone-900 text-xs lg:text-sm font-semibold font-['Inter']">
              +91 8043694577
            </span>
          </a>

          {/* Book Your Stay Button */}
          <button
            onClick={() => onOpenBooking()}
            className="h-12 px-4 lg:px-6 bg-lime-400 hover:bg-lime-500 rounded-[999px] shadow-[0px_8px_20px_0px_rgba(0,0,0,0.08)] flex justify-start items-center gap-2 overflow-hidden transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span className="justify-start text-stone-900 text-xs lg:text-sm font-semibold font-['Inter']">
              BOOK YOUR STAY
            </span>
            <Image
              src="/icons/arrow-up-right.svg"
              alt="arrow"
              width={14}
              height={14}
              className="w-3.5 h-3.5"
            />
          </button>
        </div>

        {/* Mobile View: Book button + Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => onOpenBooking()}
            className="h-9 px-3 bg-lime-400 text-stone-900 text-xs font-semibold rounded-full flex items-center gap-1 shadow-sm md:hidden"
          >
            <span>BOOK</span>
            <Image
              src="/icons/arrow-up-right.svg"
              alt="arrow"
              width={12}
              height={12}
            />
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-stone-900 hover:bg-stone-100 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-6 shadow-lg animate-in fade-in duration-200">
          <div className="flex flex-col gap-3.5 text-stone-900 font-semibold text-base font-['Inter']">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center justify-between py-2 border-b border-stone-100 ${
                activePage === "home" ? "text-lime-600" : "hover:text-lime-600"
              }`}
            >
              <span>HOME</span>
              {activePage === "home" && <span className="w-2 h-2 rounded-full bg-lime-400" />}
            </Link>

            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center justify-between py-2 border-b border-stone-100 ${
                activePage === "about" ? "text-lime-600" : "hover:text-lime-600"
              }`}
            >
              <span>ABOUT</span>
              {activePage === "about" && <span className="w-2 h-2 rounded-full bg-lime-400" />}
            </Link>

            {/* Mobile Rooms Accordion */}
            <div className="py-2 border-b border-stone-100 flex flex-col gap-2">
              <span className={`text-stone-900 ${activePage === "rooms" ? "text-lime-600 font-bold" : ""}`}>
                ROOMS
              </span>
              <div className="pl-3 flex flex-col gap-2">
                <Link
                  href="/rooms/2-bedroom"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 py-1 text-sm text-stone-700 hover:text-lime-600 font-medium text-left"
                >
                  <Image
                    src="/images/Rooms-Dropdown.svg"
                    alt="2 Bedroom"
                    width={18}
                    height={11}
                  />
                  <span>2 Bedroom Apartment</span>
                </Link>
                <Link
                  href="/rooms/3-bedroom"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 py-1 text-sm text-stone-700 hover:text-lime-600 font-medium text-left"
                >
                  <Image
                    src="/images/Rooms-Dropdown.svg"
                    alt="3 Bedroom"
                    width={18}
                    height={11}
                  />
                  <span>3 Bedroom Apartment</span>
                </Link>
              </div>
            </div>

            <Link
              href="/#updates"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 border-b border-stone-100 hover:text-lime-600 transition-colors"
            >
              LATEST NEWS
            </Link>

            <Link
              href={activePage === "about" ? "#gallery" : "#media"}
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 border-b border-stone-100 hover:text-lime-600 transition-colors"
            >
              GALLERY
            </Link>

            <Link
              href="/location"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center justify-between py-2 border-b border-stone-100 ${
                activePage === "location" ? "text-lime-600 font-bold" : "hover:text-lime-600"
              }`}
            >
              <span>LOCATION</span>
              {activePage === "location" && <span className="w-2 h-2 rounded-full bg-lime-400" />}
            </Link>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="py-2 border-b border-stone-100 hover:text-lime-600 transition-colors text-left"
            >
              CONTACT
            </button>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href="tel:+918043694577"
                className="h-12 w-full rounded-full border border-lime-400 flex items-center justify-center gap-2 text-stone-900 text-sm font-semibold"
              >
                <Image
                  src="/icons/phone.svg"
                  alt="phone"
                  width={18}
                  height={18}
                />
                <span>+91 8043694577</span>
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="h-12 w-full bg-lime-400 text-stone-900 text-sm font-semibold rounded-full flex items-center justify-center gap-2 shadow-md"
              >
                <span>BOOK YOUR STAY</span>
                <Image
                  src="/icons/arrow-up-right.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
