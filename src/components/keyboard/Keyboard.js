import React, { useState } from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import './Keyboard.css';

export const Keyboard = ({ sendData, keyColours }) => {

    const handleClick = (event) => {
        console.log(event.target.innerText);
        sendData(event.target.innerText);
    }

    const KeyButton = ({ value }) => {
        return (
            <button className={`key ${value in keyColours ? keyColours[value] : value}`} 
            onClick={handleClick}>
                {value === "BACK" ? <FaArrowCircleLeft /> : value}
            </button>
        );
    }

    return (
        <div className="keyboard">
            <div className="keyboard__row">
                <KeyButton value="Q" />
                <KeyButton value="W" />
                <KeyButton value="E" />
                <KeyButton value="R" />
                <KeyButton value="T" />
                <KeyButton value="Y" />
                <KeyButton value="U" />
                <KeyButton value="I" />
                <KeyButton value="O" />
                <KeyButton value="P" />
            </div>
            <div className="keyboard__row">
                <KeyButton value="A" />
                <KeyButton value="S" />
                <KeyButton value="D" />
                <KeyButton value="F" />
                <KeyButton value="G" />
                <KeyButton value="H" />
                <KeyButton value="J" />
                <KeyButton value="K" />
                <KeyButton value="L" />
            </div>
            <div className="keyboard__row">
                <KeyButton value="ENTER" />
                <KeyButton value="Z" />
                <KeyButton value="X" />
                <KeyButton value="C" />
                <KeyButton value="V" />
                <KeyButton value="B" />
                <KeyButton value="N" />
                <KeyButton value="M" />
                <KeyButton value="BACK" />
            </div>
        </div>
    );
}

export default Keyboard;

    // Python code
    // alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split()
    // lst = {k: 'grey' for k in alphabet}
    // Javascript
    // const lst = alphabet.split('').reduce((acc, k) => {
    //     acc[k] = 'grey';
    //     return acc;
    // }, {});
    // console.log(lst);
