"use client";

import { useCallback, useEffect, useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";

const navItems = [
  ["About", "/about"], ["Gather", "/events"], ["Ministries", "/ministries"], ["Sermons", "/sermons"], ["Gallery", "/gallery"], ["Contact", "/contact"],
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onScroll = useCallback(() => setScrolled(window.scrollY > 24), []);
  useEffect(() => { window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, [onScroll]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-[var(--navy)]/95 py-3 shadow-2xl backdrop-blur-xl" : "bg-[var(--navy)]/70 py-5 backdrop-blur-md"}`}>
      <div className="container-shell flex items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map(([label, href]) => {
            const active = pathname === href || pathname.startsWith(`${href}/`);
            return <Link key={href} href={href} className={`rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[.12em] transition-colors ${active ? "bg-white text-[var(--navy)]" : "text-white/75 hover:bg-white/10 hover:text-white"}`}>{label}</Link>;
          })}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/give" className="rounded-full bg-[var(--red)] px-5 py-3 text-xs font-black uppercase tracking-[.14em] text-white shadow-lg shadow-red-950/30 transition-transform hover:-translate-y-0.5">Give</Link>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <Link href="/give" className="rounded-full bg-[var(--red)] px-4 py-2 text-xs font-black uppercase tracking-[.1em] text-white">Give</Link>
          <button className="rounded-full border border-white/25 p-2 text-white" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </div>
      {open && <div className="absolute inset-x-0 top-full border-t border-white/10 bg-[var(--navy)] px-6 pb-8 pt-5 shadow-2xl lg:hidden">
        <nav className="container-shell grid gap-1" aria-label="Mobile navigation">
          {navItems.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="border-b border-white/10 py-4 text-2xl font-bold uppercase text-white">{label}</Link>)}
        </nav>
        <div className="container-shell mt-6 grid gap-3 text-sm text-white/70"><span className="flex items-center gap-2"><MapPin size={15} className="text-[var(--gold)]" /> Kitale, Trans Nzoia County</span><span className="flex items-center gap-2"><Phone size={15} className="text-[var(--gold)]" /> +254 712 345 678</span></div>
      </div>}
    </header>
  );
}
