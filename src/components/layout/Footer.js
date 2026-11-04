import Link from "next/link";
import Logo from "@/components/ui/Logo";
import Icon from "@/components/ui/Icon";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/classes" },
  { label: "Membership", href: "/membership" },
];

const legalLinks = [
  { label: "Terms of Use", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Support", href: "/support" },
];

const socials = [
  { icon: "camera", label: "Instagram", href: "#" },
  { icon: "globe", label: "Website", href: "#" },
  { icon: "play", label: "YouTube", href: "#" },
  { icon: "share", label: "Share", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-8 py-12 text-center md:grid-cols-3 md:text-left">
          <div className="flex justify-center md:justify-start">
            <Logo />
          </div>

          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm tracking-wide text-white/80 transition-colors hover:text-mint">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex justify-center gap-5 md:justify-end">
            {socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} aria-label={social.label} className="text-white/80 transition-colors hover:text-mint">
                  <Icon name={social.icon} className="h-6 w-6" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-sm text-white/60 sm:flex-row">
          <p className="text-white/75">&copy; 2026 AltaFit. All rights reserved.</p>
          <ul className="flex items-center text-white">
            {legalLinks.map((link, index) => (
              <li key={link.label} className="flex items-center">
                {index > 0 && <span className="px-1.5" aria-hidden="true">|</span>}
                <Link href={link.href} className="transition-colors hover:text-mint">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
