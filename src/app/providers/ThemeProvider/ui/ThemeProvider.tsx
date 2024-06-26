import React, { useState, useMemo, FC } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext
} from 'app/providers/ThemeProvider/lib/ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  // const toggleTheme = () => setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);

  const defaultprops = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme
    }),
    [theme]
  );

  return <ThemeContext.Provider value={defaultprops}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
