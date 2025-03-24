import React from 'react';
import Image from 'next/image';

interface ImageCardProps {
  src: string;
  alt: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => {
  return (
    <div className="image-container">
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="object-cover"
        placeholder="blur"
        loading="lazy"
      />
    </div>
  );
};

export default ImageCard;
