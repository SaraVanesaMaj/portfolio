"use client";

import Image from "next/image";
import Link from "next/link";

import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import SiteNav from "./components/SiteNav";

gsap.registerPlugin(ScrollTrigger, useGSAP);


/* =========================================
   JOURNEY
========================================= */

const journey = [
  {
    date: "SEP 2025 - PRESENT",
    type: "EDUCATION",
    title: "University of Applied Sciences Upper Austria",
    subtitle: "BSc Media Technology & Design",
    description:
      "Studying at the intersection of software development, interactive media, design and digital production.",
    detail: "Expected graduation: Sep 2028",
  },

  {
    date: "DEC 2023 - PRESENT",
    type: "EXPERIENCE",
    title: "Automix GmbH",
    subtitle: "IT Services & Administrative Assistance",
    description:
      "Part-time position combining IT-related tasks with administrative support.",
    detail: "Part-time",
  },

  {
    date: "AUG 2024",
    type: "INTERNSHIP",
    title: "Siemens",
    subtitle: "IT Intern",
    description:
      "One-month internship gaining practical experience in an international technology environment.",
    detail: "1 month",
  },

  {
    date: "JUL 2022",
    type: "INTERNSHIP",
    title: "Gaudo Fashion",
    subtitle: "Social Media Marketing Intern",
    description:
      "One-month internship in Vienna with a focus on social media and digital communication.",
    detail: "1 month",
  },

  {
    date: "SEP 2020 - JUL 2025",
    type: "EDUCATION",
    title: "TGM Vienna",
    subtitle: "Higher Technical College (HTL)",
    description: "Information Technology",
    detail: "Matura",
  },
];


/* =========================================
   PROJECTS
========================================= */

const projects = [
  {
    number: "01",
    title: "ReQuest",
    cover: "/images/covers/request.jpg",
    type: "DIPLOMA PROJECT",
    href: "/work/request",

    description:
      "A diploma project combining UX/UI design, branding, wireframing, prototyping and project communication.",

    skills: [
      "UX/UI",
      "Branding",
      "Wireframing",
      "Mockups",
      "Prototyping",
      "Web",
    ],
  },

  {
    number: "02",
    title: "FitMind",
    cover: "/images/covers/fitmind.jpg",
    type: "APPLIED MOTION GRAPHICS",
    href: "/work/fitmind",

    description:
      "A wellness app concept for water, activity, breathing and sleep, with clear statistics, gentle animations and motivating goals.",

    skills: [
      "Motion Design",
      "Interaction Design",
      "UI",
      "Prototyping",
      "Framer",
      "LottieLab",
    ],
  },

  {
    number: "03",
    title: "Ryanair Responsive Redesign",
    cover: "/images/covers/ryanair.jpg",
    type: "RESPONSIVE DESIGN",
    href: "/work/ryanair",

    description:
      "A responsive redesign of a Ryanair booking interface for mobile, tablet, desktop and smartwatch, built on a user flow, sketches and a design system.",

    skills: [
      "UX/UI",
      "Responsive Design",
      "Design System",
      "User Flow",
      "Prototyping",
      "Figma",
    ],
  },

  {
    number: "04",
    title: "VSA",
    cover: "/images/covers/vsa-pricing.jpg",
    type: "UX/UI DESIGN",
    href: "/work/vsa",

    description:
      "A universal platform for managing digital assets like social media accounts and crypto wallets after a user's death, designed in light and dark mode.",

    skills: [
      "UX/UI",
      "Wireframing",
      "Adobe XD",
      "Mockups",
      "YouTrack",
      "Balsamiq",
    ],
  },

  {
    number: "05",
    title: "Cozy Place",
    cover: "/images/covers/cozy-place.jpg",
    type: "3D MODELLING",
    href: "/work/cozy-place",

    description:
      "A cozy 3D bedroom and lounge with a view, from first scene to final render, with wireframes of the furniture.",

    skills: [
      "3D Modelling",
      "Texturing",
      "Lighting",
      "Rendering",
      "Topology",
      "Simulation",
    ],
  },
];


/* =========================================
   HOME
========================================= */

export default function Home() {
  const pageRef = useRef<HTMLElement>(null);


  useGSAP(
    () => {

      /* Respect "reduce motion": leave everything visible and static */

      if (
        window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
      ) {
        return;
      }


      /* =====================================
         HERO
      ===================================== */

      const heroTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",

          start: "top top",

          end: "+=55%",

          scrub: 1,

          pin: true,

          anticipatePin: 1,
        },
      });


      heroTimeline

        .to(
          ".sara",
          {
            xPercent: -45,

            ease: "none",
          },

          0
        )


        .to(
          ".maj",
          {
            xPercent: 45,

            ease: "none",
          },

          0
        )


        .to(
          ".heroDescription",
          {
            opacity: 0,

            y: -30,

            ease: "none",
          },

          0
        )


        .to(
          ".heroFooter",
          {
            opacity: 0,

            y: 30,

            ease: "none",
          },

          0
        )


        .to(
          ".heroPortrait",
          {
            yPercent: -8,

            scale: 1.08,

            opacity: 0.12,

            ease: "none",
          },

          0
        )


        .to(
          ".sara, .maj",
          {
            opacity: 0.1,

            scale: 0.96,

            ease: "none",
          },

          0.55
        );


      /* =====================================
         JOURNEY LINE
      ===================================== */

      gsap.fromTo(
        ".journeyLineFill",

        {
          scaleY: 0,
        },

        {
          scaleY: 1,

          ease: "none",

          scrollTrigger: {
            trigger: ".journeyTimeline",

            start: "top 70%",

            end: "bottom 75%",

            scrub: 1,
          },
        }
      );


      /* =====================================
         JOURNEY ITEMS
      ===================================== */

      gsap.fromTo(
        ".journeyItem",

        {
          opacity: 0,

          y: 60,
        },

        {
          opacity: 1,

          y: 0,

          stagger: 0.12,

          scrollTrigger: {
            trigger: ".journeyTimeline",

            start: "top 75%",

            end: "center 45%",

            scrub: 1,
          },
        }
      );


      /* =====================================
         PROJECTS
      ===================================== */

      gsap.fromTo(
        ".projectCard",

        {
          opacity: 0,

          y: 50,
        },

        {
          opacity: 1,

          y: 0,

          stagger: 0.08,

          scrollTrigger: {
            trigger: ".workSection",

            start: "top 75%",

            end: "top 30%",

            scrub: 1,
          },
        }
      );


      /* =====================================
         GENERAL REVEALS
      ===================================== */

      gsap.utils
        .toArray<HTMLElement>(".sectionReveal")
        .forEach((element) => {

          gsap.fromTo(
            element,

            {
              opacity: 0,

              y: 40,
            },

            {
              opacity: 1,

              y: 0,

              scrollTrigger: {
                trigger: element,

                start: "top 88%",

                end: "top 68%",

                scrub: 1,
              },
            }
          );

        });

    },

    {
      scope: pageRef,
    }
  );


  return (
    <main ref={pageRef}>

      {/* =====================================
          FIXED NAVIGATION
      ===================================== */}

      <SiteNav />


      {/* =====================================
          HERO
      ===================================== */}

      <section className="hero">

        <div className="heroContent">

          {/* SARA */}

          <div className="saraBlock">

            <h1 className="sara">
              SARA
            </h1>


            <p className="heroDescription">

              DEVELOPMENT

              <br />

              × DESIGN

              <br />

              × MEDIA

            </p>

          </div>


          {/* PORTRAIT */}

          <div className="heroPortrait">

            <Image
              src="/images/sara-portrait-cutout.webp"

              alt="Sara Maj"

              fill

              priority

              className="heroPortraitImage"

              sizes="(max-width: 900px) 70vw, 35vw"
            />

          </div>


          {/* MAJ */}

          <h1 className="maj">
            MAJ
          </h1>

        </div>


        {/* HERO FOOTER */}

        <div className="heroFooter">

          <div className="available">

            <span className="dot" />

            MEDIA TECHNOLOGY & DESIGN

          </div>


          <div className="heroInfo">

            <span>
              VIENNA, AUSTRIA
            </span>


            <a
              href="/cv/Sara-Maj-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="cvButton"
            >
              DOWNLOAD CV ↓
            </a>

            <a href="#work">

              SCROLL TO EXPLORE ↓

            </a>

          </div>

        </div>

      </section>


      {/* =====================================
          FEATURED WORK
      ===================================== */}

      <section
        className="workSection"
        id="work"
      >

        <div className="sectionHeader workHeader">

          <span>
            01 - FEATURED WORK
          </span>

          <span>
            SELECTED PROJECTS
          </span>

        </div>


        <div className="workGrid">

          {projects.map((project) => (

            <Link
              key={project.title}
              href={project.href}
              className="projectCard"
            >

              <div className="projectCover">

                <Image
                  src={project.cover}
                  alt={`${project.title} cover`}
                  fill
                  className="projectCoverImage"
                loading="eager"
                  sizes="(max-width: 900px) 100vw, 33vw"
                />

              </div>


              <div className="projectCardBody">

                <div className="projectCardTop">

                  <span>{project.number}</span>

                  <span>{project.type}</span>

                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="projectCardFoot">

                  <span>VIEW CASE STUDY</span>

                  <span>↗</span>

                </div>

              </div>

            </Link>

          ))}


          <Link
            href="/lab"
            className="projectCard"
          >

            <div className="projectCover">

              <Image
                src="/images/covers/lab-collage.jpg"
                alt="A collage of work from the Lab"
                fill
                className="projectCoverImage"
                loading="eager"
                sizes="(max-width: 900px) 100vw, 33vw"
              />

            </div>


            <div className="projectCardBody">

              <div className="projectCardTop">

                <span>+</span>

                <span>MORE WORK</span>

              </div>

              <h3>More projects</h3>

              <p>
                Animation, film, 3D, sound, graphics and
                photography: smaller studies and experiments.
              </p>

              <div className="projectCardFoot">

                <span>EXPLORE THE LAB</span>

                <span>↗</span>

              </div>

            </div>

          </Link>

        </div>

      </section>


      {/* =====================================
          ABOUT + JOURNEY
      ===================================== */}

      <section
        className="aboutJourney"
        id="about"
      >

        <div className="sectionHeader sectionReveal">

          <span>
            02 - ABOUT
          </span>

          <span>
            SARA MAJ
          </span>

        </div>


        {/* ABOUT */}

        <div className="aboutIntro">

          <h2 className="sectionReveal">

            TECHNOLOGY

            <br />

            MEETS

            <br />

            CREATIVITY.

          </h2>


          <div className="aboutCopy sectionReveal">

            <p>
              I&apos;m Sara, a Media Technology
              & Design student based in Austria.
            </p>


            <p>
              My background combines information
              technology, software development and
              creative media.
            </p>


            <p>
              I enjoy working on projects where
              technical thinking, interaction and
              visual storytelling come together -
              from software and games to UX/UI,
              motion and 3D.
            </p>

          </div>

        </div>


      </section>


      {/* =====================================
          JOURNEY
      ===================================== */}

      <section className="journeySection">


        <div className="journeyHeading sectionReveal">

          <span>
            MY JOURNEY
          </span>


          <p>
            Education and professional experience
            across IT, media and technology.
          </p>

        </div>


        <div className="journeyTimeline">

          <div className="journeyLine">

            <div className="journeyLineFill" />

          </div>


          {journey.map(
            (item, index) => (

              <article
                className="journeyItem"

                key={`${item.title}-${item.date}`}
              >

                <div className="journeyDot" />


                <span className="journeyIndex">

                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}

                </span>


                <div className="journeyContent">

                  <div className="journeyMeta">

                    <span>
                      {item.type}
                    </span>

                    <span>
                      {item.date}
                    </span>

                  </div>


                  <h3>
                    {item.title}
                  </h3>


                  <h4>
                    {item.subtitle}
                  </h4>


                  <p>
                    {item.description}
                  </p>


                  <span className="journeyDetail">

                    {item.detail}

                  </span>

                </div>

              </article>

            )
          )}

        </div>


        <a
          className="linkedinLink sectionReveal"

          href="https://www.linkedin.com/in/sara-vanesa-maj/"

          target="_blank"

          rel="noreferrer"
        >

          VIEW FULL PROFILE ON LINKEDIN ↗

        </a>

      </section>


      {/* =====================================
          CONTACT
      ===================================== */}

      <section
        className="contact"
        id="contact"
      >

        <span className="sectionNumber sectionReveal">

          03 - CONTACT

        </span>


        <div className="contactMain sectionReveal">

          <p>
            HAVE AN IDEA?
          </p>


          <h2>

            LET&apos;S CREATE

            <br />

            SOMETHING.

          </h2>

        </div>


        <div className="contactLinks sectionReveal">

          <a href="mailto:saramaj@gmx.at">
            <strong>Email</strong>
            <span>saramaj@gmx.at</span>
            <em>↗</em>
          </a>

          <a
            href="https://www.linkedin.com/in/sara-vanesa-maj/"
            target="_blank"
            rel="noreferrer"
          >
            <strong>LinkedIn</strong>
            <span>linkedin.com/in/sara-vanesa-maj</span>
            <em>↗</em>
          </a>

          <a
            href="https://github.com/SaraVanesaMaj"
            target="_blank"
            rel="noreferrer"
          >
            <strong>GitHub</strong>
            <span>github.com/SaraVanesaMaj</span>
            <em>↗</em>
          </a>

          <a
            href="/cv/Sara-Maj-CV.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <strong>CV</strong>
            <span>Download as PDF</span>
            <em>↓</em>
          </a>

        </div>


      </section>

    </main>
  );
}