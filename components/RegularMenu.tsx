"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Dish = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  type: "standard" | "signature";
  image?: string;
  meta?: string;
};

const categories = [
  "All",
  "Grill",
  "Starters",
  "Pasta",
  "Desserts",
  "Cocktails",
];

const dishes: Dish[] = [
  {
    id: 1,
    name: "Dry Aged Ribeye",
    category: "Grill",
    description: "45 day aged beef · sea salt · open flame",
    price: "$78",
    type: "signature",
    image: "/media/ribeye-cutout.png",
    meta: "350 G · MEDIUM RARE",
  },
  {
    id: 2,
    name: "Tomahawk",
    category: "Grill",
    description: "Oak smoke · charred crust · bone aged",
    price: "$115",
    type: "signature",
    image: "/media/tomahawk-cutout.png",
    meta: "1.2 KG · FOR TWO",
  },
  {
    id: 3,
    name: "Filet Mignon",
    category: "Grill",
    description: "Center cut · rosemary · brown butter",
    price: "$68",
    type: "signature",
    image: "/media/filet-cutout.png",
    meta: "250 G · TENDER",
  },
  {
    id: 4,
    name: "Beef Tartare",
    category: "Starters",
    description: "Hand-cut beef · capers · mustard · sourdough",
    price: "$22",
    type: "standard",
  },
  {
    id: 5,
    name: "Truffle Tagliatelle",
    category: "Pasta",
    description: "Fresh pasta · parmesan · black truffle",
    price: "$28",
    type: "standard",
  },
  {
    id: 6,
    name: "Burnt Cheesecake",
    category: "Desserts",
    description: "Vanilla · caramel · sea salt",
    price: "$16",
    type: "standard",
  },
  {
    id: 7,
    name: "Smoked Old Fashioned",
    category: "Cocktails",
    description: "Bourbon · bitters · orange · oak smoke",
    price: "$20",
    type: "standard",
  },
  {
    id: 8,
    name: "Charred Octopus",
    category: "Starters",
    description: "Potato cream · herbs · smoked paprika",
    price: "$29",
    type: "standard",
  },
];

export default function RegularMenu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const tabs = tabsRef.current;
    const grid = gridRef.current;

    if (!section || !header || !tabs || !grid) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        header.children,
        {
          opacity: 0,
          y: 70,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          stagger: 0.18,
          ease: "power4.out",
          scrollTrigger: {
            trigger: header,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        tabs.children,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger: tabs,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        grid.children,
        {
          opacity: 0,
          y: 70,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    const grid = gridRef.current;
    if (!grid) return;

    gsap.fromTo(
      grid.children,
      {
        opacity: 0,
        y: 35,
        scale: 0.98,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.07,
        ease: "power3.out",
        clearProps: "transform,opacity",
      }
    );
  }, [activeCategory]);

  const filtered =
    activeCategory === "All"
      ? dishes
      : dishes.filter((dish) => dish.category === activeCategory);

  const launchSignature = (dish: Dish) => {
    setSelectedDish(null);

    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent("open-signature-dish", {
          detail: dish.name
            .replace("Dry Aged ", "")
            .replace(" Mignon", "")
            .toUpperCase(),
        })
      );
    }, 150);
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="full-menu"
        className="bg-[#efe8dc] px-5 py-24 text-[#161616] md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-[1500px]">
          {/* HEADER */}
          <div ref={headerRef} className="mb-14 md:mb-20">
            <p className="mb-5 text-[9px] uppercase tracking-[0.65em] text-black/40">
              The Menu
            </p>

            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="font-serif text-[14vw] leading-[0.82] tracking-[-0.06em] sm:text-[10vw] md:text-[7vw] lg:text-[5.5vw]">
                Choose your
                <br />
                experience.
              </h2>

              <p className="max-w-sm text-sm leading-7 text-black/50 md:text-[15px]">
                Classic dishes meet our cinematic Signature Experience.
              </p>
            </div>
          </div>

          {/* CATEGORY TABS */}
          <div
            ref={tabsRef}
            className="mb-14 flex gap-7 overflow-x-auto border-b border-black/15 pb-4 scrollbar-hide"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  shrink-0
                  text-[9px]
                  uppercase
                  tracking-[0.35em]
                  transition
                  ${
                    activeCategory === category
                      ? "text-black"
                      : "text-black/35 hover:text-black/70"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>

          {/* DISHES */}
          <div
            ref={gridRef}
            className="grid gap-x-10 gap-y-7 md:grid-cols-2"
          >
            {filtered.map((dish) => {
              const signature = dish.type === "signature";

              return (
                <button
                  key={dish.id}
                  onClick={() => setSelectedDish(dish)}
                  className={`
                    group
                    relative
                    overflow-hidden
                    text-left
                    transition-all
                    duration-500
                    ${
                      signature
                        ? "min-h-[340px] bg-[#111] text-white md:min-h-[390px]"
                        : "border-b border-black/15 py-6 text-[#161616]"
                    }
                  `}
                >
                  {signature && (
                    <>
                      <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,60,25,0.22),transparent_55%)]" />

                        {dish.image && (
                          <img
                            src={dish.image}
                            alt={dish.name}
                            className="absolute left-1/2 top-1/2 max-h-[72%] w-[78%] -translate-x-1/2 -translate-y-1/2 object-contain transition duration-700 group-hover:scale-110"
                          />
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/20" />
                      </div>

                      <div className="absolute left-5 top-5 z-10">
                        <span className="border border-white/25 px-3 py-2 text-[7px] uppercase tracking-[0.4em] text-white/70">
                          Signature
                        </span>
                      </div>
                    </>
                  )}

                  <div
                    className={`
                      relative
                      z-10
                      ${
                        signature
                          ? "flex h-full min-h-[340px] flex-col justify-end p-6 md:min-h-[390px] md:p-8"
                          : ""
                      }
                    `}
                  >
                    {!signature && (
                      <p className="mb-3 text-[8px] uppercase tracking-[0.45em] text-black/35">
                        {dish.category}
                      </p>
                    )}

                    <div className="flex items-end justify-between gap-6">
                      <div>
                        <h3
                          className={`
                            font-serif
                            tracking-[-0.03em]
                            ${
                              signature
                                ? "text-3xl md:text-4xl"
                                : "text-2xl md:text-3xl"
                            }
                          `}
                        >
                          {dish.name}
                        </h3>

                        <p
                          className={`
                            mt-3
                            max-w-sm
                            text-xs
                            leading-6
                            ${
                              signature ? "text-white/55" : "text-black/45"
                            }
                          `}
                        >
                          {dish.description}
                        </p>

                        {signature && dish.meta && (
                          <p className="mt-4 text-[8px] uppercase tracking-[0.4em] text-white/40">
                            {dish.meta}
                          </p>
                        )}
                      </div>

                      <p
                        className={`
                          shrink-0
                          text-[10px]
                          tracking-[0.15em]
                          ${signature ? "text-white/90" : "text-black/70"}
                        `}
                      >
                        {dish.price}
                      </p>
                    </div>

                    {signature && (
                      <div className="mt-6 flex items-center gap-3 text-[8px] uppercase tracking-[0.35em] text-white/55">
                        <span>Enter experience</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-2">
                          →
                        </span>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* DISH DETAIL MODAL */}
      {selectedDish && (
        <div
          className="fixed inset-0 z-[500] flex items-end justify-center bg-black/75 backdrop-blur-sm md:items-center md:p-8"
          onClick={() => setSelectedDish(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-[#eee7db] p-7 text-[#161616] md:p-12"
          >
            <button
              onClick={() => setSelectedDish(null)}
              className="absolute right-5 top-5 text-xl text-black/50 transition hover:text-black"
              aria-label="Close dish details"
            >
              ×
            </button>

            <p className="mb-5 text-[8px] uppercase tracking-[0.5em] text-black/40">
              {selectedDish.type === "signature"
                ? "Signature Experience"
                : selectedDish.category}
            </p>

            <h3 className="font-serif text-5xl leading-none tracking-[-0.05em] md:text-7xl">
              {selectedDish.name}
            </h3>

            <p className="mt-6 max-w-xl text-sm leading-7 text-black/55">
              {selectedDish.description}
            </p>

            {selectedDish.meta && (
              <p className="mt-6 text-[9px] uppercase tracking-[0.35em] text-black/40">
                {selectedDish.meta}
              </p>
            )}

            <div className="mt-10 flex items-center justify-between border-t border-black/15 pt-6">
              <span className="text-[9px] uppercase tracking-[0.35em] text-black/40">
                Price
              </span>

              <span className="text-sm tracking-[0.15em]">
                {selectedDish.price}
              </span>
            </div>

            {selectedDish.type === "signature" && (
              <button
                onClick={() => launchSignature(selectedDish)}
                className="mt-8 w-full bg-black px-6 py-4 text-[9px] uppercase tracking-[0.4em] text-white transition duration-300 hover:bg-black/80"
              >
                Launch cinematic experience
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
