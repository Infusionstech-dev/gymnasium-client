const paths = {
  badge: <><path d="M12 2l2.4 1.8 3-.2.9 2.9 2.5 1.7-1 2.8 1 2.8-2.5 1.7-.9 2.9-3-.2L12 22l-2.4-1.8-3 .2-.9-2.9-2.5-1.7 1-2.8-1-2.8 2.5-1.7.9-2.9 3 .2z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></>,
  users: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" /><path d="M15 14c3 0 6 1.7 6 5" /></>,
  building: <><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3" /></>,
  dumbbell: <><path d="M6.5 6.5l11 11M4 9l5-5M15 20l5-5M2.5 10.5l1.5 1.5M12 2.5l1.5 1.5M10.5 20l1.5 1.5M20 10.5l1.5 1.5" /></>,
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" />,
  yoga: <><circle cx="12" cy="4.5" r="2" /><path d="M12 7v6M6 10l6 3 6-3M4 20c2-3 5-4 8-4s6 1 8 4M8 18l4-2 4 2" /></>,
  weight: <><circle cx="12" cy="4.5" r="2" /><path d="M5 3v4M19 3v4M5 5h14M12 7v5l-3 9M12 12l3 9" /></>,
  run: <><circle cx="14" cy="4.5" r="2" /><path d="M6 20l3.5-5 3 2 1.5-5 3 3h3M9 9l3-2 2 3M4 13h4" /></>,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  star: <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" fill="currentColor" stroke="none" />,
  camera: <><rect x="3" y="6" width="18" height="14" rx="2" /><circle cx="12" cy="13" r="3.5" /><path d="M8 6l1.5-2.5h5L16 6" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9S9.5 5.5 12 3z" /></>,
  play: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M10 9l5 3-5 3z" /></>,
  share: <><circle cx="18" cy="5" r="2.5" /><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="19" r="2.5" /><path d="M8.2 10.8l7.6-4.4M8.2 13.2l7.6 4.4" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
};

export default function Icon({ name, className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
