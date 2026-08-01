import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../images/logo4.avif'
import Avatar from "../components/Avatar";
import Button from "../components/Button";

function Header() {
  return (
    <header className="w-full p-1 border-b border-b-gray-200 text-slate-700">
      <nav className="w-full flex justify-around items-center">
        <div className="w-1/3 flex gap-2 justify-center items-center">
          <Avatar src={logo} alt={`Logo`} className={`w-15 h-15`} />
          <h1 className="text-2xl font-semibold">Medicare</h1>
        </div>
        <ul className="w-1/3 flex justify-center items-center gap-7 font-semibold">
          <NavLink><li>Doctors</li></NavLink>
          <NavLink><li>Appointments</li></NavLink>
          <NavLink><li>Patients</li></NavLink>
        </ul>
        <div className="w-1/3 flex justify-center items-center">
          <Button text={`Theme`} className={`border p-1`} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
