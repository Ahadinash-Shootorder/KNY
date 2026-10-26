"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRoomType?: string;
}

interface RoomInfo {
  name: string;
  price: string;
  originalPrice: string;
}

const roomDetails: Record<string, RoomInfo> = {
  "2 Bedroom Apartment": {
    name: "2 Bedroom Apartment",
    price: "INR 12,500",
    originalPrice: "INR 14,750",
  },
  "3 Bedroom Apartment": {
    name: "3 Bedroom Apartment",
    price: "INR 15,000",
    originalPrice: "INR 17,550",
  },
};

export default function BookingModal({
  isOpen,
  onClose,
  defaultRoomType = "2 Bedroom Apartment",
}: BookingModalProps) {
  const [selectedRoom, setSelectedRoom] = useState<string>("2 Bedroom Apartment");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [requirements, setRequirements] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (defaultRoomType && roomDetails[defaultRoomType]) {
      setSelectedRoom(defaultRoomType);
    } else {
      setSelectedRoom("2 Bedroom Apartment");
    }
  }, [defaultRoomType, isOpen]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentRoom = roomDetails[selectedRoom] || roomDetails["2 Bedroom Apartment"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 3500);
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello KNY Service Apartments!\n\nI would like to make a booking enquiry:\n• Room: ${currentRoom.name} (${currentRoom.price})\n• Name: ${fullName || "Guest"}\n• Phone: ${phone || "Not specified"}\n• Email: ${email || "Not specified"}\n• Arrival: ${arrivalDate || "Flexible"}\n• Departure: ${departureDate || "Flexible"}\n• Requirements: ${requirements || "None"}`
    );
    window.open(`https://wa.me/918043694577?text=${text}`, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Container: exact Figma styling w-[681px] bg-stone-100 rounded-2xl outline-stone-200 */}
      <div
        className="relative w-full max-w-[681px] p-6 sm:p-8 bg-stone-100 rounded-2xl outline outline-1 outline-offset-[-1px] outline-stone-200 shadow-2xl flex flex-col justify-start items-start gap-5 my-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 sm:top-7 right-5 sm:right-7 p-1.5 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
          aria-label="Close popup"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Section Tag */}
        <div className="justify-start text-stone-900 text-sm font-semibold font-['Inter'] tracking-wider">
          PLAN YOUR STAY
        </div>

        {/* Room Title, Room Switcher & Pricing */}
        <div className="self-stretch flex flex-col justify-start items-start gap-2">
          {/* Quick toggle between 2 Bedroom and 3 Bedroom */}
          <div className="flex items-center gap-2 mb-1">
            <button
              type="button"
              onClick={() => setSelectedRoom("2 Bedroom Apartment")}
              className={`px-3 py-1 rounded-full text-xs font-semibold font-['Inter'] transition-colors ${
                selectedRoom === "2 Bedroom Apartment"
                  ? "bg-lime-400 text-stone-900"
                  : "bg-white text-stone-600 hover:bg-stone-200/70 border border-stone-200"
              }`}
            >
              2 Bedroom
            </button>
            <button
              type="button"
              onClick={() => setSelectedRoom("3 Bedroom Apartment")}
              className={`px-3 py-1 rounded-full text-xs font-semibold font-['Inter'] transition-colors ${
                selectedRoom === "3 Bedroom Apartment"
                  ? "bg-lime-400 text-stone-900"
                  : "bg-white text-stone-600 hover:bg-stone-200/70 border border-stone-200"
              }`}
            >
              3 Bedroom
            </button>
          </div>

          <div className="justify-start text-stone-900 text-2xl sm:text-3xl font-normal font-crimson">
            {currentRoom.name}
          </div>

          <div className="inline-flex justify-start items-baseline gap-3 sm:gap-4">
            <div className="justify-start text-stone-900 text-3xl sm:text-4xl font-medium font-crimson">
              {currentRoom.price}
            </div>
            <div className="justify-start text-stone-500 text-sm font-normal font-['Inter'] line-through">
              {currentRoom.originalPrice}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="self-stretch justify-start text-stone-500 text-xs sm:text-sm font-normal font-['Inter'] leading-5 sm:leading-6">
          Share your dates and requirements. Our reservations team will help you plan your stay.
        </div>

        {/* Form Body */}
        {isSuccess ? (
          <div className="self-stretch bg-white p-6 sm:p-8 rounded-xl border border-lime-300 text-center flex flex-col items-center gap-3">
            <div className="size-14 rounded-full bg-lime-100 text-lime-800 flex items-center justify-center text-2xl">
              ✓
            </div>
            <h4 className="text-stone-900 text-xl font-medium font-crimson">
              Enquiry Submitted Successfully!
            </h4>
            <p className="text-stone-600 text-xs sm:text-sm max-w-sm">
              Thank you {fullName}! Our reservation team will reach out to you shortly at {phone || email}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="self-stretch flex flex-col gap-4">
            {/* Your name */}
            <div className="self-stretch flex flex-col justify-start items-start gap-1.5 sm:gap-2">
              <label className="justify-start text-stone-900 text-xs font-medium font-['Inter']">
                Your name
              </label>
              <div className="self-stretch h-12 p-3.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-stone-200 focus-within:outline-stone-900 inline-flex justify-start items-center">
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full name"
                  className="w-full bg-transparent text-stone-900 placeholder:text-stone-500 text-xs sm:text-sm font-normal font-['Inter'] focus:outline-none"
                />
              </div>
            </div>

            {/* Email & Phone (2 Columns, responsive stacking on mobile) */}
            <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3">
              <div className="flex flex-col justify-start items-start gap-1.5 sm:gap-2">
                <label className="justify-start text-stone-900 text-xs font-medium font-['Inter']">
                  Email address
                </label>
                <div className="self-stretch h-12 p-3.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-stone-200 focus-within:outline-stone-900 inline-flex justify-start items-center">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full bg-transparent text-stone-900 placeholder:text-stone-500 text-xs sm:text-sm font-normal font-['Inter'] focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-start items-start gap-1.5 sm:gap-2">
                <label className="justify-start text-stone-900 text-xs font-medium font-['Inter']">
                  Phone number
                </label>
                <div className="self-stretch h-12 p-3.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-stone-200 focus-within:outline-stone-900 inline-flex justify-start items-center">
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your phone"
                    className="w-full bg-transparent text-stone-900 placeholder:text-stone-500 text-xs sm:text-sm font-normal font-['Inter'] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Arrival & Departure (2 Columns) */}
            <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3">
              <div className="flex flex-col justify-start items-start gap-1.5 sm:gap-2">
                <label className="justify-start text-stone-900 text-xs font-medium font-['Inter']">
                  Arrival
                </label>
                <div className="self-stretch h-12 p-3.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-stone-200 focus-within:outline-stone-900 inline-flex justify-start items-center">
                  <input
                    type="date"
                    required
                    value={arrivalDate}
                    onChange={(e) => setArrivalDate(e.target.value)}
                    className="w-full bg-transparent text-stone-900 placeholder:text-stone-500 text-xs sm:text-sm font-normal font-['Inter'] focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-start items-start gap-1.5 sm:gap-2">
                <label className="justify-start text-stone-900 text-xs font-medium font-['Inter']">
                  Departure
                </label>
                <div className="self-stretch h-12 p-3.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-stone-200 focus-within:outline-stone-900 inline-flex justify-start items-center">
                  <input
                    type="date"
                    required
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="w-full bg-transparent text-stone-900 placeholder:text-stone-500 text-xs sm:text-sm font-normal font-['Inter'] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Your requirements */}
            <div className="self-stretch flex flex-col justify-start items-start gap-1.5 sm:gap-2">
              <label className="justify-start text-stone-900 text-xs font-medium font-['Inter']">
                Your requirements
              </label>
              <div className="self-stretch h-20 p-3.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-stone-200 focus-within:outline-stone-900 inline-flex justify-start items-start">
                <textarea
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="Tell us about your stay"
                  className="w-full h-full bg-transparent text-stone-900 placeholder:text-stone-500 text-xs sm:text-sm font-normal font-['Inter'] focus:outline-none resize-none"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                type="submit"
                className="h-12 px-6 bg-lime-400 hover:bg-lime-500 rounded-full inline-flex justify-center items-center gap-4 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer shadow-sm group"
              >
                <span className="text-stone-900 text-sm font-semibold font-['Inter']">
                  SEND BOOKING ENQUIRY
                </span>
                <Image
                  src="/icons/arrow-up-right.svg"
                  alt="arrow"
                  width={14}
                  height={14}
                  className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </button>

              <button
                type="button"
                onClick={handleWhatsAppBooking}
                className="h-12 px-5 bg-white hover:bg-stone-50 border border-stone-200 rounded-full inline-flex justify-center items-center gap-2.5 text-stone-800 text-xs sm:text-sm font-semibold transition-colors"
              >
                <Image
                  src="/icons/whatsapp.svg"
                  alt="WhatsApp"
                  width={18}
                  height={18}
                />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </form>
        )}

        {/* Footer Helpline Note */}
        <div className="self-stretch justify-start text-stone-500 text-xs font-normal font-['Inter'] leading-5 pt-1">
          Prefer to speak with us? Call{" "}
          <a
            href="tel:08043694577"
            className="text-stone-800 font-semibold hover:text-lime-700 underline underline-offset-2"
          >
            08043694577
          </a>
          . Please keep 0 before dialling the number.
        </div>
      </div>
    </div>
  );
}
