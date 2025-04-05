import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { testimonials } from "../data/testimonials";
import { leadership } from "../data/leadership";
import LeadershipCard from "../../components/LeadershipCard";
import TestimonialCard from "../../components/TestimonialCard";

// Reusable Section component (same as homepage)
interface SectionProps {
  title: React.ReactNode;
  description?: string;
  children: React.ReactNode;
  bgClass?: string;
}

const Section: React.FC<SectionProps> = ({ title, description, children, bgClass = "bg-white" }) => (
  <section className={`py-16 md:py-24 ${bgClass}`}>
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-4xl font-bold mb-3 text-center text-black">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl mx-auto">
          {description}
        </p>
      )}
      {children}
    </div>
  </section>
);

export default function AboutPage() {
  const pageTitle = "About CITAM Kitale | Our Mission, Vision & Leadership";
  const pageDescription =
    "Learn about CITAM Kitale's mission, vision, values, and the leadership team serving our church community in Kitale, Kenya.";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="CITAM Kitale, about us, church mission, church vision, church leadership, Pentecostal church, Kitale"
        />
        <meta name="author" content="CITAM Kitale" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="/citamKitale1.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://citamkitale.org/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="/citamKitale1.jpg" />
        <link rel="canonical" href="https://citamkitale.org/about" />
      </Head>

      <main className="pt-16">
        {/* Hero Section */}
        <section
          className="relative py-24 text-white"
          style={{
            backgroundImage: "url(/citamKitale2.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60" />
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              About <span className="text-red-600">CITAM Kitale</span>
            </h1>
            <div className="h-1 w-24 bg-red-600 mb-6" />
            <p className="text-lg md:text-xl max-w-2xl text-white">
              Welcome to Christ is The Answer Ministries Kitale, where we strive
              to know God and make Him known through evangelism and discipleship.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <Section title="Our Story" bgClass="bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-black">
                Our <span className="text-red-600">Story</span>
              </h2>
              <div className="h-1 w-16 bg-red-600 mb-6" />
              <p className="text-gray-600 mb-4">
                CITAM Kitale began as a small gathering of believers committed
                to sharing God&apos;s love in the Kitale region. Over the years,
                we&apos;ve grown into a vibrant community of faith that impacts
                countless lives through various ministries and outreach
                programs.
              </p>
              <p className="text-gray-600 mb-4">
                Our church has been blessed with dedicated leadership and
                passionate members who work together to fulfill our mission of
                knowing God and making Him known through evangelism and
                discipleship.
              </p>
              <p className="text-gray-600">
                Today, CITAM Kitale continues to grow as we remain committed to
                our calling, serving the community, and providing a spiritual
                home for people from all walks of life.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-md h-96">
              <Image
                src="/pastor2.jpg"
                alt="History of CITAM Kitale"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmMWYxIi8+PC9zdmc+"
              />
            </div>
          </div>
        </Section>

        {/* Mission, Vision, Values Section */}
        <Section
          title={
            <>
              Our <span className="text-red-600">Mission & Vision</span>
            </>
          }
          description="Guided by our faith in Christ and led by the Holy Spirit, we are committed to the following mission and vision."
          bgClass="bg-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-lg border-t-4 border-red-600 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">
                  Our Mission
                </h3>
                <p className="text-gray-600 mb-4">
                  To know God and to make Him known through evangelism and
                  discipleship.
                </p>
                <div className="h-1 w-12 bg-red-600" />
              </CardContent>
            </Card>

            <Card className="shadow-lg border-t-4 border-red-600 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">
                  Our Vision
                </h3>
                <p className="text-gray-600 mb-4">
                  A community of Believers Impacting the World with the Gospel
                  of our Lord Jesus Christ through the transforming Power of the
                  Holy Spirit.
                </p>
                <div className="h-1 w-12 bg-red-600" />
              </CardContent>
            </Card>

            <Card className="shadow-lg border-t-4 border-red-600 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">
                  Who We Are
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• A Pentecostal Church totally submitted to the Blessed Holy Spirit</li>
                  <li>• An English-speaking Church targeting the urban populace</li>
                  <li>• Missions-oriented, with an outreach to the wider community</li>
                  <li>• A community of believers, open to people of all tribes and races</li>
                  <li>• A Church with a holistic ministry approach</li>
                </ul>
                <div className="h-1 w-12 bg-red-600 mt-4" />
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Leadership Section */}
        <Section
          title={
            <>
              Our <span className="text-red-600">Leadership</span>
            </>
          }
          description="Meet the dedicated team that guides our church community with wisdom, faith, and compassion."
          bgClass="bg-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader) => (
              <LeadershipCard key={leader.id} {...leader} />
            ))}
          </div>
        </Section>

        {/* Testimonials Section */}
        <Section
          title={
            <>
              Our <span className="text-red-600">Testimonials</span>
            </>
          }
          description="Hear from members of our church community about how CITAM Kitale has impacted their lives."
          bgClass="bg-black text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </Section>

        {/* Join Us Section */}
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">
              Join Our Community
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              We invite you to join us for Sunday worship and become part of our
              church family. Experience the love of Christ and the joy of
              fellowship with believers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="border-white text-white hover:bg-red-700"
              >
                <Link href="/services">Service Times</Link>
              </Button>
              <Button
                asChild
                size="lg"
                // variant="outline"
                className="border-white text-white hover:bg-red-700"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            mainEntity: {
              "@type": "Church",
              name: "CITAM Kitale",
              alternateName: "Christ is The Answer Ministries Kitale",
              description: pageDescription,
              url: "https://citamkitale.org/about",
              mission: "To know God and to make Him known through evangelism and discipleship.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kitale",
                addressCountry: "KE",
              },
              founder: {
                "@type": "Person",
                name: "Rev. Joseph Kamau",
                jobTitle: "Senior Pastor",
              },
            },
          }),
        }}
      />
    </>
  );
}