import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

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
      className={`fixed inset-0 z-50 bg-[#105360] bg-opacity-100 flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
        onClick={closeMenu}
      >
        <RxCross2 />
      </div>
      <div>
        <ul className="text-white h-full w-full flex flex-col items-center justify-center">
          {navLinks.map((navLink) => (
            <li key={navLink.path} className="mb-4">
              <a href={navLink.path} className="hover:underline text-2xl">
                {navLink.title}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="your-link-here"
          className="bg-white text-[#105360] py-3 px-10 rounded-full hover:bg-[#0e4e4e] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0e4e4e]"
        >
          Click Me
        </a>
      </div>
    </div>
  );
}
