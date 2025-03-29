import React from 'react';

interface Event {
  name: string;
  date: string;
  time: string;
  description: string;
  registrationLink: string;
  className?: string;
}

const EventCard: React.FC<Event> = ({
  name,
  date,
  time,
  description,
  registrationLink,
  className,
}) => {
  return (
    <div className={`border p-4 rounded ${className || ''}`}>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <div className="flex gap-4">
          <p>
            <strong>Date:</strong> {date}
          </p>
          <p>
            <strong>Time:</strong> {time}
          </p>
        </div>
        <p>{description}</p>
        <a
          href={registrationLink}
          className="text-primary underline self-end"
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default EventCard;