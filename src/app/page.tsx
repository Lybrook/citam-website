import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button";
import HeroSection from "@/components/sections/hero-section";
import SermonCard from "@/components/sections/sermon-card";
import EventCard from "@/components/sections/event-card";
import NewsletterSignup from "@/components/sections/newsletter-signup";

// Define TypeScript interfaces for our data structures
interface Sermon {
  id: number;
  title: string;
  speaker: string;
  date: string;
  image: string;
  slug: string;
}

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  slug: string;
}

interface Ministry {
  id: number;
  title: string;
  description: string;
  image: string;
  anchor: string;
}

// Component for rendering a single ministry card
const MinistryCard: React.FC<{ ministry: Ministry }> = ({ ministry }) => (
  <div className="ministry-card">
    <div className="relative aspect-video">
      <Image 
        src={ministry.image} 
        alt={ministry.title} 
        fill 
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{ministry.title}</h3>
      <p className="mb-4">{ministry.description}</p>
      <Button variant="link" asChild className="p-0">
        <Link href={`/ministries#${ministry.anchor}`}>Learn More</Link>
      </Button>
    </div>
  </div>
);

/**
 * Home component for the CITAM Kitale website
 * Displays the main landing page with various sections
 */
export default function Home(): React.ReactElement {
  // Sample data for the latest sermons
  const latestSermons: Sermon[] = [
    {
      id: 1,
      title: "Walking in Faith",
      speaker: "Pastor John Doe",
      date: "March 15, 2025",
      image: "/sermons/sermon1.jpg",
      slug: "walking-in-faith",
    },
    {
      id: 2,
      title: "The Power of Prayer",
      speaker: "Pastor Jane Smith",
      date: "March 8, 2025",
      image: "/sermons/sermon2.jpg",
      slug: "power-of-prayer",
    },
    {
      id: 3,
      title: "Grace and Mercy",
      speaker: "Pastor John Doe",
      date: "March 1, 2025",
      image: "/sermons/sermon3.jpg",
      slug: "grace-and-mercy",
    },
  ];

  // Sample data for upcoming events
  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: "Youth Conference",
      date: "April 10-12, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "CITAM Kitale Main Hall",
      image: "/events/event1.jpg",
      slug: "youth-conference",
    },
    {
      id: 2,
      title: "Women's Retreat",
      date: "April 25, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "CITAM Kitale Gardens",
      image: "/events/event2.jpg",
      slug: "womens-retreat",
    },
    {
      id: 3,
      title: "Men's Fellowship",
      date: "May 3, 2025",
      time: "8:00 AM - 12:00 PM",
      location: "CITAM Kitale Conference Room",
      image: "/events/event3.jpg",
      slug: "mens-fellowship",
    },
  ];

  // Define ministry information for consistency
  const ministries: Ministry[] = [
    {
      id: 1,
      title: "Youth Ministry",
      description: "Empowering young people to live for Christ and make a difference in their generation.",
      image: "/ministries/youth.jpg",
      anchor: "youth",
    },
    {
      id: 2,
      title: "Children's Ministry",
      description: "Creating a fun and nurturing environment where children learn about God's love.",
      image: "/ministries/children.jpg",
      anchor: "children",
    },
    {
      id: 3,
      title: "Community Outreach",
      description: "Extending God's love through service and support to our local community.",
      image: "/ministries/outreach.jpg",
      anchor: "outreach",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Welcome Section */}
      <section className="page-section bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to CITAM Kitale</h2>
              <p className="text-lg mb-6">
                Christ is The Answer Ministries (CITAM) Kitale is a vibrant church dedicated to sharing the 
                love of Christ and making disciples in Kitale and beyond. Our mission is to know God and 
                make Him known through worship, fellowship, and service.
              </p>
              <p className="text-lg mb-6">
                Whether you're exploring faith for the first time or looking for a church to call home, 
                we invite you to join us this Sunday for an inspiring message and heartfelt worship experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/about">About Us</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Visit Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/church-building.jpg"
                alt="CITAM Kitale Church Building"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bible Verse Section */}
      <section className="page-section bg-primary/5">
        <div className="container">
          <div className="verse-block max-w-3xl mx-auto text-center">
            <p className="text-2xl md:text-3xl">"For where two or three gather in my name, there am I with them."</p>
            <p className="text-right font-bold mt-4">Matthew 18:20</p>
          </div>
        </div>
      </section>

      {/* Latest Sermons Section */}
      <section className="page-section bg-background">
        <div className="container">
          <h2 className="section-heading">Latest Sermons</h2>
          <p className="section-subheading">Missed a service? Catch up on our recent messages.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestSermons.map((sermon) => (
              <SermonCard key={sermon.id} sermon={sermon} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild>
              <Link href="/sermons">View All Sermons</Link>
            </Button>
          </div>
        </div>      
      </section>

      {/* Upcoming Events Section */}
      <section className="page-section bg-muted">
        <div className="container">
          <h2 className="section-heading">Upcoming Events</h2>
          <p className="section-subheading">Join us for these special gatherings and activities.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild>
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ministries Glimpse Section */}
      <section className="page-section bg-background">
        <div className="container">
          <h2 className="section-heading">Our Ministries</h2>
          <p className="section-subheading">Discover how you can get involved and grow in your faith.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ministries.map((ministry) => (
              <MinistryCard key={ministry.id} ministry={ministry} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild>
              <Link href="/ministries">Explore All Ministries</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSignup />
    </>
  );
}