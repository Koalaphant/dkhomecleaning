import { LiaBroomSolid } from "react-icons/lia";
import { IoMdCheckmark } from "react-icons/io";
import { FaBath, FaHome } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { MdFamilyRestroom } from "react-icons/md";
import { PiMedalFill } from "react-icons/pi";
import { GiKitchenScale } from "react-icons/gi";
import Reviews from "../Components/Reviews";

import Hero from "../Components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="mt-8 mx-4 md:mx-8">
        <div className="mx-auto max-w-4xl rounded-2xl bg-[#105361] px-6 py-8 text-white shadow-lg md:px-10 md:py-10">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
              <LiaBroomSolid className="text-4xl" color="white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold uppercase tracking-widest font-merriweather md:text-2xl">
                About Our Company
              </h3>
              <h4 className="text-lg font-medium font-merriweather md:text-xl">
                A family run cleaning company providing the{" "}
                <span className="underline">best</span> quality service
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 mx-4 md:mx-8">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-100 bg-white px-6 py-8 shadow-md md:px-10 md:py-10">
          <div className="space-y-6">
            <p className="font-roboto text-base leading-relaxed text-slate-700 md:text-lg">
              Our mission is not only to meet your expectations, but to exceed
              them.
            </p>

            <ul className="grid gap-4 md:gap-5">
              <li className="flex items-start gap-4 rounded-xl border border-[#d4e6ea] bg-[#f4fafb] p-4">
                <span className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#105361]/10">
                  <IoMdCheckmark className="text-xl text-[#105361]" />
                </span>
                <p className="font-roboto text-base leading-relaxed text-slate-700 md:text-lg">
                  We are based in the heart of Warrington but we also serve the
                  surrounding areas. Give us a call or request a callback to
                  discuss your service requirements and location.
                </p>
              </li>
              <li className="flex items-start gap-4 rounded-xl border border-[#d4e6ea] bg-[#f4fafb] p-4">
                <span className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#105361]/10">
                  <IoMdCheckmark className="text-xl text-[#105361]" />
                </span>
                <p className="font-roboto text-base leading-relaxed text-slate-700 md:text-lg">
                  We offer a vast variety of different domestic cleans from a
                  basic clean to a full house sweep. We also provide services to
                  small offices and businesses.
                </p>
              </li>
              <li className="flex items-start gap-4 rounded-xl border border-[#d4e6ea] bg-[#f4fafb] p-4">
                <span className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#105361]/10">
                  <IoMdCheckmark className="text-xl text-[#105361]" />
                </span>
                <p className="font-roboto text-base leading-relaxed text-slate-700 md:text-lg">
                  Fully insured and CRB/DBS checked to ensure your safety in your
                  own home, whilst having an ease of mind knowing we are here to
                  help.
                </p>
              </li>
            </ul>

            <div className="flex justify-center">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#105361] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition-transform duration-300 hover:scale-105"
                href=""
              >
                Look at our services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 mx-4 md:mx-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#f2f7f8] px-6 py-10 md:px-10 md:py-12">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#105361]">
                What we do
              </p>
              <h3 className="font-merriweather text-2xl text-[#105361] md:text-3xl">
                Our Cleaning Services
              </h3>
              <p className="font-roboto text-sm text-slate-600 md:text-base">
                Tailored options for every room and every home.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#105361]/10">
                    <GiKitchenScale className="text-2xl text-[#105361]" />
                  </span>
                  <p className="font-roboto text-base font-semibold text-[#105361]">
                    Kitchen Cleaning
                  </p>
                </div>
                <div className="mt-4 h-1 w-12 rounded-full bg-[#105361]/20"></div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#105361]/10">
                    <FaBath className="text-2xl text-[#105361]" />
                  </span>
                  <p className="font-roboto text-base font-semibold text-[#105361]">
                    Bathroom Cleaning
                  </p>
                </div>
                <div className="mt-4 h-1 w-12 rounded-full bg-[#105361]/20"></div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#105361]/10">
                    <FaHome className="text-2xl text-[#105361]" />
                  </span>
                  <p className="font-roboto text-base font-semibold text-[#105361]">
                    House Cleaning
                  </p>
                </div>
                <div className="mt-4 h-1 w-12 rounded-full bg-[#105361]/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 mx-4 md:mx-8">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-100 bg-white px-6 py-8 shadow-md md:px-10 md:py-10">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#105361]">
                Why choose us
              </p>
              <h3 className="font-merriweather text-2xl text-[#105361] md:text-3xl">
                Why you choose our services
              </h3>
              <p className="font-roboto text-sm text-slate-600 md:text-base">
                Trusted, local, and built around your peace of mind.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-start">
              <div className="rounded-2xl border border-[#d4e6ea] bg-[#f4fafb] p-6">
                <p className="font-roboto text-base leading-relaxed text-slate-700 md:text-lg">
                  As a family-run business, we set the standard of home
                  cleaning. Our homes are precious, which is why DK Home
                  Cleaning are CRB/DBS checked to ensure safety and ease of mind
                  for you and your home.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Family-run", "CRB/DBS checked", "Reliable"].map((pill) => (
                    <span
                      key={pill}
                      className="rounded-full border border-[#cfe3e7] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#105361]"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-[#105361] p-6 text-white shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  Peace of mind
                </p>
                <p className="mt-3 font-merriweather text-2xl">
                  Safe, vetted, trusted
                </p>
                <p className="mt-3 text-sm text-white/80">
                  We treat every home as if it were our own.
                </p>
                <div className="mt-5">
                  <a
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2 text-xs font-semibold uppercase tracking-wide text-[#105361] transition-transform duration-300 hover:scale-105"
                    href=""
                  >
                    More details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 mx-4 md:mx-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#f2f7f8] px-6 py-10 md:px-10 md:py-12">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#105361]">
                Our promise
              </p>
              <h3 className="font-merriweather text-2xl text-[#105361] md:text-3xl">
                What You Can Expect
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#105361]/10">
                  <MdFamilyRestroom className="text-2xl text-[#105361]" />
                </div>
                <h4 className="mt-4 font-merriweather text-lg text-[#105361]">
                  Family-run Business
                </h4>
                <p className="mt-3 font-roboto text-base leading-relaxed text-slate-700">
                  As a family-run business, we offer a more personalised
                  experience and build closer relationships with our clients.
                  Our commitment to providing quality service means we take
                  pride in going the extra mile to ensure our clients&apos;
                  satisfaction.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#105361]/10">
                  <FaHandshake className="text-2xl text-[#105361]" />
                </div>
                <h4 className="mt-4 font-merriweather text-lg text-[#105361]">
                  We Are Commited
                </h4>
                <p className="mt-3 font-roboto text-base leading-relaxed text-slate-700">
                  We are commited to bringing a high quality service to our
                  customers. Ensuring they will feel confident in using DK Home
                  Cleaning to maintain a clean and tidy home.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#105361]/10">
                  <PiMedalFill className="text-2xl text-[#105361]" />
                </div>
                <h4 className="mt-4 font-merriweather text-lg text-[#105361]">
                  Customer Focused Reviews
                </h4>
                <p className="mt-3 font-roboto text-base leading-relaxed text-slate-700">
                  The reviews from our customers speak for themselves. Take a
                  look on our social media platforms to see what our customers
                  say about us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Reviews />
    </>
  );
}
