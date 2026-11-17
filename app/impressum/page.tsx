import type { Metadata } from "next";
import Link from "next/link";

import SiteNav from "../components/SiteNav";
import { siteInfo } from "../lib/site-info";

import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Legal Notice - Sara Vanesa Maj",
  description:
    "Legal notice (Impressum) and disclosure under § 25 of the Austrian Media Act for the portfolio website of Sara Vanesa Maj.",
};

export default function Impressum() {
  return (
    <main className={styles.page} lang="en">
      <SiteNav />

      <div className={styles.meta}>
        <span>LEGAL</span>
        <span>DISCLOSURE UNDER § 25 AUSTRIAN MEDIA ACT</span>
      </div>

      <h1 className={styles.title}>Legal Notice</h1>

      <div className={styles.content}>
        <section className={styles.block}>
          <h2>MEDIA OWNER AND PUBLISHER</h2>

          <div className={styles.text}>
            <p>{siteInfo.name}</p>
          </div>
        </section>

        <section className={styles.block}>
          <h2>PLACE OF RESIDENCE</h2>

          <div className={styles.text}>
            <p>
              {siteInfo.place}, {siteInfo.country}
            </p>
          </div>
        </section>

        <section className={styles.block}>
          <h2>NATURE AND PURPOSE OF THE WEBSITE</h2>

          <div className={styles.text}>
            <p>{siteInfo.purpose}</p>
          </div>
        </section>

        <section className={styles.block}>
          <h2>CONTACT</h2>

          <div className={styles.text}>
            <p>
              Email: <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
            </p>
          </div>
        </section>
      </div>

      <div className={styles.note}>
        <Link href="/datenschutz">PRIVACY POLICY</Link>
        <Link href="/">BACK TO HOME</Link>
      </div>
    </main>
  );
}
