"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ReservationSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const video = videoRef.current;

    if (!section || !content || !video) return;

    video.play().catch(() => {});

    const ctx = gsap.context(() => {
      gsap.fromTo(
        content,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "top 35%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        video,
        {
          scale: 1.08,
        },
        {
          scale: 1.02,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
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
        flex
        min-h-[90svh]
        items-center
        justify-center
        overflow-hidden
        bg-black
        px-6
        py-24
        text-white
        md:px-12
      "
    >
      {/* VIDEO */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="
          absolute
          inset-0
          z-0
          h-full
          w-full
          object-cover
        "
      >
        <source
          src="/media/reservation-bg.mp4"
          type="video/mp4"
        />
      </video>

      {/* LIGHTER OVERLAY */}
      <div className="absolute inset-0 z-10 bg-black/35" />

      {/* SUBTLE VIGNETTE */}
      <div
        className="
          absolute
          inset-0
          z-10
          bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.45)_100%)]
        "
      />

      {/* CONTENT */}
      <div
        ref={contentRef}
        className="
          relative
          z-30
          mx-auto
          flex
          max-w-5xl
          flex-col
          items-center
          text-center
        "
      >
        <p
          className="
            mb-6
            text-[9px]
            uppercase
            tracking-[0.65em]
            text-white/60
          "
        >
          Reservations
        </p>

        <h2
          className="
            font-serif
            text-[13vw]
            leading-[0.9]
            tracking-[-0.05em]
            sm:text-[10vw]
            md:text-[7vw]
            lg:text-[5.5vw]
          "
        >
          Your table
          <br />
          is waiting.
        </h2>

        <p
          className="
            mt-8
            max-w-xl
            text-sm
            leading-7
            text-white/70
            md:text-base
          "
        >
          Join us for an evening shaped by fire, flavour and atmosphere.
        </p>

        <button
          className="
            mt-10
            border
            border-white/40
            bg-black/10
            px-8
            py-4
            text-[9px]
            uppercase
            tracking-[0.4em]
            backdrop-blur-sm
            transition
            duration-300
            hover:bg-white
            hover:text-black
          "
        >
          Reserve a table
        </button>
      </div>
    </section>
  );
}