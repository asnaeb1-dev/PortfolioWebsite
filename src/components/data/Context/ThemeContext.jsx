import { createContext, useState, useEffect, useContext } from "react";

// Create the context
const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkModeEnabled, setDarkModeEnabled] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkModeEnabled) {
      html.classList.toggle("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDarkModeEnabled]);

  return (
    <ThemeContext.Provider value={{ isDarkModeEnabled, setDarkModeEnabled }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
