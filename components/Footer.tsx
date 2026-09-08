import Link from "next/link";
import { site, nav } from "@/content/site";

export default function Footer() {
  return (
    <footer className="mt-6 border-t border-espresso/10 bg-shell-deep">
      <div className="wrap grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="display text-2xl">Salon <span className="italic text-clay-deep">Mara</span></p>
          <p className="mt-3 text-sm leading-relaxed text-espresso-soft">
            A one-chair hair studio on King Street, {site.suburb}.
          </p>
        </div>

        <div>
          <h2 className="eyebrow">Visit</h2>
          <address className="mt-3 not-italic text-sm leading-relaxed text-espresso-soft">
            {site.address.street}<br />{site.address.suburb}
          </address>
          <a href={site.mapsLink} className="mt-2 inline-block text-sm text-clay-deep hover:underline">Directions</a>
        </div>

        <div>
          <h2 className="eyebrow">Hours</h2>
          <dl className="mt-3 space-y-1 text-sm text-espresso-soft">
            {site.hours.map((h) => (
              <div key={h.day} className="flex justify-between gap-4">
                <dt>{h.day.slice(0, 3)}</dt>
                <dd>{h.open} – {h.close}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-2 text-xs text-espresso-soft/70">{site.closedNote}</p>
        </div>

        <div>
          <h2 className="eyebrow">Get in touch</h2>
          <div className="mt-3 space-y-1 text-sm">
            <p><a href={`tel:${site.phoneE164}`} className="text-espresso hover:text-clay-deep">{site.phoneDisplay}</a></p>
            <p><a href={`mailto:${site.email}`} className="text-espresso-soft hover:text-clay-deep">{site.email}</a></p>
            <p><a href={site.instagram} className="text-espresso-soft hover:text-clay-deep">Instagram</a></p>
          </div>
          <a href="/book/" className="btn-clay mt-5 !px-6 !py-3 text-sm">Book now</a>
        </div>
      </div>

      <div className="border-t border-espresso/10">
        <div className="wrap flex flex-col gap-3 py-6 text-xs text-espresso-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <nav className="flex gap-5">
            {nav.map((l) => <Link key={l.href} href={l.href} className="hover:text-espresso">{l.label}</Link>)}
          </nav>
        </div>
      </div>
    </footer>
  );
}
