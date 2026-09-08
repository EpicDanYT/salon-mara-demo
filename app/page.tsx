import Link from "next/link";
import { site, highlights, gallery, pricing, photos } from "@/content/site";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";

export default function Home() {
  const featured = pricing[0].items.slice(0, 2).concat(pricing[1].items.slice(0, 2));

  return (
    <main id="main">
      {/* Hero */}
      <section className="wrap grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <p className="eyebrow">{site.suburb}, {site.city}</p>
          <h1 className="display mt-5 text-[13vw] sm:text-6xl lg:text-7xl">{site.tagline}</h1>
          <p className="lede mt-7 max-w-lg">{site.subhead}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="/book/" className="btn-clay">Book now</a>
            <Link href="/services/" className="btn-outline">Services and pricing</Link>
          </div>
          <p className="mt-7 text-sm text-espresso-soft">
            Open Tuesday to Saturday. <a href={`tel:${site.phoneE164}`} className="text-clay-deep hover:underline">{site.phoneDisplay}</a>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 transition-transform duration-500 hover:scale-[1.01]"><Photo {...photos.hero} priority className="aspect-[5/4] rounded-2xl" /></div>
          <Photo {...photos.interior} className="aspect-square rounded-2xl" tone="deep" />
          <Photo {...photos.stylist} className="aspect-square rounded-2xl" tone="clay" />
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y border-espresso/10 bg-shell-deep py-16 sm:py-20">
        <div className="wrap">
          <ul className="grid gap-10 sm:grid-cols-3">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 100}>
                <li>
                  <h2 className="display text-2xl">{h.title}</h2>
                  <p className="body-text mt-3">{h.body}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="wrap py-16 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Recent work</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">From the chair</h2>
          </div>
          <a href={site.instagram} className="text-sm text-clay-deep hover:underline">More on Instagram</a>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {gallery.map((g, i) => (
            <Reveal key={g.label} delay={(i % 3) * 90}>
              <li>
                <Photo
                  {...g}
                  tone={i % 3 === 1 ? "clay" : i % 3 === 2 ? "deep" : "pale"}
                  className="aspect-[4/5] rounded-2xl transition-transform duration-300 hover:scale-[1.02]"
                />
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Pricing teaser */}
      <section className="border-y border-espresso/10 bg-shell-deep py-16 sm:py-20">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Pricing</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl">No surprises at the counter</h2>
            <p className="body-text mt-5 max-w-sm">
              Every price is listed before you book. Longer or thicker hair may cost more, and Mara will always tell you the exact price at the consultation, before anything starts.
            </p>
            <Link href="/services/" className="btn-outline mt-8">See full price list</Link>
          </div>
          <ul className="divide-y divide-espresso/10">
            {featured.map((item, i) => (
              <Reveal key={item.name} delay={i * 80}>
                <li className="flex items-baseline justify-between gap-6 py-4">
                  <span className="text-lg">{item.name}</span>
                  <span className="whitespace-nowrap font-medium text-clay-deep">{item.price}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="wrap py-16 sm:py-24">
        <div className="grid items-center gap-10 rounded-3xl bg-espresso p-10 text-shell sm:p-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="display text-4xl sm:text-5xl">Come and sit down.</h2>
            <p className="mt-5 max-w-md text-shell/70">
              Appointments run Tuesday to Saturday at {site.address.street}, {site.address.suburb}. Book online any time, or call during opening hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/book/" className="btn bg-clay text-shell hover:bg-clay-deep">Book now</a>
              <a href={`tel:${site.phoneE164}`} className="btn border border-shell/30 text-shell hover:bg-shell hover:text-espresso">
                {site.phoneDisplay}
              </a>
            </div>
          </div>
          <Photo {...photos.shopfront} className="aspect-[4/3] rounded-2xl" tone="clay" />
        </div>
      </section>
    </main>
  );
}
