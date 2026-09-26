"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const times = [
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
];

export default function ReservationsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#111] text-white">
      <div className="mx-auto max-w-[1500px] px-6 py-10 md:px-12">
        {/* TOP */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-2xl tracking-[-0.04em]"
          >
            NOIR
          </Link>

          <Link
            href="/"
            className="text-[9px] uppercase tracking-[0.4em] text-white/50 transition hover:text-white"
          >
            Back
          </Link>
        </div>

        <div className="grid min-h-[85vh] items-center gap-16 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* LEFT */}
          <div>
            <p className="mb-6 text-[9px] uppercase tracking-[0.6em] text-white/35">
              Reservations
            </p>

            <h1 className="max-w-xl font-serif text-6xl leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-[6vw]">
              Your table
              <br />
              is waiting.
            </h1>

            <p className="mt-8 max-w-md text-sm leading-7 text-white/45">
              Join us for an evening shaped by fire, flavour and atmosphere.
            </p>

            <div className="mt-12 border-t border-white/10 pt-8 text-sm leading-7 text-white/40">
              <p>120 W 57th Street</p>
              <p>New York, NY 10019</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="border border-white/10 bg-white/[0.03] p-6 backdrop-blur md:p-10 lg:p-12">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="grid gap-8 md:grid-cols-2">
                  {/* DATE */}
                  <div>
                    <label className="mb-3 block text-[8px] uppercase tracking-[0.4em] text-white/40">
                      Date
                    </label>

                    <input
                      required
                      lang="en-US"
                      type="date"
                      className="
                        w-full
                        border-b
                        border-white/20
                        bg-transparent
                        py-3
                        text-sm
                        text-white
                        outline-none
                        transition
                        focus:border-white
                        [color-scheme:dark]
                      "
                    />
                  </div>

                  {/* GUESTS */}
                  <div>
                    <label className="mb-3 block text-[8px] uppercase tracking-[0.4em] text-white/40">
                      Guests
                    </label>

                    <select
                      required
                      defaultValue="2"
                      className="
                        w-full
                        border-b
                        border-white/20
                        bg-[#111]
                        py-3
                        text-sm
                        text-white
                        outline-none
                        transition
                        focus:border-white
                      "
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((guest) => (
                        <option key={guest} value={guest}>
                          {guest} {guest === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* TIME */}
                <div className="mt-10">
                  <label className="mb-4 block text-[8px] uppercase tracking-[0.4em] text-white/40">
                    Select time
                  </label>

                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                    {times.map((time) => (
                      <label key={time} className="cursor-pointer">
                        <input
                          required
                          type="radio"
                          name="time"
                          value={time}
                          className="peer sr-only"
                        />

                        <div
                          className="
                            border
                            border-white/15
                            px-3
                            py-3
                            text-center
                            text-[9px]
                            tracking-[0.1em]
                            text-white/55
                            transition
                            hover:border-white/50
                            hover:text-white
                            peer-checked:border-white
                            peer-checked:bg-white
                            peer-checked:text-black
                          "
                        >
                          {time}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mt-10 grid gap-8 md:grid-cols-2">
                  {/* NAME */}
                  <div>
                    <label className="mb-3 block text-[8px] uppercase tracking-[0.4em] text-white/40">
                      Name
                    </label>

                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      className="
                        w-full
                        border-b
                        border-white/20
                        bg-transparent
                        py-3
                        text-sm
                        text-white
                        placeholder:text-white/20
                        outline-none
                        transition
                        focus:border-white
                      "
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="mb-3 block text-[8px] uppercase tracking-[0.4em] text-white/40">
                      Phone
                    </label>

                    <input
                      required
                      type="tel"
                      placeholder="+1"
                      className="
                        w-full
                        border-b
                        border-white/20
                        bg-transparent
                        py-3
                        text-sm
                        text-white
                        placeholder:text-white/20
                        outline-none
                        transition
                        focus:border-white
                      "
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div className="mt-8">
                  <label className="mb-3 block text-[8px] uppercase tracking-[0.4em] text-white/40">
                    Email
                  </label>

                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="
                      w-full
                      border-b
                      border-white/20
                      bg-transparent
                      py-3
                      text-sm
                      text-white
                      placeholder:text-white/20
                      outline-none
                      transition
                      focus:border-white
                    "
                  />
                </div>

                <button
                  type="submit"
                  className="
                    mt-12
                    w-full
                    bg-white
                    px-8
                    py-5
                    text-[9px]
                    uppercase
                    tracking-[0.45em]
                    text-black
                    transition
                    duration-300
                    hover:bg-white/80
                  "
                >
                  Confirm reservation
                </button>
              </form>
            ) : (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <p className="mb-6 text-[9px] uppercase tracking-[0.6em] text-white/35">
                  Reservation received
                </p>

                <h2 className="font-serif text-5xl leading-none tracking-[-0.05em] md:text-6xl">
                  See you at NOIR.
                </h2>

                <p className="mt-7 max-w-md text-sm leading-7 text-white/45">
                  Your reservation request has been received. A confirmation
                  will be sent shortly.
                </p>

                <Link
                  href="/"
                  className="mt-10 border-b border-white/30 pb-2 text-[9px] uppercase tracking-[0.35em] text-white/60 transition hover:border-white hover:text-white"
                >
                  Return home
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}