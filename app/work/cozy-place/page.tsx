import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import SiteNav from "../../components/SiteNav";

import styles from "../case-study.module.css";

export const metadata: Metadata = {
  title: "Cozy Place — Sara Maj",
  description:
    "Cozy Place is a 3D interior scene, modelled, textured, lit and rendered from a first sketch to the final day and night renders.",
};

const refs = [
  {
    src: "/images/cozy-place/sketch.jpg",
    alt: "Hand-drawn sketch of the room with a bed, bookshelf, city view and a TV",
    width: 1332,
    height: 942,
    title: "SKETCH",
    note: "First layout by hand",
  },
  {
    src: "/images/cozy-place/ai-living.jpg",
    alt: "AI-generated visual of a dim bedroom and lounge with a round coffee table and a city view",
    width: 1662,
    height: 1100,
    title: "AI VISUAL",
    note: "Lounge and mood",
  },
  {
    src: "/images/cozy-place/ai-bedroom.jpg",
    alt: "AI-generated visual of the bed with a wall-mounted TV and a night view",
    width: 1332,
    height: 737,
    title: "AI VISUAL",
    note: "Bed and TV wall",
  },
];

const assets = [
  {
    src: "/images/cozy-place/sofa.jpg",
    alt: "Sofa as wireframe above and rendered below",
    width: 2536,
    height: 1598,
    title: "SOFA",
  },
  {
    src: "/images/cozy-place/table.jpg",
    alt: "Round coffee table as wireframe on the left and rendered on the right",
    width: 2874,
    height: 1109,
    title: "COFFEE TABLE",
  },
  {
    src: "/images/cozy-place/lamp.jpg",
    alt: "Tripod floor lamp as wireframe on the left and rendered on the right",
    width: 2459,
    height: 1518,
    title: "FLOOR LAMP",
  },
  {
    src: "/images/cozy-place/tvboard.jpg",
    alt: "TV sideboard as wireframe on the left and rendered on the right",
    width: 2898,
    height: 841,
    title: "TV SIDEBOARD",
  },
  {
    src: "/images/cozy-place/bed.jpg",
    alt: "Bed with a wide headboard as wireframe on the left and rendered on the right",
    width: 2898,
    height: 794,
    title: "BED",
  },
];

export default function CozyPlaceProject() {
  return (
    <main className={styles.page}>
      <SiteNav />

      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.heroMeta}>
          <span>04 — FEATURED PROJECT</span>
          <span>3D MODELLING · WINTER SEMESTER 2025/26</span>
        </div>

        <div className={styles.heroTitle}>
          <h1 className={styles.titleLong}>Cozy Place</h1>
        </div>

        <div className={styles.heroBottom}>
          <p>
            A cosy bedroom and lounge with a view, built in 3D from a
            first sketch to the final day and night renders. Every
            object in the room is modelled, textured and lit by hand.
          </p>

          <div className={styles.skills}>
            <span>3D Modelling</span>
            <span>Texturing</span>
            <span>Lighting</span>
            <span>Rendering</span>
            <span>Topology</span>
            <span>Interior</span>
          </div>
        </div>
      </section>

      {/* FINAL RENDERS */}

      <section className={styles.visualSectionDark}>
        <div className={styles.visualHeader}>
          <span>01 — THE ROOM</span>

          <p>
            The same room in two lighting moods: a soft sunset over
            the sea and a starry night. Warm lamps, a glowing TV and
            light strips along the walls keep it calm and cosy.
          </p>
        </div>

        <figure className={styles.screenFigure}>
          <Image
            src="/images/cozy-place/render-day.jpg"
            alt="Final render of the room at sunset: a bed, sofa and coffee table in front of a large window with a view of the sea"
            width={3000}
            height={1688}
            className={styles.figureImage}
            sizes="(max-width: 900px) 100vw, 90vw"
            priority
          />

          <figcaption className={styles.screenCaption}>
            <span>FINAL RENDER</span>
            <span>Sunset</span>
          </figcaption>
        </figure>

        <figure className={styles.screenFigure}>
          <Image
            src="/images/cozy-place/render-night.jpg"
            alt="Final render of the room at night with a starry sky outside the window"
            width={3000}
            height={1688}
            className={styles.figureImage}
            sizes="(max-width: 900px) 100vw, 90vw"
          />

          <figcaption className={styles.screenCaption}>
            <span>FINAL RENDER</span>
            <span>Night</span>
          </figcaption>
        </figure>
      </section>

      {/* CONCEPT */}

      <section className={styles.visualSectionLight}>
        <div className={styles.visualHeader}>
          <span>02 — CONCEPT</span>

          <p>
            The layout started as a hand-drawn sketch. AI-generated
            visuals then served as references for the mood: a dark,
            warm room with a big window, a wall-mounted TV and soft
            lamp light.
          </p>
        </div>

        <div className={styles.refs}>
          {refs.map((ref) => (
            <figure key={ref.src} className={styles.screen}>
              <div className={styles.screenFrame}>
                <Image
                  src={ref.src}
                  alt={ref.alt}
                  width={ref.width}
                  height={ref.height}
                  className={styles.figureImage}
                  sizes="(max-width: 900px) 90vw, 30vw"
                />
              </div>

              <figcaption className={styles.screenCaption}>
                <span>{ref.title}</span>
                <span>{ref.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* TOPOLOGY */}

      <section className={styles.visualSectionDark}>
        <div className={styles.visualHeader}>
          <span>03 — TOPOLOGY</span>

          <p>
            The whole scene as a wireframe. It shows the mesh behind
            every object, from the simple surfaces of walls and
            furniture to the dense geometry of the bedding, the
            curtain and the rug.
          </p>
        </div>

        <figure className={styles.screenFigure}>
          <Image
            src="/images/cozy-place/wireframe.jpg"
            alt="Wireframe view of the whole room showing the mesh of every object"
            width={3000}
            height={1688}
            className={styles.figureImage}
            sizes="(max-width: 900px) 100vw, 90vw"
          />
        </figure>
      </section>

      {/* ASSETS */}

      <section className={styles.visualSectionLight}>
        <div className={styles.visualHeader}>
          <span>04 — THE OBJECTS</span>

          <p>
            Each piece of furniture was modelled on its own and
            checked as a wireframe next to its final material.
          </p>
        </div>

        <div className={styles.pairs}>
          {assets.map((asset) => (
            <figure key={asset.src} className={styles.pair}>
              <div className={styles.pairFrame}>
                <Image
                  src={asset.src}
                  alt={asset.alt}
                  width={asset.width}
                  height={asset.height}
                  className={styles.figureImage}
                  sizes="(max-width: 900px) 100vw, 90vw"
                />
              </div>

              <figcaption className={styles.screenCaption}>
                <span>{asset.title}</span>
                <span>Wireframe · Render</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* MORE 3D WORK */}

      <section className={styles.visualSectionDark}>
        <div className={styles.visualHeader}>
          <span>05 — MORE 3D WORK</span>

          <p>
            A short reel of earlier studies from 2023 to 2025 in
            Maya: topology, a polygon robot, rig animation, a liquid
            simulation, realistic hair and cloth with HDRI lighting.
          </p>
        </div>

        <div className={styles.videoWrap}>
          <video
            className={styles.video}
            controls
            preload="metadata"
            playsInline
            poster="/videos/3d-portfolio-poster.jpg"
            aria-label="3D modelling portfolio in Maya, 2023 to 2025"
          >
            <source src="/videos/3d-portfolio.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* FOOTER */}

      <section className={styles.end}>
        <span>COZY PLACE</span>

        <Link href="/#work" className={styles.back}>
          <span>BACK TO SELECTED WORK</span>
          <span>↗</span>
        </Link>
      </section>
    </main>
  );
}
