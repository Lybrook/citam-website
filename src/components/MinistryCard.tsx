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
  className?: string;
}

const MinistryCard: React.FC<MinistryCardProps> = ({ ministry }) => {
  return (
    <Card className="group bg-[var(--paper)] dark:bg-[var(--paper)] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[var(--red)]">
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
        <h3 className="text-xl font-bold text-[var(--ink)] dark:text-[var(--ink)]">{ministry.title}</h3>
        <p className="text-[var(--ink)] dark:text-[var(--muted-ink)] line-clamp-3">{ministry.description}</p>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button
          variant="outline"
          asChild
          className="w-full border-[var(--red)] text-[var(--red)] hover:bg-[var(--red)] hover:text-white transition-colors duration-200"
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