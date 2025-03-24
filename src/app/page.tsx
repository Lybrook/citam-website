import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Button } from "../components/ui/button";
import HeroSection from "../components/sections/hero-section";
import SermonCard from "../components/sections/sermon-card";
import EventCard from "../components/sections/event-card";
import NewsletterSignup from "../components/sections/newsletter-signup";

// Define TypeScript interfaces for our data structures
interface Sermon {
  id: number;
  title: string;
  speaker: string;
  date: string;
  image: string;
  slug: string;
  description: string;
  link: string;
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

// Component for rendering a single ministry card with optimized styling
const MinistryCard: React.FC<{ ministry: Ministry }> = ({ ministry }) => (
  <div className="ministry-card group bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
    <div className="relative aspect-video">
      <Image 
        src={ministry.image} 
        alt={ministry.title} 
        fill 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmMWYxIi8+PC9zdmc+"
      />
    </div>
    <div className="p-6 border-t-2 border-red-600">
      <h3 className="text-xl font-bold mb-2 text-black">{ministry.title}</h3>
      <p className="mb-4 text-gray-700">{ministry.description}</p>
      <Button variant="link" asChild className="p-0 text-red-600 hover:text-red-800 font-semibold">
        <Link href={`/ministries#${ministry.anchor}`}>Learn More &rarr;</Link>
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
      speaker: "Reverend Joseph Kamau",
      date: "March 15, 2025",
      image: "/walkingInFaith.jpg",
      slug: "walking-in-faith",
      description: "A sermon about faith and trust in God.",
      link: "/sermons/walking-in-faith",
    },
    {
      id: 2,
      title: "The Power of Prayer",
      speaker: "Reverend Joseph Kamau",
      date: "March 8, 2025",
      image: "/powerOfPrayer.jpg",
      slug: "power-of-prayer",
      description: "Exploring the significance of prayer in our lives.",
      link: "/sermons/power-of-prayer",
    },
    {
      id: 3,
      title: "Grace and Mercy",
      speaker: "Reverend Joseph Kamau",
      date: "March 1, 2025",
      image: "/ctamKitale.jpg",
      slug: "grace-and-mercy",
      description: "A message on the grace and mercy of God.",
      link: "/sermons/grace-and-mercy",
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
      image: "/youthMinistry.jpg",
      slug: "youth-conference",
    },
    {
      id: 2,
      title: "Women's Retreat",
      date: "April 25, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "CITAM Kitale Gardens",
      image: "/inStepWithTheSpirit.jpg",
      slug: "womens-retreat",
    },
    {
      id: 3,
      title: "Men's Fellowship",
      date: "May 3, 2025",
      time: "8:00 AM - 12:00 PM",
      location: "CITAM Kitale Conference Room",
      image: "/menMinistry.jpg",
      slug: "mens-fellowship",
    },
  ];

  // Define ministry information for consistency
  const ministries: Ministry[] = [
    {
      id: 1,
      title: "Youth Ministry",
      description: "Empowering young people to live for Christ and make a difference in their generation.",
      image: "/youthMinistry.jpg",
      anchor: "youth",
    },
    {
      id: 2,
      title: "Children's Ministry",
      description: "Creating a fun and nurturing environment where children learn about God's love.",
      image: "/childrenMinistry.jpg",
      anchor: "children",
    },
    {
      id: 3,
      title: "Community Outreach",
      description: "Extending God's love through service and support to our local community.",
      image: "/pastor2.jpg",
      anchor: "outreach",
    },
  ];

  // SEO metadata
  const pageTitle = "CITAM Kitale | Christ is The Answer Ministries";
  const pageDescription = "CITAM Kitale is a vibrant church dedicated to sharing the love of Christ and making disciples in Kitale and beyond. Join us for Sunday services, youth programs, and community outreach.";

  return (
    <>
      <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content="CITAM, Christ is The Answer Ministries, church in Kitale, Christian fellowship, worship, Kitale church" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content="/church-building.jpg" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content="/church-building.jpg" />
      <link rel="canonical" href="https://citamkitale.org" />
      </Head>

      {/* Hero Section */}
      <HeroSection />

      {/* Service Times Banner - New Addition */}
      <section className="bg-red-600 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center md:text-left">
        <h3 className="text-xl font-bold">Join Us This Sunday</h3>
        <div className="flex flex-col sm:flex-row gap-6">
          <div>
          <span className="font-semibold block">First Service</span>
          <span>8:00 AM - 10:00 AM</span>
          </div>
          <div>
          <span className="font-semibold block">Second Service</span>
          <span>10:30 AM - 12:30 PM</span>
          </div>
          <div>
          <span className="font-semibold block">Youth Service</span>
          <span>10:30 AM - 12:30 PM</span>
          </div>
        </div>
        </div>
      </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Welcome to <span className="text-red-600">CITAM Kitale</span></h2>
          <p className="text-lg mb-6 text-gray-800">
          Christ is The Answer Ministries (CITAM) Kitale is a vibrant church dedicated to sharing the 
          love of Christ and making disciples in Kitale and beyond. Our mission is to know God and 
          make Him known through worship, fellowship, and service.
          </p>
          <p className="text-lg mb-6 text-gray-800">
          Whether you are exploring faith for the first time or looking for a church to call home, we invite you to join us this Sunday for an inspiring message and heartfelt worship experience.
          </p>
          <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            <Link href="/about">About Us</Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-red-600 text-red-600 hover:bg-red-50 hover:text-red-700">
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
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmMWYxIi8+PC9zdmc+"
          />
        </div>
        </div>
      </div>
      </section>

      {/* Bible Verse Section */}
      <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="verse-block max-w-3xl mx-auto text-center">
        <p className="text-2xl md:text-3xl italic">"For where two or three gather in my name, there am I with them."</p>
        <p className="text-right font-bold mt-4 text-red-400">Matthew 18:20</p>
        </div>
      </div>
      </section>

      {/* Latest Sermons Section */}
      <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-3 text-center text-black">Latest <span className="text-red-600">Sermons</span></h2>
        <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">Missed a service? Catch up on our recent messages and continue your spiritual journey.</p>
        
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
        <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">Join us for these special gatherings and activities as we grow together in faith and fellowship.</p>
        
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
        <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">Discover how you can get involved, serve others, and grow in your faith through our various ministries.</p>
        
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

      {/* Testimonial Section - New Addition */}
      <section className="py-16 md:py-24 bg-red-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Testimonials</h2>
        <div className="max-w-4xl mx-auto">
        <blockquote className="text-center">
          <p className="text-xl md:text-2xl italic mb-6">"CITAM Kitale has been a blessing to my family. The childrens ministry has helped my kids grow spiritually, and the worship experience is always uplifting."</p>
          <footer className="font-semibold">— Sarah Kimani, Member since 2021</footer>
        </blockquote>
        </div>
      </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSignup />

      {/* Structured data for SEO */}
      <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Church",
        "name": "CITAM Kitale",
        "alternateName": "Christ is The Answer Ministries Kitale",
        "url": "https://citamkitale.org",
        "logo": "https://citamkitale.org/logo.png",
        "image": "https://citamkitale.org/church-building.jpg",
        "description": "CITAM Kitale is a vibrant church dedicated to sharing the love of Christ and making disciples in Kitale and beyond.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "CITAM Kitale",
          "addressLocality": "Kitale",
          "addressRegion": "Trans Nzoia",
          "postalCode": "30200",
          "addressCountry": "Kenya"
        },
        "telephone": "+254-000-000000",
        "email": "info@citamkitale.org",
        "openingHours": "Su 08:00-12:30",
        "sameAs": [
          "https://facebook.com/citamkitale",
          "https://instagram.com/citamkitale",
          "https://youtube.com/citamkitale"
        ]
        })
      }}
      />
    </>
  );
}
