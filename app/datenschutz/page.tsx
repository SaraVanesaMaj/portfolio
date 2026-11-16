import type { Metadata } from "next";
import Link from "next/link";

import SiteNav from "../components/SiteNav";
import { siteInfo } from "../lib/site-info";

import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Datenschutz — Sara Vanesa Maj",
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
              Diese Website wird bei einem externen Anbieter gehostet
              {siteInfo.hostingProvider
                ? `: ${siteInfo.hostingProvider}`
                : ""}
              . Beim Aufruf verarbeitet der Anbieter technisch
              notwendige Daten, nämlich die IP-Adresse, Datum und
              Uhrzeit, die aufgerufene Seite sowie Browser und
              Betriebssystem. Das dient dazu, die Website
              auszuliefern, stabil und sicher zu betreiben.
              Rechtsgrundlage ist das berechtigte Interesse am sicheren
              und zuverlässigen Betrieb der Website (Art. 6 Abs. 1
              lit. f DSGVO). Ich verwende diese Daten nicht für eigene
              Auswertungen.
            </p>
            <p>
              Hat der Anbieter seinen Sitz außerhalb der EU bzw. des
              EWR, stützt sich eine Übermittlung auf einen
              Angemessenheitsbeschluss der EU-Kommission oder auf
              Standardvertragsklauseln.
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
              Diese Website enthält Links zu GitHub, LinkedIn und zu
              einem Prototyp bei Framer. Wenn Sie einen solchen Link
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
            <p>Sie haben das Recht auf:</p>
            <ul>
              <li>Auskunft über Ihre Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch (Art. 21 DSGVO)</li>
            </ul>
            <p>
              Schreiben Sie dazu einfach an{" "}
              <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>.
            </p>
          </div>
        </section>

        <section className={styles.block}>
          <h2>BESCHWERDERECHT</h2>

          <div className={styles.text}>
            <p>
              Wenn Sie der Meinung sind, dass die Verarbeitung Ihrer
              Daten gegen das Datenschutzrecht verstößt, können Sie
              sich bei der Datenschutzbehörde beschweren: Barichgasse
              40–42, 1030 Wien, E-Mail{" "}
              <a href="mailto:dsb@dsb.gv.at">dsb@dsb.gv.at</a>,{" "}
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

        <section className={styles.block}>
          <h2>ÄNDERUNGEN</h2>

          <div className={styles.text}>
            <p>
              Ich passe diese Erklärung an, wenn sich die Website
              ändert, zum Beispiel bei einem neuen Hosting-Anbieter.
              Stand: {siteInfo.updated}.
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
