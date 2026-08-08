import type { Metadata } from "next";
import { Archivo, Geist_Mono } from "next/font/google";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { ScrollRevealInit } from "./components/ScrollRevealInit";
import "./globals.css";

const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"], display: "swap" });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "Divina Threading Salon | Sunnyside, Queens", template: "%s | Divina Threading Salon" },
  description: "Threading, nails, lashes, facials, and waxing in Sunnyside, Queens.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${archivo.variable} ${mono.variable}`}><ScrollRevealInit /><SiteHeader />{children}<SiteFooter /></body></html>;
}
