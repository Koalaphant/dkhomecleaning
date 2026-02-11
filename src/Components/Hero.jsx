export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[url('/kitchen-hero.jpg')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/85"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,83,96,0.15),transparent_55%)]"></div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-white/0 via-white/60 to-white pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative mx-4 md:mx-8">
        <div className="mx-auto flex min-h-[460px] max-w-4xl items-center sm:min-h-[520px] md:min-h-[600px]">
          <div className="w-full rounded-2xl bg-gradient-to-r from-white/95 via-white/85 to-white/10 px-6 py-10 backdrop-blur-sm sm:px-8 sm:py-12 md:px-10 md:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#105360]">
              Welcome to DK Home Cleaning
            </p>
            <h1 className="mt-4 font-merriweather text-3xl leading-tight text-[#105360] sm:text-4xl md:text-5xl">
              Stay clean,
              <br />
              stay healthy
            </h1>
            <p className="mt-4 font-roboto text-base leading-relaxed text-slate-700 sm:text-lg">
              We are a family-run domestic cleaning service, serving Warrington
              and the surrounding areas since 2013.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#105360] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition-transform duration-300 hover:scale-105"
                href=""
              >
                Look at our services
              </a>
              <span className="text-sm font-medium text-[#105360]/80">
                Fully insured • Flexible scheduling
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
