import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { ImageIcon } from "lucide-react";

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

// Metadata for SEO
export const metadata: Metadata = {
  title: "Church Gallery | Our Community Moments",
  description: "Explore our church's vibrant community through these memorable moments and ministry highlights.",
  openGraph: {
    title: "Church Gallery | Our Community Moments",
    description: "Explore our church's vibrant community through these memorable moments and ministry highlights.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Church Gallery | Our Community Moments",
    description: "Explore our church's vibrant community through these memorable moments and ministry highlights.",
  },
  keywords: [
    "church gallery", 
    "community moments", 
    "ministry photos", 
    "church events", 
    "faith community"
  ],
};

const GalleryPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <Card className="bg-red-50 border-red-200 shadow-lg">
        <CardContent className="p-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-red-900 mb-4">
              Our Church Gallery
            </h1>
            <p className="text-red-700 max-w-2xl mx-auto">
              A visual journey through our church community, celebrating faith, 
              fellowship, and the moments that define our spiritual family.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Image
                  src={image}
                  alt={`Church community moment ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-48 object-cover rounded-lg"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmMWYxIi8+PC9zdmc+"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-300">
                  <Button 
                    variant="outline" 
                    className="opacity-0 group-hover:opacity-100 bg-white text-red-900 hover:bg-red-100 transition-all"
                  >
                    <ImageIcon className="mr-2" /> View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GalleryPage;