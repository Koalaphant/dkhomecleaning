export default function About() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#0f4d5a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_45%)]"></div>
        <div className="mx-4 md:mx-8">
          <div className="mx-auto max-w-4xl py-14 sm:py-16 md:py-20 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
              About our company
            </p>
            <h1 className="mt-4 font-merriweather text-3xl sm:text-4xl md:text-5xl">
              We Are The Best Cleaning Services Provider
            </h1>
            <p className="mt-4 max-w-2xl font-roboto text-base leading-relaxed text-white/85 sm:text-lg">
              Our mission is not only to meet your expectations but to exceed
              them.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-4 md:mx-8 mt-10">
        <div className="mx-auto grid max-w-5xl gap-0 overflow-hidden rounded-3xl border border-[#d9e4e7] bg-white shadow-[0_30px_80px_-55px_rgba(15,77,90,0.6)] md:grid-cols-2">
          <div className="order-2 md:order-1 flex items-center bg-[#f5fafb] p-8 md:h-[320px] md:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#105361]">
                Local Service
              </p>
              <h2 className="mt-3 font-merriweather text-2xl text-[#105361]">
                Based in Warrington
              </h2>
              <p className="mt-4 font-roboto text-base leading-relaxed text-slate-700">
                We are based in the heart of Warrington but we also serve the
                surrounding areas. Give us a call or request a callback to
                discuss your service requirements and location.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 md:h-[320px]">
            <img
              src="https://images.pexels.com/photos/2343469/pexels-photo-2343469.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Bright, clean living room interior"
              className="h-64 w-full object-cover sm:h-80 md:h-full"
            />
          </div>
        </div>
      </section>

      <section className="mx-4 mt-10 md:mx-8">
        <div className="mx-auto grid max-w-5xl gap-0 overflow-hidden rounded-3xl border border-[#e7dfd6] bg-[#fffaf5] shadow-[0_30px_80px_-55px_rgba(15,77,90,0.6)] md:grid-cols-2">
          <div className="md:h-[320px]">
            <img
              src="https://images.pexels.com/photos/11209666/pexels-photo-11209666.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Clean, modern kitchen interior"
              className="h-64 w-full object-cover sm:h-80 md:h-full"
            />
          </div>
          <div className="flex items-center bg-white/60 p-8 md:h-[320px] md:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#105361]">
                Flexible Options
              </p>
              <h2 className="mt-3 font-merriweather text-2xl text-[#105361]">
                Domestic and Small Office Cleans
              </h2>
              <p className="mt-4 font-roboto text-base leading-relaxed text-slate-700">
                We offer a vast variety of different domestic cleans from a
                basic clean to a full house sweep. We also provide services to
                small offices and businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-4 mt-10 md:mx-8 mb-14">
        <div className="mx-auto grid max-w-5xl gap-0 overflow-hidden rounded-3xl border border-[#d9e4e7] bg-white shadow-[0_30px_80px_-55px_rgba(15,77,90,0.6)] md:grid-cols-2">
          <div className="order-2 md:order-1 flex items-center bg-[#f5fafb] p-8 md:h-[320px] md:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#105361]">
                Peace Of Mind
              </p>
              <h2 className="mt-3 font-merriweather text-2xl text-[#105361]">
                Fully Insured and DBS Checked
              </h2>
              <p className="mt-4 font-roboto text-base leading-relaxed text-slate-700">
                Fully insured and CRB/DBS checked to ensure your safety in your
                own home, whilst having an ease of mind knowing we are here to
                help.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 md:h-[320px]">
            <img
              src="https://images.pexels.com/photos/6207949/pexels-photo-6207949.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Neat and tidy bedroom interior"
              className="h-64 w-full object-cover sm:h-80 md:h-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
