import React from 'react';
import Header from '../../components/navigation/header';

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen">

        <section className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">About CITAM Kitale</h1>
          <p className="mb-4">
            CITAM Kitale is a vibrant church committed to spreading the gospel of Jesus Christ and serving the community.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="mb-4">
            To reach out to the community with the love of Christ and to make disciples of all nations.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="mb-4">
            A community transformed by the gospel, living in the fullness of Christ.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Testimonials</h2>
          <p className="mb-4">"CITAM Kitale has been a blessing to my life!" - Community Member</p>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
