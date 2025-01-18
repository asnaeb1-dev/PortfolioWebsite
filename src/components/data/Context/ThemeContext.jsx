import { createContext, useState, useEffect, useContext } from "react";

// Create the context
const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkModeEnabled, setDarkModeEnabled] = useState(false);

  useEffect(() => {
    if (isDarkModeEnabled) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [isDarkModeEnabled]);

  const toggleDarkMode = () => setDarkModeEnabled((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkModeEnabled, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
