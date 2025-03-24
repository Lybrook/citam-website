// @/components/sections/welcome-section.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '/components/ui/button';

const WelcomeSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Welcome to <span className="text-red-600">CITAM Kitale</span>
            </h2>
            <p className="text-lg mb-6 text-gray-800">
              Christ is The Answer Ministries (CITAM) Kitale is a vibrant church dedicated to sharing the 
              love of Christ and making disciples in Kitale and beyond. Our mission is to know God and 
              make Him known through worship, fellowship, and service.
            </p>
            <p className="text-lg mb-6 text-gray-800">
              Whether you are exploring faith for the first time or looking for a church to call home, 
              we invite you to join us this Sunday for an inspiring message and heartfelt worship experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <Link href="/about">About Us</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="border-red-600 text-red-600 hover:bg-red-50 hover:text-red-700"
              >
                <Link href="/contact">Visit Us</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/church-building.jpg"
              alt="CITAM Kitale Church Building"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmMWYxIi8+PC9zdmc+"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;