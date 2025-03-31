"use client";

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { ArrowRight } from 'lucide-react';
import Header from '../../components/navigation/header';
import { ministries } from '../data/ministries'; 

const MinistriesPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>CITAM Kitale - Our Ministries</title>
        <meta
          name="description"
          content="Explore the diverse ministries at CITAM Kitale, including Youth Ministry, Children's Ministry, and Community Outreach. Get involved and make a difference in our community."
        />
        <meta
          name="keywords"
          content="CITAM Kitale, church ministries, Youth Ministry, Children's Ministry, Community Outreach"
        />
        <link
          rel="canonical"
          href="https://www.citamkitale.org/ministries"
        />
        <meta property="og:title" content="CITAM Kitale Ministries" />
        <meta
          property="og:description"
          content="Discover how you can get involved and make a difference in our church community."
        />
        <meta property="og:type" content="website" />
      </Head>

      <Header />

      <main className="pt-16 min-h-screen bg-white text-black">
        <section className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-red-800 mb-4">Our Ministries</h1>
            <p className="text-gray-700 max-w-xl mx-auto">
              We have various ministries that cater to different needs within our church and community.
              Find a place where you can serve, grow, and connect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ministries.map((ministry) => (
              <Card
                key={ministry.id}
                className="border-red-100 hover:shadow-md transition-shadow duration-300"
              >
                <Image
                  src={ministry.image}
                  alt={ministry.title}
                  width={500}
                  height={192}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle>{ministry.title}</CardTitle>
                  <CardDescription>{ministry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/contact" passHref>
                    <Button
                      variant="outline"
                      className="w-full border-red-800 text-red-800 hover:bg-red-50"
                    >
                      Get Involved
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-red-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-red-900 mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-gray-700 mb-6">
              Each ministry offers unique opportunities to serve, grow, and connect with our community.
              Contact us to learn more about how you can get involved.
            </p>
            <Link href="/contact" passHref>
              <Button
                className="bg-red-800 hover:bg-red-900 text-white"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default MinistriesPage;