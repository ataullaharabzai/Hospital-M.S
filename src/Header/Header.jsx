import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/NewLogo.png";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import { Moon, Settings, Menu, X, Sun, Bell } from "lucide-react";
import profile from "../images/my_dark.jpeg";
import { useTheme } from "../contexts/ThemeProvider";

const navItems = [
  { to: "/sidebar", label: "Dashboard" },
  { to: "/doctors", label: "Doctors" },
  { to: "/patients", label: "Patients" },
  { to: "/appointments", label: "Appointments" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { toggleTheme, darkMode } = useTheme();

  return (
    <header className="w-full border-b border-slate-200 bg-white/90 text-slate-700 backdrop-blur-sm transition-colors duration-200 dark:border-slate-800 dark:bg-slate-900/85 dark:text-slate-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="hidden md:flex items-center">
          <Avatar src={logo} alt="Logo" className="w-15 h-15 rounded-full" />
          <h1 className="text-2xl font-semibold">Medicare</h1>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-semibold text-slate-700 dark:text-slate-200">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `transition ${isActive ? "text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300" : "text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="w-full md:w-auto flex justify-between items-center">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 md:hidden dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

          <div className="flex items-center gap-3">
            <Button
              onClick={toggleTheme}
              className="border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 p-2 rounded-full"
            >
              {darkMode ? <Sun size={15} /> : <Moon size={15} />}
            </Button>

            <NavLink to={`/settings`}>
              <Button className="border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 p-2 rounded-full">
                <Settings size={15} />
              </Button>
            </NavLink>

            <div className="relative">
              <span className="absolute inset-0 rounded-full border border-sky-400/60 animate-ping"></span>

              <Button className="relative border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 p-2 rounded-full">
                <Bell size={15} />
              </Button>
            </div>
            <div className="w-8 h-8">
              <Avatar
                src={profile}
                alt={`User Profile`}
                className="rounded-full w-8 h-8"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${menuOpen ? "max-h-60" : "max-h-0"}`}
      >
        <nav className="space-y-1 border-t border-slate-200 bg-slate-50 px-4 py-4 dark:border-slate-700 dark:bg-slate-900">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 text-sm font-medium transition text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 ${
                  isActive
                    ? "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300"
                    : ""
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
