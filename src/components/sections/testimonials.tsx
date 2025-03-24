import React from 'react';
import TestimonialCard from '../TestimonialCard';
import { Button } from '../ui/button';
import Link from 'next/link';

interface Testimonial {
  id: number;
  name: string;
  quote: string; // Added missing property
  author: string; // Added missing property
  role: string; // Added missing property
  image: string;
}


const Testimonials: React.FC<{ testimonials: Testimonial[] }> = ({ testimonials }) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-3 text-center text-black">What People Are <span className="text-red-600">Saying</span></h2>
        <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">Hear from our community about their experiences.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
            <Link href="/testimonials">View All Testimonials</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
