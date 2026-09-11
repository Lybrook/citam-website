"use client";

import { useCallback, useEffect, useState } from "react";
import { Mail, MapPin, Menu, Moon, Phone, Sun, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { useTheme } from "next-themes";

const navItems = [["Visit", "/events"], ["About", "/about"], ["Ministries", "/ministries"], ["Sermons", "/sermons"], ["Gallery", "/gallery"], ["Contact", "/contact"]];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const dark = theme === "dark";
  const onScroll = useCallback(() => setScrolled(window.scrollY > 18), []);
  useEffect(() => { window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, [onScroll]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  function toggleTheme() { setTheme(dark ? "light" : "dark"); }

  return <header className={`fixed inset-x-0 top-0 z-50 transition-shadow ${scrolled ? "shadow-lg" : ""}`}>
    <div className="hidden bg-[var(--black)] text-xs text-white/80 md:block"><div className="container-shell flex h-9 items-center justify-between"><div className="flex items-center gap-5"><a href="tel:+254712345678" className="inline-flex items-center gap-2 hover:text-white"><Phone size={13} /> +254 712 345 678</a><a href="mailto:info@citamkitale.org" className="inline-flex items-center gap-2 hover:text-white"><Mail size={13} /> info@citamkitale.org</a></div><span className="inline-flex items-center gap-2"><MapPin size={13} className="text-[var(--gold)]" /> Kitale Town, Trans Nzoia County</span></div></div>
    <div className={`border-b border-[var(--line)] bg-[var(--cream)]/95 backdrop-blur-xl ${scrolled ? "py-2" : "py-3"}`}><div className="container-shell flex items-center justify-between gap-5"><Logo /><nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">{navItems.map(([label, href]) => { const active = pathname === href || pathname.startsWith(`${href}/`); return <Link key={href} href={href} className={`rounded px-3 py-2 text-xs font-black uppercase tracking-[.1em] transition ${active ? "text-[var(--red)]" : "text-[var(--ink)] hover:text-[var(--red)]"}`}>{label}</Link>; })}</nav><div className="hidden items-center gap-3 lg:flex"><button onClick={toggleTheme} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} className="rounded-full border border-[var(--line)] p-2 text-[var(--ink)] transition hover:border-[var(--red)] hover:text-[var(--red)]">{dark ? <Sun size={17} /> : <Moon size={17} />}</button><Link href="/give" className="rounded bg-[var(--red)] px-5 py-3 text-xs font-black uppercase tracking-[.14em] text-white transition hover:bg-[var(--red-dark)]">Give</Link></div><div className="flex items-center gap-2 lg:hidden"><Link href="/give" className="rounded bg-[var(--red)] px-4 py-2 text-xs font-black uppercase tracking-[.1em] text-white">Give</Link><button onClick={() => setOpen(!open)} className="rounded border border-[var(--line)] p-2 text-[var(--ink)]" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X size={21} /> : <Menu size={21} />}</button></div></div></div>
    {open && <div className="absolute inset-x-0 top-full border-t border-[var(--line)] bg-[var(--cream)] px-6 pb-8 pt-4 shadow-xl lg:hidden"><nav className="container-shell grid" aria-label="Mobile navigation">{navItems.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="border-b border-[var(--line)] py-4 text-xl font-black uppercase text-[var(--ink)]">{label}</Link>)}<button onClick={toggleTheme} className="mt-5 flex items-center gap-3 py-3 text-sm font-bold text-[var(--ink)]">{dark ? <Sun size={18} /> : <Moon size={18} />}{dark ? "Use light mode" : "Use dark mode"}</button></nav></div>}
  </header>;
}
