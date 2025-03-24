// @/src/app/data/ministries.ts
export interface Ministry {
  id: number;
  title: string;
  description: string;
  image: string;
  anchor: string;
}

export const ministries: Ministry[] = [
  {
    id: 1,
    title: "Youth Ministry",
    description: "Empowering young people to live for Christ and make a difference in their generation.",
    image: "/youthMinistry.jpg",
    anchor: "youth",
  },
  {
    id: 2,
    title: "Children's Ministry",
    description: "Creating a fun and nurturing environment where children learn about God's love.",
    image: "/childrenMinistry.jpg",
    anchor: "children",
  },
  {
    id: 3,
    title: "Community Outreach",
    description: "Extending God's love through service and support to our local community.",
    image: "/pastor2.jpg",
    anchor: "outreach",
  },
];