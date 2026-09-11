export interface Event { id: number; title: string; date: string; time: string; location: string; image: string; slug: string; }

export const upcomingEvents: Event[] = [
  { id: 1, title: "Sunday Worship", date: "Every Sunday", time: "8:00 AM and 10:30 AM", location: "CITAM Kitale Main Hall", image: "/citamKitale1.jpg", slug: "sunday-worship" },
  { id: 2, title: "Midweek Prayer Service", date: "Every Wednesday", time: "5:30 PM - 7:00 PM", location: "CITAM Kitale", image: "/powerOfPrayer.jpg", slug: "midweek-prayer" },
  { id: 3, title: "Men's Fellowship", date: "Monthly gathering", time: "See current announcement", location: "CITAM Kitale Conference Room", image: "/menMinistry.jpg", slug: "mens-fellowship" },
];
