"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { business, navLinks } from "../data";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className={`site-header ${open ? "menu-open" : ""}`}>
    <Link className="brand" href="/" aria-label="Divina home" onClick={() => setOpen(false)}><span>DIVINA</span><small>THREADING SALON</small></Link>
    <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /></button>
    <nav>{navLinks.map((link) => <Link key={link.href} href={link.href} className={pathname === link.href ? "active" : ""} onClick={() => setOpen(false)}>{link.label}</Link>)}</nav>
    <a className="nav-cta" href={business.bookingHref} target="_blank" rel="noreferrer">Book now</a>
  </header>;
}
