"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

// ✅ Moved outside component — never recreated on render
const slides = [
  {
    image: "/citamKitale2.jpg",
    title: "Welcome to CITAM Kitale",
    subtitle: "A place to belong, believe, and become",
    buttonText: "Plan Your Visit",
    buttonLink: "/contact",
  },
  {
    image: "/pastor.jpg",
    title: "Join Us This Sunday",
    subtitle: "10:00 AM & 12:00 PM Services", // ✅ Fixed: AM → PM
    buttonText: "View Schedule",
    buttonLink: "/about#schedule",
  },
  {
    image: "/yearsTheme.png",
    title: "Grow in Your Faith",
    subtitle: "Connect with a community that cares",
    buttonText: "Join a Group",
    buttonLink: "/ministries",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // ✅ Pause on hover

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return; // ✅ Respect pause state
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}  // ✅ Pause autoplay on hover
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="CITAM Kitale highlights"
    >
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;

        return (
          <div
            key={slide.image} // ✅ Stable key — not index
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${slides.length}`}
            aria-hidden={!isActive} // ✅ Hide inactive slides from screen readers
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              // ✅ Removed will-change — 3 promoted GPU layers on mobile is expensive
              isActive ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* Background image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              // ✅ Only the first slide is LCP — only it gets priority
              priority={index === 0}
              // ✅ Inactive slides don't need to load eagerly
              loading={index === 0 ? "eager" : "lazy"}
              sizes="100vw"
              className="object-cover"
            />

            {/* Content */}
            <div className="absolute inset-0 z-20 flex items-center justify-center text-white">
              <div className="container text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-sm">
                  {slide.subtitle}
                </p>
                {/*
                  ✅ Button handles its own <a> via asChild.
                  Wrapping in <Link> + <Button> without asChild = <a><button> = invalid HTML.
                  Use Button asChild directly.
                */}
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href={slide.buttonLink}>
                    {slide.buttonText}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        );
      })}

      {/* Slide indicators */}
      <div
        className="absolute bottom-10 left-0 right-0 z-20 flex justify-center space-x-2"
        role="tablist"
        aria-label="Slide navigation"
      >
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            role="tab" // ✅ tablist + tab is the correct ARIA pattern for carousels
            aria-selected={index === currentSlide}
            aria-label={`Go to slide ${index + 1}: ${slide.title}`} // ✅ Descriptive label
            onClick={() => setCurrentSlide(index)} // ✅ Removed pointless handleSlideChange wrapper
            className={cn(
              "h-3 rounded-full transition-all duration-300",
              // ✅ Removed role="button" — <button> is already a button
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-white/50 hover:bg-white w-3"
            )}
          />
        ))}
      </div>
    </section>
  );
}
