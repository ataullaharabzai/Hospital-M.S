import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <ul>
        <NavLink to="/settings">Settings</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/patients">Patients</NavLink>
        <NavLink to="/patients/new">M-Patinets</NavLink>
      </ul>
    </nav>
  );
}

export default Header;
