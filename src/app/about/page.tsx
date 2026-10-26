"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutRooms from "@/components/about/AboutRooms";
import AboutAmenities from "@/components/about/AboutAmenities";
import AboutLocation from "@/components/about/AboutLocation";
import AboutGalleryBanner from "@/components/about/AboutGalleryBanner";
import CustomBanner from "@/components/CustomBanner";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import WhatsAppFloating from "@/components/WhatsAppFloating";

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<string | undefined>(
    undefined
  );

  const handleOpenBooking = (roomType?: string) => {
    setSelectedRoom(roomType);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedRoom(undefined);
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 flex flex-col selection:bg-lime-400 selection:text-stone-900">
      {/* Header with activePage="about" */}
      <Navbar activePage="about" onOpenBooking={handleOpenBooking} />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero Banner */}
        <AboutHero />

        {/* 2. Room to live. Space to feel at home. + Stats */}
        <AboutStory />

        {/* 3. Room Choices (2 BHK & 3 BHK) */}
        <AboutRooms onOpenBooking={handleOpenBooking} />

        {/* 4. Amenities (Comfort beyond your apartment) */}
        <AboutAmenities />

        {/* 5. Location (A comfortable base in HITECH City) */}
        <AboutLocation />

        {/* 6. Photo Gallery Feature */}
        <AboutGalleryBanner />

        {/* 7. Custom Requirements Banner */}
        <CustomBanner
          tag="LET’S PLAN YOUR STAY"
          headline="A few nights or a longer stay?"
          subtext="Tell us your dates and requirements. We’ll help you find your space at KNY."
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 8. Newsletter Section */}
        <NewsletterSection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        defaultRoomType={selectedRoom}
      />

      {/* Global Floating WhatsApp Button */}
      <WhatsAppFloating />
    </div>
  );
}
