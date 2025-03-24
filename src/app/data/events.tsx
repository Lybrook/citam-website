// @/src/app/data/events.ts
export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  slug: string;
}

export const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Youth Conference",
    date: "April 10-12, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "CITAM Kitale Main Hall",
    image: "/youthMinistry.jpg",
    slug: "youth-conference",
  },
  {
    id: 2,
    title: "Women's Retreat",
    date: "April 25, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "CITAM Kitale Gardens",
    image: "/inStepWithTheSpirit.jpg",
    slug: "womens-retreat",
  },
  {
    id: 3,
    title: "Men's Fellowship",
    date: "May 3, 2025",
    time: "8:00 AM - 12:00 PM",
    location: "CITAM Kitale Conference Room",
    image: "/menMinistry.jpg",
    slug: "mens-fellowship",
  },
];