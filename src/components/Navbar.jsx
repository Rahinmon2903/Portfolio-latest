import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block py-2 text-sm transition-colors ${
      isActive ? "text-white" : "text-slate-400 hover:text-white"
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
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/skills" className={linkClass}>Skills</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/certifications" className={linkClass}>
  Certifications
</NavLink>

          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-400 hover:text-white"
          aria-label="Toggle menu"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <div className="px-6 py-4 space-y-2">
            <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>Home</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)} className={linkClass}>About</NavLink>
            <NavLink to="/skills" onClick={() => setOpen(false)} className={linkClass}>Skills</NavLink>
            <NavLink to="/projects" onClick={() => setOpen(false)} className={linkClass}>Projects</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} className={linkClass}>Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

