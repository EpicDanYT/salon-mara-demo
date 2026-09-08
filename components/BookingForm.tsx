"use client";

import { useState } from "react";
import { site } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

const services = [
  { group: "Cutting", items: ["Women's cut and finish", "Men's cut", "Restyle consultation"] },
  { group: "Colour", items: ["Root touch-up", "Full head colour", "Half head foils", "Full head foils", "Balayage", "Toner or gloss"] },
  { group: "Treatments", items: ["Deep conditioning treatment", "Bond repair treatment", "Keratin smoothing", "Scalp treatment"] },
  { group: "Styling", items: ["Blow dry", "Blow dry with curls or waves", "Occasion styling", "Bridal styling"] },
];

const days = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const times = ["Morning (9am – 11am)", "Midday (11am – 2pm)", "Afternoon (2pm – 6pm)", "Evening — Thursday only (6pm – 8pm)"];

const field = "w-full rounded-xl border border-espresso/20 bg-white px-4 py-3.5 text-espresso placeholder:text-espresso/40 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/20 transition-colors";
const label = "block text-sm font-medium text-espresso mb-2";

export default function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [selectedService, setSelectedService] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    if (!site.formAccessKey) {
      const body = `Booking request\n\nService: ${selectedService}\nPreferred day: ${selectedDay}\nPreferred time: ${selectedTime}\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nNotes: ${data.notes || "None"}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Booking request: " + selectedService)}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: site.formAccessKey,
          subject: `Booking request: ${selectedService}`,
          service: selectedService,
          preferred_day: selectedDay,
          preferred_time: selectedTime,
          ...data,
        }),
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-espresso/10 bg-shell-deep p-10 text-center sm:p-14">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-clay/15">
          <svg className="h-8 w-8 text-clay-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="display mt-6 text-3xl">Request received.</h2>
        <p className="body-text mt-3 max-w-sm mx-auto">
          Mara will confirm your appointment within one business day. If you need to reach out sooner, call {site.phoneDisplay}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      {/* Service selector */}
      <div>
        <p className={label}>Which service? <span className="text-clay-deep">*</span></p>
        <div className="space-y-3">
          {services.map((group) => (
            <div key={group.group}>
              <p className="eyebrow mb-2">{group.group}</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {group.items.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSelectedService(item)}
                    className={`rounded-xl border px-4 py-3 text-left text-sm transition-colors ${
                      selectedService === item
                        ? "border-clay bg-clay/10 text-espresso font-medium"
                        : "border-espresso/15 bg-white text-espresso-soft hover:border-clay/50"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <input type="hidden" name="service" value={selectedService} required />
        {!selectedService && (
          <p className="mt-2 text-xs text-espresso-soft">Please select a service to continue.</p>
        )}
      </div>

      {/* Day preference */}
      <div>
        <p className={label}>Preferred day <span className="text-clay-deep">*</span></p>
        <div className="flex flex-wrap gap-2">
          {days.map((day) => (
            <button
              key={day}
              type="button"
              onClick={() => setSelectedDay(day)}
              className={`rounded-full border px-5 py-2.5 text-sm transition-colors ${
                selectedDay === day
                  ? "border-clay bg-clay text-shell font-medium"
                  : "border-espresso/15 bg-white text-espresso-soft hover:border-clay/50"
              }`}
            >
              {day}
            </button>
          ))}
        </div>
        <input type="hidden" name="preferred_day" value={selectedDay} required />
      </div>

      {/* Time preference */}
      <div>
        <p className={label}>Preferred time <span className="text-clay-deep">*</span></p>
        <div className="grid gap-2 sm:grid-cols-2">
          {times.map((time) => (
            <button
              key={time}
              type="button"
              onClick={() => setSelectedTime(time)}
              className={`rounded-xl border px-4 py-3 text-left text-sm transition-colors ${
                selectedTime === time
                  ? "border-clay bg-clay/10 text-espresso font-medium"
                  : "border-espresso/15 bg-white text-espresso-soft hover:border-clay/50"
              }`}
            >
              {time}
            </button>
          ))}
        </div>
        <input type="hidden" name="preferred_time" value={selectedTime} required />
      </div>

      {/* Contact details */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Your name <span className="text-clay-deep">*</span></label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className={label}>Phone <span className="text-clay-deep">*</span></label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className={label}>Email <span className="text-clay-deep">*</span></label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="notes" className={label}>Anything Mara should know? <span className="text-espresso/40 font-normal">(optional)</span></label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            placeholder="Hair history, allergies, what you've been wanting to try, or anything else."
            className={field}
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-5 pt-2">
        <button
          type="submit"
          disabled={status === "sending" || !selectedService || !selectedDay || !selectedTime}
          className="btn-clay disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "Sending…" : "Request appointment"}
        </button>
        <p className="text-sm text-espresso-soft">
          Or call <a href={`tel:${site.phoneE164}`} className="text-clay-deep hover:underline">{site.phoneDisplay}</a>
        </p>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Email {site.email} directly and Mara will get back to you.
        </p>
      )}
    </form>
  );
}
