"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import LocationHero from "@/components/location/LocationHero";
import LocationMicroMap from "@/components/location/LocationMicroMap";
import LocationCommuteIndex from "@/components/location/LocationCommuteIndex";
import LocationExecutiveAdvantage from "@/components/location/LocationExecutiveAdvantage";
import LocationNeighborhood from "@/components/location/LocationNeighborhood";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import WhatsAppFloating from "@/components/WhatsAppFloating";

export default function LocationPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingRoomType, setBookingRoomType] = useState<string>("2 Bedroom Apartment");

  const handleOpenBooking = (roomType?: string) => {
    if (roomType) {
      setBookingRoomType(roomType);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 flex flex-col selection:bg-lime-400 selection:text-stone-900">
      {/* 1. Header with activePage="location" */}
      <Navbar activePage="location" onOpenBooking={handleOpenBooking} />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* 2. Hero Section: At Home in Hyderabad + Key Coordinates Card */}
        <LocationHero onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Micro-Location Radar Map: Surrounding Corridor */}
        <LocationMicroMap />

        {/* 4. Commute & Access Index: Minutes to Every Crucial Destination */}
        <LocationCommuteIndex />

        {/* 5. Executive Advantage: Designed for Prolonged Stays */}
        <LocationExecutiveAdvantage />

        {/* 6. Around the Neighborhood: Culture, Retail & Gastronomy */}
        <LocationNeighborhood />
      </main>

      {/* 7. Reusable Footer */}
      <Footer />

      {/* 8. Reusable Booking Enquiry Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        defaultRoomType={bookingRoomType}
      />

      {/* 9. Global Floating WhatsApp Button */}
      <WhatsAppFloating />
    </div>
  );
}
