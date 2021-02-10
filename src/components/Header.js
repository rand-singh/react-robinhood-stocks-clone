import React from 'react'
import Logo from '../assets/logo.svg'

function Header() {
    return (
        <div className="header__wrapper">
            <div className="header__logo">
                <img src={Logo} alt="Logo" width="50"/>
            </div>

            <div className="header__search">
                <div className="header__searchInputContainer">
                    <input type="text" placeholder="Search" />
                </div>
            </div>
  
            <div className="header__menuItems">
                <a href="/">Free Stocks</a>
                <a href="/">Portfolio</a>
                <a href="/">Cash</a>
                <a href="/">Messages</a>
                <a href="/">Account</a>
            </div>
        </div>
    )
}

export default Header
