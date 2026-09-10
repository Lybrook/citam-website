import Link from "next/link";
import { notFound } from "next/navigation";
import { latestSermons } from "@/src/app/data/sermons";
import { Button } from "@/src/components/ui/button";

export function generateStaticParams() {
  return latestSermons.map((sermon) => ({ slug: sermon.slug }));
}

export default async function SermonDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sermon = latestSermons.find((item) => item.slug === slug);
  if (!sermon) notFound();

  return (
    <main className="min-h-screen bg-background px-4 pb-20 pt-32">
      <article className="container mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">CITAM Kitale Sermon</p>
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">{sermon.title}</h1>
        <p className="mt-5 text-muted-foreground">{sermon.speaker} · {sermon.date}</p>
        <div className="mt-10 rounded-3xl border border-border bg-card p-8 shadow-sm md:p-12">
          <p className="text-lg leading-8 text-card-foreground">{sermon.description}</p>
          <p className="mt-8 rounded-xl bg-primary/10 p-5 text-sm text-foreground">A full audio or video recording can be connected to this page through the church media library when available.</p>
          <Button asChild className="mt-8"><Link href="/sermons">Back to sermons</Link></Button>
        </div>
      </article>
    </main>
  );
}
