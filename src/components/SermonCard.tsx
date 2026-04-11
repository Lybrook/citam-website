// ✅ No "use client" — pure render, no hooks or browser APIs needed
import React from "react";
import { Button } from "../components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface Sermon {
  image?: string;
  title?: string;
  slug: string;
  date: string;
  speaker: string;
  description: string;
  // ✅ Removed raw `link` field — derived from slug instead
}

const SermonCard: React.FC<{ sermon: Sermon; className?: string }> = ({
  sermon,
  className,
}) => {
  // ✅ Append T00:00:00 to force local time parsing, not UTC
  // Without this, "2025-03-15" parses as UTC midnight → renders March 14 in Nairobi (UTC+3)
  const formattedDate = new Date(`${sermon.date}T00:00:00`).toLocaleDateString(
    "en-KE", // ✅ Kenyan locale
    { year: "numeric", month: "long", day: "numeric" }
  );

  const title = sermon.title ?? sermon.slug.replace(/-/g, " ");

  // ✅ Derived from slug — if route structure changes, fix in one place
  const href = `/sermons/${sermon.slug}`;

  return (
    <div
      className={cn(
        // ✅ Design tokens — no manual dark: classes needed
        "flex flex-col bg-card text-card-foreground",
        "shadow-md rounded-lg overflow-hidden",
        "hover:shadow-lg transition-shadow duration-300",
        className
      )}
    >
      {/* ✅ Consistent image sizing — wrapper controls dimensions, fill covers it */}
      <div className="relative w-full h-48">
        <Image
          src={sermon.image || "/placeholder.jpg"}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-4 flex flex-col flex-1 space-y-2">
        {/* ✅ Removed capitalize — data should arrive correctly cased */}
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>

        <p className="text-muted-foreground text-sm">{formattedDate}</p>

        <p className="text-foreground font-medium">{sermon.speaker}</p>

        <p className="text-muted-foreground line-clamp-3 flex-1">
          {sermon.description}
        </p>

        <Button
          asChild
          className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground w-full"
          aria-label={`Listen or watch: ${title}`}
        >
          {/* ✅ href from slug, not raw link field */}
          <Link href={href} className="flex items-center justify-center space-x-2">
            <Play className="w-4 h-4" />
            <span>Listen / Watch</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default SermonCard;
