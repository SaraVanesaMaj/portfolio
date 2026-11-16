import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import SiteNav from "../../components/SiteNav";

import styles from "../case-study.module.css";

const PROTOTYPE_URL = "https://indigo-beginning-989691.framer.app/";

export const metadata: Metadata = {
  title: "FitMind — Sara Maj",
  description:
    "FitMind is a wellness app concept for water, activity, breathing and sleep, built as a Framer prototype with applied motion graphics.",
};

const brief = [
  {
    title: "Working prototype",
    text: "A clear, working Framer prototype with applied motion graphics, shared as one project link.",
  },
  {
    title: "Required motion",
    text: "Intro, start or loading animation, transitions, and feedback states for hover, click and event listeners.",
  },
  {
    title: "Character animation",
    text: "Where it supports the concept. It is about the motion and the interaction, not about how realistic the character looks.",
  },
  {
    title: "Clean interface",
    text: "A visually clean, understandable presentation of the interface.",
  },
  {
    title: "Tested interactions",
    text: "All core interactions tested: hover, click, delay and other relevant triggers.",
  },
  {
    title: "Lottie animations",
    text: "Exported Lottie/JSON files that are properly embedded and functioning.",
  },
];

const pillars = [
  "Drink water",
  "Stay active",
  "Breathe",
  "Sleep better",
];

const screens = [
  {
    src: "/images/fitmind/splash.jpg",
    alt: "FitMind splash screen with a blue lotus logo",
    title: "SPLASH",
    note: "A calm lotus logo sets the tone.",
  },
  {
    src: "/images/fitmind/home.jpg",
    alt: "FitMind home screen with 78 percent daily progress, four habit cards and a rabbit coach",
    title: "HOME",
    note: "Daily progress at a glance, four habit cards and a coach tip.",
  },
  {
    src: "/images/fitmind/activity.jpg",
    alt: "FitMind activity screen with 7,240 steps, a weekly bar chart and distance, calories and active minutes",
    title: "ACTIVITY",
    note: "7,240 of 10,000 steps, the week as bars, plus distance, calories and active minutes.",
  },
  {
    src: "/images/fitmind/water.jpg",
    alt: "FitMind water screen with a glass, a 2 litre goal and eight 250 millilitre glasses",
    title: "WATER",
    note: "A daily goal of 2.0 L, logged in 250 ml glasses.",
  },
  {
    src: "/images/fitmind/breathe.jpg",
    alt: "FitMind breathing screen with a glowing bubble and a 4-4-6 rhythm",
    title: "BREATHE",
    note: "A two-minute guided exercise: in for 4, hold for 4, out for 6.",
  },
  {
    src: "/images/fitmind/rest.jpg",
    alt: "FitMind rest screen with a moonlit lake, sleep duration, sleep quality and sleep music",
    title: "REST",
    note: "Sleep duration and quality, synced from a watch, with sleep music.",
  },
];

const details = [
  {
    title: "One navigation",
    text: "Five tabs — Home, Activity, Water, Breathe and Rest — stay at the bottom of every screen, and the active tab is highlighted in blue.",
  },
  {
    title: "Progress you can see",
    text: "Rings, bars and glasses show how far the day has come, so the numbers read at a glance instead of only as text.",
  },
  {
    title: "Dark and calm",
    text: "A deep navy interface with blue accents keeps the app quiet. Green is reserved for activity progress.",
  },
  {
    title: "A coach with a face",
    text: "A small rabbit on the home screen gives one focus for the day, such as drinking regularly and taking time to breathe.",
  },
  {
    title: "Rhythm instead of instructions",
    text: "The breathing screen is built around a single bubble and one rhythm, 4 · 4 · 6, so there is nothing to read while breathing.",
  },
];

export default function FitMindProject() {
  return (
    <main className={styles.page}>
      <SiteNav />

      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.heroMeta}>
          <span>02 — FEATURED PROJECT</span>
          <span>APPLIED MOTION GRAPHICS · APP CONCEPT</span>
        </div>

        <div className={styles.heroTitle}>
          <h1>FitMind</h1>
        </div>

        <div className={styles.heroBottom}>
          <p>
            An all-in-one wellness app for a healthy body and a
            clear mind, with gentle animations and clear statistics
            for water, activity, breathing and sleep.
          </p>

          <div className={styles.skills}>
            <span>Motion Design</span>
            <span>Interaction Design</span>
            <span>UI</span>
            <span>Prototyping</span>
            <span>Framer</span>
            <span>LottieLab</span>
          </div>
        </div>
      </section>

      {/* BRIEF */}

      <section className={styles.visualSectionLight}>
        <div className={styles.visualHeader}>
          <span>01 — THE BRIEF</span>

          <p>
            Build a coherent, working prototype in Framer in which
            motion supports the interface. It does not need to be
            huge: the strongest submissions show a clear concept,
            motion that supports the interface and a technically
            stable implementation.
          </p>
        </div>

        <ul className={styles.checklist}>
          {brief.map((item, index) => (
            <li key={item.title}>
              <span className={styles.checkMark} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ABOUT */}

      <section className={styles.visualSectionDark}>
        <div className={styles.visualHeader}>
          <span>02 — THE APP</span>

          <p>
            FitMind helps you keep your daily habits in view, from
            drinking water, steps and workouts to breathing
            exercises and meditation. With clear statistics, gentle
            animations and motivating goals, it supports you in
            being the best version of yourself every day.
          </p>
        </div>

        <div className={styles.dsGrid}>
          <div>
            <span className={styles.dsLabel}>FOUR HABITS</span>

            <div className={styles.pills}>
              {pillars.map((pillar) => (
                <span key={pillar}>{pillar}</span>
              ))}
            </div>

            <div className={styles.protoWrap}>
              <a
                href={PROTOTYPE_URL}
                target="_blank"
                rel="noreferrer"
                className={styles.back}
              >
                <span>OPEN THE PROTOTYPE</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SCREENS */}

      <section className={styles.visualSectionLight}>
        <div className={styles.visualHeader}>
          <span>03 — SCREENS</span>

          <p>
            Six screens of the prototype: a splash screen, the
            home overview and one screen for each habit.
          </p>
        </div>

        <div className={styles.phones}>
          {screens.map((screen) => (
            <figure key={screen.src} className={styles.phone}>
              <div className={styles.phoneFrame}>
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  width={540}
                  height={1169}
                  className={styles.figureImage}
                  sizes="(max-width: 900px) 45vw, 28vw"
                />
              </div>

              <figcaption className={styles.phoneCaption}>
                <span>{screen.title}</span>
                <span>{screen.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* DESIGN DETAILS */}

      <section className={styles.visualSectionDark}>
        <div className={styles.visualHeader}>
          <span>04 — DESIGN DETAILS</span>

          <p>
            A few decisions that hold the six screens together.
          </p>
        </div>

        <div className={styles.dsGrid}>
          <div className={styles.principles}>
            {details.map((detail) => (
              <div key={detail.title} className={styles.principle}>
                <h3>{detail.title}</h3>
                <p>{detail.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <section className={styles.end}>
        <span>FITMIND</span>

        <Link href="/#work" className={styles.back}>
          <span>BACK TO SELECTED WORK</span>
          <span>↗</span>
        </Link>
      </section>
    </main>
  );
}
