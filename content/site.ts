// ---------------------------------------------------------------
// DEMO SITE. Edit this file to change any text, pricing or details.
// ---------------------------------------------------------------

export const site = {
  name: "Salon Mara",
  short: "Mara",
  tagline: "Your hair, done right.",
  subhead:
    "A boutique hair studio in Newtown. One chair, one stylist, unhurried appointments — a calmer alternative to the big salons.",

  stylist: "Mara Osei",
  suburb: "Newtown",
  city: "Sydney",

  phoneDisplay: "(02) 9557 0148",
  phoneE164: "+61295570148",
  email: "hello@salonmara.com.au",

  address: {
    street: "218 King Street",
    suburb: "Newtown NSW 2042",
  },
  mapsLink: "https://www.google.com/maps/search/?api=1&query=218+King+Street+Newtown+NSW+2042",

  // Real salons book through platforms like Fresha, Timely or Square.
  bookingUrl: "https://www.fresha.com",
  bookingLabel: "Book on Fresha",

  instagram: "https://www.instagram.com/",

  hours: [
    { day: "Tuesday", open: "9:00am", close: "6:00pm" },
    { day: "Wednesday", open: "9:00am", close: "6:00pm" },
    { day: "Thursday", open: "9:00am", close: "8:00pm" },
    { day: "Friday", open: "9:00am", close: "6:00pm" },
    { day: "Saturday", open: "8:30am", close: "5:00pm" },
  ],
  closedNote: "Closed Sunday and Monday",
  // Paste a Web3Forms key to receive real booking requests by email.
  formAccessKey: "3778005f-9eff-4e8b-958f-69984f040ba2",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/about/", label: "About" },
  { href: "/visit/", label: "Visit" },
  { href: "/book/", label: "Book" },
] as const;

export const highlights = [
  {
    title: "One chair, one stylist",
    body: "Every appointment is with Mara. No juniors, no being passed between people halfway through your colour.",
  },
  {
    title: "Unhurried appointments",
    body: "Bookings are spaced so nothing gets rushed. A colour takes as long as a colour takes.",
  },
  {
    title: "A consultation first, always",
    body: "Every visit starts with a proper conversation about what you want, what will suit you, and what it will cost.",
  },
];

export type PriceItem = { name: string; note?: string; price: string };
export type PriceGroup = { title: string; blurb?: string; items: PriceItem[] };

export const pricing: PriceGroup[] = [
  {
    title: "Cutting",
    blurb: "All cuts include a wash, head massage and finish.",
    items: [
      { name: "Women's cut and finish", price: "from $95" },
      { name: "Men's cut", price: "from $55" },
      { name: "Fringe trim", note: "Between full appointments", price: "$15" },
      { name: "Restyle consultation", note: "45 minutes, redeemable against your first service", price: "$40" },
    ],
  },
  {
    title: "Colour",
    blurb: "A patch test is required at least 48 hours before any colour service.",
    items: [
      { name: "Root touch-up", price: "from $130" },
      { name: "Full head colour", price: "from $180" },
      { name: "Half head foils", price: "from $195" },
      { name: "Full head foils", price: "from $260" },
      { name: "Balayage", note: "Includes toner and finish", price: "from $290" },
      { name: "Toner or gloss", price: "from $75" },
    ],
  },
  {
    title: "Treatments",
    items: [
      { name: "Deep conditioning treatment", price: "$45" },
      { name: "Bond repair treatment", price: "$65" },
      { name: "Keratin smoothing", note: "Allow three hours", price: "from $350" },
      { name: "Scalp treatment", price: "$55" },
    ],
  },
  {
    title: "Styling",
    items: [
      { name: "Blow dry", price: "from $65" },
      { name: "Blow dry with curls or waves", price: "from $85" },
      { name: "Occasion styling", price: "from $130" },
      { name: "Bridal styling", note: "Includes a trial", price: "from $320" },
    ],
  },
];

// ---------------------------------------------------------------
// PHOTOS
// Every image on the site is listed here. To add a real photo:
//   1. Put the file in /public/photos/  (e.g. hero.jpg)
//   2. Set src below, e.g. src: "/photos/hero.jpg"
// Leave src empty and a styled placeholder shows instead.
// Good free sources: unsplash.com and pexels.com (free for commercial use).
// ---------------------------------------------------------------

export type Img = { src?: string; label: string; alt?: string };

export const photos = {
  hero:      { src: "/photos/hero.jpg", label: "Hero: colour work, mid-length", alt: "Blonde balayage on long hair" } as Img,
  interior:  { src: "/photos/interior.jpg", label: "Studio interior", alt: "Inside a boutique hair salon" } as Img,
  stylist:   { src: "/photos/stylist.jpg", label: "Mara at the chair", alt: "Stylist working at the chair" } as Img,
  portrait:  { src: "/photos/portrait.jpg", label: "Portrait of Mara Osei", alt: "Portrait of stylist Mara Osei" } as Img,
  studio:    { src: "/photos/studio.jpg", label: "The studio, King Street", alt: "Salon Mara studio on King Street" } as Img,
  shopfront: { src: "/photos/shopfront.jpg", label: "Shopfront on King Street", alt: "Salon Mara shopfront on King Street Newtown" } as Img,
};

export const gallery: Img[] = [
  { src: "/photos/gallery-1.jpg", label: "Balayage", alt: "Balayage on brunette hair" },
  { src: "/photos/gallery-2.jpg", label: "Bob with fringe", alt: "Sleek bob with fringe" },
  { src: "/photos/gallery-3.jpg", label: "Blonde bob styling", alt: "Blonde bob being styled" },
  { src: "/photos/gallery-4.jpg", label: "Men's cut", alt: "Men's haircut styling" },
  { src: "/photos/gallery-5.jpg", label: "Barbershop style", alt: "Classic men's cut" },
  { src: "/photos/gallery-6.jpg", label: "Colour application", alt: "Hair colour being applied" },
];

export const about = {
  heading: "Fifteen years behind the chair.",
  paragraphs: [
    "Mara Osei trained in London and spent a decade working in busy city salons before opening Salon Mara in 2021. The move was deliberate: fewer clients, more time with each one.",
    "The studio is a single chair on King Street. That means every appointment is with Mara from start to finish, and nobody gets handed off to a junior halfway through a colour.",
    "Mara specialises in colour, particularly balayage and lived-in blondes, and in cuts that still look good three months later when life gets busy and the salon visit gets pushed back.",
  ],
  credentials: [
    "Wella Master Colour Expert",
    "Fifteen years cutting and colouring",
    "Trained in London, working in Sydney since 2016",
  ],
};
