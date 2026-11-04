// Placeholder photos from Unsplash. Replace with the Figma exports in /public/images when available.
const unsplashImage = (photoId) => `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1200&q=80`;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Classes", href: "/classes" },
  { label: "Gallery", href: "/gallery" },
  { label: "Membership", href: "/membership" },
  { label: "Mentors", href: "/mentors" },
];

export const heroImage = unsplashImage("photo-1534438327276-14e5300c3a48");

export const memberAvatars = [
  unsplashImage("photo-1583454110551-21f2fa2afe61"),
  unsplashImage("photo-1581009146145-b5ef050c2e1e"),
  unsplashImage("photo-1517836357463-d25dfeac3438"),
  unsplashImage("photo-1594381898411-846e7d193883"),
];

export const stats = [
  { value: "10,000+", label: "Active Members" },
  { value: "50+", label: "Expert Trainers" },
  { value: "20+", label: "Premium Gyms" },
  { value: "4.9/5", label: "Member Satisfaction" },
];

export const whyImage = unsplashImage("photo-1540497077202-7c8a3999166f");

export const features = [
  { icon: "badge", title: "Expert Coaches", text: "Certified and experienced professionals." },
  { icon: "users", title: "Supportive Community", text: "Train together, grow together." },
  { icon: "building", title: "Premium Facilities", text: "Modern equipment and inspiring spaces." },
];

export const classes = [
  { icon: "dumbbell", title: "Strength Training", text: "Build muscle and increase power.", image: unsplashImage("photo-1581009146145-b5ef050c2e1e") },
  { icon: "heart", title: "Personal Training", text: "One-to-one coaching tailored to your goals.", image: unsplashImage("photo-1571019614242-c5c5dee9f50b") },
  { icon: "users", title: "Group Classes", text: "High-energy classes for every fitness level.", image: unsplashImage("photo-1534258936925-c58bed479fcb") },
  { icon: "yoga", title: "Yoga", text: "Improve flexibility and mental balance.", image: unsplashImage("photo-1544367567-0f2fcb009e0b") },
  { icon: "weight", title: "CrossFit", text: "Functional movements for body conditioning.", image: unsplashImage("photo-1517963879433-6ad2b056d712") },
  { icon: "run", title: "Cardio Blast", text: "Cardio sessions to boost endurance.", image: unsplashImage("photo-1576678927484-cc907957088c") },
];

// Four masonry columns matching the Figma layout. height = image height in px on desktop.
export const gallery = [
  [
    { src: unsplashImage("photo-1593079831268-3381b0db4a77"), alt: "Functional training zone", height: 350 },
    { src: unsplashImage("photo-1584735935682-2f2b69dff9d2"), alt: "Dumbbell rack", height: 400 },
  ],
  [{ src: unsplashImage("photo-1599058917212-d750089bc07e"), alt: "Battle ropes session", height: 782 }],
  [
    { src: unsplashImage("photo-1540497077202-7c8a3999166f"), alt: "Cardio floor", height: 252 },
    { src: unsplashImage("photo-1517963879433-6ad2b056d712"), alt: "Barbell plates", height: 498 },
  ],
  [
    { src: unsplashImage("photo-1534438327276-14e5300c3a48"), alt: "Main training hall", height: 500 },
    { src: unsplashImage("photo-1541534741688-6078c6bfb5c5"), alt: "Barbell curls", height: 250 },
  ],
];

export const plans = [
  {
    name: "Essential",
    tagline: "Start your fitness journey",
    price: 49,
    features: ["Gym access", "Standard equipment", "Locker rooms", "Mobile app access"],
  },
  {
    name: "Performance",
    tagline: "For consistent progress",
    price: 79,
    popular: true,
    features: ["Everything in Essential", "Group classes", "Personal training discounts", "Guest passes (2 per month)"],
  },
  {
    name: "Elite",
    tagline: "The complete experience",
    price: 129,
    features: ["Everything in Performance", "Unlimited group classes", "Priority class booking", "Wellness & recovery perks"],
  },
];

export const trainers = [
  { name: "Alex Carter", role: "Strength & Conditioning", image: unsplashImage("photo-1567013127542-490d757e51fc") },
  { name: "Maya Flora", role: "Personal Training", image: unsplashImage("photo-1550345332-09e3ac987658") },
  { name: "Daniel Kim", role: "Functional Training", image: unsplashImage("photo-1594737625785-a6cbdabd333c") },
];

export const testimonials = Array.from({ length: 4 }, (_, index) => ({
  quote:
    "My trial completely redefined what I expected from a gym. The coach attention on day one was unmatched, and the contrast plunge sanctuary is pure luxury.",
  name: "Marcus T.",
  location: "Austin Downtown Flagship Member",
  avatar: memberAvatars[index % memberAvatars.length],
}));

export const faqs = [
  {
    question: "What should I bring to my trial session?",
    answer: "Comfortable workout clothes, training shoes, a water bottle and a towel. We provide everything else, including lockers and showers.",
  },
  {
    question: "Is it truly free or will my card be charged later?",
    answer: "Your trial is 100% free. We never ask for card details to book a trial, so there are no surprise charges.",
  },
  {
    question: "Can I bring a training partner with me?",
    answer: "Absolutely. Let us know when you book and we will reserve a free trial spot for your partner too.",
  },
  {
    question: "What happens if I need to reschedule my slot?",
    answer: "No problem. You can reschedule anytime up to 2 hours before your session from your confirmation email or by contacting us.",
  },
];

export const ctaImage = unsplashImage("photo-1583454110551-21f2fa2afe61");
