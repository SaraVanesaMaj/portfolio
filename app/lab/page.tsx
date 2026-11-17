import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import SiteNav from "../components/SiteNav";

import styles from "./lab.module.css";

export const metadata: Metadata = {
  title: "The Lab - Sara Maj",
  description:
    "A small gallery of animation, film, sound, 3D and graphics by Sara Maj.",
};

type Item = {
  title: string;
  text: string;
  tag: string;
  kind: "video" | "image" | "mosaic";
  col: 0 | 1 | 2;
  layout?: "square" | "stack";
  src?: string;
  images?: string[];
  poster?: string;
  width?: number;
  height?: number;
  href?: string;
};

const items: Item[] = [
  /* column 1 */
  {
    title: "3D modelling in Maya",
    text: "Studies in modelling, rigging, simulation and lighting.",
    tag: "3D",
    kind: "video",
    col: 0,
    src: "/videos/3d-portfolio.mp4",
    poster: "/videos/3d-portfolio-poster.jpg",
    width: 1280,
    height: 720,
    href: "https://youtu.be/enPP5eKyBco",
  },
  {
    title: "Typography",
    text: "Letters cut from found signs and assembled into a name.",
    tag: "GRAPHICS",
    kind: "image",
    col: 0,
    src: "/images/lab/typo-sara.webp",
    width: 630,
    height: 475,
  },
  {
    title: "Vienna Night Riders",
    text: "A two-minute film intro about Vienna's riding culture, planned with a storyboard.",
    tag: "FILM",
    kind: "image",
    col: 0,
    src: "/images/lab/poster-night-riders.webp",
    width: 778,
    height: 1117,
    href: "https://youtu.be/OMcHLZG4VFQ",
  },
  {
    title: "Cuts & transitions",
    text: "Experiments with cuts and transitions between scenes.",
    tag: "EDITING",
    kind: "video",
    col: 0,
    src: "/videos/lab-cuts.mp4",
    poster: "/images/lab/poster-cuts.jpg",
    width: 1280,
    height: 720,
    href: "https://youtu.be/VGcLE3G1n9c",
  },
  /* column 2 */
  {
    title: "Mixed realities",
    text: "A camera gliding through a virtual corridor of images and type.",
    tag: "MOTION",
    kind: "video",
    col: 0,
    src: "/videos/lab-mixed.mp4",
    poster: "/images/lab/poster-mixed.jpg",
    width: 1280,
    height: 720,
    href: "https://youtu.be/gbbmmURtCF0",
  },
  {
    title: "Sound design",
    text: "A sound design exercise: building the audio for moving images.",
    tag: "SOUND",
    kind: "video",
    col: 1,
    src: "/videos/lab-sound.mp4",
    poster: "/images/lab/poster-sound.jpg",
    width: 1100,
    height: 880,
    href: "https://youtu.be/ggdabRdK6Qk",
  },
  {
    title: "TGM logo animation",
    text: "An animated logo for the IT department of TGM Vienna.",
    tag: "MOTION",
    kind: "video",
    col: 1,
    src: "/videos/lab-logo.mp4",
    poster: "/images/lab/poster-logo.jpg",
    width: 1100,
    height: 779,
    href: "https://youtu.be/Oe3J0A4UB_Y",
  },
  {
    title: "Delayed",
    text: "A short film about a rushed trip to the airport that goes wrong.",
    tag: "SHORT FILM",
    kind: "image",
    col: 1,
    src: "/images/lab/poster-delayed.webp",
    width: 788,
    height: 1117,
    href: "https://youtu.be/Q_T--YyAsNA",
  },
  {
    title: "Spring - animation",
    text: "A spring scene animated in After Effects, with a bee flying through the flowers.",
    tag: "AFTER EFFECTS",
    kind: "video",
    col: 1,
    src: "/videos/lab-spring.mp4",
    poster: "/images/lab/poster-spring.jpg",
    width: 1280,
    height: 720,
  },
  /* column 3 */
  {
    title: "Rolex - brand animation",
    text: "An animated product film for a watch, built from type, particles and motion.",
    tag: "MOTION",
    kind: "video",
    col: 1,
    src: "/videos/lab-rolex.mp4",
    poster: "/images/lab/poster-rolex.jpg",
    width: 1100,
    height: 619,
    href: "https://youtu.be/44fTrB4mUSo",
  },
  {
    title: "Capturing shapes",
    text: "A photography assignment: finding forms in Vienna's architecture.",
    tag: "PHOTO",
    kind: "mosaic",
    col: 2,
    layout: "stack",
    images: [
      "/images/lab/shape-dc-tower.webp",
      "/images/lab/shape-gasometer.webp",
      "/images/lab/shape-riesenrad.webp",
    ],
  },
  {
    title: "Shapes in black & white",
    text: "Four motifs built only from basic shapes in Adobe Illustrator.",
    tag: "ILLUSTRATOR",
    kind: "mosaic",
    col: 2,
    images: [
      "/images/lab/gfx-acorn.webp",
      "/images/lab/gfx-flower.webp",
      "/images/lab/gfx-palm.webp",
      "/images/lab/gfx-pattern.webp",
    ],
  },
  {
    title: "High-poly headphones",
    text: "A detailed high-poly model of over-ear headphones, modelled and rendered in Blender.",
    tag: "BLENDER",
    kind: "mosaic",
    col: 2,
    layout: "stack",
    images: [
      "/images/lab/blender-headphones-light.webp",
      "/images/lab/blender-headphones-dark1.webp",
      "/images/lab/blender-headphones-dark2.webp",
    ],
  },
  {
    title: "Type & shape animation",
    text: "Type and basic shapes animated into moving compositions.",
    tag: "MOTION",
    kind: "video",
    col: 2,
    src: "/videos/lab-typeanim.mp4",
    poster: "/images/lab/poster-typeanim.jpg",
    width: 1280,
    height: 720,
    href: "https://youtu.be/dI1vxlD5_oQ",
  },
  {
    title: "Sendung ohne Namen",
    text: "An experimental piece with the feel of a news show.",
    tag: "MOTION",
    kind: "video",
    col: 2,
    src: "/videos/lab-sendung.mp4",
    poster: "/images/lab/poster-sendung.jpg",
    width: 1100,
    height: 619,
    href: "https://youtu.be/Xn8ROwkhZgI",
  },
];

export default function Lab() {
  return (
    <main className={styles.page}>
      <SiteNav />

      <div className={styles.meta}>
        <span>03 - THE LAB</span>
        <span>CREATIVE ARCHIVE</span>
      </div>

      <div className={styles.titleRow}>
        <h1 className={styles.title}>THE LAB</h1>

        <a
          href="https://www.youtube.com/@SaraVanesaMaj"
          target="_blank"
          rel="noreferrer"
          className={styles.ytButton}
        >
          <span className={styles.ytIcon} aria-hidden="true">
            ▶
          </span>

          <span>WATCH ALL ON YOUTUBE</span>

          <span>↗</span>
        </a>
      </div>

      <div className={styles.gallery}>
        {[0, 1, 2].map((col) => (
          <div key={col} className={styles.column}>
        {items.filter((item) => item.col === col).map((item) => (
          <article key={item.title} className={styles.tile}>
            <div className={styles.media}>
              {item.kind === "video" && item.src && (
                <video
                  className={styles.mediaEl}
                  controls
                  preload="none"
                  playsInline
                  poster={item.poster}
                  width={item.width}
                  height={item.height}
                  aria-label={item.title}
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              )}

              {item.kind === "image" && item.src && (
                <Image
                  src={item.src}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  className={styles.mediaEl}
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
              )}

              {item.kind === "mosaic" && (
                <div
                  className={`${styles.mosaic} ${
                    item.layout === "stack" ? styles.mosaicStack : ""
                  }`}
                >
                  {item.images?.map((image) => (
                    <Image
                      key={image}
                      src={image}
                      alt=""
                      width={600}
                      height={600}
                      className={styles.mosaicImg}
                      sizes="(max-width: 700px) 50vw, 17vw"
                    />
                  ))}
                </div>
              )}
            </div>

            <div className={styles.body}>
              <div className={styles.cardTop}>
                <h2 className={styles.cardTitle}>{item.title}</h2>

                <span className={styles.tag}>{item.tag}</span>
              </div>

              <p className={styles.cardText}>{item.text}</p>

              {item.href && (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.cardLink}
                >
                  Watch on YouTube ↗
                </a>
              )}
            </div>
          </article>
        ))}
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <Link href="/" className={styles.back}>
          <span>BACK TO HOME</span>
          <span>↗</span>
        </Link>
      </div>
    </main>
  );
}
