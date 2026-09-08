import type { Metadata } from "next";
import { site, pricing } from "@/content/site";

export const metadata: Metadata = {
  title: "Services and pricing",
  description: "Cutting, colour, balayage, treatments and styling at Salon Mara in Newtown. Full price list.",
};

export default function Services() {
  return (
    <main id="main">
      <section className="wrap py-14 sm:py-20">
        <p className="eyebrow">Services</p>
        <h1 className="display mt-4 max-w-2xl text-5xl sm:text-6xl">Everything, and what it costs.</h1>
        <p className="lede mt-6 max-w-xl">
          Prices start from the figures below. Longer, thicker or previously coloured hair can take more time and product, so Mara confirms the exact price at your consultation, before anything begins.
        </p>
      </section>

      <section className="wrap pb-16 sm:pb-24">
        <div className="grid gap-x-16 gap-y-14 lg:grid-cols-2">
          {pricing.map((group) => (
            <div key={group.title}>
              <h2 className="display text-3xl sm:text-4xl">{group.title}</h2>
              {group.blurb && <p className="body-text mt-2 text-sm sm:text-base">{group.blurb}</p>}
              <ul className="mt-6 divide-y divide-espresso/10">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-baseline justify-between gap-6 py-4">
                    <span>
                      <span className="block text-lg">{item.name}</span>
                      {item.note && <span className="mt-0.5 block text-sm text-espresso-soft">{item.note}</span>}
                    </span>
                    <span className="whitespace-nowrap font-medium text-clay-deep">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-espresso/10 bg-shell-deep p-8 sm:p-12">
          <h2 className="display text-3xl">Before you book</h2>
          <ul className="mt-5 space-y-3 body-text">
            <li>Colour services need a patch test at least 48 hours beforehand. First-time colour clients, please call to arrange one.</li>
            <li>Please arrive with dry, brushed hair unless your service includes a wash.</li>
            <li>Appointments cancelled with less than 24 hours notice may incur a 50% fee.</li>
          </ul>
          <a href="/book/" className="btn-clay mt-8">Book now</a>
        </div>
      </section>
    </main>
  );
}
