import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/sidebar", label: "Dashboard" },
  { to: "/doctors", label: "Doctors" },
  { to: "/patients", label: "Patients" },
  { to: "/appointments", label: "Appointments" },
  { to: "/settings", label: "Settings" },
];

function Footer() {
  return (
    <footer className="dark:bg-slate-900 dark:border-gray-600 border-t border-slate-200 bg-white text-slate-700">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md ">
            <p className="dark:text-slate-100 text-2xl font-semibold text-slate-900">
              Medicare
            </p>
            <p className="dark:text-slate-100 mt-3 text-sm leading-6 text-slate-600">
              Helping hospitals manage patients, doctors, appointments, and
              daily operations from one centralized dashboard.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="dark:text-slate-100 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-900">
                Pages
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                {navLinks.slice(0, 4).map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className="transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="dark:text-slate-100 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-900">
                Support
              </p>
              <ul className="dark:text-slate-100 space-y-2 text-sm text-slate-600">
                <li>Help Center</li>
                <li>Contact Support</li>
                <li>Privacy</li>
              </ul>
            </div>

            <div>
              <p className="dark:text-slate-100 mb-3 text-sm font-semibold uppercase tracking-wide text-slate-900">
                Contact Developer
              </p>
              <ul className="dark:text-slate-100 space-y-2 text-sm text-slate-600">
                <li>developer.ataullah@gmail.com</li>
                <li>+93 704071798</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 dark:border-gray-600 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex sm:items-center sm:justify-between">
          <p className="dark:text-slate-100">
            © 2026 Medicare. All rights reserved.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 sm:mt-0">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
