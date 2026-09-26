"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LocationSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const right = rightRef.current;

    if (!section || !left || !right) return;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      gsap.fromTo(
        left,
        {
          opacity: 0,
          x: isMobile ? -50 : -120,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 40%",
            scrub: 0.7,
          },
        }
      );

      gsap.fromTo(
        right,
        {
          opacity: 0,
          x: isMobile ? 50 : 120,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 40%",
            scrub: 0.7,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#181818]
        px-6
        py-24
        text-white
        md:px-12
        md:py-32
        lg:py-36
      "
    >
      {/* BOTTOM FIRE STRIP */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-0
          h-[150px]
          overflow-hidden
          md:h-[180px]
        "
      >
        <img
          src="/media/location-fire-strip.png"
          alt=""
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-bottom
            opacity-90
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#181818]
            via-[#181818]/20
            to-transparent
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-[1280px]
          gap-16
          lg:grid-cols-[0.9fr_1.1fr]
          lg:items-center
          lg:gap-24
        "
      >
        {/* LEFT */}
        <div ref={leftRef} className="max-w-lg">
          <p
            className="
              mb-6
              text-[9px]
              uppercase
              tracking-[0.6em]
              text-white/35
            "
          >
            Visit Noir
          </p>

          <h2
            className="
              font-serif
              text-5xl
              leading-[0.95]
              tracking-[-0.045em]
              sm:text-6xl
              lg:text-[4.6vw]
              xl:text-[4.2vw]
            "
          >
            Where fire
            <br />
            meets the city.
          </h2>

          <div
            className="
              mt-10
              space-y-2
              text-sm
              leading-6
              text-white/55
              md:text-[15px]
            "
          >
            <p>120 W 57th Street</p>
            <p>New York, NY 10019</p>
            <p>+1 212 555 0198</p>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=120+W+57th+Street+New+York+NY+10019"
            target="_blank"
            rel="noreferrer"
            className="
              mt-10
              inline-block
              w-fit
              border-b
              border-white/25
              pb-2
              text-[9px]
              uppercase
              tracking-[0.35em]
              text-white/75
              transition
              duration-300
              hover:border-white
              hover:text-white
            "
          >
            Get directions
          </a>
        </div>

        {/* RIGHT */}
        <div
          ref={rightRef}
          className="
            w-full
            lg:max-w-xl
            lg:justify-self-end
          "
        >
          <p
            className="
              mb-5
              text-[9px]
              uppercase
              tracking-[0.6em]
              text-white/35
            "
          >
            Opening Hours
          </p>

          <div className="border-t border-white/12">
            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/12
                py-4
                text-sm
                md:text-[15px]
              "
            >
              <span className="text-white/50">
                Monday — Thursday
              </span>

              <span className="text-white/90">
                17:00 — 00:00
              </span>
            </div>

            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/12
                py-4
                text-sm
                md:text-[15px]
              "
            >
              <span className="text-white/50">
                Friday
              </span>

              <span className="text-white/90">
                17:00 — 01:00
              </span>
            </div>

            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/12
                py-4
                text-sm
                md:text-[15px]
              "
            >
              <span className="text-white/50">
                Saturday
              </span>

              <span className="text-white/90">
                14:00 — 01:00
              </span>
            </div>

            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/12
                py-4
                text-sm
                md:text-[15px]
              "
            >
              <span className="text-white/50">
                Sunday
              </span>

              <span className="text-white/90">
                14:00 — 23:00
              </span>
            </div>
          </div>

          <p
            className="
              mt-8
              max-w-md
              text-sm
              leading-7
              text-white/40
            "
          >
            Private dining and group reservations are available by request.
          </p>
        </div>
      </div>
    </section>
  );
}