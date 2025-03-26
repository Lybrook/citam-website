"use client";

import React from 'react';

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-red-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Testimonials</h2>
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-center">
<p className="text-xl md:text-2xl italic mb-6">
  &ldquo;CITAM Kitale has been a blessing to my family. The children ministry has helped my kids grow spiritually, and the worship experience is always uplifting.&rdquo;
</p>

            <footer className="font-semibold">
              — Sarah Kimani, Member since 2021
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
