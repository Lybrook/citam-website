import Image from "next/image";
import Link from "next/link";

export default function Logo({ inverted = false }: { inverted?: boolean }) {
  return <Link href="/" className="flex items-center gap-3" aria-label="CITAM Kitale home"><span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-[var(--line)] bg-white p-1"><Image src="/logo-mark.png" alt="" width={40} height={48} priority className="h-full w-auto object-contain" /></span><span className="hidden leading-none sm:block"><strong className={`block text-[11px] font-black uppercase tracking-[.12em] ${inverted ? "text-white" : "text-[var(--black)] dark:text-white"}`}>Christ Is The Answer</strong><span className="mt-1 block text-[10px] font-bold uppercase tracking-[.18em] text-[var(--red)]">Ministries · Kitale</span></span></Link>;
}
