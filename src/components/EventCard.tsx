import React from 'react';

interface Event {
  name: string;
  date: string;
  time: string;
  description: string;
  registrationLink: string;
}

const EventCard: React.FC<Event> = ({ name, date, time, description, registrationLink }) => {
  return (
    <div className="border p-4 rounded">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Time:</strong> {time}</p>
      <p>{description}</p>
      <a href={registrationLink} className="text-primary underline">Register</a>
    </div>
  );
};

export default EventCard;
