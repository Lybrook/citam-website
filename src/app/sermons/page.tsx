import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { latestSermons } from "../data/sermons";
import { PageHero } from "../../components/site/page-hero";
import { Reveal } from "../../components/site/reveal";
import { SectionHeading } from "../../components/site/section-heading";

export default function SermonsPage() { return <main><PageHero eyebrow="Teachings" title="Words for the road." description="Biblical teaching for ordinary Mondays, hard decisions, joyful seasons, and the long work of becoming like Jesus." image="/powerOfPrayer.jpg" /><section className="section-pad bg-[var(--cream)]"><div className="container-shell"><Reveal><SectionHeading eyebrow="Recent messages" title="Press play. Take the next step." /></Reveal><div className="mt-12 grid gap-7 md:grid-cols-3">{latestSermons.map((sermon, i) => <Reveal key={sermon.id} delay={i*.08}><article className="editorial-card overflow-hidden rounded-[1.5rem]"><div className="relative h-60"><Image src={sermon.image} alt={sermon.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" /><span className="absolute right-4 top-4 rounded-full bg-white p-3 text-[var(--navy)]"><Play size={18} fill="currentColor" /></span></div><div className="p-6"><p className="eyebrow">{sermon.date}</p><h2 className="mt-3 text-2xl font-bold">{sermon.title}</h2><p className="mt-2 text-sm text-[var(--muted-ink)]">{sermon.speaker}</p><p className="mt-4 text-sm leading-6 text-[var(--muted-ink)]">{sermon.description}</p><Link href={sermon.link} className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.14em] text-[var(--red)]">Open message <ArrowUpRight size={15} /></Link></div></article></Reveal>)}</div></div></section></main>; }
