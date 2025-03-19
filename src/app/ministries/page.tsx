import React from 'react';
import Header from '../../components/navigation/header';
import Footer from '../../components/navigation/footer';

interface Ministry {
  id: number;
  name: string;
  description: string;
}

const ministries: Ministry[] = [
  {
    id: 1,
    name: "Children's Ministry",
    description: "A vibrant ministry focused on teaching children about the love of Christ through fun and engaging activities."
  },
  {
    id: 2,
    name: "Youth Ministry",
    description: "A ministry dedicated to empowering and guiding the youth in their spiritual journey and personal growth."
  },
  {
    id: 3,
    name: "Worship Ministry",
    description: "This ministry leads the congregation in worship through music and arts, creating an atmosphere of praise."
  },
  {
    id: 4,
    name: "Outreach Ministry",
    description: "Focused on serving the community and sharing the gospel through various outreach programs and events."
  },
];

const MinistriesPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen">
        <section className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Our Ministries</h1>
          <p className="mb-4">
            We have various ministries that cater to different needs within our church and community. 
            Here are some of the ministries you can get involved in:
          </p>
          <ul className="space-y-4">
            {ministries.map((ministry) => (
              <li key={ministry.id} className="border p-4 rounded">
                <h2 className="text-xl font-semibold">{ministry.name}</h2>
                <p>{ministry.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MinistriesPage;