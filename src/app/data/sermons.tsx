// @/src/app/data/sermons.ts
export interface Sermon {
  id: number;
  title: string;
  speaker: string;
  date: string;
  image: string;
  slug: string;
  description: string;
  link: string;
}

export const latestSermons: Sermon[] = [
  {
    id: 1,
    title: "Walking in Faith",
    speaker: "Reverend Joseph Kamau",
    date: "March 15, 2025",
    image: "/walkingInFaith.jpg",
    slug: "walking-in-faith",
    description: "A sermon about faith and trust in God.",
    link: "/sermons/walking-in-faith",
  },
  {
    id: 2,
    title: "The Power of Prayer",
    speaker: "Reverend Joseph Kamau",
    date: "March 8, 2025",
    image: "/powerOfPrayer.jpg",
    slug: "power-of-prayer",
    description: "Exploring the significance of prayer in our lives.",
    link: "/sermons/power-of-prayer",
  },
  {
    id: 3,
    title: "Grace and Mercy",
    speaker: "Reverend Joseph Kamau",
    date: "March 1, 2025",
    image: "/ctamKitale.jpg",
    slug: "grace-and-mercy",
    description: "A message on the grace and mercy of God.",
    link: "/sermons/grace-and-mercy",
  },
];