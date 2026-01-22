import React, { useEffect, useState } from "react";
import Logo from "./assets/logo.png";

const sections = ["home", "about", "projects", "contact"];

function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (item) =>
    `
    relative font-semibold
    after:content-['']
    after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:bg-white
    after:transition-all after:duration-300
    ${active === item ? "after:w-full" : "after:w-0 hover:after:w-full"}
  `;

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-black text-white">
      <img src={Logo} className="h-11 w-auto" />

      {/* Desktop Menu */}
      <div className="hidden sm:flex flex-col">
        <h2 className="font-extrabold">Navigation</h2>
        <div className="flex items-center gap-8">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={linkClass(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>

      {/* Hamburger / Close */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Menu"
        className="sm:hidden relative z-50 cursor-pointer"
      >
        {!open ? (
          <svg width="24" height="18" viewBox="0 0 24 18">
            <rect width="24" height="2" rx="1" fill="white" />
            <rect y="8" width="24" height="2" rx="1" fill="white" />
            <rect y="16" width="24" height="2" rx="1" fill="white" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24">
            <line x1="4" y1="4" x2="20" y2="20" stroke="white" strokeWidth="2" />
            <line x1="20" y1="4" x2="4" y2="20" stroke="white" strokeWidth="2" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden absolute top-full left-0 w-full bg-black text-white px-5 text-sm transition-all duration-300
        ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col gap-4 py-4 items-center">
          <h2 className="self-start font-extrabold">Navigation</h2>

          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className={linkClass(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
