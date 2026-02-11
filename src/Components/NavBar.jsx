import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  let { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
  ];

  return (
    <header className="relative">
      {/* Conditionally render NavMenu with fade effect */}
      {menuOpen && <NavMenu navLinks={navLinks} setMenuOpen={setMenuOpen} />}
      <div className="fixed top-0 left-0 right-0 z-40 w-full">
        <div className="bg-[#0f6b7c] w-full">
          <div className="mx-auto hidden max-w-6xl items-center gap-6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 sm:flex sm:px-8 md:px-12">
            <div className="flex items-center gap-2">
              <IoMail title="Email" className="text-sm" />
              <a
                href="mailto:dave@dkhomecleaning.com"
                className="transition hover:text-white"
              >
                dave@dkhomecleaning.com
              </a>
            </div>
            <div className="h-4 w-px bg-white/30"></div>
            <div className="flex items-center gap-2">
              <FaPhone title="Phone" className="text-sm" />
              <a href="tel:07852973257" className="transition hover:text-white">
                07852973257
              </a>
            </div>
            <div className="h-4 w-px bg-white/30"></div>
            <div className="flex items-center gap-2">
              <FaLocationDot title="Location" className="text-sm" />
              <p>Warrington</p>
            </div>
          </div>
        </div>
        <div
          className={`w-full border-b border-white/10 transition duration-300 ${
            isScrolled ? "bg-[#105360]/85 backdrop-blur-md" : "bg-[#105360]"
          }`}
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-8 md:px-12">
            <Link to="/">
              <img className="w-[130px]" src="./dk-home-cleaning-logo.svg" />
            </Link>
            <div className="flex gap-4 items-center">
              <GiHamburgerMenu
                className="cursor-pointer text-2xl text-white sm:hidden"
                onClick={toggleMenu}
              />
              <nav className="hidden sm:flex">
                <ul className="flex items-center gap-6 text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
                  {navLinks.map((navLink) => (
                    <li key={navLink.path}>
                      <a
                        href={navLink.path}
                        className={`relative transition hover:text-white ${
                          pathname === navLink.path ? "text-white" : ""
                        }`}
                      >
                        {navLink.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <Link
                to="/contact"
                className="rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#105360] transition hover:scale-105"
              >
                Get A Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[64px] sm:h-[96px]"></div>
    </header>
  );
}
