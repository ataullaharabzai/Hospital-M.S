import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo4.avif";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import { Moon, Settings, Menu, X } from "lucide-react";

const navItems = [
  { to: "/doctors", label: "Doctors" },
  { to: "/appointments", label: "Appointments" },
  { to: "/patients", label: "Patients" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-slate-200 bg-white text-slate-700">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Avatar src={logo} alt="Logo" className="w-12 h-12" />
          <h1 className="text-2xl font-semibold">Medicare</h1>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-semibold text-slate-700">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition hover:text-slate-900 ${
                  isActive ? "text-sky-600" : "text-slate-700"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <Button>
              <Moon />
            </Button>
            <Button>
              <Settings />
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${menuOpen ? "max-h-60" : "max-h-0"}`}
      >
        <nav className="space-y-1 border-t border-slate-200 bg-slate-50 px-4 py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-sky-600 text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
