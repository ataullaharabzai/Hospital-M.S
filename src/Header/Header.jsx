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
  { to: "/appointments", label: "Appointments" },
  { to: "/patients", label: "Patients" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { toggleTheme, darkMode } = useTheme();

  return (
    <header className="dark:bg-slate-900 dark:text-slate-100 w-full bg-white text-slate-700">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="hidden md:flex items-center">
          <Avatar src={logo} alt="Logo" className="w-15 h-15 rounded-full" />
          <h1 className="text-2xl font-semibold">Medicare</h1>
        </div>

        <nav className="dark:text-slate-100 hidden md:flex items-center gap-8 font-semibold text-slate-700">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `transition ${isActive ? "dark:text-sky-400 dark:hover:text-sky-600 text-sky-500 hover:text-sky-700" : "dark:text-slate-200 dark:hover:text-slate-400"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="w-full md:w-auto flex justify-between items-center">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <X className="h-5 w-5 dark:text-rose-600 dark:border-none" />
            ) : (
              <Menu className="h-5 w-5 dark:text-violet-600 dark:border-none" />
            )}
          </button>

          <div className="flex items-center gap-3">
            {/* Theme button */}
            <Button
              onClick={toggleTheme}
              className={`border border-slate-400 cursor-pointer hover:bg-slate-200 transition-all p-2 rounded-full dark:text-slate-50 dark:hover:bg-slate-600`}
            >
              {darkMode ? <Sun size={`15`} /> : <Moon size={`15`} />}
            </Button>
            <NavLink to={`/settings`}>

            {/* Settings button */}
              <Button
                className={`border hover:animate-spin border-slate-400 cursor-pointer hover:bg-slate-200 transition-all p-2 rounded-full dark:text-slate-50 dark:hover:bg-slate-600`}
              >
                <Settings size={`15`} />
              </Button>
            </NavLink>

            {/* Notification button */}
            <div className="relative">
              <span className="absolute inset-0 rounded-full border border-slate-400 animate-ping"></span>

              <Button className="relative border border-slate-400 cursor-pointer hover:bg-slate-200 transition-all p-2 rounded-full dark:text-slate-50 dark:hover:bg-slate-600">
                <Bell size={15} />
              </Button>
            </div>
            <div className="w-8 h-8">
              <Avatar
                src={profile}
                alt={`User Profile`}
                className={`rounded-full w-8 h-8`}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${menuOpen ? "max-h-60" : "max-h-0"}`}
      >
        <nav className="space-y-1 border-t border-slate-200 bg-slate-50 px-4 py-4 dark:bg-slate-900 dark:border-slate-700">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 text-sm font-medium transition text-slate-700 hover:text-slate-900 dark:text-slate-500 dark:hover:text-slate-800 ${
                  isActive ? "rounded bg-sky-200" : ""
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
