import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import {MainMenu} from '../common/styles';

const menuItems = [
    {
        title: 'Home',
        url: '/'
    },{
        title: 'Featured Movies',
        url: '/featured'
    },{
        title: 'Search',
        url: '/search'
    },{
        title: 'Join',
        url: '/join'
    }
];
let key = 0;

class Menu extends Component {

  render() {

    return (
        <MainMenu className={`${this.props.fixed ? 'fixed' : ''} main-menu`}>
            {menuItems.map
                (item => { 
                    return (
                        <NavLink
                            exact
                            to={item.url} 
                            activeClassName="selected"
                            key={key++}
                        >
                            {item.title}
                        </NavLink>
                    )
                })
            }
        </MainMenu>
    )

  }
}

export default Menu;
