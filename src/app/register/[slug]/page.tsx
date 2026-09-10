import Link from "next/link";
import { notFound } from "next/navigation";
import { upcomingEvents } from "@/src/app/data/events";
import { Button } from "@/src/components/ui/button";
import RegistrationForm from "./registration-form";

export function generateStaticParams() {
  return upcomingEvents.map((event) => ({ slug: event.slug }));
}

export default async function RegisterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = upcomingEvents.find((item) => item.slug === slug);
  if (!event) notFound();

  return (
    <main className="min-h-screen bg-background px-4 pb-20 pt-32">
      <section className="container mx-auto max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Event registration</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">{event.title}</h1>
        <p className="mt-4 text-muted-foreground">{event.date} · {event.time} · {event.location}</p>
        <RegistrationForm />
        <Button asChild variant="link" className="mt-4 px-0"><Link href="/events">Back to events</Link></Button>
      </section>
    </main>
  );
}
