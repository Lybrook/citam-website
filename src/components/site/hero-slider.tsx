"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { image: "/citamKitale1.jpg", alt: "CITAM Kitale church community" },
  { image: "/Guesssst1.JPG", alt: "CITAM Kitale gathering" },
  { image: "/youthMinistry.jpg", alt: "CITAM Kitale youth ministry" },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  useEffect(() => { const timer = setInterval(() => setActive((value) => (value + 1) % slides.length), 6500); return () => clearInterval(timer); }, []);
  return <div className="absolute inset-0 -z-20 overflow-hidden">{slides.map((slide, index) => <Image key={slide.image} src={slide.image} alt={slide.alt} fill priority={index === 0} className={`object-cover transition-opacity duration-1000 ${index === active ? "opacity-100" : "opacity-0"}`} sizes="100vw" />)}<div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)] via-[var(--navy)]/75 to-[var(--navy)]/20" /><div className="absolute bottom-10 right-6 z-10 flex gap-2 md:right-12"><button aria-label="Previous slide" onClick={() => setActive((active - 1 + slides.length) % slides.length)} className="rounded-full border border-white/30 p-2 text-white transition hover:bg-white hover:text-[var(--navy)]"><ChevronLeft size={18} /></button><button aria-label="Next slide" onClick={() => setActive((active + 1) % slides.length)} className="rounded-full border border-white/30 p-2 text-white transition hover:bg-white hover:text-[var(--navy)]"><ChevronRight size={18} /></button></div></div>;
}
