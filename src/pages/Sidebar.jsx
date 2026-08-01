import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  UserRoundPlus,
  UsersRound,
  Settings,
  ClipboardClock,
  icons,
} from "lucide-react";

const links = [
  { to: "/sidebar", label: "Dashboard", icon: <LayoutDashboard /> },
  { to: "/patients", label: "Patients", icon: <UsersRound /> },
  { to: "/doctors", label: "Doctors", icon: <UserRoundPlus /> },
  { to: "/appointments", label: "Appointments", icon: <ClipboardClock /> },
  { to: "/settings", label: "Settings", icon: <Settings /> },
];

function Sidebar() {
  return (
    <div className="h-full p-5">
      <h2 className="mb-6 text-xl font-semibold text-slate-700">
        Hospital Menu
      </h2>
      <nav className="space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `block rounded-lg px-3 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-sky-600 text-white"
                  : "text-slate-700 hover:bg-sky-100"
              }`
            }
          >
            <div className="flex gap-3 items-center">
              {link.icon}
              {link.label}
            </div>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
