import Link from "next/link";

export default function Logo({ className = "" }) {
  return (
    <Link href="/" aria-label="AltaFit home" className={`inline-flex flex-col items-center ${className}`}>
      <svg viewBox="0 0 80 52" className="h-10 w-auto" aria-hidden="true">
        <path d="M40 2 L64 50 H52 L40 24 L28 50 H16 Z" fill="#ffffff" />
        <path d="M40 24 L52 50 H64 L46 14 Z" fill="#d6b27c" />
        <path d="M10 38 C30 30 52 26 76 22 C56 30 38 36 22 44 Z" fill="#72e8d4" />
      </svg>
      <span className="mt-1 font-display text-sm font-bold tracking-[0.35em] text-white">
        ALTA<span className="text-gold">FIT</span>
      </span>
    </Link>
  );
}
