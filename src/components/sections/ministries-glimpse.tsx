import React from 'react';
import MinistryCard from '../MinistryCard';
import { Button } from '../ui/button';
import Link from 'next/link';

interface Ministry {
  id: number;
  name: string;
  description: string;
  link: string;
}

const MinistriesGlimpse: React.FC<{ ministries: Ministry[] }> = ({ ministries }) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-3 text-center text-black">Our <span className="text-red-600">Ministries</span></h2>
        <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">Discover the various ministries we offer and how you can get involved.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry) => (
            <MinistryCard key={ministry.id} {...ministry} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
            <Link href="/ministries">View All Ministries</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MinistriesGlimpse;
