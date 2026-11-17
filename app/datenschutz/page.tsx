import type { Metadata } from "next";
import Link from "next/link";

import SiteNav from "../components/SiteNav";
import { siteInfo } from "../lib/site-info";

import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy - Sara Vanesa Maj",
  description: "Privacy policy of the portfolio website of Sara Vanesa Maj.",
};

export default function Datenschutz() {
  return (
    <main className={styles.page} lang="en">
      <SiteNav />

      <div className={styles.meta}>
        <span>LEGAL</span>
        <span>UPDATED: {siteInfo.updated.toUpperCase()}</span>
      </div>

      <h1 className={styles.title}>Privacy Policy</h1>

      <div className={styles.content}>
        <section className={styles.block}>
          <h2>CONTROLLER</h2>

          <div className={styles.text}>
            <p>
              {siteInfo.name}, {siteInfo.place}, {siteInfo.country}
            </p>
            <p>
              Email: <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
            </p>
          </div>
        </section>

        <section className={styles.block}>
          <h2>OVERVIEW</h2>

          <div className={styles.text}>
            <p>
              This website is a personal portfolio. It sets no cookies, uses no
              analytics or tracking services, has no contact form and embeds no
              content from third parties. The fonts used are served by this
              website itself.
            </p>
          </div>
        </section>

        <section className={styles.block}>
          <h2>HOSTING AND SERVER LOG FILES</h2>

          <div className={styles.text}>
            <p>
              This website is hosted by {siteInfo.hostingProvider}. When you
              visit the site, the provider processes technically necessary data:
              your IP address, date and time, the page requested, and your
              browser and operating system. This is needed to deliver the
              website and to run it securely. The legal basis is the legitimate
              interest in the secure and reliable operation of the website (Art.
              6(1)(f) GDPR). I do not use this data for any analysis of my own.
            </p>
            <p>
              As the provider is based in the USA, data may be transferred to a
              third country. This relies on the European Commission&apos;s
              adequacy decision for the EU-US Data Privacy Framework or on
              standard contractual clauses. More information is in the
              provider&apos;s privacy policy:{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noreferrer"
              >
                vercel.com/legal/privacy-policy
              </a>
              .
            </p>
          </div>
        </section>

        <section className={styles.block}>
          <h2>CONTACT BY EMAIL</h2>

          <div className={styles.text}>
            <p>
              If you write to me, I process your email address, your name if
              given, and the content of your message in order to answer your
              request. The legal basis is pre-contractual measures, for example
              for an application or enquiry (Art. 6(1)(b) GDPR), and my
              legitimate interest in answering enquiries (Art. 6(1)(f) GDPR). I
              keep the data only as long as needed to handle the request or as
              required by law, and I do not pass it on.
            </p>
          </div>
        </section>

        <section className={styles.block}>
          <h2>LINKS TO OTHER WEBSITES</h2>

          <div className={styles.text}>
            <p>
              This website contains links to LinkedIn and to a prototype on
              Framer. If you click such a link, you leave this website. The
              respective providers are responsible for processing your data
              there, and their privacy policies apply. Merely visiting this
              website does not send any data to these providers.
            </p>
          </div>
        </section>

        <section className={styles.block}>
          <h2>YOUR RIGHTS</h2>

          <div className={styles.text}>
            <p>
              You have the right to access, rectification, erasure, restriction
              of processing, data portability and objection (Arts. 15 to 21
              GDPR). Simply write to{" "}
              <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>. You can
              also lodge a complaint with the Austrian data protection
              authority:{" "}
              <a href="https://www.dsb.gv.at/" target="_blank" rel="noreferrer">
                www.dsb.gv.at
              </a>
              .
            </p>
          </div>
        </section>
      </div>

      <div className={styles.note}>
        <Link href="/impressum">LEGAL NOTICE</Link>
        <Link href="/">BACK TO HOME</Link>
      </div>
    </main>
  );
}
