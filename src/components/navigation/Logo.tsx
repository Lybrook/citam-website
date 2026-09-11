import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return <Link href="/" className="group flex items-center gap-3" aria-label="CITAM Kitale home">
    <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white/95 p-1 shadow-lg"><Image src="/logo-mark.png" alt="" width={40} height={48} priority className="h-full w-auto object-contain" /></span>
    <span className="hidden leading-none sm:block"><strong className="block text-[11px] font-black uppercase tracking-[.16em] text-white">Christ Is The Answer</strong><span className="mt-1 block text-[10px] font-semibold uppercase tracking-[.24em] text-[var(--gold)]">Ministries · Kitale</span></span>
  </Link>;
}
