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
  {
    name: "Motion",
    text: "Motion graphics, animation and editing experiments.",
  },
  {
    name: "Film",
    text: "Short films, edits and visual storytelling.",
  },
  {
    name: "Graphics",
    text: "Posters, typography and other graphic design studies.",
  },
  {
    name: "3D",
    text: "A short reel of studies in Maya: topology, a polygon robot, rig animation, a liquid simulation, realistic hair and cloth with HDRI lighting.",
    video: true,
  },
  {
    name: "Sound",
    text: "Sound design and audio experiments.",
  },
  {
    name: "Code",
    text: "Smaller development projects and interface experiments.",
  },
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
        into a case study. The archive is still growing.
      </p>

      <div className={styles.grid}>
        {categories.map((category, index) => (
          <article
            key={category.name}
            className={`${styles.card} ${
              category.video ? styles.cardWide : ""
            }`}
          >
            <div className={styles.cardInfo}>
              <div className={styles.cardTop}>
                <span className={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.status}>
                  {category.video ? "1 ITEM" : "COMING SOON"}
                </span>
              </div>

              <h2 className={styles.name}>{category.name}</h2>

              <p className={styles.cardText}>{category.text}</p>

              {category.video && (
                <p className={styles.panelNote}>
                  3D-Modelling Portfolio · Maya · 2023–2025. My latest
                  3D scene is the{" "}
                  <Link href="/work/cozy-place">Cozy Place</Link>{" "}
                  project.
                </p>
              )}
            </div>

            {category.video && (
              <div className={styles.videoWrap}>
                <video
                  className={styles.video}
                  controls
                  preload="metadata"
                  playsInline
                  poster="/videos/3d-portfolio-poster.jpg"
                  aria-label="3D modelling portfolio in Maya, 2023 to 2025"
                >
                  <source
                    src="/videos/3d-portfolio.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            )}
          </article>
        ))}
      </div>

      <div className={styles.footer}>
        <Link href="/" className={styles.back}>
          <span>BACK TO HOME</span>
          <span>↗</span>
        </Link>
      </div>
    </main>
  );
}
