import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" }
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const linkStyle = (id) =>
    `text-sm font-medium transition-colors duration-300 ${
      active === id
        ? "text-white"
        : "text-slate-400 hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* BRAND */}
        <span className="text-xs tracking-widest text-slate-400 uppercase">
          Rahin Mon S
        </span>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={linkStyle(link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-400 hover:text-white transition"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <div
            className="
              flex gap-6 px-6 py-4
              overflow-x-auto whitespace-nowrap
              scrollbar-hide
            "
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={linkStyle(link.id)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
