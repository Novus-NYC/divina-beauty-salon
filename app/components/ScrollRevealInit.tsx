"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollRevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll("[data-reveal], [data-stagger]"));

    const isVisibleNow = (target: Element) => {
      const rect = target.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.96 && rect.bottom > 0;
    };

    if (typeof IntersectionObserver === "undefined") {
      targets.forEach((target) => target.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -46px 0px" },
    );

    const frame = window.requestAnimationFrame(() => {
      targets.forEach((target) => {
        if (isVisibleNow(target)) {
          target.classList.add("in-view");
          return;
        }

        observer.observe(target);
      });
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
