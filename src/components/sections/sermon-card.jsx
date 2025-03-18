import React from 'react';

const SermonCard = ({ sermon }) => {
    return (
        <div className="sermon-card border rounded-lg shadow-lg p-4">
            <img src={sermon.image} alt={sermon.slug} className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold mt-2">{sermon.slug.replace(/-/g, ' ')}</h2>
            <p className="text-gray-600">{sermon.date}</p>
            <p className="text-gray-800">{sermon.speaker}</p>
            <p className="text-gray-700">{sermon.description}</p>
            <a href={sermon.link} className="text-blue-500 underline">Listen/Watch</a>
        </div>
    );
};

export default SermonCard;
