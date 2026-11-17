import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import SiteNav from "../../components/SiteNav";

import styles from "../case-study.module.css";

export const metadata: Metadata = {
  title: "VSA — Sara Maj",
  description:
    "VSA is a UX/UI design project for a universal platform that manages digital assets such as social media accounts and crypto wallets after a user's death.",
};

const landing = [
  {
    src: "/images/vsa/landing-light.jpg",
    alt: "VSA landing page in light mode with the headline Shaping Digital Legacy, featured solutions, product spotlight, mission, security and FAQ sections",
    width: 1482,
    height: 3224,
    title: "LANDING PAGE",
    note: "Light mode",
  },
  {
    src: "/images/vsa/landing-dark.jpg",
    alt: "VSA landing page in dark mode with the same sections",
    width: 1508,
    height: 3224,
    title: "LANDING PAGE",
    note: "Dark mode",
  },
];

const screens = [
  {
    src: "/images/vsa/contact-dark.jpg",
    alt: "VSA contact page in dark mode with address details and a message form",
    width: 1449,
    height: 792,
    title: "CONTACT",
    note: "Dark mode",
  },
  {
    src: "/images/vsa/pricing-light.jpg",
    alt: "VSA pricing page in a browser mockup with the plans Basic, Advanced and Premium",
    width: 1421,
    height: 795,
    title: "PRICING",
    note: "Light mode mockup",
  },
  {
    src: "/images/vsa/signin-light.jpg",
    alt: "VSA sign-in page in a browser mockup in light mode",
    width: 1388,
    height: 812,
    title: "SIGN IN",
    note: "Light mode mockup",
  },
  {
    src: "/images/vsa/signin-dark.jpg",
    alt: "VSA sign-in page in dark mode with username and password fields",
    width: 1471,
    height: 803,
    title: "SIGN IN",
    note: "Dark mode",
  },
];

const tools = [
  "Adobe XD",
  "Balsamiq",
  "Mockups",
  "UX Design",
  "YouTrack",
];

export default function VsaProject() {
  return (
    <main className={styles.page}>
      <SiteNav />

      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.heroMeta}>
          <span>05 — FEATURED PROJECT</span>
          <span>UX/UI DESIGN · NOV 2023 – MAY 2024</span>
        </div>

        <div className={styles.heroTitle}>
          <h1>VSA</h1>
        </div>

        <div className={styles.heroBottom}>
          <p>
            A universal platform for managing digital assets such as
            social media accounts and crypto wallets, so that they are
            not lost when a user passes away.
          </p>

          <div className={styles.skills}>
            <span>UX/UI</span>
            <span>Wireframing</span>
            <span>Adobe XD</span>
            <span>Light &amp; Dark Mode</span>
            <span>Project Management</span>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}

      <section className={styles.visualSectionDark}>
        <div className={styles.visualHeader}>
          <span>01 — THE CHALLENGE</span>

          <p>
            The market sees a steady rise in digital products and
            services. Personal digital possessions like social media
            accounts and crypto wallets risk being lost upon the
            user&apos;s demise. Though some platforms offer asset
            transfer solutions, they are often product-specific. This
            project aims to provide a universal solution for managing
            digital assets, addressing the issue comprehensively.
          </p>
        </div>

        <div className={styles.duo}>
          {landing.map((item) => (
            <figure key={item.src} className={styles.screen}>
              <div className={styles.duoFrame}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className={styles.figureImage}
                  sizes="(max-width: 900px) 100vw, 45vw"
                />
              </div>

              <figcaption className={styles.screenCaption}>
                <span>{item.title}</span>
                <span>{item.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* SCREENS */}

      <section className={styles.visualSectionLight}>
        <div className={styles.visualHeader}>
          <span>02 — MORE SCREENS</span>

          <p>
            Contact, pricing and sign-in pages, designed in a light
            and a dark mode with one shared header, footer and chat
            button. Some screens are shown in browser mockups.
          </p>
        </div>

        <div className={styles.duo}>
          {screens.map((item) => (
            <figure key={item.src} className={styles.screen}>
              <div className={styles.duoFrame}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className={styles.figureImage}
                  sizes="(max-width: 900px) 100vw, 45vw"
                />
              </div>

              <figcaption className={styles.screenCaption}>
                <span>{item.title}</span>
                <span>{item.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* TOOLS */}

      <section className={styles.visualSectionDark}>
        <div className={styles.visualHeader}>
          <span>03 — TOOLS &amp; SKILLS</span>

          <p>
            What I worked with and learned in this project.
          </p>
        </div>

        <div className={`${styles.pills} ${styles.toolPills}`}>
          {tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </section>

      {/* FOOTER */}

      <section className={styles.end}>
        <span>VSA</span>

        <Link href="/#work" className={styles.back}>
          <span>BACK TO SELECTED WORK</span>
          <span>↗</span>
        </Link>
      </section>
    </main>
  );
}
