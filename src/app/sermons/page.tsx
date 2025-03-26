"use client"
// import React from 'react';
import Header from '../../components/navigation/header';
import { useScroll } from "../../hooks"; // Import the useScroll hook


interface Sermon {
  id: number;
  title: string;
  date: string;
  speaker: string;
  description: string;
  link: string;
}

const sermons: Sermon[] = [
  {
    id: 1,
    title: "The Power of Faith",
    date: "January 15, 2023",
    speaker: "Pastor John Doe",
    description: "A sermon on the importance of faith in our daily lives.",
    link: "/sermons/power-of-faith"
  },
  {
    id: 2,
    title: "Grace and Forgiveness",
    date: "January 22, 2023",
    speaker: "Pastor Jane Smith",
    description: "Exploring the themes of grace and forgiveness in the Bible.",
    link: "/sermons/grace-and-forgiveness"
  },
  {
    id: 3,
    title: "Living a Purposeful Life",
    date: "January 29, 2023",
    speaker: "Pastor Mike Johnson",
    description: "Understanding God's purpose for our lives.",
    link: "/sermons/living-a-purposeful-life"
  },
];

const SermonsPage: React.FC = () => {
  const isScrolled = useScroll(); // Use the hook to detect scroll state

  return (
    <>
      <Header isScrolled={isScrolled} />
      <main className="pt-16 min-h-screen">
        <section className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Recent Sermons</h1>
          <p className="mb-4">
            Here are some of our recent sermons. Click on the titles to listen or watch.
          </p>
          <ul className="space-y-4">
            {sermons.map((sermon) => (
              <li key={sermon.id} className="border p-4 rounded">
                <h2 className="text-xl font-semibold">{sermon.title}</h2>
                <p><strong>Date:</strong> {sermon.date}</p>
                <p><strong>Speaker:</strong> {sermon.speaker}</p>
                <p>{sermon.description}</p>
                <a href={sermon.link} className="text-primary underline">Listen/Watch</a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default SermonsPage;
