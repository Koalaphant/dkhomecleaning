import { useMemo, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import reviews from "../data/reviews";

export default function Reviews() {
  const [expanded, setExpanded] = useState(false);
  const visibleCount = 3;
  const visibleReviews = useMemo(
    () => (expanded ? reviews : reviews.slice(0, visibleCount)),
    [expanded]
  );
  const hasMore = reviews.length > visibleCount;

  return (
    <section className="mt-10 mx-4 md:mx-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-100 bg-white px-6 py-10 shadow-md md:px-10 md:py-12">
        <div className="space-y-8">
          <div className="space-y-2 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#105361]">
              Reviews
            </p>
            <h3 className="font-merriweather text-2xl text-[#105361] md:text-3xl">
              What Our Clients Say
            </h3>
            <p className="font-roboto text-sm text-slate-600 md:text-base">
              Real feedback from customers across Warrington.
            </p>
          </div>

          <div className="relative">
            <div className="grid gap-6 md:grid-cols-3">
              {visibleReviews.map((item) => (
                <div
                  key={item.id}
                  className="flex h-full flex-col rounded-2xl border border-[#d4e6ea] bg-[#f4fafb] p-6"
                >
                  <div className="flex items-center gap-1 text-[#105361]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <FaStar
                        key={index}
                        className={
                          index < item.rating
                            ? "text-[#105361]"
                            : "text-[#b9d1d7]"
                        }
                      />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 font-roboto text-base leading-relaxed text-slate-700">
                    “{item.review}”
                  </p>
                  <p className="mt-6 font-merriweather text-sm font-semibold uppercase tracking-[0.2em] text-[#105361]">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
            {hasMore && !expanded && (
              <div className="pointer-events-none absolute inset-x-0 -bottom-2 h-24 bg-gradient-to-b from-white/0 via-white/70 to-white"></div>
            )}
          </div>

          {hasMore && (
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setExpanded((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-full border border-[#d4e6ea] bg-white px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#105361] transition hover:scale-105"
              >
                {expanded ? "See less" : "See more"}
                <IoChevronDown
                  className={`text-base transition-transform ${
                    expanded ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
