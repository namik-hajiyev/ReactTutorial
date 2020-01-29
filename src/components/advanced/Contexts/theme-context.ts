import React from 'react';
export type Theme = { foreground: string, background: string }

export type Themes = { [x: string]: Theme };

export const themes: Themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

export type ToggleTheme = { theme: Theme, toggleTheme: () => void }

export const ThemeContext = React.createContext<ToggleTheme>({ theme: themes.dark, toggleTheme: () => { } });