import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import SiteNav from "../components/SiteNav";

import styles from "./lab.module.css";

export const metadata: Metadata = {
  title: "The Lab — Sara Maj",
  description:
    "A small gallery of animation, film, sound, 3D and graphics by Sara Maj.",
};

type Item = {
  title: string;
  text: string;
  tag: string;
  kind: "video" | "image" | "mosaic";
  src?: string;
  images?: string[];
  poster?: string;
  width?: number;
  height?: number;
  href?: string;
};

const items: Item[] = [
  {
    title: "Rolex — brand animation",
    text: "An animated product film for a watch, built from type, particles and motion.",
    tag: "MOTION",
    kind: "video",
    src: "/videos/lab-rolex.mp4",
    poster: "/images/lab/poster-rolex.jpg",
    width: 1100,
    height: 619,
    href: "https://youtu.be/44fTrB4mUSo",
  },
  {
    title: "Vienna Night Riders",
    text: "A two-minute film intro about Vienna's riding culture, planned with a storyboard.",
    tag: "FILM",
    kind: "image",
    src: "/images/lab/poster-night-riders.webp",
    width: 778,
    height: 1117,
    href: "https://youtu.be/OMcHLZG4VFQ",
  },
  {
    title: "TGM logo animation",
    text: "An animated logo for the IT department of TGM Vienna.",
    tag: "MOTION",
    kind: "video",
    src: "/videos/lab-logo.mp4",
    poster: "/images/lab/poster-logo.jpg",
    width: 1100,
    height: 779,
    href: "https://youtu.be/Oe3J0A4UB_Y",
  },
  {
    title: "Sound design",
    text: "A sound design exercise: building the audio for moving images.",
    tag: "SOUND",
    kind: "video",
    src: "/videos/lab-sound.mp4",
    poster: "/images/lab/poster-sound.jpg",
    width: 1100,
    height: 880,
    href: "https://youtu.be/ggdabRdK6Qk",
  },
  {
    title: "Delayed",
    text: "A short film about a rushed trip to the airport that goes wrong.",
    tag: "SHORT FILM",
    kind: "image",
    src: "/images/lab/poster-delayed.webp",
    width: 788,
    height: 1117,
    href: "https://youtu.be/Q_T--YyAsNA",
  },
  {
    title: "3D modelling in Maya",
    text: "Studies in modelling, rigging, simulation and lighting.",
    tag: "3D",
    kind: "video",
    src: "/videos/3d-portfolio.mp4",
    poster: "/videos/3d-portfolio-poster.jpg",
    width: 1280,
    height: 720,
    href: "https://youtu.be/enPP5eKyBco",
  },
  {
    title: "Sendung ohne Namen",
    text: "An experimental piece with the feel of a news show.",
    tag: "MOTION",
    kind: "video",
    src: "/videos/lab-sendung.mp4",
    poster: "/images/lab/poster-sendung.jpg",
    width: 1100,
    height: 619,
    href: "https://youtu.be/Xn8ROwkhZgI",
  },
  {
    title: "Typography",
    text: "Letters cut from found signs and assembled into a name.",
    tag: "GRAPHICS",
    kind: "image",
    src: "/images/lab/typo-sara.webp",
    width: 630,
    height: 475,
  },
  {
    title: "Shapes in black & white",
    text: "Four motifs built only from basic shapes in Adobe Illustrator.",
    tag: "ILLUSTRATOR",
    kind: "mosaic",
    images: [
      "/images/lab/gfx-acorn.webp",
      "/images/lab/gfx-flower.webp",
      "/images/lab/gfx-palm.webp",
      "/images/lab/gfx-pattern.webp",
    ],
  },
];

const moreVideos = [
  { title: "Mixed realities", href: "https://youtu.be/gbbmmURtCF0" },
  {
    title: "Photoshop generative fill",
    href: "https://youtu.be/atB-eYxZHI4",
  },
  { title: "Cuts & transitions", href: "https://youtu.be/VGcLE3G1n9c" },
  { title: "ZIB Magazin", href: "https://youtu.be/_8GSJ_rrisc" },
  {
    title: "Typography & shape animation",
    href: "https://youtu.be/dI1vxlD5_oQ",
  },
];

export default function Lab() {
  return (
    <main className={styles.page}>
      <SiteNav />

      <div className={styles.meta}>
        <span>03 — THE LAB</span>
        <span>CREATIVE ARCHIVE</span>
      </div>

      <h1 className={styles.title}>THE LAB</h1>

      <div className={styles.gallery}>
        {items.map((item) => (
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
                <div className={styles.mosaic}>
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

      <div className={styles.more}>
        <span className={styles.moreLabel}>MORE ON YOUTUBE</span>

        <div className={styles.moreList}>
          {moreVideos.map((video) => (
            <a
              key={video.href}
              href={video.href}
              target="_blank"
              rel="noreferrer"
            >
              <span>{video.title}</span>
              <span>↗</span>
            </a>
          ))}
        </div>
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
