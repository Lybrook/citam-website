import React from 'react';
import EventCard from '../EventCard';
import { Button } from '../ui/button';
import Link from 'next/link';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  link: string;
  name: string; // Added missing property
  time: string; // Added missing property
  registrationLink: string; // Added missing property
}


const UpcomingEvents: React.FC<{ events: Event[] }> = ({ events }) => {
  if (!events || events.length === 0) {
    return (
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3 text-center text-black">Upcoming <span className="text-red-600">Events</span></h2>
          <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">No upcoming events found.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-3 text-center text-black">Upcoming <span className="text-red-600">Events</span></h2>
        <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">Join us for our upcoming events and be part of our community.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
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
  );
};

export default UpcomingEvents;
