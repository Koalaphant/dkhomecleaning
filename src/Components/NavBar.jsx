import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import NavMenu from "./NavMenu";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  let { pathname } = useLocation();

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
    <div>
      {/* Conditionally render NavMenu with fade effect */}
      {menuOpen && <NavMenu navLinks={navLinks} setMenuOpen={setMenuOpen} />}
      <div className="bg-[#269ab3] w-full">
        <div className="gap-4 text-white max-w-6xl mx-auto px-4 sm:px-8 md:px-12 hidden sm:flex">
          <div className="flex gap-1 items-center">
            <IoMail title="Email" />
            <a
              href="mailto:dave@dkhomecleaning.com"
              className="hover:underline"
            >
              dave@dkhomecleaning.com
            </a>
          </div>
          <div className="flex gap-1 items-center">
            <FaPhone title="Phone" />
            <a href="tel:07852973257" className="hover:underline">
              07852973257
            </a>
          </div>
          <div className="flex gap-1 items-center">
            <FaLocationDot title="Location" />
            <p>Warrington</p>
          </div>
        </div>
      </div>
      <div className="bg-[#105360] w-full">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-8 md:px-12">
          <Link to="/">
            <img className="w-[120px] py-4" src="./dk-home-cleaning-logo.svg" />
          </Link>
          <div className="flex gap-4 items-center">
            <GiHamburgerMenu
              className="text-white text-2xl sm:hidden cursor-pointer"
              onClick={toggleMenu}
            />
            <nav className="hidden sm:flex">
              <ul className="flex gap-4 text-white">
                {navLinks.map((navLink) => (
                  <li key={navLink.path}>
                    <a
                      href={navLink.path}
                      className={`${
                        pathname === navLink.path ? "underline" : ""
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
              className="btn text-[#105360] bg-white py-2 px-4 rounded-2xl"
            >
              Get A Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
