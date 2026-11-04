import { trainers } from "@/data/home";

// Placeholder photos from Unsplash. Replace with the Figma exports in /public/images when available.
const unsplashImage = (photoId) => `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1200&q=80`;

// The first three mentors are the trainers featured on the home page.
export const mentors = [
  ...trainers,
  { name: "Diego Elen", role: "Strength & Conditioning", image: unsplashImage("photo-1597347343908-2937e7dcc560") },
  { name: "Sara Rozer", role: "Personal Training", image: unsplashImage("photo-1594381898411-846e7d193883") },
  { name: "Van Der Sar", role: "Functional Training", image: unsplashImage("photo-1611672585731-fa10603fb9e0") },
];
