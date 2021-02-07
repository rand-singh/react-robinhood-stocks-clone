import React from 'react'
import Logo from '../assets/logo.svg'

function Header() {
    return (
        <div className="header__wrapper">
            <div className="header">
                <img src={Logo} alt="Logo" width="50"/>
            </div>

            <div className="header__search">

            </div>
        </div>
    )
}

export default Header
