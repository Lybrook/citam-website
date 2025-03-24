import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface Sermon {
  image?: string;
  title?: string;
  slug: string;
  date: string;
  speaker: string;
  description: string;
  link: string;
}

const SermonCard: React.FC<{ sermon: Sermon }> = ({ sermon }) => {
  const formattedDate = new Date(sermon.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const formattedTitle = sermon.title || sermon.slug.replace(/-/g, " ");

  return (
    <div className="flex flex-col">
      <Image
        src={sermon.image || "/placeholder.jpg"}
        alt={formattedTitle}
        width={500}
        height={192}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold capitalize">{formattedTitle}</h2>
        <p className="text-gray-600 text-sm">{formattedDate}</p>
        <p className="text-gray-800 font-medium">{sermon.speaker}</p>
        <p className="text-gray-700 line-clamp-3">{sermon.description}</p>
        <Button asChild variant="default" aria-label={`Listen or watch sermon titled ${formattedTitle}`}>
          <Link href={sermon.link}>
            Listen/Watch
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default SermonCard;