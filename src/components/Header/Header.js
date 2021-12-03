import React from 'react';
import logo from './logo-top-1.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            
            <img src={logo} alt="" />
            <nav>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Cart</a>
                <a href="/about">About Us</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;

