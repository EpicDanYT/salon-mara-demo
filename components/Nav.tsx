"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site, nav } from "@/content/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-espresso/10 bg-shell/95 backdrop-blur">
      <div className="wrap flex h-20 items-center justify-between">
        <Link href="/" onClick={() => setOpen(false)} className="display text-2xl tracking-tight">
          Salon <span className="italic text-clay-deep">Mara</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
          {nav.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm tracking-wide transition-colors ${active ? "text-clay-deep" : "text-espresso-soft hover:text-espresso"}`}
              >
                {l.label}
              </Link>
            );
          })}
          <a href="/book/" className="btn-clay !px-6 !py-3 text-sm">Book now</a>
        </nav>

        <button
          className="p-2 text-espresso md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-espresso/10 md:hidden">
          <div className="wrap flex flex-col py-3">
            {nav.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-lg">
                {l.label}
              </Link>
            ))}
            <a href="/book/" className="btn-clay my-3 self-start">Book now</a>
          </div>
        </nav>
      )}
    </header>
  );
}
