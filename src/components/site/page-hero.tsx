import Image from "next/image";
import { Reveal } from "./reveal";

export function PageHero({ eyebrow, title, description, image = "/citamKitale1.jpg" }: { eyebrow: string; title: string; description: string; image?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--navy)] pt-36 text-white md:pt-44">
      <Image src={image} alt="CITAM Kitale community" fill priority className="-z-20 object-cover opacity-35" sizes="100vw" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--navy)] via-[var(--navy)]/85 to-[var(--navy)]/30" />
      <div className="container-shell relative py-20 md:py-28">
        <Reveal>
          <p className="eyebrow text-[var(--gold)]">{eyebrow}</p>
          <h1 className="display-heading mt-5 max-w-4xl text-6xl leading-[0.9] sm:text-7xl lg:text-8xl">{title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">{description}</p>
        </Reveal>
      </div>
      <div className="absolute bottom-0 left-0 h-8 w-full rounded-t-[50%] bg-[var(--cream)]" />
    </section>
  );
}
