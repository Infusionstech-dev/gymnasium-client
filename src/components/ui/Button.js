import Link from "next/link";

const variants = {
  primary: "bg-mint text-ink hover:bg-white",
  outline: "border-2 border-white/40 text-white hover:border-mint hover:text-mint",
  "outline-gold": "border-2 border-gold text-gold hover:bg-gold hover:text-ink",
};

export default function Button({ href = "#", variant = "primary", className = "", children }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-md px-7 py-3.5 font-display text-lg font-bold uppercase tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
