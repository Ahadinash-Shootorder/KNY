import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KNY Service Apartments | Luxury 2 & 3 BHK Suites in HITECH City, Hyderabad",
  description:
    "Service apartments in the center of the business city. Spacious 2 & 3 BHK suites in HITECH City, Hyderabad, designed for comfort and convenience.",
  keywords: [
    "KNY Service Apartments",
    "Service Apartments Hyderabad",
    "Hitech City Service Apartments",
    "Luxury 2 BHK 3 BHK suites Hyderabad",
    "KNY Stay",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=IBM+Plex+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen bg-white text-stone-900 font-['Inter',sans-serif]">
        {children}
      </body>
    </html>
  );
}
