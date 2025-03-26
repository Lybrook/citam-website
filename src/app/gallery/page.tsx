"use client"
// import React from "react";
import Image from "next/image";
import { useScroll } from "../../hooks";
import Header from '../../components/navigation/header';

const images = [
  "/childrenMinistry.jpg",
  "/citamKitale1.jpg",
  "/citamKitale2.jpg",
  "/ctamKitale.jpg",
  "/Don.jpg",
  "/Don1.jpg",
  "/Guesssst1.JPG",
  "/Guessst1.JPG",
  "/Guesst1.JPG",
  "/Guest1.jpg",
  "/Guest2.jpg",
  "/Guest4.jpg",
  "/Guest5.jpg",
  "/IMG_9960.jpg",
  "/IMG_9965.jpg",
  "/inStepWithTheSpirit.jpg",
  "/Kwama.JPG",
  "/Kwama1.JPG",
  "/Kwama2.JPG",
  "/logo.jpg",
  "/menMinistry.jpg",
  "/Opiyo1.jpg",
  "/Opiyo2.jpg",
  "/Opiyo3.jpg",
  "/Pasii1.jpg",
  "/Pasii2.jpg",
  "/Pasii3.jpg",
  "/Pasii4.jpg",
  "/Pasii5.jpg",
  "/Pasii6.jpg",
  "/Pasii7.jpg",
  "/Pasii8.JPG",
  "/pastor.jpg",
  "/pastor2.jpg",
  "/powerOfPrayer.jpg",
  "/powerOfPrayer1.jpg",
  "/walkingInFaith.jpg",
  "/Wife1.jpg",
  "/yearsTheme.png",
  "/youthMinistry.jpg",
];

const GalleryPage: React.FC = () => {
  const isScrolled = useScroll();

  return (
    <>
      <Header isScrolled={isScrolled} />
      <div className="gallery-container">
        <h1>Gallery</h1>
        <p>This is the Gallery page.</p>
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                width={500}
                height={500}
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmMWYxIi8+PC9zdmc+"
                loading="lazy"
                quality={90}
                priority={index < 10}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryPage;