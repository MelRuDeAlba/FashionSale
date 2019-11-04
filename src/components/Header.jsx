import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = () => (
    <div className="Header">
        <div className="Header-container">
            <div className="Header-content">
                <div className="Header-logo">
                    <Link to="/">
                        <img src="https://image.flaticon.com/icons/svg/1615/1615316.svg" alt="FashionSale"/>
                    </Link>
                    <h1>Fashion Sale</h1>
                </div>
                <div className="Header-nav">
                    <Nav />
                </div>
            </div>
        </div>
    </div>
);

export default Header;