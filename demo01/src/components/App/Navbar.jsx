import React from "react";
import { Link } from "react-router";
import { useTheme } from "../../contexts/ThemeContext";
import ToggleThemeButton from "../ToggleThemeButton";

export default function Navbar() {
  const { colors } = useTheme();

  return (
    <nav
      className="shadow-md sticky top-0 z-50 transition-colors duration-300"
      style={{ backgroundColor: colors.navbar }}
    >
      <div
        className="absolute top-0 left-0 w-full h-1.5"
        style={{ backgroundColor: colors.navbarBorder }}
      ></div>
      <div className="max-w-7xl mx-auto px-50 py-2 flex justify-between items-center h-13">
        <div className="space-x-9 hidden md:flex text-sm font-medium ">
          <Link
            to="/"
            className="nav-link text-white hover:opacity-80 transition-opacity"
          >
            Home
          </Link>
          <Link
            to="/Orchids"
            className="nav-link text-white hover:opacity-80 transition-opacity"
          >
            Orchids
          </Link>
          <Link
            to="/Contact"
            className="nav-link text-white hover:opacity-80 transition-opacity"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center">
          <ToggleThemeButton />
        </div>
      </div>
    </nav>
  );
}
