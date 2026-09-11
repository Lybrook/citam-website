export interface Ministry { id: number; title: string; description: string; image: string; anchor: string; }

export const ministries: Ministry[] = [
  { id: 1, title: "Youth Ministry", description: "A lively space for young people to ask honest questions, grow in Christ, build friendships, and live with courage in their generation.", image: "/youthMinistry.jpg", anchor: "youth" },
  { id: 2, title: "Children's Ministry", description: "Safe, joyful, Bible-rooted spaces where children are known, cared for, and helped to discover God's love from an early age.", image: "/childrenMinistry.jpg", anchor: "children" },
  { id: 3, title: "Community Outreach", description: "Taking the love of Christ beyond our walls through practical care, prayer, generosity, and service across our local community.", image: "/pastor2.jpg", anchor: "outreach" },
];
