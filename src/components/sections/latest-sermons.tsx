import React from 'react';

import SermonCard from '../SermonCard';
import { Button } from '../ui/button';
import Link from 'next/link';

interface Sermon {
  id: number;
  title: string;
  speaker: string;
  date: string;
  image: string;
  slug: string;
  description: string;
  link: string;
}

const LatestSermons: React.FC<{ sermons: Sermon[] }> = ({ sermons }) => {

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-3 text-center text-black">Latest <span className="text-red-600">Sermons</span></h2>
        <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">Missed a service? Catch up on our recent messages and continue your spiritual journey.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermons.map((sermon) => (
          <SermonCard key={sermon.id} {...sermon} />


          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
            <Link href="/sermons">View All Sermons</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestSermons;
