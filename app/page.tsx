"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import MenuExperience from "@/components/MenuExperience";
import StorySection from "@/components/StorySection";
import ReservationSection from "@/components/ReservationSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import RegularMenu from "@/components/RegularMenu";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const eyebrowRef = useRef<HTMLParagraphElement | null>(null);
  const titleWrapRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const taglineRef = useRef<HTMLParagraphElement | null>(null);

  const experienceRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const hero = heroRef.current;
      const video = videoRef.current;
      const eyebrow = eyebrowRef.current;
      const titleWrap = titleWrapRef.current;
      const title = titleRef.current;
      const tagline = taglineRef.current;

      if (
        !hero ||
        !video ||
        !eyebrow ||
        !titleWrap ||
        !title ||
        !tagline
      ) {
        return;
      }

      // HERO INTRO
      gsap.fromTo(
        eyebrow,
        {
          opacity: 0,
          y: 15,
        },
        {
          opacity: 0.7,
          y: 0,
          duration: 0.8,
          delay: 0.15,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        title,
        {
          opacity: 0,
          y: 45,
          scale: 0.96,
          filter: "blur(14px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.3,
          delay: 0.25,
          ease: "power4.out",
        }
      );

      gsap.fromTo(
        tagline,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 0.72,
          y: 0,
          duration: 0.9,
          delay: 0.7,
          ease: "power3.out",
        }
      );

      // VIDEO MOVEMENT
      gsap.to(video, {
        scale: 1.12,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // TITLE OUT
      gsap.fromTo(
        titleWrap,
        {
          opacity: 1,
          y: 0,
          scale: 1,
        },
        {
          opacity: 0,
          y: -45,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "18% top",
            end: "80% top",
            scrub: true,
          },
        }
      );

      // EYEBROW OUT
      gsap.to(eyebrow, {
        opacity: 0,
        y: -18,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "15% top",
          end: "55% top",
          scrub: true,
        },
      });

      // TAGLINE OUT
      gsap.to(tagline, {
        opacity: 0,
        y: 25,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "15% top",
          end: "60% top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const experience = experienceRef.current;

    if (!experience) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        experience.children,
        {
          opacity: 0,
          y: 55,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.16,
          ease: "power4.out",
          scrollTrigger: {
            trigger: experience,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, experience);

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-black text-white">
      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        className="relative h-[100svh] w-full overflow-hidden bg-black"
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
            scale-[1.03]
            object-cover
          "
        >
          <source src="/media/noir-hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/38" />

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_5%,rgba(0,0,0,0.55)_100%)]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/45
            via-transparent
            to-black/80
          "
        />

        <div
          className="
            relative
            z-10
            flex
            h-full
            flex-col
            items-center
            justify-center
            px-6
            text-center
          "
        >
          <p
            ref={eyebrowRef}
            className="
              mb-5
              text-[8px]
              uppercase
              tracking-[0.7em]
              text-white/55
              md:text-[10px]
            "
          >
            Steakhouse
          </p>

          <div ref={titleWrapRef}>
            <h1
              ref={titleRef}
              className="
                text-[21vw]
                font-semibold
                leading-[0.74]
                tracking-[-0.075em]
                text-white
                md:text-[17vw]
                lg:text-[15vw]
              "
            >
              NOIR
            </h1>
          </div>

          <p
            ref={taglineRef}
            className="
              mt-8
              text-[9px]
              uppercase
              tracking-[0.5em]
              text-white/65
              md:mt-9
              md:text-xs
            "
          >
            Fire. Meat. Ritual.
          </p>
        </div>

        <div
          className="
            absolute
            bottom-7
            left-1/2
            z-20
            -translate-x-1/2
          "
        >
          <div className="h-14 w-px bg-gradient-to-b from-white/60 to-transparent" />
        </div>

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            right-0
            z-30
            h-40
            bg-gradient-to-b
            from-transparent
            via-black/50
            to-black
          "
        />
      </section>

      {/* ================= MENU ================= */}
      <MenuExperience />

      <RegularMenu />

      <StorySection />

      <ReservationSection />

      {/* ================= LIGHT SECTION ================= */}
      <section
        className="
          flex
          min-h-[85svh]
          items-center
          justify-center
          bg-[#e7dfd2]
          px-6
          py-24
          text-[#151515]
        "
      >
        <div
          ref={experienceRef}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="mb-6 text-[9px] uppercase tracking-[0.6em] text-black/45 md:text-[10px]">
            The Noir Experience
          </p>

          <h2
            className="
              font-serif
              text-[12vw]
              leading-[0.9]
              tracking-[-0.05em]
              sm:text-[9vw]
              md:text-[7vw]
              lg:text-[5.5vw]
            "
          >
            Beyond the flame.
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-xl
              text-sm
              leading-7
              text-black/60
              md:text-base
            "
          >
            A steakhouse shaped by fire, patience and precision.
            Every cut is prepared as a ritual.
          </p>
        </div>
      </section>

      <LocationSection />

      <Footer />
    </main>
  );
}