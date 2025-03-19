import React from "react";

interface Sermon {
  image?: string;
  title?: string;
  slug: string;
  date: string;
  speaker: string;
  description: string;
  link: string;
}

const SermonCard: React.FC<{ sermon: Sermon }> = ({ sermon }) => {
  return (
    <div className="sermon-card border rounded-lg shadow-lg overflow-hidden bg-white transition-transform duration-300 hover:scale-105">
      <img
        src={sermon.image || "/placeholder.jpg"} 
        alt={sermon.title || sermon.slug.replace(/-/g, " ")}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold capitalize">{sermon.title || sermon.slug.replace(/-/g, " ")}</h2>
        <p className="text-gray-600 text-sm">{new Date(sermon.date).toDateString()}</p>
        <p className="text-gray-800 font-medium">{sermon.speaker}</p>
        <p className="text-gray-700 line-clamp-3">{sermon.description}</p>
        <a 
          href={sermon.link} 
          className="text-blue-500 font-medium underline mt-3 inline-block hover:text-blue-700"
          aria-label={`Listen or watch sermon titled ${sermon.title || sermon.slug.replace(/-/g, " ")}`}
        >
          Listen/Watch
        </a>
      </div>
    </div>
  );
};

export default SermonCard;
