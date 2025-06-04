import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Anasayfa" },
    { to: "/hizmetler", label: "Hizmetler" },
    { to: "/iletisim", label: "İletişim" },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary">
          OZDENIZ VINC
        </Link>

        {/* Menü - Büyük ekran */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-medium hover:text-accent transition ${
                  isActive ? "text-accent" : "text-gray-700"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Hamburger Menü - Küçük ekran */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobil Menü */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white shadow-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 font-medium ${
                  isActive ? "text-accent" : "text-gray-700"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
