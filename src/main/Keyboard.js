import React from 'react';
import './Keyboard.css';

export const Keyboard = () => {

    const KeyButton = ({ value, colour }) => {
        return (
            <button className={`key ${colour}`}>{value}</button>
        );
    }

    return (
        <div className="keyboard">
            <div className="keyboard__row">
                <KeyButton value="Q" colour="grey" />
                <KeyButton value="W" colour="grey" />
                <KeyButton value="E" colour="grey" />
                <KeyButton value="R" colour="grey" />
                <KeyButton value="T" colour="grey" />
                <KeyButton value="Y" colour="grey" />
                <KeyButton value="U" colour="grey" />
                <KeyButton value="I" colour="grey" />
                <KeyButton value="O" colour="grey" />
                <KeyButton value="P" colour="grey" />
            </div>
            <div className="keyboard__row">
                <KeyButton value="A" colour="grey" />
                <KeyButton value="S" colour="grey" />
                <KeyButton value="D" colour="grey" />
                <KeyButton value="F" colour="grey" />
                <KeyButton value="G" colour="grey" />
                <KeyButton value="H" colour="grey" />
                <KeyButton value="J" colour="grey" />
                <KeyButton value="K" colour="grey" />
                <KeyButton value="L" colour="grey" />
            </div>
            <div className="keyboard__row">
                <KeyButton value="ENTER" colour="key--enter" />
                <KeyButton value="Z" colour="grey" />
                <KeyButton value="X" colour="grey" />
                <KeyButton value="C" colour="grey" />
                <KeyButton value="V" colour="grey" />
                <KeyButton value="B" colour="grey" />
                <KeyButton value="N" colour="grey" />
                <KeyButton value="M" colour="grey" />
                <KeyButton value="BACK" colour="key--back" />
            </div>
        </div>
    );
}

export default Keyboard;