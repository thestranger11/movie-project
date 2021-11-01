import Icon from '@mui/material/Icon';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { darkModeContext } from '../components/UI/themeHandler';

import { MainMenu } from '../common/styles';
import Btn from './button';

const menuItems = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'Featured Movies',
        url: '/featured',
    },
    {
        title: 'Search',
        url: '/search',
    },
    {
        title: 'Join',
        url: '/join',
    },
];
let key = 0;

const Menu = (props) => {
    const DarkModeContext = useContext(darkModeContext);

    // // if (!DarkModeContext) return 'Loading...';

    const { darkMode, setDarkMode } = DarkModeContext;

    const handleThemeChange = () => {
        if (darkMode) {
            localStorage.setItem('preferred-theme', 'light');
            setDarkMode(false);
        } else {
            localStorage.setItem('preferred-theme', 'dark');
            setDarkMode(true);
        }
    };
    return (
        <MainMenu
            className={`${props.fixed ? 'fixed' : ''} main-menu`}
        >
            {menuItems.map((item) => {
                return (
                    <NavLink
                        exact
                        to={item.url}
                        activeClassName="selected"
                        key={key++}
                    >
                        {item.title}
                    </NavLink>
                );
            })}
            <Btn onClick={handleThemeChange}>
                <span class="material-icons material-icons-outlined">
                    nightlight_round
                </span>
            </Btn>
        </MainMenu>
    );
};

export default Menu;
