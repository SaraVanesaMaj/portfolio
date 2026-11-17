import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import SiteNav from "../../components/SiteNav";

import styles from "../case-study.module.css";

export const metadata: Metadata = {
  title: "Cozy Place — Sara Maj",
  description:
    "Cozy Place is a 3D interior scene, modelled, textured, lit and rendered from a first sketch to the final render.",
};

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
            first sketch to the final render. Every
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
            The final render: a soft sunset over the sea, warm lamps,
            a glowing TV and light strips along the walls keep the
            room calm and cosy.
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
      </section>

      {/* TOPOLOGY */}

      <section className={styles.visualSectionLight}>
        <div className={styles.visualHeader}>
          <span>02 — TOPOLOGY</span>

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

      <section className={styles.visualSectionDark}>
        <div className={styles.visualHeader}>
          <span>03 — THE OBJECTS</span>

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
