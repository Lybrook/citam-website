import React from 'react';
import Image from 'next/image';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

const TestimonialCard: React.FC<Testimonial> = ({ quote, author, role, image }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
      <Image src={image} alt={author} width={64} height={64} className="rounded-full mb-2" />
      <p className="italic text-lg text-gray-600">&quot;{quote}&quot;</p>
      <p className="font-semibold text-lg">{author}</p>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
};

export default TestimonialCard;