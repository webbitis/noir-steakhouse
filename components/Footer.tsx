export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-white/10
        bg-black
        px-6
        py-12
        text-white
        md:px-12
        md:py-16
      "
    >
      <div className="mx-auto max-w-[1500px]">
        {/* TOP */}
        <div
          className="
            flex
            flex-col
            gap-10
            md:flex-row
            md:items-end
            md:justify-between
          "
        >
          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.6em]
                text-white/35
              "
            >
              Noir Steakhouse
            </p>

            <h2
              className="
                mt-4
                font-serif
                text-5xl
                leading-none
                tracking-[-0.05em]
                md:text-7xl
              "
            >
              NOIR
            </h2>
          </div>

          <div
            className="
              flex
              flex-wrap
              gap-x-8
              gap-y-4
              text-[9px]
              uppercase
              tracking-[0.35em]
              text-white/60
            "
          >
            <a href="#menu" className="transition hover:text-white">
              Menu
            </a>

            <a href="#story" className="transition hover:text-white">
              Story
            </a>

            <a href="#reservations" className="transition hover:text-white">
              Reservations
            </a>

            <a href="#visit" className="transition hover:text-white">
              Visit
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px w-full bg-white/10" />

        {/* BOTTOM */}
        <div
          className="
            flex
            flex-col
            gap-5
            text-[8px]
            uppercase
            tracking-[0.3em]
            text-white/30
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          
          <p>© 2026 Noir Steakhouse</p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white/70">
              Instagram
            </a>

            <a href="#" className="transition hover:text-white/70">
              Privacy
            </a>
          </div>
            <p className="text-[9px] uppercase tracking-[0.28em] text-white/30">
  Digital experience by{" "}
  <a
    href="https://webbitis.com"
    target="_blank"
    rel="noreferrer"
    className="text-white/55 transition hover:text-white"
  >
    Webbitis
  </a>
</p>
        </div>
      </div>
    </footer>
  );
}