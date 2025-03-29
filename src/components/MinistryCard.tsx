// @/components/MinistryCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter } from '../components/ui/card';
import { ChevronRight } from 'lucide-react';
import { Ministry } from '../app/data/ministries';

interface MinistryCardProps {
  ministry: Ministry;
}

const MinistryCard: React.FC<MinistryCardProps> = ({ ministry }) => {
  return (
    <Card className="group bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-red-600">
      <div className="relative aspect-video">
        <Image
          src={ministry.image}
          alt={ministry.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmFiNmI2Ii8+PC9zdmc+"
        />
      </div>
      <CardContent className="p-5 space-y-3">
        <h3 className="text-xl font-bold text-black dark:text-white">{ministry.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 line-clamp-3">{ministry.description}</p>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button
          variant="outline"
          asChild
          className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-200"
          aria-label={`Learn more about ${ministry.title} ministry`}
        >
          <Link href={`/ministries#${ministry.anchor}`} className="flex items-center justify-center space-x-1">
            <span>Learn More</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MinistryCard;