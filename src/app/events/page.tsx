"use client"

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
} from "../../components/ui/card";
import Image from 'next/image';
import { Button } from "../../components/ui/button";
import { Calendar, Clock, MapPin } from 'lucide-react';
import Header from '../../components/navigation/header';
import { upcomingEvents } from '@/src/app/data/events';

const EventsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>CITAM Kitale - Upcoming Church Events</title>
        <meta 
          name="description" 
          content="Discover upcoming events at CITAM Kitale. Join our youth conferences, women's retreats, and men's fellowships." 
        />
        <meta 
          name="keywords" 
          content="CITAM Kitale, church events, youth conference, women's retreat, men's fellowship, Christian events" 
        />
        <link 
          rel="canonical" 
          href="https://www.citamkitale.org/events" 
        />
        <meta property="og:title" content="CITAM Kitale Events" />
        <meta 
          property="og:description" 
          content="Explore our upcoming church events and join our community." 
        />
        <meta property="og:type" content="website" />
      </Head>

      <Header />
      
      <main className="pt-16 min-h-screen bg-white text-black">
        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-red-800 mb-4">Upcoming Events</h1>
            <p className="text-gray-700 max-w-xl mx-auto">
              Join us for worship, fellowship, and community service. Check out our upcoming events below.
            </p>
          </div>

          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <Card 
                key={event.id} 
                className="border-red-100 hover:shadow-md transition-shadow duration-300"
              >
                <Image 
                  src={event.image} 
                  alt={event.title} 
                  width={800} 
                  height={400} 
                  className="w-full h-48 object-cover rounded-t-lg" 
                />
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-red-700" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-red-700" />
                      <span className="font-medium">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-red-700" />
                      <span className="font-medium">{event.location}</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link href={`/register/${event.slug}`} passHref>
                      <Button 
                        variant="default" 
                        className="w-full bg-red-800 hover:bg-red-900 text-white"
                      >
                        Register for Event
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Can&apos;t find an event that suits you? 
              <Link 
                href="/contact" 
                className="text-red-800 font-semibold ml-2 hover:underline"
              >
                Contact Us
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default EventsPage;