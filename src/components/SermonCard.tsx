import React from 'react';

interface Sermon {
  title: string;
  date: string;
  speaker: string;
  description: string;
  link: string;
}

const SermonCard: React.FC<Sermon> = ({ title, date, speaker, description, link }) => {
  return (
    <div className="border p-4 rounded">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Speaker:</strong> {speaker}</p>
      <p>{description}</p>
      <a href={link} className="text-primary underline">Listen/Watch</a>
    </div>
  );
};

export default SermonCard;
