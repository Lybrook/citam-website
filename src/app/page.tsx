"use client"

import React from "react";
import Head from "next/head";
import HeroSection from "../components/sections/hero-section";
import Header from "../components/navigation/header";
import Footer from "../components/navigation/footer";
import { ThemeProvider } from "../components/ui/theme-provider";
import { useScroll } from "../hooks"; // Import the useScroll hook

import SermonCard from "../components/sections/sermon-card";
import EventCard from "../components/sections/event-card";
import NewsletterSignup from "../components/sections/newsletter-signup";
import { Button } from "../components/ui/button";
import Link from "next/link";

// Import data
import { latestSermons } from "./data/sermons";
import { upcomingEvents } from "./data/events";
import { ministries } from "./data/ministries";

// Import components
import MinistryCard from "../components/MinistryCard";
import ServiceTimesBanner from "../components/sections/service-times-banner";
import WelcomeSection from "../components/sections/welcome-section";
import BibleVerseSection from "../components/sections/bible-verse-section";
import TestimonialSection from "../components/sections/testimonials";

// @/src/app/page.tsx
// import React from "react";
// import Head from "next/head";
// import Link from "next/link";
// import { ThemeProvider } from "@/components/ui/theme-provider";
// import { Button } from "@/components/ui/button";
// import { useScroll } from "@/hooks";

// // Components
// import Header from "@/components/navigation/header";
// import Footer from "@/components/navigation/footer";
// import HeroSection from "@/components/sections/hero-section";
// import ServiceTimesBanner from "@/components/sections/service-times-banner";
// import WelcomeSection from "@/components/sections/welcome-section";
// import BibleVerseSection from "@/components/sections/bible-verse-section";
// import SermonCard from "@/components/sections/sermon-card";
// import EventCard from "@/components/sections/event-card";
// import MinistryCard from "@/components/sections/ministry-card";
// import TestimonialSection from "@/components/sections/testimonials";
// import NewsletterSignup from "@/components/sections/newsletter-signup";

// // Data
// import { latestSermons } from "@/data/sermons";
// import { upcomingEvents } from "@/data/events";
// import { ministries } from "@/data/ministries";

export default function Home() {
  const isScrolled = useScroll();

  const pageMetadata = {
    title: "CITAM Kitale | Christ is The Answer Ministries",
    description: "CITAM Kitale is a vibrant church dedicated to sharing the love of Christ and making disciples in Kitale and beyond. Join us for Sunday services, youth programs, and community outreach."
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Head>
        <title>{pageMetadata.title}</title>
        <meta name="description" content={pageMetadata.description} />
        {/* Additional SEO metadata */}
      </Head>

      <Header isScrolled={isScrolled} />
      
      <main className="pt-16 min-h-screen">
        <HeroSection />
        <ServiceTimesBanner />
        <WelcomeSection />
        <BibleVerseSection />

        {/* Latest Sermons Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader 
              title="Latest Sermons" 
              description="Missed a service? Catch up on our recent messages and continue your spiritual journey."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestSermons.map((sermon) => (
                <SermonCard key={sermon.id} sermon={sermon} />
              ))}
            </div>

            <SectionButton href="/sermons" label="View All Sermons" />
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="py-16 md:py-24 bg-gray-100">
          <div className="container mx-auto px-4">
            <SectionHeader 
              title="Upcoming Events" 
              description="Join us for these special gatherings and activities as we grow together in faith and fellowship."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>

            <SectionButton href="/events" label="View All Events" />
          </div>
        </section>

        {/* Ministries Glimpse Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader 
              title="Our Ministries" 
              description="Discover how you can get involved, serve others, and grow in your faith through our various ministries."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ministries.map((ministry) => (
                <MinistryCard key={ministry.id} ministry={ministry} />
              ))}
            </div>

            <SectionButton href="/ministries" label="Explore All Ministries" />
          </div>
        </section>

        <TestimonialSection />
        <NewsletterSignup />
      </main>

      <Footer />

      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Church",
            "name": "CITAM Kitale",
            "description": pageMetadata.description,
            // Add more structured data details
          }),
        }}
      />
    </ThemeProvider>
  );
}

// Reusable Component for Section Headers
const SectionHeader: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <>
    <h2 className="text-3xl font-bold mb-3 text-center text-black">
      {title.split(" ")[0]} <span className="text-red-600">{title.split(" ")[1]}</span>
    </h2>
    <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">
      {description}
    </p>
  </>
);

// Reusable Component for Section Buttons
const SectionButton: React.FC<{ href: string; label: string }> = ({ href, label }) => (
  <div className="text-center mt-12">
    <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
      <Link href={href}>{label}</Link>
    </Button>
  </div>
);