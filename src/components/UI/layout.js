import React, { useContext, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { darkTheme, lightTheme } from './theme';
import { darkModeContext } from './themeHandler';

const Layout = ({ children }) => {
    const DarkModeContext = useContext(darkModeContext);
    const { darkMode, setDarkMode } = DarkModeContext;

    useEffect(() => {
        const theme = localStorage.getItem('preferred-theme');
        if (theme) {
            const themePreference =
                localStorage.getItem('preferred-theme');
            if (themePreference === 'dark') {
                setDarkMode(true);
            } else {
                setDarkMode(false);
            }
        } else {
            localStorage.setItem('preferred-theme', 'dark');
            setDarkMode(true);
        }
    }, []);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <main>{children}</main>
        </ThemeProvider>
    );
};

export default Layout;
