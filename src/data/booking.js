// Placeholder photo from Unsplash. Replace with the Figma export in /public/images when available.
const unsplashImage = (photoId) => `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1200&q=80`;

export const experienceTracks = [
  { id: "strength", icon: "dumbbell", title: "Strength & Conditioning", text: "Eleiko platforms, bar metrics & Olympic racks." },
  { id: "group", icon: "users", title: "Functional Group Class", text: "High-output athletic engine conditioning." },
  { id: "assessment", icon: "clipboard", title: "1-on-1 Assessment", text: "Biomechanics scan & coach mobility screen." },
];

export const facilityHubs = [
  "Austin Flagship — 214 Colorado St, Downtown",
  "Austin North — 9800 Burnet Rd, Domain",
  "Austin South — 1600 S Congress Ave, SoCo",
];

// Quick-pick arrival times in 24-hour "HH:MM" format (shown as 12-hour on screen).
export const arrivalTimes = ["06:30", "09:00", "12:00", "17:30", "19:00"];

// Gym opening hours, used to limit the custom time picker.
export const openingTime = "06:00";
export const closingTime = "21:00";

// Number of quick-pick days shown in the schedule picker, starting today.
export const bookableDayCount = 4;

// How far ahead (in days) a trial can be booked with the calendar picker.
export const maxBookingDaysAhead = 30;

export const athleticGoals = ["Build strength", "Lose fat", "Improve endurance", "Increase mobility", "General fitness"];

export const passIncludes = [
  { icon: "dumbbell", title: "Full Facility & Lifting Rig Access", text: "Complete use of Eleiko platforms, custom dumbbell gallery, and turf sprint track." },
  { icon: "pulse", title: "30-Min Biometric & Mobility Screen", text: "Functional Movement Screen (FMS) with our licensed performance specialist." },
  { icon: "sauna", title: "Post-Workout Recovery Session", text: "Access to contrast therapy suites, Finnish dry saunas, and 39°F cold plunge pools." },
  { icon: "cup", title: "Nutritional Fuel Shake", text: "Complimentary craft protein smoothie from the Fuel Lab post-workout lounge." },
];

export const facilityHighlight = {
  eyebrow: "Spatial Excellence",
  title: "Austin Flagship Biometrics Rig",
  size: "28,000 sq ft",
  image: unsplashImage("photo-1540497077202-7c8a3999166f"),
};
