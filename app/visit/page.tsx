import type { Metadata } from "next";
import { site, photos } from "@/content/site";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: "Visit",
  description: `Salon Mara is at ${site.address.street}, ${site.address.suburb}. Opening hours, parking, transport and booking.`,
};

export default function Visit() {
  return (
    <main id="main">
      <section className="wrap py-14 sm:py-20">
        <p className="eyebrow">Visit</p>
        <h1 className="display mt-4 text-5xl sm:text-6xl">Find the studio.</h1>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-10">
            <div>
              <h2 className="display text-2xl">Address</h2>
              <address className="mt-3 not-italic body-text">
                {site.address.street}<br />{site.address.suburb}
              </address>
              <a href={site.mapsLink} className="mt-3 inline-block text-clay-deep hover:underline">Open in Google Maps</a>
            </div>

            <div>
              <h2 className="display text-2xl">Hours</h2>
              <dl className="mt-3 max-w-xs space-y-1.5">
                {site.hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-6 text-espresso-soft">
                    <dt>{h.day}</dt>
                    <dd>{h.open} – {h.close}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-sm text-espresso-soft/80">{site.closedNote}</p>
            </div>

            <div>
              <h2 className="display text-2xl">Getting here</h2>
              <ul className="mt-3 space-y-2 body-text">
                <li>Four minutes walk from Newtown station.</li>
                <li>The 422, 423, 426 and 428 buses all stop on King Street.</li>
                <li>Metered street parking on King Street and free two-hour parking on the surrounding side streets.</li>
              </ul>
            </div>

            <div>
              <h2 className="display text-2xl">Book or ask</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="/book/" className="btn-clay">Book now</a>
                <a href={`tel:${site.phoneE164}`} className="btn-outline">{site.phoneDisplay}</a>
              </div>
              <p className="mt-4 text-sm text-espresso-soft">
                Prefer to email? <a href={`mailto:${site.email}`} className="text-clay-deep hover:underline">{site.email}</a>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <iframe
              title={`Map to ${site.name}`}
              className="aspect-[4/3] w-full rounded-2xl border border-espresso/10"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(`${site.address.street}, ${site.address.suburb}`)}&output=embed`}
            />
            <Photo {...photos.shopfront} label="Shopfront, so people can spot it" className="aspect-[16/9] rounded-2xl" tone="clay" />
          </div>
        </div>
      </section>
    </main>
  );
}
