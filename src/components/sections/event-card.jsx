import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EventCard({ event }) {
  const { title, date, time, location, image, slug } = event
  
  return (
    <div className="event-card bg-card rounded-lg overflow-hidden border border-border h-full flex flex-col">
      <div className="relative aspect-video">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute top-2 left-2 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
          Upcoming
        </div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Calendar className="w-4 h-4 mr-2 text-primary" />
          <span>{date}</span>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Clock className="w-4 h-4 mr-2 text-primary" />
          <span>{time}</span>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <MapPin className="w-4 h-4 mr-2 text-primary" />
          <span>{location}</span>
        </div>
        
        <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-2">
          <Button asChild className="flex-1">
            <Link href={`/events/${slug}`}>Learn More</Link>
          </Button>
          <Button asChild variant="outline" className="flex-1">
            <Link href="/contact#calendar">Add to Calendar</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}