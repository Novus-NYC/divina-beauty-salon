import { business, serviceGroups } from "../data";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return <main><section className="page-hero image-page-hero"><img src="/images/gallery/facebook-salon-05.jpg" alt="Divina Threading storefront sign" fetchPriority="high" decoding="async" /><div><p className="kicker">Services</p><h1>Built around your beauty routine.</h1><p>Choose a service, then open the live booking menu to see available times.</p><a className="button primary" href={business.bookingHref} target="_blank" rel="noreferrer">Open live booking</a></div></section>
  <section className="services-directory" data-stagger>{serviceGroups.map((group, index) => <article key={group.title} className={`service-directory-item service-directory-item-${index + 1}`}><div className="service-directory-copy"><span>{group.title}</span><h2>{group.summary}</h2><a className="text-link" href={business.bookingHref} target="_blank" rel="noreferrer">Book {group.title}</a></div><div className="service-directory-list">{group.services.map((service) => <a href={business.bookingHref} target="_blank" rel="noreferrer" key={service}>{service}<b>Book</b></a>)}</div></article>)}</section>
  <section className="service-note" data-reveal><img src="/images/gallery/facebook-salon-08.jpg" alt="Pink nail art by Divina" loading="lazy" decoding="async" /><div><p className="kicker">Booking note</p><h2>The online menu updates with live availability.</h2><p>Tap any service above to open Divina&apos;s ClassPass listing. Call the salon for help choosing a treatment or to confirm a same-day visit.</p><a className="button primary" href={business.phoneHref}>Call {business.phone}</a></div></section></main>;
}
