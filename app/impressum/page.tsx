import type { Metadata } from "next";
import Link from "next/link";

import SiteNav from "../components/SiteNav";
import { siteInfo } from "../lib/site-info";

import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Impressum - Sara Vanesa Maj",
  description:
    "Impressum und Offenlegung nach § 25 Mediengesetz der Portfolio-Website von Sara Vanesa Maj.",
};

export default function Impressum() {
  return (
    <main className={styles.page} lang="de">
      <SiteNav />

      <div className={styles.meta}>
        <span>RECHTLICHES</span>
        <span>OFFENLEGUNG NACH § 25 MEDIENGESETZ</span>
      </div>

      <h1 className={styles.title}>Impressum</h1>

      <div className={styles.content}>
        <section className={styles.block}>
          <h2>MEDIENINHABERIN UND HERAUSGEBERIN</h2>

          <div className={styles.text}>
            <p>{siteInfo.name}</p>
          </div>
        </section>

        <section className={styles.block}>
          <h2>WOHNORT</h2>

          <div className={styles.text}>
            <p>
              {siteInfo.place}, {siteInfo.country}
            </p>
          </div>
        </section>

        <section className={styles.block}>
          <h2>ART UND ZWECK DER WEBSITE</h2>

          <div className={styles.text}>
            <p>{siteInfo.purpose}</p>
          </div>
        </section>

        <section className={styles.block}>
          <h2>KONTAKT</h2>

          <div className={styles.text}>
            <p>
              E-Mail:{" "}
              <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
            </p>
          </div>
        </section>
      </div>

      <div className={styles.note}>
        <Link href="/datenschutz">DATENSCHUTZ</Link>
        <Link href="/">ZURÜCK ZUR STARTSEITE</Link>
      </div>
    </main>
  );
}
