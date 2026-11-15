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
  "Motion",
  "Film",
  "Graphics",
  "Sound",
  "3D",
  "Code",
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
        {categories.map((category, index) => (
          <li key={category} className={styles.row}>
            <span className={styles.number}>
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className={styles.name}>{category}</span>

            <span className={styles.status}>COMING SOON</span>
          </li>
        ))}
      </ul>

      <div className={styles.footer}>
        <Link href="/" className={styles.back}>
          <span>BACK TO HOME</span>
          <span>↗</span>
        </Link>
      </div>
    </main>
  );
}
