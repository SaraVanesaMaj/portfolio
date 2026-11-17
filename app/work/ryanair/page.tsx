import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import SiteNav from "../../components/SiteNav";

import styles from "../case-study.module.css";

export const metadata: Metadata = {
  title: "Ryanair Responsive Redesign - Sara Maj",
  description:
    "A responsive redesign of a Ryanair booking interface for mobile, tablet, desktop and smartwatch, with user flow, sketches and a design system.",
};

const screens = [
  {
    src: "/images/ryanair/screen-home.png",
    alt: "Ryanair redesign homepage with flight search and popular destinations",
    title: "HOMEPAGE",
    note: "Hero & search",
  },
  {
    src: "/images/ryanair/screen-results.png",
    alt: "Ryanair redesign search results for Munich to Rome",
    title: "SEARCH RESULTS",
    note: "Munich → Rome",
  },
  {
    src: "/images/ryanair/screen-baggage.png",
    alt: "Ryanair redesign baggage selection with Basic, Plus and Priority options",
    title: "BAGGAGE SELECTION",
    note: "Basic · Plus · Priority",
  },
];

const colors = [
  { name: "Obsidian Black", hex: "#1C1C1E", dark: true },
  { name: "Champagne Gold", hex: "#C6A664", dark: false },
  { name: "Burgundy Red", hex: "#9A1E28", dark: true },
  { name: "Sage Green", hex: "#6E8B7B", dark: true },
  { name: "Taupe Beige", hex: "#A89F91", dark: false },
  { name: "Light Grey", hex: "#F2F2F0", dark: false },
  { name: "White", hex: "#FFFFFF", dark: false },
];

const principles = [
  {
    title: "Visual hierarchy",
    text: "Key elements such as headings, prices and buttons are larger or stronger in colour, so users quickly see which information matters most.",
  },
  {
    title: "Contrast",
    text: "Dark areas with light type, gold accents and burgundy buttons create clear distinctions and make key actions like “Search flights” or “Select” stand out.",
  },
  {
    title: "Proximity",
    text: "Related content sits close together. Departure and arrival time, price and button are grouped in a single flight card.",
  },
  {
    title: "Similarity",
    text: "Elements with the same function look alike. Destination, flight and baggage cards share one structure, so they are easy to compare.",
  },
  {
    title: "Balance",
    text: "Content is evenly distributed with enough spacing, so each page feels calm, clear and uncluttered.",
  },
];

const components = [
  "Navigation",
  "Hero Section",
  "Flight Search",
  "Button",
  "Feature Card",
  "Destination Card",
  "Flight Result Card",
  "Luggage Option Card",
  "Footer",
];

export default function RyanairProject() {
  return (
    <main className={styles.page}>
      <SiteNav />

      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.heroMeta}>
          <span>03 - FEATURED PROJECT</span>
          <span>RESPONSIVE DESIGN · SUMMER SEMESTER 2026</span>
        </div>

        <div className={styles.heroTitle}>
          <h1 className={styles.titleLong}>Ryanair</h1>
        </div>

        <div className={styles.heroBottom}>
          <p>
            A responsive redesign of a Ryanair booking interface for
            mobile, tablet, desktop and smartwatch - built on a
            user flow, hand-drawn sketches and a design system.
          </p>

          <div className={styles.skills}>
            <span>UX/UI</span>
            <span>Responsive Design</span>
            <span>Design System</span>
            <span>User Flow</span>
            <span>Sketching</span>
            <span>Prototyping</span>
            <span>Figma</span>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}

      <section className={styles.visualSectionDark}>
        <div className={styles.visualHeader}>
          <span>01 - THE CHALLENGE</span>

          <p>
            The redesign from the previous challenge became the
            starting point. Its desktop screens for homepage, search
            results and baggage selection were developed further and
            adapted to different screen sizes, navigation patterns
            and touch interactions. The result is also a clickable
            prototype in Figma.
          </p>
        </div>

        <div className={styles.figure}>
          <Image
            src="/images/ryanair/cover.jpg"
            alt="Ryanair Responsive Redesign shown on desktop, tablet, phone and smartwatch"
            width={2000}
            height={1250}
            className={styles.figureImage}
            sizes="(max-width: 900px) 760px, 90vw"
          />
        </div>
      </section>

      {/* SKETCHES */}

      <section className={styles.visualSectionLight}>
        <div className={styles.visualHeader}>
          <span>02 - SKETCHES</span>

          <p>
            Hand-drawn wireframes with numbered annotations that
            describe every user action, from entering a destination
            to choosing a baggage option.
          </p>
        </div>

        <div className={`${styles.figure} ${styles.figureLight}`}>
          <Image
            src="/images/ryanair/sketch.png"
            alt="Annotated hand-drawn sketches of the flight search, flight selection and baggage selection screens"
            width={1214}
            height={556}
            className={styles.figureImage}
            sizes="(max-width: 900px) 760px, 90vw"
          />
        </div>
      </section>

      {/* STARTING POINT: DESKTOP SCREENS */}

      <section className={styles.visualSectionDark}>
        <div className={styles.visualHeader}>
          <span>03 - STARTING POINT</span>

          <p>
            The desktop screens of the first redesign: homepage,
            search results and baggage selection in a deep red and
            gold palette on white, with a progress indicator across
            the five booking steps.
          </p>
        </div>

        <div className={styles.screens}>
          {screens.map((screen) => (
            <figure key={screen.src} className={styles.screen}>
              <div className={styles.screenFrame}>
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  width={654}
                  height={873}
                  className={styles.figureImage}
                  sizes="(max-width: 900px) 90vw, 33vw"
                />
              </div>

              <figcaption className={styles.screenCaption}>
                <span>{screen.title}</span>
                <span>{screen.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* DESIGN SYSTEM */}

      <section className={styles.visualSectionLight}>
        <div className={styles.visualHeader}>
          <span>04 - DESIGN SYSTEM</span>

          <p>
            A shared style guide keeps every screen size consistent.
            The style is flat design with light Material Design
            influences: simple shapes, clear typography and little
            decoration, with cards, shadows and layers to structure
            content.
          </p>
        </div>

        <div className={styles.dsGrid}>
          <div>
            <span className={styles.dsLabel}>COLOURS</span>

            <div className={styles.swatches}>
              {colors.map((color) => (
                <div
                  key={color.hex}
                  className={styles.swatch}
                  style={{
                    background: color.hex,
                    color: color.dark ? "#f3f1ec" : "#1c1c1e",
                  }}
                >
                  <span>{color.name}</span>
                  <span>{color.hex}</span>
                </div>
              ))}
            </div>

            <p className={styles.dsNote}>
              Obsidian Black is used for header, footer and overlays.
              Champagne Gold is the accent colour for icons and
              highlights. Burgundy Red is reserved for important
              buttons.
            </p>

            <span className={styles.dsLabel}>DESIGN PRINCIPLES</span>

            <div className={styles.principles}>
              {principles.map((principle) => (
                <div key={principle.title} className={styles.principle}>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </div>
              ))}
            </div>

            <span className={styles.dsLabel}>REUSABLE COMPONENTS</span>

            <div className={styles.pills}>
              {components.map((component) => (
                <span key={component}>{component}</span>
              ))}
            </div>
          </div>

          <figure className={styles.tokenPage}>
            <Image
              src="/images/ryanair/design-system-ui.png"
              alt="Design system tokens: Plus Jakarta Sans typography, spacing scale and button states"
              width={1494}
              height={1674}
              className={styles.figureImage}
              sizes="(max-width: 900px) 90vw, 40vw"
            />
          </figure>
        </div>
      </section>

      {/* USER FLOW */}

      <section className={styles.visualSectionDark}>
        <div className={styles.visualHeader}>
          <span>05 - USER FLOW</span>

          <p>
            The booking journey mapped in five steps, from the
            homepage to baggage selection. Editing the search,
            personal details, payment and confirmation are not part
            of the prototype.
          </p>
        </div>

        <div className={`${styles.figure} ${styles.figureLight}`}>
          <Image
            src="/images/ryanair/user-flow.png"
            alt="User flow in five steps: homepage, search flights, search results, select flight, select baggage"
            width={904}
            height={206}
            className={styles.figureImage}
            sizes="(max-width: 900px) 760px, 90vw"
          />
        </div>
      </section>

      {/* FOOTER */}

      <section className={styles.end}>
        <span>RYANAIR RESPONSIVE REDESIGN</span>

        <Link href="/#work" className={styles.back}>
          <span>BACK TO SELECTED WORK</span>
          <span>↗</span>
        </Link>
      </section>
    </main>
  );
}
