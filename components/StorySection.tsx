"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StorySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const wordsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    const words = wordsRef.current;
    const text = textRef.current;

    if (!section || !video || !words || !text) return;

    const ctx = gsap.context(() => {
      // VIDEO PARALLAX / ZOOM
      gsap.fromTo(
        video,
        {
          scale: 1.12,
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

      // BIG WORDS
      gsap.fromTo(
        words,
        {
          opacity: 0,
          y: 60,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: words,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // TEXT ITEMS
      gsap.fromTo(
        text.children,
        {
          opacity: 0,
          y: 55,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.95,
          stagger: 0.13,
          ease: "power4.out",
          scrollTrigger: {
            trigger: text,
            start: "top 82%",
            toggleActions: "play none none reverse",
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
        bg-[#e7dfd2]
        px-6
        py-24
        text-[#171717]
        md:px-12
        md:py-32
        lg:py-40
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-[1500px]
          gap-14
          lg:grid-cols-[1.2fr_0.8fr]
          lg:items-center
          lg:gap-20
        "
      >
        {/* VIDEO */}
        <div
          className="
            relative
            h-[560px]
            overflow-hidden
            bg-black
            sm:h-[680px]
            lg:h-[820px]
          "
        >
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
              h-full
              w-full
              object-cover
              object-center
              will-change-transform
            "
          >
            <source src="/media/story-cut.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/18" />

          {/* BIG WORDS ON VIDEO */}
          <div
            ref={wordsRef}
            className="
              absolute
              inset-0
              z-10
              flex
              flex-col
              justify-end
              px-5
              pb-8
              text-white
              md:px-8
              md:pb-10
            "
          >
            <div
              className="
                font-serif
                text-[17vw]
                leading-[0.72]
                tracking-[-0.07em]
                sm:text-[14vw]
                lg:text-[7vw]
              "
            >
              FIRE
            </div>

            <div
              className="
                ml-[8vw]
                font-serif
                text-[17vw]
                leading-[0.72]
                tracking-[-0.07em]
                sm:text-[14vw]
                lg:ml-[4vw]
                lg:text-[7vw]
              "
            >
              TIME
            </div>

            <div
              className="
                font-serif
                text-[17vw]
                leading-[0.72]
                tracking-[-0.07em]
                sm:text-[14vw]
                lg:text-[7vw]
              "
            >
              CRAFT
            </div>
          </div>
        </div>

        {/* TEXT */}
        <div
          ref={textRef}
          className="
            flex
            flex-col
            justify-center
            lg:pr-8
          "
        >
          <p
            className="
              mb-6
              text-[9px]
              uppercase
              tracking-[0.6em]
              text-black/45
            "
          >
            Our Philosophy
          </p>

          <h2
            className="
              max-w-xl
              font-serif
              text-4xl
              leading-[0.95]
              tracking-[-0.04em]
              sm:text-5xl
              lg:text-[4vw]
            "
          >
            Great steak is not rushed.
          </h2>

          <div className="mt-8 h-px w-14 bg-black/25" />

          <p
            className="
              mt-8
              max-w-md
              text-sm
              leading-7
              text-black/60
              md:text-base
            "
          >
            We age slowly, season simply and cook over open fire.
            Every cut is treated with restraint, precision and respect.
          </p>

          <p
            className="
              mt-5
              max-w-md
              text-sm
              leading-7
              text-black/60
              md:text-base
            "
          >
            The result is not decoration. It is flavour, texture and heat
            working together exactly as they should.
          </p>

          <button
            className="
              mt-10
              w-fit
              border-b
              border-black/40
              pb-2
              text-[10px]
              uppercase
              tracking-[0.35em]
              transition
              duration-300
              hover:border-black
            "
          >
            Discover our story
          </button>
        </div>
      </div>
    </section>
  );
}