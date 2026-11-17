import type { Metadata } from "next";
import Link from "next/link";

import SiteNav from "../components/SiteNav";
import { siteInfo } from "../lib/site-info";

import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Datenschutz - Sara Vanesa Maj",
  description:
    "Datenschutzerklärung der Portfolio-Website von Sara Vanesa Maj.",
};

export default function Datenschutz() {
  return (
    <main className={styles.page} lang="de">
      <SiteNav />

      <div className={styles.meta}>
        <span>RECHTLICHES</span>
        <span>STAND: {siteInfo.updated.toUpperCase()}</span>
      </div>

      <h1 className={styles.title}>Datenschutz</h1>

      <div className={styles.content}>
        <section className={styles.block}>
          <h2>VERANTWORTLICHE</h2>

          <div className={styles.text}>
            <p>
              {siteInfo.name}, {siteInfo.place}, {siteInfo.country}
            </p>
            <p>
              E-Mail:{" "}
              <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
            </p>
          </div>
        </section>

        <section className={styles.block}>
          <h2>ÜBERBLICK</h2>

          <div className={styles.text}>
            <p>
              Diese Website ist ein persönliches Portfolio. Sie setzt
              keine Cookies, verwendet keine Analyse- oder
              Tracking-Dienste, hat kein Kontaktformular und bindet
              keine Inhalte fremder Anbieter ein. Die verwendeten
              Schriften werden von dieser Website selbst ausgeliefert.
            </p>
          </div>
        </section>

        <section className={styles.block}>
          <h2>HOSTING UND SERVER-LOGFILES</h2>

          <div className={styles.text}>
            <p>
              Diese Website wird bei {siteInfo.hostingProvider}{" "}
              gehostet. Beim Aufruf verarbeitet der Anbieter technisch
              notwendige Daten, nämlich die IP-Adresse, Datum und
              Uhrzeit, die aufgerufene Seite sowie Browser und
              Betriebssystem, um die Website auszuliefern und sicher
              zu betreiben. Rechtsgrundlage ist das berechtigte
              Interesse am sicheren und zuverlässigen Betrieb der
              Website (Art. 6 Abs. 1 lit. f DSGVO). Ich verwende diese
              Daten nicht für eigene Auswertungen.
            </p>
            <p>
              Da der Anbieter seinen Sitz in den USA hat, kann dabei
              eine Übermittlung in ein Drittland stattfinden. Sie
              stützt sich auf den Angemessenheitsbeschluss der
              EU-Kommission zum EU-US Data Privacy Framework bzw. auf
              Standardvertragsklauseln. Mehr dazu in der
              Datenschutzerklärung des Anbieters:{" "}
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
          <h2>KONTAKT PER E-MAIL</h2>

          <div className={styles.text}>
            <p>
              Wenn Sie mir schreiben, verarbeite ich Ihre
              E-Mail-Adresse, gegebenenfalls Ihren Namen und den Inhalt
              Ihrer Nachricht, um Ihre Anfrage zu beantworten.
              Rechtsgrundlage sind vorvertragliche Maßnahmen, etwa bei
              einer Bewerbung oder Anfrage (Art. 6 Abs. 1 lit. b
              DSGVO), und mein berechtigtes Interesse an der
              Beantwortung von Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
              Ich speichere die Daten nur so lange, wie es für die
              Bearbeitung erforderlich ist oder gesetzliche Pflichten
              es verlangen, und gebe sie nicht weiter.
            </p>
          </div>
        </section>

        <section className={styles.block}>
          <h2>LINKS ZU ANDEREN WEBSITES</h2>

          <div className={styles.text}>
            <p>
              Diese Website enthält Links zu LinkedIn und zu einem
              Prototyp bei Framer. Wenn Sie einen solchen Link
              anklicken, verlassen Sie diese Website. Für die
              Verarbeitung Ihrer Daten dort sind die jeweiligen
              Anbieter verantwortlich, es gelten deren
              Datenschutzerklärungen. Beim bloßen Besuch dieser
              Website werden keine Daten an diese Anbieter übermittelt.
            </p>
          </div>
        </section>

        <section className={styles.block}>
          <h2>IHRE RECHTE</h2>

          <div className={styles.text}>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung, Datenübertragbarkeit und
              Widerspruch (Art. 15 bis 21 DSGVO). Schreiben Sie dazu
              einfach an{" "}
              <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>.
              Außerdem können Sie sich bei der österreichischen
              Datenschutzbehörde beschweren:{" "}
              <a
                href="https://www.dsb.gv.at/"
                target="_blank"
                rel="noreferrer"
              >
                www.dsb.gv.at
              </a>
              .
            </p>
          </div>
        </section>
      </div>

      <div className={styles.note}>
        <Link href="/impressum">IMPRESSUM</Link>
        <Link href="/">ZURÜCK ZUR STARTSEITE</Link>
      </div>
    </main>
  );
}
