import React from 'react';
import {Link} from "react-router-dom";
import './nav.css';

const Nav = () => {
    return (
        <div className='navigator'>
            <ul>
                <Link to='/'>
                    <li>main</li>
                </Link>
                <Link to='/menu'>
                    <li>menu</li>
                </Link>
                <Link to='/blog'>
                    <li>blog</li>
                </Link>
            </ul>
        </div>
    );
};

export default Nav;