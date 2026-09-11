import Link from "next/link";
import { ArrowUpRight, Instagram, Youtube, Facebook, MapPin, Phone, Mail } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return <footer className="bg-[var(--navy)] text-white">
    <div className="container-shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
      <div><Logo /><p className="mt-7 max-w-sm text-sm leading-7 text-white/65">A diverse family of faith in Kitale, committed to prayer, biblical discipleship, and practical love for our neighbours in Trans Nzoia and beyond.</p><div className="mt-7 flex gap-3"><a aria-label="Facebook" href="#" className="rounded-full border border-white/15 p-2 text-white/70 transition hover:border-[var(--gold)] hover:text-[var(--gold)]"><Facebook size={17} /></a><a aria-label="Instagram" href="#" className="rounded-full border border-white/15 p-2 text-white/70 transition hover:border-[var(--gold)] hover:text-[var(--gold)]"><Instagram size={17} /></a><a aria-label="YouTube" href="#" className="rounded-full border border-white/15 p-2 text-white/70 transition hover:border-[var(--gold)] hover:text-[var(--gold)]"><Youtube size={17} /></a></div></div>
      <div><p className="eyebrow text-[var(--gold)]">Explore</p><div className="mt-5 grid gap-3 text-sm text-white/70"><Link href="/about" className="hover:text-white">Our story</Link><Link href="/ministries" className="hover:text-white">Ministries</Link><Link href="/events" className="hover:text-white">Gather with us</Link><Link href="/sermons" className="hover:text-white">Teachings</Link><Link href="/gallery" className="hover:text-white">Life at CITAM</Link></div></div>
      <div><p className="eyebrow text-[var(--gold)]">Find us</p><div className="mt-5 grid gap-4 text-sm leading-6 text-white/70"><span className="flex gap-3"><MapPin className="mt-1 shrink-0 text-[var(--gold)]" size={16} />Kitale Town, Trans Nzoia County, Kenya</span><span className="flex gap-3"><Phone className="mt-1 shrink-0 text-[var(--gold)]" size={16} />+254 712 345 678</span><span className="flex gap-3"><Mail className="mt-1 shrink-0 text-[var(--gold)]" size={16} />info@citamkitale.org</span></div><Link href="/give" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-5 py-3 text-xs font-black uppercase tracking-[.15em] text-[var(--navy)]">Give via M-Pesa <ArrowUpRight size={15} /></Link></div>
    </div>
    <div className="border-t border-white/10"><div className="container-shell flex flex-col gap-2 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} CITAM Kitale. Christ is the Answer.</span><span>Sunday worship · 8:00 AM and 10:30 AM</span></div></div>
  </footer>;
}
