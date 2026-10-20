import { business, navLinks, socialLinks } from "../data";

export function SiteFooter() {
  return <footer className="site-footer">
    <div><span className="footer-brand">DIVINA</span><p>Threading, nails, lashes, and skincare in Sunnyside.</p><a className="text-link" href={business.bookingHref} target="_blank" rel="noreferrer">Book an appointment</a></div>
    <nav aria-label="Footer navigation"><strong>Explore</strong>{navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>
    <address><strong>Visit</strong><a href={business.phoneHref}>{business.phone}</a><a href={business.mapsHref} target="_blank" rel="noreferrer">{business.address}</a><span>{business.hours}</span></address>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Divina Threading Salon</span><div>{socialLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}<a className="volta-credit" href="https://www.novusnyc.org/" target="_blank" rel="noreferrer">Made by Novus</a></div></div>
  </footer>;
}
