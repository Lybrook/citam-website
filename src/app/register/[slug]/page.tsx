import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { upcomingEvents } from "../../data/events";
import RegistrationForm from "./registration-form";
import { Reveal } from "../../../components/site/reveal";
export function generateStaticParams() { return upcomingEvents.map((event) => ({ slug: event.slug })); }
export default async function RegisterPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const event = upcomingEvents.find((item) => item.slug === slug); if (!event) notFound(); return <main className="min-h-screen bg-[var(--cream)] pb-24 pt-40"><div className="container-shell max-w-2xl"><Reveal><Link href="/events" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.14em] text-[var(--red)]"><ArrowLeft size={15} /> Back to gatherings</Link><p className="eyebrow mt-12">Event registration</p><h1 className="display-heading mt-4 text-6xl leading-[.9] sm:text-8xl">{event.title}</h1><p className="mt-5 text-[var(--muted-ink)]">{event.date} · {event.time} · {event.location}</p><div className="mt-10 rounded-[2rem] bg-white p-6 shadow-xl shadow-[var(--navy)]/10 md:p-10"><RegistrationForm /></div></Reveal></div></main>; }
