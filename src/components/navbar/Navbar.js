import React from "react";
import { FaFontAwesome, FaInfoCircle } from "react-icons/fa";
import './Navbar.css';

export const Navbar = () => {

    const handleClick = (e) => {
        e.preventDefault();
        console.log(e.target.id);
    }

    return (
        <nav className="navbar">
            <h1 className="navbar--header">Cuvantle - Wordle in Romanian</h1>
            <FaInfoCircle onClick={handleClick}/>
            {/* <FaGem /> */}
        </nav>
    );            
}

export default Navbar;