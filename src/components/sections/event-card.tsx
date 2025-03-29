"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin, Share2 } from "lucide-react";
import { Button } from "../ui/button";

import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  slug: string;
  description?: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const { title, date, time, location, image, slug, description } = event;

  return (
    <Card className="h-full flex flex-col overflow-hidden border-red-800 border-2 hover:shadow-lg transition-shadow duration-300">
      {/* Image Container with optimized next/image */}
      <div className="relative w-full h-60 overflow-hidden">
        <Image
          src={image}
          alt={`${title} - Church event on ${date}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
          priority={false}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
        />
        <Badge className="absolute top-2 left-2 bg-red-700 hover:bg-red-800 text-white">
          Upcoming
        </Badge>
      </div>

      {/* Event Details */}
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>

      <CardContent className="pb-2 flex-grow">
        <div className="space-y-3">
          <div className="flex items-center text-sm">
            <Calendar className="w-4 h-4 mr-2 text-red-700" />
            <span className="text-gray-800">{date}</span>
          </div>

          <div className="flex items-center text-sm">
            <Clock className="w-4 h-4 mr-2 text-red-700" />
            <span className="text-gray-800">{time}</span>
          </div>

          <div className="flex items-center text-sm">
            <MapPin className="w-4 h-4 mr-2 text-red-700" />
            <span className="text-gray-800 line-clamp-1" title={location}>
              {location}
            </span>
          </div>
        </div>
      </CardContent>

      {/* Buttons */}
      <CardFooter className="pt-4 gap-2 flex flex-col sm:flex-row">
        <Button
          asChild
          className="flex-1 bg-red-700 hover:bg-red-800 text-white border-none"
        >
          <Link
            href={`/events/${slug}`}
            aria-label={`View details for ${title} event`}
          >
            View Event
          </Link>
        </Button>

        <Button
          asChild
          variant="outline"
          className="flex-1 border-red-700 text-red-700 hover:bg-red-50 hover:text-red-800"
        >
          <Link
            href="/contact#calendar"
            aria-label={`Add ${title} to your calendar`}
          >
            Add to Calendar
          </Link>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="hidden sm:flex text-red-700 hover:bg-red-50 hover:text-red-800"
          aria-label={`Share ${title} event`}
          onClick={() => {
            if (navigator.share) {
              navigator
                .share({
                  title: title,
                  text: `Check out this event: ${title}`,
                  url: `${window.location.origin}/events/${slug}`,
                })
                .catch((error) => console.error("Error sharing:", error));
            } else {
              alert("Sharing is not supported on this browser.");
            }
          }}
        >
          <Share2 className="w-4 h-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
