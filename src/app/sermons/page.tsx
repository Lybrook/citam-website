"use client";

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { 
  Mic, 
  Calendar, 
  User, 
  Play 
} from 'lucide-react';
import Header from '../../components/navigation/header';

interface Sermon {
  id: number;
  title: string;
  date: string;
  speaker: string;
  description: string;
  link: string;
  series?: string;
}

const sermons: Sermon[] = [
  {
    id: 1,
    title: "The Power of Faith",
    date: "January 15, 2023",
    speaker: "Pastor John Doe",
    description: "A compelling sermon on the importance of faith in our daily lives, exploring biblical principles of trust and belief.",
    link: "/sermons/power-of-faith",
    series: "Faith Journey"
  },
  {
    id: 2,
    title: "Grace and Forgiveness",
    date: "January 22, 2023",
    speaker: "Pastor Jane Smith",
    description: "A profound exploration of grace and forgiveness, revealing the transformative power of God's love in our lives.",
    link: "/sermons/grace-and-forgiveness",
    series: "Grace Unlimited"
  },
  {
    id: 3,
    title: "Living a Purposeful Life",
    date: "January 29, 2023",
    speaker: "Pastor Mike Johnson",
    description: "An inspirational message about understanding and pursuing God's unique purpose for each individual.",
    link: "/sermons/living-a-purposeful-life",
    series: "Life Calling"
  },
];

const SermonsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>CITAM Kitale - Recent Sermons</title>
        <meta 
          name="description" 
          content="Listen to powerful, inspiring sermons from CITAM Kitale. Discover messages of faith, grace, and purpose that will transform your spiritual journey." 
        />
        <meta 
          name="keywords" 
          content="CITAM Kitale, church sermons, Christian messages, faith talks, spiritual growth" 
        />
        <link 
          rel="canonical" 
          href="https://www.citamkitale.org/sermons" 
        />
        <meta property="og:title" content="CITAM Kitale Sermons" />
        <meta 
          property="og:description" 
          content="Explore our recent sermons and grow in your spiritual walk." 
        />
        <meta property="og:type" content="website" />
      </Head>

      <Header />
      
      <main className="pt-16 min-h-screen bg-white text-black">
        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-red-800 mb-4">Recent Sermons</h1>
            <p className="text-gray-700 max-w-xl mx-auto">
              Dive deep into God&apos;s word through our recent sermons. Each message is designed to inspire, challenge, and transform.
            </p>
          </div>

          <div className="space-y-6">
            {sermons.map((sermon) => (
              <Card 
                key={sermon.id} 
                className="border-red-100 hover:shadow-md transition-shadow duration-300"
              >
                <CardHeader cardTitle={undefined} description={undefined}>
                  <div className="flex items-center mb-2">
                    <Mic className="w-6 h-6 text-red-700 mr-3" />
                    <CardTitle className="text-red-900">{sermon.title}</CardTitle>
                  </div>
                  {sermon.series && (
                    <div className="text-sm text-red-700 font-medium mb-2">
                      Series: {sermon.series}
                    </div>
                  )}
                  <CardDescription className="text-gray-600">
                    {sermon.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-red-700" />
                      <span className="text-gray-700">{sermon.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="w-5 h-5 text-red-700" />
                      <span className="text-gray-700">{sermon.speaker}</span>
                    </div>
                  </div>
                  <Link href={sermon.link} passHref>
                    <Button 
                      variant="default" 
                      className="w-full bg-red-800 hover:bg-red-900 text-white"
                    >
                      <Play className="mr-2 w-5 h-5" />
                      Listen/Watch
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-red-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-red-900 mb-4">
              More Than Just Sermons
            </h2>
            <p className="text-gray-700 mb-6">
              Our sermons are more than just messages – they&apos;re a pathway to deeper understanding, 
              personal growth, and a closer relationship with God.
            </p>
            <Link href="/media" passHref>
              <Button 
                variant="outline" 
                className="border-red-800 text-red-800 hover:bg-red-50"
              >
                Explore Our Media Library
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default SermonsPage;