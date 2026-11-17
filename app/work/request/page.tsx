import Image from "next/image";
import Link from "next/link";

import SiteNav from "../../components/SiteNav";

import styles from "../case-study.module.css";

export default function RequestProject() {
  return (
    <main className={styles.page}>
      <SiteNav />

      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.heroMeta}>
          <span>01 - FEATURED PROJECT</span>
          <span>DIPLOMA PROJECT · 2025</span>
        </div>

        <div className={styles.heroTitle}>
          <h1>ReQuest</h1>

          <div className={styles.requestLogo}>
            <Image
              src="/images/request/logo.png"
              alt="ReQuest logo"
              fill
              priority
              className={styles.logoImage}
              sizes="140px"
            />
          </div>
        </div>

        <div className={styles.heroBottom}>
          <p>
            A diploma project combining UX/UI design, branding,
            wireframing, prototyping and project communication.
          </p>

          <div className={styles.skills}>
            <span>UX/UI</span>
            <span>Branding</span>
            <span>Wireframing</span>
            <span>Mockups</span>
            <span>Prototyping</span>
            <span>Web</span>
          </div>
        </div>
      </section>

      {/* POSTER + ABOUT */}

      <section className={styles.about}>
        <div className={styles.poster}>
          <Image
            src="/images/request/request-plakat.png"
            alt="ReQuest project poster"
            fill
            className={styles.imageContain}
            sizes="(max-width: 900px) 90vw, 42vw"
          />
        </div>

        <div className={styles.aboutText}>
          <span className={styles.label}>ABOUT THE PROJECT</span>

          <h2>
            DESIGNING
            <br />
            THE EXPERIENCE.
          </h2>

          <p>
            ReQuest was developed as part of my diploma project at TGM.
            My contribution focused on project marketing and UX/UI design.
          </p>

          <p>
            I worked on the project identity, poster and logo as well as
            wireframes, mockups, prototypes and the presentation website.
          </p>

          <div className={styles.role}>
            <span>MY ROLE</span>

            <p>
              UX/UI · Branding · Wireframes · Mockups · Prototype · Web
            </p>
          </div>
        </div>
      </section>

      {/* WIREFRAMES */}

      <section className={styles.visualSectionDark}>
        <div className={styles.visualHeader}>
          <span>02 - WIREFRAMES</span>

          <p>
            Defining structure, hierarchy and user flow before moving into
            the final visual design.
          </p>
        </div>

        <div className={styles.visualDark}>
          <Image
            src="/images/request/request-wireframes.png"
            alt="ReQuest wireframes"
            fill
            className={styles.imageContain}
            sizes="100vw"
          />
        </div>
      </section>

      {/* FINAL UI */}

      <section
        className={`${styles.visualSectionDark} ${styles.sectionLine}`}
      >
        <div className={styles.visualHeader}>
          <span>03 - FINAL UI</span>

          <p>
            Translating the wireframes into a clear and modern interface
            through colour, typography and reusable UI elements.
          </p>
        </div>

        <div className={styles.visualDark}>
          <Image
            src="/images/request/request-mockups.png"
            alt="ReQuest final mockups"
            fill
            className={styles.imageContain}
            sizes="100vw"
          />
        </div>
      </section>

      {/* FOOTER */}

      <section className={styles.end}>
        <span>REQuest · 2025</span>

        <Link href="/#work" className={styles.back}>
          <span>BACK TO SELECTED WORK</span>
          <span>↗</span>
        </Link>
      </section>
    </main>
  );
}