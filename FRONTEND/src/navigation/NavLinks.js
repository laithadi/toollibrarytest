import React from 'react';
import {NavLink} from 'react-router-dom';

const NavLinks = props => {
    return <ul className='nav-links'>
        <li>
            <NavLink to='/' exact>ALL TOOLS</NavLink>
        </li>
        <li>
            <NavLink to='/mytools'>MY TOOLS</NavLink>
        </li>
    </ul>
};

export default NavLinks;