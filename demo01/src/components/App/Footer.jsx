import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

const Footer = () => {
  const { colors } = useTheme();

  return (
    <>
      <footer
        className="relative text-center py-6 mt-0 border-t text-white transition-colors duration-300"
        style={{ backgroundColor: colors.secondary }}
      >
        <div
          className="absolute top-[-6px] left-0 w-full h-1.5"
          style={{ backgroundColor: colors.primary }}
        ></div>
        <p>&copy; 2025 Orchid Garden. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
