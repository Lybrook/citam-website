"use client";
// @/components/sections/bible-verse-section.tsx
import React from 'react';



const BibleVerseSection: React.FC = () => {

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="verse-block max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl italic">
            For where two or three gather in my name, there am I with them.
          </p>
          <p className="text-right font-bold mt-4 text-red-400">
            Matthew 18:20
          </p>
        </div>
      </div>
    </section>
  );
};

export default BibleVerseSection;
