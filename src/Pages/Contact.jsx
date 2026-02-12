export default function Contact() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#0f4d5a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_45%)]"></div>
        <div className="mx-4 md:mx-8">
          <div className="mx-auto max-w-4xl py-14 sm:py-16 md:py-20 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
              Get In Touch
            </p>
            <h1 className="mt-4 font-merriweather text-3xl sm:text-4xl md:text-5xl">
              We&apos;d love to hear from you
            </h1>
            <p className="mt-4 max-w-2xl font-roboto text-base leading-relaxed text-white/85 sm:text-lg">
              Tell us about your home and preferred schedule, and we&apos;ll get back
              to you with a tailored quote.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-4 mt-10 md:mx-8 mb-14">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <form className="rounded-3xl border border-[#d9e4e7] bg-white p-8 shadow-[0_30px_80px_-55px_rgba(15,77,90,0.6)] md:p-10">
            <div className="grid gap-6">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[#105361]">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-[#d4e6ea] bg-[#f7fbfc] px-4 py-3 text-sm text-[#0f4d5a] outline-none transition focus:border-[#105361]"
                />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[#105361]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className="mt-2 w-full rounded-xl border border-[#d4e6ea] bg-[#f7fbfc] px-4 py-3 text-sm text-[#0f4d5a] outline-none transition focus:border-[#105361]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[#105361]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Your phone"
                    className="mt-2 w-full rounded-xl border border-[#d4e6ea] bg-[#f7fbfc] px-4 py-3 text-sm text-[#0f4d5a] outline-none transition focus:border-[#105361]"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[#105361]">
                  Service Type
                </label>
                <select className="mt-2 w-full rounded-xl border border-[#d4e6ea] bg-[#f7fbfc] px-4 py-3 text-sm text-[#0f4d5a] outline-none transition focus:border-[#105361]">
                  <option>Kitchen Cleaning</option>
                  <option>Bathroom Cleaning</option>
                  <option>House Cleaning</option>
                  <option>Office Cleaning</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[#105361]">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your home and preferred schedule..."
                  className="mt-2 w-full resize-none rounded-xl border border-[#d4e6ea] bg-[#f7fbfc] px-4 py-3 text-sm text-[#0f4d5a] outline-none transition focus:border-[#105361]"
                ></textarea>
              </div>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-[#105361] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="space-y-6 rounded-3xl border border-[#e7dfd6] bg-[#fffaf5] p-8 shadow-[0_30px_80px_-55px_rgba(15,77,90,0.6)] md:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#105361]">
                Contact Details
              </p>
              <h2 className="mt-3 font-merriweather text-2xl text-[#105361]">
                We&apos;re ready to help
              </h2>
              <p className="mt-4 font-roboto text-base leading-relaxed text-slate-700">
                Reach out and we&apos;ll respond as soon as possible. We aim to
                return all enquiries within 24 hours.
              </p>
            </div>
            <div className="rounded-2xl border border-[#d4e6ea] bg-white p-4">
              <p className="text-sm font-semibold text-[#105361]">Email</p>
              <p className="mt-2 text-sm text-slate-700">
                dave@dkhomecleaning.com
              </p>
            </div>
            <div className="rounded-2xl border border-[#d4e6ea] bg-white p-4">
              <p className="text-sm font-semibold text-[#105361]">Phone</p>
              <p className="mt-2 text-sm text-slate-700">07852973257</p>
            </div>
            <div className="rounded-2xl border border-[#d4e6ea] bg-white p-4">
              <p className="text-sm font-semibold text-[#105361]">Location</p>
              <p className="mt-2 text-sm text-slate-700">Warrington</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
