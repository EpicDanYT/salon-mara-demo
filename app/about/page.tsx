import type { Metadata } from "next";
import { site, about, photos } from "@/content/site";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";

export const metadata: Metadata = {
  title: "About",
  description: `${site.stylist} has been cutting and colouring for fifteen years. Salon Mara is her one-chair studio in ${site.suburb}.`,
};

export default function About() {
  return (
    <main id="main">
      <section className="wrap grid items-start gap-12 py-14 sm:py-20 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <p className="eyebrow">About</p>
          <h1 className="display mt-4 max-w-xl text-5xl sm:text-6xl">{about.heading}</h1>
          <div className="mt-8 space-y-5">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 30)} className="body-text">{p}</p>
            ))}
          </div>

          <ul className="mt-10 space-y-2">
            {about.credentials.map((c) => (
              <li key={c} className="flex items-start gap-3 text-espresso">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                {c}
              </li>
            ))}
          </ul>

          <a href={site.bookingUrl} className="btn-clay mt-10">{site.bookingLabel}</a>
        </div>

        <div className="grid gap-4">
          <Photo {...photos.portrait} className="aspect-[4/5] rounded-2xl" tone="clay" />
          <Photo {...photos.studio} className="aspect-[4/3] rounded-2xl" tone="deep" />
        </div>
      </section>
    </main>
  );
}
