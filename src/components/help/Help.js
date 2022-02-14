import React from "react";
import './Help.css';
import { FaWindowClose } from 'react-icons/fa';
import motor from '../../img/motor.jpg';
import curea from '../../img/curea.jpg';

export const Help = ({ showHelp, setShowHelp }) => {

    const hideHelp = () => setShowHelp(false);

    return (
        <div className={`help ${showHelp ? `help--show` : `help--hide`}`}
            onClick={hideHelp}>
            <div className="help-container">
                <h1>Cuvantle - Wordle in Romanian</h1>
                <FaWindowClose />
            </div>
            <section>
                <div className="instructions">
                    <p>Scopul jocului este sa ghiciti cuvantul in 6 incercari.</p>
                    <p>Trebuie sa ghiciti un cuvant de 5 litere. Apasati <strong>ENTER</strong> pentru a verifica cuvantul.</p>
                    <p>Dupa fiecare incercare, culorile patratelelor se vor schimba in asa fel incat sa vedeti cat de aproape de cuvantul real sunteti.</p>
                    <div className="examples">
                        <p><strong>De Exemplu</strong></p>
                        <div className="example">
                            <div className="help-row">
                                <img src={motor} alt="Cuvantul MOTOR"/>
                            </div>
                            <p>Litera <strong>M</strong> este in cuvant si se afla in pozitia corecta.</p>
                        </div>
                        <div className="example">
                            <div className="help-row">
                                <img src={curea} alt="Cuvantul CUREA"/>
                            </div>
                            <p>Literele <strong>E</strong> si <strong>A</strong> se afla in cuvant dar nu in pozitiile corecte.</p>
                        </div>
                    </div>
                    <p><strong>Spre deosebire de WORDLE, puteti sa va jucati de cate ori vreti.</strong></p>
                </div>
            </section>
        </div>
    );
}

export default Help;