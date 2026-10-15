import { useCallback, useState } from 'react';

export const THEME_STORAGE_KEY = 'theme';

// the initial theme is applied to <html> by an inline script in public/index.html (prevents a flash of the wrong theme)
const getCurrentTheme = () =>
  typeof document !== 'undefined' && document.documentElement.dataset.theme === 'light'
    ? 'light'
    : 'dark';

const useTheme = () => {
  const [theme, setTheme] = useState(getCurrentTheme);

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    document.documentElement.dataset.theme = nextTheme;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // storage can be unavailable (private mode), the theme still applies for this visit
    }
    setTheme(nextTheme);
  }, [theme]);

  return { theme, toggleTheme };
};

export default useTheme;
