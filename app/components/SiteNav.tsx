"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

const links = [
  { href: "/#work", label: "WORK" },
  { href: "/#about", label: "ABOUT" },
  { href: "/lab", label: "LAB" },
  { href: "/#contact", label: "CONTACT" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const [inHero, setInHero] = useState(true);

  useEffect(() => {
    const update = () => setInHero(window.scrollY < window.innerHeight * 0.8);

    update();

    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, []);

  const highlightCv = pathname === "/" && inHero;

  const close = () => setOpen(false);

  return (
    <nav className="siteNav" aria-label="Main navigation">
      <Link href="/" className="siteLogo" onClick={close}>
        SARA MAJ
      </Link>

      <button
        type="button"
        className="siteNavToggle"
        aria-expanded={open}
        aria-controls="site-nav-links"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "CLOSE" : "MENU"}
      </button>

      <div
        id="site-nav-links"
        className={`siteNavLinks${open ? " isOpen" : ""}`}
      >
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={close}>
            {link.label}
          </Link>
        ))}

        <a
          href="/cv/Sara-Maj-CV.pdf"
          target="_blank"
          rel="noreferrer"
          className={`siteNavCv${highlightCv ? " isHighlight" : ""}`}
          onClick={close}
        >
          CV ↓
        </a>
      </div>
    </nav>
  );
}
