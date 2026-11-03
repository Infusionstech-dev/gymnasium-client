"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { navLinks } from "@/data/home";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <ul className="hidden items-center gap-10 lg:flex xl:gap-14">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative pb-2 font-display text-xl tracking-wide transition-colors hover:text-mint ${
                    active ? "font-semibold text-mint" : "text-white"
                  }`}
                >
                  {link.label}
                  {active && <span className="absolute inset-x-0 bottom-0 h-0.5 rounded bg-mint" />}
                </Link>
              </li>
            );
          })}
        </ul>

        <Button href="/book-a-free-trial" className="hidden lg:inline-flex">
          Book a Free Trial
        </Button>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} className="h-8 w-8" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink px-5 pb-6 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-white/5 py-4 font-display text-xl ${
                    pathname === link.href ? "text-mint" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href="/book-a-free-trial" className="mt-6 w-full">
            Book a Free Trial
          </Button>
        </div>
      )}
    </header>
  );
}
