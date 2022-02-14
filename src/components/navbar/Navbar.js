import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import './Navbar.css';

export const Navbar = ({ showHelp, setShowHelp }) => {

    // const handleClick = () => setShowHelp(!showHelp);
    const handleClick = () => setShowHelp(true);

    return (
        <nav className="navbar">
            <h1 className="navbar--header">Cuvantle - Wordle in Romanian</h1>
            <FaInfoCircle onClick={handleClick} />
        </nav>
    );
}

export default Navbar;