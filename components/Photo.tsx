import Image from "next/image";

// Renders a real photo if `src` is set, otherwise a styled placeholder
// that still looks designed rather than broken.
//
// TO ADD A REAL PHOTO:
//   1. Drop the file into /public/photos/
//   2. In content/site.ts, set the `src` for that image, e.g. "/photos/hero.jpg"
// That's it. Nothing else changes.

export default function Photo({
  src,
  alt,
  label,
  className = "",
  tone = "pale",
  priority = false,
}: {
  src?: string;
  alt?: string;
  label: string;
  className?: string;
  tone?: "pale" | "clay" | "deep";
  priority?: boolean;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt ?? label}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }

  const tones = {
    pale: { bg: "#EADED5", fg: "#C4856A" },
    clay: { bg: "#E2CFC2", fg: "#A96A4F" },
    deep: { bg: "#F1EBE4", fg: "#9A8879" },
  }[tone];

  return (
    <div
      role="img"
      aria-label={`Photo placeholder: ${label}`}
      className={`relative flex items-end overflow-hidden ${className}`}
      style={{ backgroundColor: tones.bg }}
    >
      {/* Soft abstract shapes so an empty slot still reads as designed */}
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <defs>
          <radialGradient id={`g-${label.replace(/\W/g, "")}`} cx="30%" cy="25%" r="80%">
            <stop offset="0%" stopColor={tones.fg} stopOpacity="0.28" />
            <stop offset="100%" stopColor={tones.fg} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill={`url(#g-${label.replace(/\W/g, "")})`} />
        <circle cx="78%" cy="76%" r="26%" fill={tones.fg} opacity="0.12" />
        <circle cx="22%" cy="82%" r="14%" fill={tones.fg} opacity="0.08" />
      </svg>
      <span className="relative m-4 rounded-full bg-white/75 px-3 py-1 text-[11px] font-medium tracking-wide text-espresso">
        {label}
      </span>
    </div>
  );
}
