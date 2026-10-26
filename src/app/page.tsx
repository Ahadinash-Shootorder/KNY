"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import RoomsSection from "@/components/RoomsSection";
import MediaSection from "@/components/MediaSection";
import CustomBanner from "@/components/CustomBanner";
import UpdatesSection from "@/components/UpdatesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import WhatsAppFloating from "@/components/WhatsAppFloating";

export default function HomePage() {
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
      {/* Top Header / Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Sections matching Figma Design */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. About KNY Section */}
        <AboutSection />

        {/* 3. Amenities Section */}
        <AmenitiesSection />

        {/* 4. Premium Rooms Section */}
        <RoomsSection onOpenBooking={handleOpenBooking} />

        {/* 5. Media Gallery Section */}
        <MediaSection />

        {/* 6. Custom Requirements Call-to-Action */}
        <CustomBanner onOpenBooking={() => handleOpenBooking()} />

        {/* 7. Latest Updates Section */}
        <UpdatesSection />

        {/* 8. Testimonials Section */}
        <TestimonialsSection />

        {/* 9. Newsletter Section */}
        <NewsletterSection />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Interactive Booking Enquiry Popup matching Figma */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        defaultRoomType={selectedRoom}
      />

      {/* Floating CHAT ON WHATSAPP Button for every screen size */}
      <WhatsAppFloating />
    </div>
  );
}
