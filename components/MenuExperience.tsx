"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const dishes = [
  {
    number: "01",
    name: "RIBEYE",
    subtitle: "45 DAY DRY AGED",
    description: "Deep flavour · Open flame · Sea salt",
    price: "$78",
    bg: "/media/ribeye.png",
    cutout: "/media/ribeye-cutout.png",
    titleClass:
      "text-[24vw] sm:text-[21vw] md:text-[17vw] lg:text-[15vw] xl:text-[14vw]",
    dishClass:
      "w-[76vw] sm:w-[72vw] md:w-[46vw] lg:w-[43vw] xl:w-[40vw] xl:max-w-[760px]",
  },

  {
    number: "02",
    name: "TOMAHAWK",
    subtitle: "OPEN FIRE · 1.2 KG",
    description: "Oak smoke · Charred crust · Bone aged",
    price: "$115",
    bg: "/media/tomahawk-bg.png",
    cutout: "/media/tomahawk-cutout.png",
    titleClass:
      "text-[18vw] sm:text-[16vw] md:text-[12vw] lg:text-[10vw] xl:text-[9vw]",
    dishClass:
      "w-[88vw] sm:w-[82vw] md:w-[58vw] lg:w-[54vw] xl:w-[50vw] xl:max-w-[980px]",
  },

  {
    number: "03",
    name: "FILET",
    subtitle: "CENTER CUT · TENDER",
    description: "Velvet texture · Fine sear · Rosemary glaze",
    price: "$68",
    bg: "/media/filet-bg.png",
    cutout: "/media/filet-cutout.png",
    titleClass:
      "text-[24vw] sm:text-[22vw] md:text-[17vw] lg:text-[15vw] xl:text-[14vw]",
    dishClass:
      "w-[64vw] sm:w-[58vw] md:w-[36vw] lg:w-[32vw] xl:w-[28vw] xl:max-w-[560px]",
  },

  {
    number: "04",
    name: "CHARRED OCTOPUS",
    subtitle: "FIRE CHARRED · SMOKED PAPRIKA",
    description: "Potato cream · Herbs · Smoked paprika",
    price: "$29",
    bg: "/media/octopus-bg.png",
    cutout: "/media/octopus-cutout.png",
    titleClass:
      "text-[13vw] sm:text-[12vw] md:text-[8vw] lg:text-[7vw] xl:text-[6.5vw]",
    dishClass:
      "w-[90vw] sm:w-[82vw] md:w-[55vw] lg:w-[50vw] xl:w-[46vw] xl:max-w-[850px]",
  },

  {
    number: "05",
    name: "TRUFFLE TAGLIATELLE",
    subtitle: "BLACK TRUFFLE · PARMESAN",
    description: "Fresh pasta · Parmesan · Black truffle",
    price: "$28",
    bg: "/media/truffle-bg.png",
    cutout: "/media/truffle-cutout.png",
    titleClass:
      "text-[11vw] sm:text-[10vw] md:text-[7vw] lg:text-[6vw] xl:text-[5.5vw]",
    dishClass:
      "w-[88vw] sm:w-[80vw] md:w-[54vw] lg:w-[48vw] xl:w-[44vw] xl:max-w-[820px]",
  },

  {
    number: "06",
    name: "BURNT CHEESECAKE",
    subtitle: "CARAMELISED · CREAMY",
    description: "Vanilla · Caramel · Sea salt",
    price: "$16",
    bg: "/media/burnt-cheesecake-bg.png",
    cutout: "/media/burnt-cheesecake-cutout.png",
    titleClass:
      "text-[12vw] sm:text-[11vw] md:text-[8vw] lg:text-[7vw] xl:text-[6vw]",
    dishClass:
      "w-[82vw] sm:w-[74vw] md:w-[48vw] lg:w-[43vw] xl:w-[39vw] xl:max-w-[720px]",
  },
];

export default function MenuExperience() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const sceneRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dishRefs = useRef<(HTMLImageElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const scenes = sceneRefs.current;
      const images = dishRefs.current;
      const titles = titleRefs.current;

      // INITIAL STATE
      scenes.forEach((scene, index) => {
        if (!scene) return;

        gsap.set(scene, {
          opacity: index === 0 ? 1 : 0,
          visibility: index === 0 ? "visible" : "hidden",
        });
      });

      images.forEach((image) => {
        if (!image) return;

        gsap.set(image, {
          scale: 1,
          yPercent: 0,
          rotate: 0,
        });
      });

      titles.forEach((title) => {
        if (!title) return;

        gsap.set(title, {
          scale: 1,
          yPercent: 0,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.65,
          invalidateOnRefresh: true,
        },
      });

      // FIRST DISH HOLD
      tl.to(
        images[0],
        {
          scale: 1.06,
          yPercent: -2,
          duration: 0.8,
          ease: "none",
        },
        0
      );

      tl.to(
        titles[0],
        {
          scale: 1.03,
          yPercent: -2,
          duration: 0.8,
          ease: "none",
        },
        0
      );

      // ALL TRANSITIONS
      dishes.forEach((_, index) => {
        if (index === dishes.length - 1) return;

        const currentScene = scenes[index];
        const nextScene = scenes[index + 1];

        const nextImage = images[index + 1];
        const nextTitle = titles[index + 1];

        // CURRENT OUT
        tl.to(currentScene, {
          opacity: 0,
          duration: 0.16,
          ease: "none",
        });

        tl.set(currentScene, {
          visibility: "hidden",
        });

        // SMALL BLACK PAUSE
        tl.to({}, { duration: 0.06 });

        // NEXT SCENE
        tl.set(nextScene, {
          visibility: "visible",
        });

        tl.fromTo(
          nextScene,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.16,
            ease: "none",
          }
        );

        // NEXT DISH ENTER
        tl.fromTo(
          nextImage,
          {
            scale: 0.86,
            yPercent: 10,
            rotate: index % 2 === 0 ? -2 : 2,
          },
          {
            scale: 1,
            yPercent: 0,
            rotate: 0,
            duration: 0.3,
            ease: "none",
          },
          "<"
        );

        // NEXT TITLE ENTER
        tl.fromTo(
          nextTitle,
          {
            scale: 0.95,
            yPercent: 5,
          },
          {
            scale: 1,
            yPercent: 0,
            duration: 0.3,
            ease: "none",
          },
          "<"
        );

        // HOLD
        tl.to(nextImage, {
          scale: 1.05,
          yPercent: -2,
          duration: 0.72,
          ease: "none",
        });

        tl.to(
          nextTitle,
          {
            scale: 1.025,
            yPercent: -2,
            duration: 0.72,
            ease: "none",
          },
          "<"
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  // OPEN CINEMATIC FROM REGULAR MENU
  useEffect(() => {
    const handleOpenSignature = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      const name = customEvent.detail;

      const section = sectionRef.current;
      if (!section) return;

      const index = dishes.findIndex((dish) => dish.name === name);

      if (index === -1) return;

      const sectionTop = section.offsetTop;
      const scrollDistance = section.offsetHeight - window.innerHeight;

      const progress =
        dishes.length === 1 ? 0 : index / (dishes.length - 1);

      const target =
        sectionTop +
        scrollDistance * Math.min(progress * 0.94 + 0.02, 0.96);

      window.scrollTo({
        top: target,
        behavior: "smooth",
      });
    };

    window.addEventListener(
      "open-signature-dish",
      handleOpenSignature
    );

    return () =>
      window.removeEventListener(
        "open-signature-dish",
        handleOpenSignature
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-[760vh]
        bg-black
        text-white
        md:h-[800vh]
      "
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-black">

        {/* TOP BAR */}
        <div
          className="
            absolute
            left-0
            right-0
            top-0
            z-[100]
            flex
            items-center
            justify-between
            px-5
            pt-[max(22px,env(safe-area-inset-top))]
            md:px-12
            md:pt-8
          "
        >
          <span className="text-[9px] font-medium tracking-[0.45em] text-white/95 md:text-[10px]">
            NOIR
          </span>

          <span className="text-[9px] tracking-[0.35em] text-white/75 md:text-[10px]">
            MENU EXPERIENCE
          </span>
        </div>

        {/* SCENES */}
        {dishes.map((dish, index) => (
          <div
            key={dish.name}
            ref={(el) => {
              sceneRefs.current[index] = el;
            }}
            className="absolute inset-0 bg-black"
          >
            {/* BACKGROUND */}
            <img
              src={dish.bg}
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

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 z-[2] bg-black/28 md:bg-black/26" />

            {/* VIGNETTE */}
            <div
              className="
                absolute
                inset-0
                z-[3]
                bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.58)_100%)]
              "
            />

            {/* BOTTOM GRADIENT */}
            <div
              className="
                absolute
                inset-x-0
                bottom-0
                z-[4]
                h-[35%]
                bg-gradient-to-t
                from-black/94
                via-black/48
                to-transparent
                md:h-[29%]
              "
            />

            {/* TITLE */}
            <div
  className="
    pointer-events-none
    absolute
    inset-x-0
    top-[18%]
    z-10
    flex
    justify-center
    px-2
    md:top-[20%]
  "
>
             <h2
  className="
    max-w-[92vw]
    px-4
    text-center
    font-serif
    leading-[0.9]
    tracking-[-0.06em]
    text-white/70
    whitespace-normal
    break-words
    text-[12vw]
    sm:text-[10vw]
    md:text-[7vw]
    lg:text-[5vw]
  "
>
  {dish.name}
</h2>
            </div>

            {/* DISH */}
            <div
              className={`
                pointer-events-none
                absolute
                left-1/2
                top-[50%]
                z-20
                -translate-x-1/2
                -translate-y-1/2
                ${dish.dishClass}
              `}
            >
              <img
                ref={(el) => {
                  dishRefs.current[index] = el;
                }}
                src={dish.cutout}
                alt={dish.name}
                className="
                  block
                  h-auto
                  w-full
                  object-contain
                  drop-shadow-[0_35px_50px_rgba(0,0,0,0.65)]
                  md:drop-shadow-[0_48px_70px_rgba(0,0,0,0.65)]
                "
              />
            </div>

            {/* INFO */}
            <div
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
                  <div className="hidden h-10 w-px bg-white/30 md:block" />

                  <div>
                    <p className="mb-2 text-[8px] font-medium uppercase tracking-[0.38em] text-white/70 sm:text-[9px] md:text-[10px]">
                      {dish.number} · {dish.subtitle}
                    </p>

                    <p className="max-w-md text-xs leading-5 text-white/50 sm:text-sm">
                      {dish.description}
                    </p>
                  </div>
                </div>

                <p className="text-[11px] tracking-[0.18em] text-white/90 md:text-sm">
                  {dish.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}