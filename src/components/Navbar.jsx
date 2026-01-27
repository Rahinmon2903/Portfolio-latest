import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `text-sm transition ${
      isActive
        ? "text-white"
        : "text-neutral-400 hover:text-neutral-200"
    }`;

  return (
    <nav className="border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-sm tracking-[0.3em] uppercase">
          Rahin
        </NavLink>

        <div className="flex gap-8">
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
