"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RibeyeWow() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLImageElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const steakRef = useRef<HTMLImageElement | null>(null);
  const infoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const title = titleRef.current;
    const steak = steakRef.current;
    const info = infoRef.current;

    if (!section || !bg || !title || !steak || !info) return;

    const ctx = gsap.context(() => {
      gsap.set(bg, {
        scale: 1.03,
        yPercent: 0,
      });

      gsap.set(title, {
        scale: 0.96,
        yPercent: 3,
        opacity: 0.72,
      });

      gsap.set(steak, {
        scale: 0.9,
        yPercent: 8,
        rotate: -1,
      });

      gsap.set(info, {
        opacity: 0,
        y: 24,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        bg,
        {
          scale: 1.12,
          yPercent: 2,
          ease: "none",
        },
        0
      );

      tl.to(
        title,
        {
          scale: 1.04,
          yPercent: -2,
          opacity: 0.86,
          ease: "none",
        },
        0
      );

      tl.to(
        steak,
        {
          scale: 1.04,
          yPercent: -3,
          rotate: 0.5,
          ease: "none",
        },
        0
      );

      tl.to(
        info,
        {
          opacity: 1,
          y: 0,
          ease: "none",
        },
        0.22
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-[170vh]
        bg-black
        text-white
        md:h-[180vh]
      "
    >
      <div
        className="
          sticky
          top-0
          h-[100svh]
          w-full
          overflow-hidden
          bg-black
        "
      >
        {/* BACKGROUND */}
        <img
          ref={bgRef}
          src="/media/ribeye.png"
          alt=""
          className="
            absolute
            inset-0
            z-0
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* OVERLAYS */}
        <div className="absolute inset-0 z-[2] bg-black/28 md:bg-black/26" />

        <div
          className="
            absolute
            inset-0
            z-[3]
            bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.58)_100%)]
          "
        />

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            z-[4]
            h-[34%]
            bg-gradient-to-t
            from-black/92
            via-black/45
            to-transparent
            md:h-[28%]
          "
        />

        {/* TOP NAV */}
        <div
          className="
            absolute
            left-0
            right-0
            top-0
            z-50
            flex
            items-center
            justify-between
            px-5
            pt-[max(22px,env(safe-area-inset-top))]
            md:px-12
            md:pt-8
          "
        >
          <span
            className="
              text-[9px]
              font-medium
              tracking-[0.45em]
              text-white/95
              md:text-[10px]
            "
          >
            NOIR
          </span>

          <span
            className="
              text-[9px]
              tracking-[0.35em]
              text-white/75
              md:text-[10px]
            "
          >
            MENU · 01
          </span>
        </div>

        {/* LARGE RIBEYE TEXT */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-[33%]
            z-10
            flex
            -translate-y-1/2
            justify-center
            overflow-hidden

            md:top-[31%]
          "
        >
          <h2
            ref={titleRef}
            className="
              select-none
              whitespace-nowrap
              font-serif
              text-[22vw]
              leading-none
              tracking-[-0.08em]
              text-white/72

              sm:text-[20vw]

              md:text-[16vw]
              md:text-white/78

              lg:text-[14vw]
              xl:text-[13vw]
            "
            style={{
              textShadow: "0 0 30px rgba(255,255,255,0.05)",
            }}
          >
            RIBEYE
          </h2>
        </div>

        {/* STEAK */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[49%]
            z-20
            w-[82vw]
            -translate-x-1/2
            -translate-y-1/2

            sm:w-[76vw]

            md:top-[50%]
            md:w-[50vw]

            lg:w-[46vw]

            xl:w-[43vw]
            xl:max-w-[820px]
          "
        >
          <img
            ref={steakRef}
            src="/media/ribeye-cutout.png"
            alt="Dry aged ribeye steak"
            className="
              block
              h-auto
              w-full
              object-contain
              drop-shadow-[0_30px_45px_rgba(0,0,0,0.6)]
              md:drop-shadow-[0_45px_65px_rgba(0,0,0,0.62)]
            "
          />
        </div>

        {/* INFO */}
        <div
          ref={infoRef}
          className="
            absolute
            bottom-0
            left-0
            right-0
            z-40
            px-5
            pb-[max(24px,env(safe-area-inset-bottom))]

            sm:px-7

            md:bottom-8
            md:px-12
            md:pb-0
          "
        >
          <div
            className="
              mx-auto
              flex
              max-w-[1500px]
              flex-col
              gap-3

              md:flex-row
              md:items-end
              md:justify-between
              md:gap-8
            "
          >
            <div className="flex items-start gap-4 md:items-end">
              <div
                className="
                  hidden
                  h-10
                  w-px
                  bg-white/30
                  md:block
                "
              />

              <div>
                <p
                  className="
                    mb-2
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.38em]
                    text-white/70

                    sm:text-[9px]

                    md:text-[10px]
                    md:tracking-[0.5em]
                  "
                >
                  45 DAY DRY AGED
                </p>

                <p
                  className="
                    text-[10px]
                    leading-relaxed
                    tracking-[0.12em]
                    text-white/90

                    sm:text-[11px]

                    md:text-xs
                    md:tracking-[0.18em]

                    lg:text-sm
                  "
                >
                  Deep flavour · Open flame · Sea salt
                </p>
              </div>
            </div>

            <p
              className="
                text-[11px]
                font-medium
                tracking-[0.2em]
                text-white

                sm:text-xs

                md:text-sm
                md:tracking-[0.25em]
              "
            >
              18,900 AMD
            </p>
          </div>
        </div>

        {/* SMALL MARK */}
        <div
          className="
            absolute
            bottom-[92px]
            left-5
            z-40
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/30
            font-serif
            text-sm
            text-white/90

            md:bottom-8
            md:left-5
            md:h-12
            md:w-12
          "
        >
          N
        </div>
      </div>
    </section>
  );
}