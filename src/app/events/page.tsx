"use client"

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Card, 
  CardContent, 
  CardHeader, 
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Calendar, Clock, MapPin } from 'lucide-react';
import Header from '../../components/navigation/header';

interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  description: string;
  registrationLink: string;
  location?: string;
}

const events: Event[] = [
  {
    id: 1,
    name: "Sunday Service",
    date: "Every Sunday",
    time: "8:00 AM - 10:00 AM",
    description: "Join us for our Sunday service filled with worship and fellowship.",
    registrationLink: "/register/sunday-service",
    location: "Main Church Sanctuary"
  },
  {
    id: 2,
    name: "Midweek Prayer",
    date: "Wednesdays",
    time: "5:30 PM - 7:00 PM",
    description: "Come together for a time of prayer and intercession.",
    registrationLink: "/register/midweek-prayer",
    location: "Prayer Room"
  },
  {
    id: 3,
    name: "Community Outreach",
    date: "Last Saturday of the Month",
    time: "10:00 AM - 2:00 PM",
    description: "Join us as we serve our community and share the love of Christ.",
    registrationLink: "/register/community-outreach",
    location: "Various Community Locations"
  },
];

const EventsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>CITAM Kitale - Upcoming Church Events</title>
        <meta 
          name="description" 
          content="Discover upcoming events at CITAM Kitale. Join our Sunday services, midweek prayers, and community outreach programs." 
        />
        <meta 
          name="keywords" 
          content="CITAM Kitale, church events, Sunday service, prayer meeting, community outreach, Christian events" 
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
              Join us for worship, prayer, and community service. Check out our upcoming events below.
            </p>
          </div>

          <div className="space-y-6">
            {events.map((event) => (
              <Card 
                key={event.id} 
                className="border-red-100 hover:shadow-md transition-shadow duration-300"
              >
                <CardHeader 
                  cardTitle={event.name} 
                  description={event.description} 
                />
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
                    {event.location && (
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-5 h-5 text-red-700" />
                        <span className="font-medium">{event.location}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-6">
                    <Link href={event.registrationLink} passHref>
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