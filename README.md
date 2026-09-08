# Salon Mara — demo site

Demonstration website for a fictional boutique hair salon, showing Voltion's
work in the personal services sector.

Next.js static export + Tailwind. Fraunces (display) + Inter (body), self-hosted.

## Adding real photos (about 15 minutes)

Every image slot is listed in `content/site.ts` under `photos` and `gallery`.

1. Download free photos from **unsplash.com** or **pexels.com**
   (both are free for commercial use, no attribution required)
2. Save them into `public/photos/`
3. In `content/site.ts`, set the `src` for each one:

       hero: { src: "/photos/hero.jpg", label: "...", alt: "..." }

4. Push. Done. Any slot left with `src: ""` shows a styled placeholder instead,
   so the site never looks broken while photos are still being gathered.

### Search terms that work well
- hero: "balayage hair", "hair colour salon"
- interior: "hair salon interior", "salon chair minimal"
- stylist: "hairdresser working", "stylist cutting hair"
- portrait: "hairdresser portrait"
- shopfront: "salon shopfront", "boutique storefront"
- gallery: "balayage", "bob haircut", "blonde hair", "copper hair",
  "layered haircut", "short textured hair"

Pick photos with a warm tone so they sit well with the palette. Aim for
roughly 1600px wide, and compress them at tinypng.com before adding.

## Pages
- `/` Home, `/services/` price list, `/about/` stylist story, `/visit/` location

## Editing text
All copy, pricing, hours and contact details are in `content/site.ts`.

## Run locally
    npm install
    npm run dev

## Deploy
Push to GitHub, import into Vercel, deploy. Free hosting.
