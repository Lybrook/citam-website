"use client";

import React from "react";
import { Button } from "../components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Play } from "lucide-react";

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
  const formattedDate = new Date(sermon.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTitle = sermon.title || sermon.slug.replace(/-/g, " ");

  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Image
        src={sermon.image || "/placeholder.jpg"}
        alt={formattedTitle}
        width={500}
        height={192}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold capitalize text-black dark:text-white">
          {formattedTitle}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{formattedDate}</p>
        <p className="text-black dark:text-white font-medium">{sermon.speaker}</p>
        <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
          {sermon.description}
        </p>
        <Button
          asChild
          variant="default"
          className="mt-4 bg-red-600 hover:bg-red-700 text-white"
          aria-label={`Listen or watch sermon titled ${formattedTitle}`}
        >
          <Link href={sermon.link} className="flex items-center space-x-2">
            <Play className="w-4 h-4" />
            <span>Listen/Watch</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default SermonCard;