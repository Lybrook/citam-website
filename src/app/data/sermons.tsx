export interface Sermon { id: number; title: string; speaker: string; date: string; image: string; slug: string; description: string; link: string; }

export const latestSermons: Sermon[] = [
  { id: 1, title: "Walking in Faith", speaker: "Reverend Joseph Kamau", date: "March 15, 2025", image: "/walkingInFaith.jpg", slug: "walking-in-faith", description: "A steady word for trusting God when the road ahead is not yet clear.", link: "/sermons/walking-in-faith" },
  { id: 2, title: "The Power of Prayer", speaker: "Reverend Joseph Kamau", date: "March 8, 2025", image: "/powerOfPrayer.jpg", slug: "power-of-prayer", description: "Discover prayer as a daily conversation with God, not a last resort.", link: "/sermons/power-of-prayer" },
  { id: 3, title: "Grace and Mercy", speaker: "Reverend Joseph Kamau", date: "March 1, 2025", image: "/citamKitale.jpg", slug: "grace-and-mercy", description: "A reminder that God's grace meets us where we are and leads us forward.", link: "/sermons/grace-and-mercy" },
];
