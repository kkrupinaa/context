import React, { useContext } from 'react';
import { ReactElement } from 'react';

type Theme = 'light' | 'dark';

const themeContext = React.createContext('light' as Theme);

export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
    return (
        <themeContext.Provider value={props.theme}>
            {props.children}
        </themeContext.Provider>
    );
}

export function useTheme(): Theme {
    const theme = useContext(themeContext);
    return theme;
}
