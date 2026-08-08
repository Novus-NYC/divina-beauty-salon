import { business, galleryImages } from "../data";

export const metadata = { title: "Gallery" };

export default function WorkPage() {
  return <main><section className="page-hero gallery-page-hero"><p className="kicker">The Divina gallery</p><h1>Brows, nails, henna, and the salon in between.</h1><p>A look at the real work and the Queens Boulevard space behind it.</p></section><section className="gallery-wall" data-stagger>{galleryImages.map((image) => <figure className={image.size} key={image.src}><img src={image.src} alt={image.alt} loading={image.size === "large" ? "eager" : "lazy"} decoding="async" /></figure>)}</section><section className="gallery-cta" data-reveal><div><p className="kicker">Your turn</p><h2>Find a service that fits your day.</h2><p>Use the booking menu for threading, nails, lashes, facials, and waxing.</p></div><a className="button primary" href={business.bookingHref} target="_blank" rel="noreferrer">View appointments</a></section></main>;
}
