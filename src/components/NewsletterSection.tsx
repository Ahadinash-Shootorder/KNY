"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setIsSubmitted(false);
      }, 4000);
    }
  };

  return (
    <section className="w-full bg-white border-t border-stone-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-12 lg:gap-20">
          {/* Left Text */}
          <div className="max-w-[570px] flex flex-col items-start gap-2.5 sm:gap-3.5">
            <span className="text-stone-900 text-sm sm:text-base font-semibold tracking-wider uppercase">
              KEEP IN TOUCH
            </span>
            <h2 className="text-stone-900 text-3xl sm:text-4xl font-medium font-crimson leading-tight sm:leading-10 tracking-tight">
              Subscribe to our newsletter
            </h2>
          </div>

          {/* Right Input Form */}
          <div className="w-full lg:flex-1 max-w-xl">
            {isSubmitted ? (
              <div className="h-14 px-6 bg-lime-50 border border-lime-300 rounded-full flex items-center text-lime-900 text-sm font-medium animate-in fade-in">
                ✓ Thank you for subscribing! We will keep you updated.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
              >
                <div className="flex-1 relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full h-12 sm:h-14 px-5 sm:px-6 rounded-full border border-stone-200 focus:outline-none focus:border-stone-900 text-stone-900 placeholder:text-stone-400 text-sm font-normal transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="h-12 px-6 sm:px-7 bg-lime-400 hover:bg-lime-500 rounded-full shadow-[0px_8px_20px_0px_rgba(0,0,0,0.08)] inline-flex items-center justify-center gap-4 text-stone-900 text-sm font-semibold transition-all duration-200 transform hover:-translate-y-0.5 flex-shrink-0 group"
                >
                  <span>SUBSCRIBE</span>
                  <Image
                    src="/icons/arrow-up-right.svg"
                    alt="arrow"
                    width={14}
                    height={14}
                    className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
