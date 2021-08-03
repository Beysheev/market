import React from "react";
import {Link} from "react-router-dom";
import './logo.css';

const Logo = () => {
    return (
        <div className="logo">
            <Link to='/'>
                <h1>arabusta</h1>
            </Link>
        </div>
    )
};

export default Logo;