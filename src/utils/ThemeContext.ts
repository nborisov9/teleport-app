import React, { Context } from 'react';

interface IThemeContext {
  themeMode: string;
  toggleThemeHandler: (theme: string) => void;
}

const initalValueContext = { themeMode: '', toggleThemeHandler: (theme: string) => {} };

const ThemeContext: Context<IThemeContext> = React.createContext(initalValueContext);
const useThemeContext = () => React.useContext(ThemeContext);

export { ThemeContext, useThemeContext };
