import React from "react";
import { FaBars, FaGem } from "react-icons/fa"
import './Navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <FaBars id="bars" className="navbar--icon"/>
            <h1 className="navbar--header">Cuvantle</h1>
            <FaGem className="navbar--icon"/>
        </nav>
    );            
}

export default Navbar;