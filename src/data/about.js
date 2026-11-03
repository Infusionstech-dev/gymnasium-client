// Placeholder photos from Unsplash. Replace with the Figma exports in /public/images when available.
const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const aboutHeroImage = img("photo-1517838277536-f5f99be501cd");

export const storyImages = {
  main: img("photo-1586401100295-7a8096fd231a"),
  secondary: img("photo-1638536532686-d610adfc8e5c"),
};

export const values = [
  {
    icon: "badge",
    title: "Evidence Over Fads",
    text: "We run zero novelty workouts. Every periodization cycle is informed by peer-reviewed exercise physiology, progressive overload metrics, and biomechanical joint preservation.",
  },
  {
    icon: "users",
    title: "Friendly Environment",
    text: "From our acoustic baffling to competition-grade Eleiko plates, the room is tuned for acute cognitive focus. Distractions are systematically removed so effort remains absolute.",
  },
  {
    icon: "building",
    title: "Community Integrity",
    text: "Ego is checked at the perimeter turnstile. Our culture celebrates the final athlete finishing their sprint intervals just as passionately as an Olympian hitting a snatch PR.",
  },
];
