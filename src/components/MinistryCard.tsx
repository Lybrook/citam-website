// @/components/MinistryCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { Ministry } from '../app/data/ministries';

interface MinistryCardProps {
  ministry: Ministry;
}

const MinistryCard: React.FC<MinistryCardProps> = ({ ministry }) => {
  return (
    <div className="ministry-card group bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="relative aspect-video">
        <Image 
          src={ministry.image} 
          alt={ministry.title} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmMWYxIi8+PC9zdmc+"
        />
      </div>
      <div className="p-6 border-t-2 border-red-600">
        <h3 className="text-xl font-bold mb-2 text-black">{ministry.title}</h3>
        <p className="mb-4 text-gray-700">{ministry.description}</p>
        <Button 
          variant="link" 
          asChild 
          className="p-0 text-red-600 hover:text-red-800 font-semibold"
        >
          <Link href={`/ministries#${ministry.anchor}`}>
            Learn More &rarr;
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MinistryCard;