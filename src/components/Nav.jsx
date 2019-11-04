import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
    <div className="Nav">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/dashboard">On Sale</Link>
            </li>
            <li>
                <Link to="/login">Profile</Link>
            </li>
        </ul>
    </div>
);

export default Nav;