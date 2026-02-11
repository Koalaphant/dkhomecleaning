import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function NavMenu({ navLinks, setMenuOpen }) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (navLinks) {
      setFadeIn(true);
    }
  }, [navLinks]);

  const closeMenu = () => {
    setFadeIn(false);
    setTimeout(() => setMenuOpen(false), 500); // Delay to allow fade-out transition to complete
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0e4f5c] transition-opacity duration-500 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_45%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.1),transparent_40%)]"></div>
      <div
        className="absolute top-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white text-3xl backdrop-blur-sm cursor-pointer transition hover:bg-white/20"
        onClick={closeMenu}
      >
        <RxCross2 />
      </div>
      <div className="relative mx-6 w-full max-w-sm rounded-3xl border border-white/10 bg-white/10 p-8 text-white shadow-2xl backdrop-blur-md">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
          Menu
        </p>
        <ul className="mt-6 space-y-4">
          {navLinks.map((navLink) => (
            <li key={navLink.path}>
              <a
                href={navLink.path}
                className="group flex items-center justify-between text-2xl font-merriweather transition hover:text-white"
              >
                <span>{navLink.title}</span>
                <span className="h-1 w-6 rounded-full bg-white/30 transition group-hover:w-10 group-hover:bg-white"></span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <a
            href="#"
            className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#105360] transition hover:scale-[1.02]"
          >
            Get a quote
          </a>
        </div>
        <div className="mt-6 flex items-center justify-between text-white/80">
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">
            Follow
          </span>
          <div className="flex items-center gap-3">
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
    </div>
  );
}
