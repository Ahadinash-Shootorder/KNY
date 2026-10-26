"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import RoomHero from "@/components/rooms/RoomHero";
import AboutLocation from "@/components/about/AboutLocation";
import RoomGallery from "@/components/rooms/RoomGallery";
import AboutAmenities from "@/components/about/AboutAmenities";
import RoomFeaturesSplit from "@/components/rooms/RoomFeaturesSplit";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import WhatsAppFloating from "@/components/WhatsAppFloating";

export default function TwoBedroomPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 flex flex-col selection:bg-lime-400 selection:text-stone-900">
      {/* Header with activePage="rooms" */}
      <Navbar activePage="rooms" onOpenBooking={handleOpenBooking} />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero Section */}
        <RoomHero
          breadcrumb="2 BEDROOM APARTMENT"
          title="2 Bedroom Apartment"
          description="Apartment-style comfort in HITECH City, Hyderabad. A welcoming space for short visits and longer stays."
          onOpenBooking={handleOpenBooking}
        />

        {/* 2. Location (At Home in Hyderabad) */}
        <AboutLocation bgClass="bg-[#F5F6F0]" showEmail={true} />

        {/* 3. Photo Gallery (A closer look at KNY) */}
        <RoomGallery />

        {/* 4. Amenities (Comfort beyond your apartment) */}
        <AboutAmenities />

        {/* 5. 2 BHK Features Split */}
        <RoomFeaturesSplit
          roomTag="2 BHK AT KNY"
          description="Settle into a spacious 2 Bedroom Apartment at KNY Service Apartments. Whether you're in Hyderabad for business, a short visit or a longer stay, enjoy the comfort of apartment-style living in HITECH City."
          bhkLabel="2 BHK"
          image="/images/about-living.jpg"
          onOpenBooking={handleOpenBooking}
        />

        {/* 6. Newsletter Section */}
        <NewsletterSection />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Interactive Booking Enquiry Popup */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        defaultRoomType="2 Bedroom Apartment"
      />

      {/* Global Floating WhatsApp Button */}
      <WhatsAppFloating />
    </div>
  );
}
