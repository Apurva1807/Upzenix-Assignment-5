import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const themeStyles = {
    backgroundColor: theme === "dark" ? "#1f2937" : "#ffffff",
    color: theme === "dark" ? "#ffffff" : "#000000",
    minHeight: "100vh",
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={themeStyles}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};