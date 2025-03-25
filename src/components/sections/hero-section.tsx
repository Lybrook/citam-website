"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";


export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
      subtitle: "8:00 AM & 10:30 AM Services",
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className='relative min-h-screen w-full overflow-hidden'>
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out will-change-[opacity] ${
            index === currentSlide
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Dark overlay */}
          <div className='absolute inset-0 bg-black/50 z-10' />

          {/* Background image */}
          <div className='relative h-full w-full'>
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              sizes='100vw'
              className='object-cover'
            />
          </div>

          {/* Content */}
          <div className='absolute inset-0 z-20 flex items-center justify-center text-white'>
            <div className='container text-center px-4'>
              <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                {slide.title}
              </h1>
              <p className='text-xl md:text-2xl mb-8 max-w-2xl mx-auto'>
                {slide.subtitle}
              </p>
              <Link href={slide.buttonLink} passHref>
                <Button
                  size='lg'
                  className='bg-primary hover:bg-primary/90 text-white'
                  variant='default'
                >
                  {slide.buttonText}
                </Button>
              </Link>

            </div>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className='absolute bottom-10 left-0 right-0 z-20 flex justify-center space-x-2'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-3 h-3 rounded-full transition-all transform-gpu ${
              index === currentSlide
                ? "bg-primary w-8 scale-110"
                : "bg-white/50 hover:bg-white scale-100 hover:scale-110"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            role='button'
          />

        ))}
      </div>
    </section>
  );
}
