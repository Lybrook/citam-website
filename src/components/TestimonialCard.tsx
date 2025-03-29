import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '../components/ui/card';
import { Avatar } from '../components/ui/avatar';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

const TestimonialCard: React.FC<Testimonial> = ({ quote, author, role, image }) => {
  return (
    <Card className="max-w-md bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
      <CardContent className="flex flex-col items-center p-6">
        <Avatar className="mb-4 ring-2 ring-red-500">
          <Image
            src={image}
            alt={author}
            width={64}
            height={64}
            className="rounded-full object-cover"
          />
        </Avatar>
        <blockquote className="text-black italic text-lg mb-4">
          <p className="relative before:content-['\\201C'] before:text-red-500 before:text-4xl before:absolute before:-left-4 before:-top-2 after:content-['\\201D'] after:text-red-500 after:text-4xl after:absolute after:-right-4 after:-bottom-2">
            {quote}
          </p>
          <footer className="text-red-600 font-semibold text-lg">{author}</footer>
          <cite className="text-gray-700 text-sm">{role}</cite>
        </blockquote>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;