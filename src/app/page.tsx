// @/src/app/page.tsx
import React from 'react';
import Head from "next/head";
import HeroSection from "@/components/sections/hero-section";
import SermonCard from "@/components/sections/sermon-card";
import EventCard from "@/components/sections/event-card";
import NewsletterSignup from "@/components/sections/newsletter-signup";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// Import data
import { latestSermons } from "@/app/data/sermons";
import { upcomingEvents } from "@/app/data/events";
import { ministries } from "@/app/data/ministries";

// Import components
import MinistryCard from "@/components/MinistryCard";
import ServiceTimesBanner from "@/components/sections/service-times-banner";
import WelcomeSection from "@/components/sections/welcome-section";
import BibleVerseSection from "@/components/sections/bible-verse-section";
import TestimonialSection from "@/components/sections/testimonial-section";

export default function Home() {
  // SEO metadata
  const pageTitle = "CITAM Kitale | Christ is The Answer Ministries";
  const pageDescription = "CITAM Kitale is a vibrant church dedicated to sharing the love of Christ and making disciples in Kitale and beyond. Join us for Sunday services, youth programs, and community outreach.";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {/* ... (rest of the head metadata remains the same) */}
      </Head>

      <HeroSection />
      <ServiceTimesBanner />
      <WelcomeSection />
      <BibleVerseSection />

      {/* Latest Sermons Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3 text-center text-black">Latest <span className="text-red-600">Sermons</span></h2>
          <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Missed a service? Catch up on our recent messages and continue your spiritual journey.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestSermons.map((sermon) => (
              <SermonCard key={sermon.id} {...sermon} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="/sermons">View All Sermons</Link>
            </Button>
          </div>
        </div>      
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3 text-center text-black">Upcoming <span className="text-red-600">Events</span></h2>
          <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Join us for these special gatherings and activities as we grow together in faith and fellowship.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ministries Glimpse Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3 text-center text-black">Our <span className="text-red-600">Ministries</span></h2>
          <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Discover how you can get involved, serve others, and grow in your faith through our various ministries.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ministries.map((ministry) => (
              <MinistryCard key={ministry.id} ministry={ministry} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
              <Link href="/ministries">Explore All Ministries</Link>
            </Button>
          </div>
        </div>
      </section>

      <TestimonialSection />
      <NewsletterSignup />

      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            // ... (same as original JSON-LD script)
          })
        }}
      />
    </>
  );
}