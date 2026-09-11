import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { latestSermons } from "../data/sermons";
import { PageHero } from "../../components/site/page-hero";
import { Reveal } from "../../components/site/reveal";
import { SectionHeading } from "../../components/site/section-heading";

export default function MediaPage() { return <main><PageHero eyebrow="Media library" title="Carry the word with you." description="Catch up on teachings, share a message with a friend, and keep growing wherever the week takes you." image="/walkingInFaith.jpg" /><section className="section-pad bg-[var(--cream)]"><div className="container-shell"><Reveal><SectionHeading eyebrow="Listen and watch" title="Messages for real life." /></Reveal><div className="mt-12 grid gap-6 md:grid-cols-3">{latestSermons.map((sermon, i) => <Reveal key={sermon.id} delay={i*.08}><Link href={sermon.link} className="editorial-card group flex items-center justify-between rounded-[1.5rem] p-6"><div><p className="eyebrow">{sermon.date}</p><h2 className="mt-3 text-xl font-bold group-hover:text-[var(--red)]">{sermon.title}</h2><p className="mt-2 text-sm text-[var(--muted-ink)]">{sermon.speaker}</p></div><span className="rounded-full bg-[var(--red)] p-3 text-white"><Play size={17} fill="currentColor" /></span></Link></Reveal>)}</div><Link href="/sermons" className="mt-10 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.14em] text-[var(--red)]">Browse all teachings <ArrowUpRight size={15} /></Link></div></section></main>; }
