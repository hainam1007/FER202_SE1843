import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeWrapper = ({ children, className = "", style = {} }) => {
  const { colors } = useTheme();

  return (
    <div
      className={`transition-colors duration-300 ${className}`}
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default ThemeWrapper;
