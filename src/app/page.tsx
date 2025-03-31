import React from "react";
import Head from "next/head";
import HeroSection from "../components/sections/hero-section";
import SermonCard from "../components/SermonCard";
import EventCard from "../components/sections/event-card";
import NewsletterSignup from "../components/sections/newsletter-signup";
import { Button } from "../components/ui/button";
import Link from "next/link";
import { latestSermons } from "./data/sermons";
import { upcomingEvents } from "./data/events";
import { ministries } from "./data/ministries";
import MinistryCard from "../components/MinistryCard";
import ServiceTimesBanner from "../components/sections/service-times-banner";
import WelcomeSection from "../components/sections/welcome-section";
import BibleVerseSection from "../components/sections/bible-verse-section";
import TestimonialSection from "../components/sections/testimonials";


// Reusable Section component for consistent layout
const Section: React.FC<{
  title: React.ReactNode;
  description?: string;
  children: React.ReactNode;
  bgClass?: string;
}> = ({ title, description, children, bgClass = "bg-white" }) => (
  <section className={`py-16 md:py-24 ${bgClass}`}>
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center text-black">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          {description}
        </p>
      )}
      {children}
    </div>
  </section>
);

export default function Home() {
  const pageTitle = "CITAM Kitale | Christ is The Answer Ministries";
  const pageDescription =
    "CITAM Kitale is a vibrant church dedicated to sharing the love of Christ and making disciples in Kitale and beyond. Join us for Sunday services, youth programs, and community outreach.";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="CITAM, Kitale, church, Christian, ministry, gospel, Jesus, Christ, worship, sermons, events"
        />
        <meta name="author" content="CITAM Kitale" />
        <meta name="creator" content="CITAM Kitale" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="max-image-preview" content="large" />
        <meta name="max-video-preview" content="-1" />
        <meta name="max-snippet" content="-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </Head>

      <main>
        <HeroSection />
        <ServiceTimesBanner />
        <WelcomeSection />
        <BibleVerseSection />

        {/* Latest Sermons */}
        <Section
          title={
            <>
              Latest <span className="text-red-600">Sermons</span>
            </>
          }
          description="Missed a service? Catch up on our recent messages and continue your spiritual journey."
          bgClass="bg-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestSermons.map((sermon) => (
              <SermonCard
                key={sermon.id}
                sermon={sermon}
                className="shadow-sm hover:shadow-md transition-shadow duration-300"
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-6 py-2"
            >
              <Link href="/sermons">View All Sermons</Link>
            </Button>
          </div>
        </Section>

        {/* Upcoming Events */}
        <Section
          title={
            <>
              Upcoming <span className="text-red-600">Events</span>
            </>
          }
          description="Join us for these special gatherings and activities as we grow together in faith and fellowship."
          bgClass="bg-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-6 py-2"
            >
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </Section>

        {/* Ministries */}
        <Section
          title={
            <>
              Our <span className="text-red-600">Ministries</span>
            </>
          }
          description="Discover how you can get involved, serve others, and grow in your faith through our various ministries."
          bgClass="bg-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ministries.map((ministry) => (
              <MinistryCard
                key={ministry.id}
                ministry={ministry}
                className="shadow-sm hover:shadow-md transition-shadow duration-300"
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-6 py-2"
            >
              <Link href="/ministries">Explore All Ministries</Link>
            </Button>
          </div>
        </Section>

        <TestimonialSection />
        <NewsletterSignup />
      </main>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "CITAM Kitale",
            description: pageDescription,
            url: "https://citamkitale.org",
            logo: "/logo.png",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kitale",
              addressCountry: "KE",
            },
          }),
        }}
      />
    </>
  );
}