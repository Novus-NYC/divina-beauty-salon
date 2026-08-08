export const business = {
  name: "Divina Threading Salon",
  shortName: "Divina",
  phone: "(718) 472-4348",
  phoneHref: "tel:+17184724348",
  address: "41-26 Queens Blvd, Sunnyside, NY 11104",
  mapsHref: "https://www.google.com/maps/search/?api=1&query=Divina+Threading+Salon+41-26+Queens+Blvd+Sunnyside+NY+11104",
  bookingHref: "https://classpass.com/studios/davina-threading-and-nails-queens-county",
  hours: "Open daily, 10 AM-8 PM",
  instagram: "https://www.instagram.com/divinathreading/",
  facebook: "https://www.facebook.com/DivinaThreadingSalon",
};

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Visit", href: "/contact" },
];

export const socialLinks = [
  { label: "Instagram", href: business.instagram },
  { label: "Facebook", href: business.facebook },
];

export const serviceGroups = [
  {
    title: "Brows and threading",
    summary: "The precise, quick appointments that made Divina a Sunnyside regular.",
    services: ["Eyebrow threading", "Full face threading", "Lip and chin threading", "Sides threading", "Eyebrow tinting", "Eyebrow lamination"],
    image: "/images/gallery/facebook-salon-05.jpg",
    alt: "Divina Threading storefront on Queens Boulevard",
  },
  {
    title: "Nails",
    summary: "Everyday maintenance and polished finishing touches for hands and feet.",
    services: ["Regular manicure", "Gel manicure", "Regular pedicure", "Spa pedicure", "Gel pedicure", "Polish change"],
    image: "/images/gallery/facebook-salon-08.jpg",
    alt: "Pink nail art from Divina Threading Salon",
  },
  {
    title: "Lashes and brows",
    summary: "Tinting, lifting, lamination, and extensions when you want a little more definition.",
    services: ["Eyelash tinting", "Lash lift or curl", "Regular cluster lashes", "Mink cluster lashes", "C-curl cluster lashes", "2D or 3D lashes"],
    image: "/images/gallery/magicpin-salon-01.webp",
    alt: "Interior of Divina Threading Salon with beauty chairs and manicure stations",
  },
  {
    title: "Skin and waxing",
    summary: "Facial care and hair removal services, from express visits to full appointments.",
    services: ["Deep cleansing facial", "Express facial", "Herbal facial", "Dermaplaning", "Brazilian waxing", "Full body waxing"],
    image: "/images/gallery/facebook-salon-03.jpg",
    alt: "Henna design by Divina Threading Salon",
  },
];

export const galleryImages = [
  { src: "/images/gallery/magicpin-salon-01.webp", alt: "Interior of Divina Threading Salon in Sunnyside", size: "large" },
  { src: "/images/gallery/facebook-salon-05.jpg", alt: "Divina Threading storefront sign", size: "tall" },
  { src: "/images/gallery/facebook-salon-03.jpg", alt: "Henna body art detail", size: "square" },
  { src: "/images/gallery/facebook-salon-06.jpg", alt: "Intricate henna hand art", size: "square" },
  { src: "/images/gallery/facebook-salon-07.jpg", alt: "Detailed henna hand art", size: "wide" },
  { src: "/images/gallery/facebook-salon-08.jpg", alt: "Pink nail art by Divina", size: "square" },
];

export const reviews = [
  { quote: "Very nice service, very friendly owner and staff.", source: "Google Maps review" },
  { quote: "It took only 10 mins to get the best and fastest waxing experience here.", source: "Google Maps review" },
  { quote: "The ladies did such a nice job with my eyebrows and nails. I left very happy.", source: "Google Maps review" },
];

export const credentials = ["Women-owned", "LGBTQ+ friendly", "Walk-ins welcome", "Appointment booking available"];

export const faqItems = [
  { question: "Can I walk in?", answer: "Yes. Public business listings show walk-ins are welcome. For a specific service or a busy time, booking through ClassPass is the clearest way to check availability." },
  { question: "What is available to book?", answer: "The ClassPass menu lists threading, waxing, lashes, brow treatments, facials, manicures, pedicures, and more." },
  { question: "Where is Divina?", answer: "Divina is at 41-26 Queens Blvd in Sunnyside, Queens. Use the directions link for live routing." },
];
