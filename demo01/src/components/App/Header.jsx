import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

const Header = () => {
  const { colors } = useTheme();

  return (
    <nav
      className="shadow-md px-6 py-4 flex justify-between items-center transition-colors duration-300"
      style={{ backgroundColor: colors.surface }}
    >
      <h1 className="text-2xl font-bold" style={{ color: colors.primary }}>
        🌸Orchid Garden
      </h1>
      <ul className="flex gap-6 font-medium">
        <li>
          <a
            href="#"
            className="hover:opacity-80 transition-opacity"
            style={{ color: colors.primary, textDecoration: "none" }}
          >
            Login
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:opacity-80 transition-opacity"
            style={{ color: colors.primary, textDecoration: "none" }}
          >
            Register
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
