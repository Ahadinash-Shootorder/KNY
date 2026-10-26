# KNY Service Apartments - Website

A modern, high-performance, fully responsive website for **KNY Service Apartments** (HITECH City, Hyderabad) built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

Faithfully translated from the official Figma design with pixel-perfection, matching typography, colors, layout, and fully responsive across mobile, tablet, laptop, and ultra-wide screens.

---

## 🚀 Quick Start

### 1. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build & Start
```bash
npm run build
npm run start
```

---

## 🎨 Design System & Highlights

- **Fonts**:
  - `Inter`: Primary UI, nav, labels, body text
  - `Crimson Pro`: Elegant serif headings, pricing, and hero branding
  - `IBM Plex Sans`: Amenities labels
  - `Playfair Display`: Testimonial pull-quote styling
- **Color Palette**:
  - Brand Accent: `#A3E635` (Lime 400)
  - Dark Headings: `#1C1917` (Stone 900)
  - Secondary Text: `#44403C` (Neutral 700) / `#78716C` (Stone 500)
  - Section Backgrounds: `#FFFFFF` (White) & `#F5F6F0` (Stone 100 / Warm Cream)
  - Footer: `#404040` (Neutral 700)
- **Features Included**:
  - **Sticky Navbar** with responsive mobile drawer menu & rooms dropdown
  - **Hero Section** with living room background, custom Figma gradient overlay, metrics badges, and bottom locator
  - **About KNY Section** with location pill tag (`HITECH CITY, HYDERABAD`)
  - **Amenities Section** (Outdoor Pool, Private Parking, Gym, Currency Exchange)
  - **Premium Rooms Section** (3 Bedroom Apartment @ ₹15,000 & 2 Bedroom Apartment @ ₹12,500) with price comparisons
  - **Media Gallery Section** ("A closer look at KNY" + 4 feature cards: Master Bedroom, Twin Room, Living Room, Property Detail) with interactive lightbox
  - **Custom Requirements Banner** ("Have any custom requirements? Get a Free Quote")
  - **Latest Updates / Blog Section** with 3 structured articles and timestamps
  - **Testimonials Section** with quotation marks and client reviews
  - **Newsletter Subscription** with interactive submit feedback
  - **Rich Footer** with quick links, contacts, legal terms, and credit to ShootOrder
  - **Interactive Booking Modal** allowing guests to select dates, room types, or book via WhatsApp
  - **Floating WhatsApp Quick Chat Button** with customized pre-filled message

---

## 📁 Pages & Routes

- **`/` (Home Page)**:
  - Sticky Navbar with logo, quick contacts, and Room Dropdown
  - Hero section with live booking CTA
  - About KNY & HITECH City location overview
  - Circular Amenities with custom iconography
  - Premium Rooms showcase with direct enquiry and link to room pages
  - Property Media Showcase with lightbox preview
  - Custom Quote CTA Banner
  - Latest Updates & Property News
  - Guest Reviews & Testimonials
  - Newsletter Subscription
  - Comprehensive Footer

- **`/about` (About Us Page)**:
  - Hero banner with breadcrumb navigation (`HOME / ABOUT US`)
  - Property Story with lounge photography and 3 key metrics (`2 & 3 BHK`, `120 ROOMS`, `24/7 HELP DESK`)
  - Room Choices (2 BHK & 3 BHK cards with pricing)
  - Detailed circular amenities with descriptions
  - "At Home in Hyderabad" location section
  - Full photo gallery CTA card with interactive preview
  - Newsletter & Footer

- **`/rooms/2-bedroom` (2 Bedroom Apartment Page)**:
  - Hero banner with breadcrumbs (`HOME / 2 BEDROOM APARTMENT`)
  - "At Home in Hyderabad" location & contact block
  - Photo gallery cards (Master Bedroom, Twin Room, Living Room) with lightbox
  - Amenities grid ("Comfort beyond your apartment")
  - 2 BHK split features section incorporating `calendar.svg`, `headphones.svg`, and `Rooms-Dropdown.svg`
  - Newsletter & Footer

- **`/rooms/3-bedroom` (3 Bedroom Apartment Page)**:
  - Hero banner with breadcrumbs (`HOME / 3 BEDROOM APARTMENT`)
  - "At Home in Hyderabad" location & contact block
  - Photo gallery cards with lightbox
  - Amenities grid ("Comfort beyond your apartment")
  - 3 BHK split features section with spacious layout, 3 BHK imagery, and SVG badges
  - Newsletter & Footer

- **`/location` (Location & Micro-Corridor Page)**:
  - Hero Section: "Stay Minutes from Cyberabad’s Tech Corridor" with quick commute badges (Tech Mahindra, Medicover, RGIA)
  - Key Coordinates Dispatch Card with live front desk indicator, address copy button with clipboard feedback, GPS coordinates, and Ola/Uber gate drop guidance
  - Strategic Micro-Location Radar Map with concentric walking (<15m) and driving (<10m) zones, glowing KNY beacon, surrounding landmarks, and live Google Maps directions
  - Commute & Access Index with interactive filter tabs (Tech & Corporate, Healthcare, Conventions & Expos, Transit & Airport) and commute times
  - The Executive Advantage (Zero Commute Fatigue, White Fields Sanctuary, Chauffeur & Airport Dispatch)
  - Around the Neighborhood (Culture, Retail & Gastronomy: Serai Kitchen, Sarath City Capital Mall, Shilparamam, Durgam Cheruvu)
  - Booking Modal & Footer

---

## 📁 Project Structure

```
├── public/
│   ├── icons/          # Figma SVG icons (phone, arrows, whatsapp, map-pin, etc.)
│   └── images/         # Property photography, calendar.svg, headphones.svg, Rooms-Dropdown.svg
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Home page
│   │   ├── about/page.tsx              # About Us page
│   │   ├── rooms/
│   │   │   ├── 2-bedroom/page.tsx      # 2 Bedroom Apartment details page
│   │   │   └── 3-bedroom/page.tsx      # 3 Bedroom Apartment details page
│   │   ├── layout.tsx                  # Root layout with Google Fonts
│   │   └── globals.css                 # Tailwind directives & design tokens
│   └── components/
│       ├── Navbar.tsx                  # Responsive sticky header with Rooms Dropdown
│       ├── BookingModal.tsx            # Exact Figma booking enquiry modal
│       ├── WhatsAppFloating.tsx        # Global floating WhatsApp button
│       ├── rooms/
│       │   ├── RoomHero.tsx            # Reusable Room Hero banner with breadcrumbs
│       │   ├── RoomGallery.tsx         # Reusable Room photo gallery with lightbox
│       │   └── RoomFeaturesSplit.tsx   # Reusable BHK features split with Figma SVGs
│       └── about/
│           ├── AboutHero.tsx           # Reusable About Hero banner
│           ├── AboutStory.tsx          # About Story & metrics section
│           ├── AboutRooms.tsx          # Reusable Room cards section
│           ├── AboutAmenities.tsx      # Reusable Amenities circular grid
│           ├── AboutLocation.tsx       # Reusable Location & address section
│           └── AboutGalleryBanner.tsx  # Gallery showcase card
```
├── src/
│   ├── app/
│   │   ├── globals.css # Tailwind & typography declarations
│   │   ├── layout.tsx  # Google fonts & SEO metadata
│   │   └── page.tsx    # Landing page layout
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── AboutSection.tsx
│       ├── AmenitiesSection.tsx
│       ├── RoomsSection.tsx
│       ├── MediaSection.tsx
│       ├── CustomBanner.tsx
│       ├── UpdatesSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── NewsletterSection.tsx
│       ├── Footer.tsx
│       ├── BookingModal.tsx
│       └── WhatsAppFloating.tsx
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```
