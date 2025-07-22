import React, { createContext, useState, useContext, useEffect } from "react";

export const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Lấy theme từ localStorage hoặc mặc định là 'light'
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Áp dụng theme class vào body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const themeColors = {
    light: {
      primary: "#E08BCA",
      secondary: "#D946B2",
      background: "#ffffff",
      surface: "#f8f9fa",
      text: "#000000",
      textSecondary: "#6c757d",
      border: "#dee2e6",
      navbar: "#E08BCA",
      navbarBorder: "#D946B2",
    },
    dark: {
      primary: "#7C3AED",
      secondary: "#8B5CF6",
      background: "#000000",
      surface: "#1a1a1a",
      text: "#ffffff",
      textSecondary: "#a1a1aa",
      border: "#404040",
      navbar: "#1a1a1a",
      navbarBorder: "#7C3AED",
    },
  };

  const currentTheme = themeColors[theme];

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        colors: currentTheme,
        isDark: theme === "dark",
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
