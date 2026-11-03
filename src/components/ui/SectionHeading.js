export default function SectionHeading({ eyebrow, title, subtitle, center = false, dark = true }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-4xl"}>
      <p className="font-display text-lg font-bold uppercase tracking-[0.25em] text-gold sm:text-xl">
        {eyebrow}
      </p>
      <h2
        className={`mt-2 font-display text-5xl font-extrabold uppercase leading-[0.95] sm:text-6xl lg:text-7xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg ${dark ? "text-white/70" : "text-ink/80"}`}>{subtitle}</p>
      )}
    </div>
  );
}
