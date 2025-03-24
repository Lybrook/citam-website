import React from 'react';

interface Ministry {
  name: string;
  description: string;
}

const MinistryCard: React.FC<Ministry> = ({ name, description }) => {
  return (
    <div className="border p-4 rounded">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default MinistryCard;
