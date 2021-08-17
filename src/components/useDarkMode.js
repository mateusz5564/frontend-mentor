import { useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState(() => window.localStorage.getItem('theme') || 'light');

  const setMode = mode => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  return [theme, themeToggler];
};
