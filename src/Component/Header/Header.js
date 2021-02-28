import React from 'react';
import Logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={Logo} alt="..." />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
            </div>
        </nav>
        </div>
    );
};

export default Header;