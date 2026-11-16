import type { Metadata } from "next";
import Link from "next/link";

import SiteNav from "../components/SiteNav";

import styles from "./lab.module.css";

export const metadata: Metadata = {
  title: "The Lab — Sara Maj",
  description:
    "Motion experiments, film, graphics, sound, 3D studies and smaller development projects by Sara Maj.",
};

const categories = [
  { name: "Motion", href: null },
  { name: "Film", href: null },
  { name: "Graphics", href: null },
  { name: "Sound", href: null },
  { name: "3D", href: "#3d" },
  { name: "Code", href: null },
];

export default function Lab() {
  return (
    <main className={styles.page}>
      <SiteNav />

      <div className={styles.meta}>
        <span>03 — THE LAB</span>
        <span>CREATIVE ARCHIVE</span>
      </div>

      <h1 className={styles.title}>THE LAB</h1>

      <p className={styles.intro}>
        Experiments, studies and smaller projects that don&apos;t fit
        into a case study. This archive is being curated and will
        grow over time.
      </p>

      <ul className={styles.list}>
        {categories.map((category, index) => {
          const content = (
            <>
              <span className={styles.number}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className={styles.name}>{category.name}</span>

              <span className={styles.status}>
                {category.href ? "WATCH ↓" : "COMING SOON"}
              </span>
            </>
          );

          return (
            <li key={category.name}>
              {category.href ? (
                <a
                  href={category.href}
                  className={`${styles.row} ${styles.rowLink}`}
                >
                  {content}
                </a>
              ) : (
                <div className={styles.row}>{content}</div>
              )}
            </li>
          );
        })}
      </ul>

      <section className={styles.feature} id="3d">
        <div className={styles.featureHead}>
          <span>05 — 3D</span>
          <span>MAYA · 2023–2025</span>
        </div>

        <h2 className={styles.featureTitle}>3D-Modelling Portfolio</h2>

        <p className={styles.featureText}>
          A short reel of studies in Maya: topology, a polygon robot,
          rig animation, a liquid simulation, realistic hair and cloth
          with HDRI lighting. My latest 3D scene is the{" "}
          <Link href="/work/cozy-place">Cozy Place</Link> project.
        </p>

        <div className={styles.videoWrap}>
          <video
            className={styles.video}
            controls
            preload="metadata"
            playsInline
            poster="/videos/3d-portfolio-poster.jpg"
            aria-label="3D modelling portfolio in Maya, 2023 to 2025"
          >
            <source src="/videos/3d-portfolio.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <div className={styles.footer}>
        <Link href="/" className={styles.back}>
          <span>BACK TO HOME</span>
          <span>↗</span>
        </Link>
      </div>
    </main>
  );
}
