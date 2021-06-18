import { useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState(() => {
    return window.localStorage.getItem("theme") || "light";
  });

  const setMode = mode => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  return [theme, themeToggler];
};
