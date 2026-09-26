"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const dishes = [
  {
    name: "RIBEYE",
    subtitle: "45 DAY DRY AGED",
    description: "Deep flavour · Open flame · Sea salt",
    price: "18,900 AMD",
    image: "/media/ribeye.jpg",
  },
  {
    name: "TOMAHAWK",
    subtitle: "OPEN FIRE · 1.2 KG",
    description: "Oak smoke · Charred crust · Bone aged",
    price: "32,000 AMD",
    image: "/media/tomahawk.jpg",
  },
  {
    name: "FILET",
    subtitle: "CENTER CUT",
    description: "Butter finish · Black pepper · Jus",
    price: "16,500 AMD",
    image: "/media/filet.jpg",
  },
];

export default function MenuShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const images = imageRefs.current;
      const contents = contentRefs.current;

      /*
       * INITIAL STATE
       */

      images.forEach((image, index) => {
        if (!image) return;

        gsap.set(image, {
          opacity: index === 0 ? 1 : 0,
          scale: index === 0 ? 1 : 1.12,
        });
      });

      contents.forEach((content, index) => {
        if (!content) return;

        gsap.set(content, {
          opacity: index === 0 ? 1 : 0,
          y: index === 0 ? 0 : 70,
        });
      });

      /*
       * ONE MASTER SCROLL TIMELINE
       */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",

          // ամբողջ menu animation-ի scroll երկարությունը
          end: "+=1800",

          pin: true,
          scrub: 1,

          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /*
       * =====================================
       * RIBEYE -> TOMAHAWK
       * =====================================
       */

      // Ribeye text slowly leaves
      tl.to(
        contents[0],
        {
          opacity: 0,
          y: -70,
          duration: 0.35,
          ease: "none",
        },
        0.65
      );

      // Ribeye image slowly zooms/fades
      tl.to(
        images[0],
        {
          opacity: 0,
          scale: 1.08,
          duration: 0.8,
          ease: "none",
        },
        0.65
      );

      // Tomahawk image starts before Ribeye fully disappears
      // so screen NEVER becomes empty
      tl.fromTo(
        images[1],
        {
          opacity: 0,
          scale: 1.14,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "none",
        },
        0.75
      );

      // Tomahawk text only appears after Ribeye text is gone
      tl.fromTo(
        contents[1],
        {
          opacity: 0,
          y: 70,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "none",
        },
        1.15
      );

      /*
       * Hold Tomahawk for a little scroll distance
       */

      tl.to({}, { duration: 0.5 });

      /*
       * =====================================
       * TOMAHAWK -> FILET
       * =====================================
       */

      tl.to(
        contents[1],
        {
          opacity: 0,
          y: -70,
          duration: 0.35,
          ease: "none",
        }
      );

      tl.to(
        images[1],
        {
          opacity: 0,
          scale: 1.08,
          duration: 0.8,
          ease: "none",
        },
        "<"
      );

      tl.fromTo(
        images[2],
        {
          opacity: 0,
          scale: 1.14,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "none",
        },
        "<0.1"
      );

      tl.fromTo(
        contents[2],
        {
          opacity: 0,
          y: 70,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "none",
        },
        "<0.4"
      );

      /*
       * Keep FILET visible briefly at the end.
       * No second Filet. No empty section.
       */
      tl.to({}, { duration: 0.55 });

      ScrollTrigger.refresh();
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black text-white"
    >
      {/* =========================
          BACKGROUND IMAGES
      ========================== */}

      {dishes.map((dish, index) => (
        <img
          key={dish.name}
          ref={(el) => {
            imageRefs.current[index] = el;
          }}
          src={dish.image}
          alt={dish.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ))}

      {/* DARK OVERLAY */}

      <div className="pointer-events-none absolute inset-0 z-10 bg-black/30" />

      {/* CINEMATIC VIGNETTE */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10
          bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.7)_100%)]
        "
      />

      {/* TOP BAR */}

      <div className="absolute left-0 right-0 top-0 z-40 flex items-center justify-between px-8 py-8 md:px-12">
        <span className="text-[10px] uppercase tracking-[0.5em]">
          NOIR
        </span>

        <span className="text-[10px] uppercase tracking-[0.45em] text-white/60">
          MENU
        </span>
      </div>

      {/* =========================
          DISH CONTENT
      ========================== */}

      {dishes.map((dish, index) => (
        <div
          key={dish.name}
          ref={(el) => {
            contentRefs.current[index] = el;
          }}
          className="
            absolute
            inset-0
            z-30
            flex
            items-center
            justify-center
            px-6
          "
        >
          <div className="text-center">

            <p
              className="
                mb-5
                text-[10px]
                uppercase
                tracking-[0.5em]
                text-white/60
              "
            >
              {dish.subtitle}
            </p>

            <h2
              className="
                font-serif
                text-[18vw]
                leading-[0.78]
                tracking-[-0.06em]
                md:text-[12vw]
              "
            >
              {dish.name}
            </h2>

            <p
              className="
                mt-8
                text-[10px]
                tracking-[0.18em]
                text-white/65
                md:text-xs
              "
            >
              {dish.description}
            </p>

            <p className="mt-4 text-xs tracking-[0.25em] md:text-sm">
              {dish.price}
            </p>

          </div>
        </div>
      ))}

      {/* SCROLL LABEL */}

      <div
        className="
          absolute
          bottom-8
          left-1/2
          z-40
          -translate-x-1/2
          text-[8px]
          uppercase
          tracking-[0.5em]
          text-white/40
        "
      >
        Explore the menu
      </div>
    </section>
  );
}