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
    <footer className="border-t border-slate-200 bg-white text-slate-700">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <p className="text-2xl font-semibold text-slate-900">Medicare</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              A clean and balanced hospital dashboard footer with quick access
              to pages and helpful support links.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-900">
                Pages
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                {navLinks.slice(0, 4).map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className="transition hover:text-slate-900"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-900">
                Support
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>Help Center</li>
                <li>Contact Support</li>
                <li>Privacy</li>
              </ul>
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-900">
                Contact
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>support@medicare.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex sm:items-center sm:justify-between">
          <p>© 2026 Medicare. All rights reserved.</p>
          <div className="mt-4 flex flex-wrap gap-4 sm:mt-0">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-slate-600 transition hover:text-slate-900"
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
