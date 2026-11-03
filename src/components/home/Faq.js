"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/data/home";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading center dark={false} eyebrow="Clarity first" title="Frequently asked questions" subtitle="Everything you need to know prior to stepping onto our training floor." />

        <div className="mt-14 space-y-5">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className="rounded-xl bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-6 px-8 py-7 text-left"
                >
                  <span className="font-display text-xl font-bold uppercase tracking-wide text-ink sm:text-2xl">{item.q}</span>
                  <Icon name="chevron" className={`h-6 w-6 shrink-0 text-ink transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <p className="overflow-hidden px-8 text-ink/75">
                    <span className="block pb-7">{item.a}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
