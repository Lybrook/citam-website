import React from 'react';
import Image from 'next/image';

interface Leadership {
  name: string;
  title: string;
  image: string;
  bio: string;
}

const LeadershipCard: React.FC<Leadership> = ({ name, title, image, bio }) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={image} alt={name} width={64} height={64} className="rounded-full mb-2" />
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="mt-2">{bio}</p>
    </div>
  );
};

export default LeadershipCard;