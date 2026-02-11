import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-12 bg-[#0f4d5a] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8 md:px-12">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <h3 className="font-merriweather text-2xl">DK Home Cleaning</h3>
            <p className="font-roboto text-base leading-relaxed text-white/80">
              A family-run cleaning business based in Warrington since 2013.
            </p>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                Follow us on
              </p>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition hover:bg-white/10"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition hover:bg-white/10"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition hover:bg-white/10"
                  aria-label="X"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-base text-white/85">
              <li>Kitchen Cleaning</li>
              <li>House Cleaning</li>
              <li>Window Cleaning</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-base text-white/85">
              <li>
                <a href="/" className="transition hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="transition hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="transition hover:text-white">
                  Get A Quote
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              Office
            </h4>
            <ul className="mt-4 space-y-2 text-base text-white/85">
              <li>
                <a
                  href="mailto:dave@dkhomecleaning.com"
                  className="transition hover:text-white"
                >
                  dave@dkhomecleaning.com
                </a>
              </li>
              <li>
                <a
                  href="tel:07852973257"
                  className="transition hover:text-white"
                >
                  07852973257
                </a>
              </li>
              <li>Warrington</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/60">
          © {new Date().getFullYear()} DK Home Cleaning. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
