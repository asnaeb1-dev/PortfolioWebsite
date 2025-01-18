import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./components/ui/pages/Router/Router.jsx";
import { ThemeProvider } from "./components/data/Context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Router />
  </ThemeProvider>
);
