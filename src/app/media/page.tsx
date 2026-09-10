import Link from "next/link";
import { latestSermons } from "@/src/app/data/sermons";
import { Button } from "@/src/components/ui/button";

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-background px-4 pb-20 pt-32">
      <section className="container mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Media library</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">Messages for the journey</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">Explore recent teaching from CITAM Kitale and keep growing in faith throughout the week.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {latestSermons.map((sermon) => <article key={sermon.id} className="rounded-2xl border border-border bg-card p-6 shadow-sm"><h2 className="text-xl font-semibold">{sermon.title}</h2><p className="mt-2 text-sm text-muted-foreground">{sermon.speaker} · {sermon.date}</p><Button asChild variant="link" className="mt-4 px-0"><Link href={`/sermons/${sermon.slug}`}>View message</Link></Button></article>)}
        </div>
      </section>
    </main>
  );
}
