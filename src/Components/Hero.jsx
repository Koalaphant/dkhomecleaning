export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[url('/kitchen-hero.jpg')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/35"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/35 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,83,96,0.15),transparent_55%)]"></div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-white/0 via-white/60 to-white pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative mx-4 md:mx-8">
        <div className="mx-auto flex min-h-[520px] max-w-4xl items-center sm:min-h-[580px] md:min-h-[660px]">
          <div className="relative w-full max-w-2xl">
            <div className="relative rounded-[28px] bg-white/75 px-6 py-12 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.6)] backdrop-blur-md sm:px-8 sm:py-14 md:px-12 md:py-16">
              <div className="absolute left-0 top-10 h-16 w-1.5 rounded-full bg-[#105360]"></div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#105360]">
                Welcome to DK Home Cleaning
              </p>
              <h1 className="mt-5 font-merriweather text-4xl leading-[1.05] text-[#0f4d5a] sm:text-5xl md:text-[3.25rem]">
                Stay clean,
                <br />
                stay healthy
              </h1>
              <p className="mt-5 font-roboto text-base leading-relaxed text-slate-700 sm:text-lg">
                We are a family-run domestic cleaning service, serving
                Warrington and the surrounding areas since 2013.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-[#105360] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition-transform duration-300 hover:scale-105"
                  href=""
                >
                  Look at our services
                </a>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#105360]/70">
                  Fully insured • Flexible scheduling
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
