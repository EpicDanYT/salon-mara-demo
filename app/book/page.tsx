import type { Metadata } from "next";
import { site } from "@/content/site";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book an appointment",
  description: `Book a haircut, colour or treatment at Salon Mara in Newtown. Select your service and preferred time and Mara will confirm within one business day.`,
};

export default function Book() {
  return (
    <main id="main">
      <section className="wrap py-14 sm:py-20">
        <p className="eyebrow">Appointments</p>
        <h1 className="display mt-4 max-w-2xl text-5xl sm:text-6xl">Book with Mara.</h1>
        <p className="lede mt-5 max-w-xl">
          Book instantly online, or send an enquiry first if you have a question before you commit to a time.
        </p>

        {/* Primary path: real-time booking via Fresha */}
        <div className="mt-10 flex flex-col gap-6 rounded-3xl bg-espresso p-8 text-shell sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <p className="eyebrow !text-clay">Fastest way to book</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl">See real availability, book instantly.</h2>
            <p className="mt-3 max-w-md text-shell/70">
              Pick a service and a time straight from the live calendar. You get an instant confirmation and a reminder before your visit.
            </p>
          </div>
          <a href={site.bookingUrl} className="btn-clay whitespace-nowrap">{site.bookingLabel}</a>
        </div>

        <div className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-espresso/10 bg-shell-deep px-5 py-3">
          <svg className="h-4 w-4 shrink-0 text-clay-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
          <p className="text-sm text-espresso-soft">
            Colour services need a patch test 48 hours before. First visit? Please mention it when you book.
          </p>
        </div>

        {/* Secondary path: enquiry form for anyone who wants to ask first */}
        <div className="mt-16 border-t border-espresso/10 pt-12">
          <p className="eyebrow">Not ready to book yet</p>
          <h2 className="display mt-2 text-3xl sm:text-4xl">Send an enquiry instead.</h2>
          <p className="lede mt-3 max-w-xl !text-lg">
            Best for first-time visits, allergy checks, group bookings, or anything you want to ask before picking a time. Mara replies within one business day.
          </p>

          <div className="mt-10 grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <BookingForm />

            <aside className="space-y-8 rounded-3xl border border-espresso/10 bg-shell-deep p-8">
              <div>
                <h2 className="display text-2xl">Opening hours</h2>
                <dl className="mt-4 space-y-2">
                  {site.hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-4 text-sm">
                      <dt className="text-espresso">{h.day}</dt>
                      <dd className="text-espresso-soft">{h.open} – {h.close}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 text-xs text-espresso-soft/70">{site.closedNote}</p>
              </div>

              <div>
                <h2 className="display text-2xl">Where to find us</h2>
                <address className="mt-3 not-italic text-sm leading-relaxed text-espresso-soft">
                  {site.address.street}<br />{site.address.suburb}
                </address>
                <a href={site.mapsLink} className="mt-2 inline-block text-sm text-clay-deep hover:underline">
                  Get directions
                </a>
              </div>

              <div>
                <h2 className="display text-2xl">Cancellations</h2>
                <p className="mt-3 text-sm leading-relaxed text-espresso-soft">
                  Please give at least 24 hours notice if you need to cancel or reschedule. Late cancellations may incur a 50% fee.
                </p>
              </div>

              <div>
                <h2 className="display text-2xl">Prefer to call?</h2>
                <a href={`tel:${site.phoneE164}`} className="mt-3 block text-lg font-medium text-clay-deep hover:underline">
                  {site.phoneDisplay}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
