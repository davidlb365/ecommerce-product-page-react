import { useState, useEffect } from "react"


const Header = ({width, setOverlay, setIsMounted}) => {

    const handleClick = () => {
        setIsMounted(true)
        setOverlay(true)
    }
    return (
        <header className="header">
            <div className="header__left">
                {(width < 768) && <img src="images/icon-menu.svg" alt="menu icon" className="header__menu" id="header-menu" onClick={handleClick} />}
                <a href="index.html" className="header__logo">
                    <img src="images/logo.svg" alt="sneakers logo" className="header__logoimg" />
                </a>
                {(width > 767) && (
                <nav className="header__nav">
                    <a href="#" className="header__link">Collections</a>
                    <a href="#" className="header__link">Men</a>
                    <a href="#" className="header__link">Women</a>
                    <a href="#" className="header__link">About</a>
                    <a href="#" className="header__link">Contact</a>
                </nav>
                )}
            </div>
            <div className="header__right">
                <button className="header__cart">
                    <div id="header-cart" className="header__cartimg"></div>
                    <p className="header__amount">0</p>
                </button>
                {/* <picture></picture> */}
                <img src="images/image-avatar.png" alt="avatar" className="header__avatar" />
            </div>
        </header>
    )
}

export default Header