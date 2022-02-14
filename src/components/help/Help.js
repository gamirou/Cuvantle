import React from "react";
import './Help.css';

export const Help = ({ showHelp, setShowHelp }) => {

    const hideHelp = () => setShowHelp(false);

    return (
        <div className={`help ${showHelp ? `help--show` : `help--hide`}`}
            onClick={hideHelp}>
            <h1>Cuvantle - Wordle in Romanian</h1>
            <p>
                Cuvantle este un joc de memorie care se juca cu litere.
                <br />
                <br />
                Pentru a juca, apasa pe o litera din alfabet.
                <br />
                <br />
                Daca ai gasit o litera si nu e la locul ei, o coloreaza in culoarea portocalie.
                <br />
                <br />
                Daca ai gasit o litera si e la locul ei, o coloreaza in culoarea verde.
                <br />
                <br />
                Daca ai gasit toate literele, ai castigat.
                <br />
                <br />
            </p>
        </div>
    );
}

export default Help;