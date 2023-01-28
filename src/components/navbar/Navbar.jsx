import React, { useState } from 'react'
import images from '../../constants/images'
import "./Navbar.css"

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    const toggleNav = () => {
        setOpen(!isOpen);
    }

    return (
        <nav className='app__navbar'>
            <div className="app__navbar-logo">
                <img src={images.logo} alt="app__logo" />
            </div>
            <div className="app__navbar-toggler" onClick={toggleNav}>
                <i className={`fas fa-${isOpen ? 'times' : 'bars'}`}></i>
            </div>
            <ul className={`app__navbar-links ${isOpen ? 'open' : ''}`}>
                <li className="p__opensans"><a href="#home">Home</a></li>
                <li className="p__opensans"><a href="#about">About</a></li>
                <li className="p__opensans"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
