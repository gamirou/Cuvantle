import React, { useCallback, useState, useEffect } from 'react';
import './Cuvantle.css';
import Keyboard from '../keyboard/Keyboard';

export const Cuvantle = ({ words }) => {

    const generateRandomWord = () => {
        return words[Math.floor(Math.random() * words.length)].toUpperCase();
    }

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const generateKeyColours = () => {
        return alphabet.split('').reduce((acc, k) => {
            acc[k] = 'black';
            return acc;
        }, {});
    }

    const [keyColours, setKeyColours] = useState(generateKeyColours());

    // const [alphabet, setAlphabet] = useState("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    const [word, setWord] = useState(generateRandomWord());
    const [cells, setCells] = useState(Array(6).fill('     '));
    const [cellColours, setCellColours] = useState(Array(30).fill('white'));
    const [rowIndex, setRowIndex] = useState(0);
    const [colIndex, setColIndex] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const Row = ({ guess }) => {
        return (
            <tr>
                <Cell value={0} guess={guess} />
                <Cell value={1} guess={guess} />
                <Cell value={2} guess={guess} />
                <Cell value={3} guess={guess} />
                <Cell value={4} guess={guess} />
            </tr>
        )
    }

    const Cell = ({ value, guess }) => {
        return (
            <td className={`cell ${cellColours[guess * 5 + value]}`}>{cells[guess][value]}</td>
        );
    }

    //const addLetter(letter) {
    const addLetter = useCallback((letter) => {
        if (rowIndex === 6) {
            return;
        }

        const newCells = [...cells];

        // Backspace
        if (letter === "BACK") {
            if (colIndex === 0) {
                return;
            }
            newCells[rowIndex] = newCells[rowIndex].substring(0, colIndex - 1);
            setColIndex(colIndex - 1);
            setCells(newCells);
            return;
        }

        // Enter - submit the word
        if (letter === "ENTER" && colIndex === 5) {
            // Check if word is correct
            // Change cells colours
            const newKeyColours = { ...keyColours };
            setCellColours(cellColours.map((colour, index) => {
                const indexWord = Math.floor(index / 5);
                if (indexWord !== rowIndex) {
                    return colour;
                }

                const indexCol = index % 5;
                const l = cells[rowIndex][indexCol];
                if (word.includes(l)) {
                    if (word[indexCol] === l) {
                        newKeyColours[l] = 'green';
                        return 'green';
                    } else {
                        if (newKeyColours[l] !== 'green') {
                            newKeyColours[l] = 'orange';
                        }
                        return 'orange';
                    }
                } else {
                    newKeyColours[l] = 'grey';
                }

                return 'grey';
            }));

            setColIndex(0);
            setRowIndex(rowIndex + 1);
            setKeyColours(newKeyColours);

            // Check if word is correct
            if (word === newCells[rowIndex]) {
                console.log("Correct!");
                setGameOver(true);
            } else if (rowIndex === 5) {
                console.log("Lost!");
                setGameOver(true);
            }
        } else if (letter !== "ENTER") {
            // Letters
            const ascii = letter.charCodeAt(0);
            if (ascii >= 65 && ascii <= 90 && !gameOver) {
                if (colIndex === 5) {
                    return;
                }

                // const letter = String.fromCharCode(event.keyCode);
                newCells[rowIndex] = newCells[rowIndex].substring(0, colIndex) + letter;
                setCells(newCells);
                setColIndex(colIndex + 1);
            }
        }
    }, [rowIndex, colIndex, gameOver, cells, keyColours, cellColours, word]);

    const handleKeyDown = useCallback((event) => {
        let letter = String.fromCharCode(event.keyCode);
        if (event.keyCode === 8) {
            letter = "BACK";
        } else if (event.keyCode === 13) {
            letter = "ENTER";
        }
        addLetter(letter);
    }, [addLetter]);

    // const handleKeyUp = useCallback((event) => {
    //     if (!canPress) {
    //         setCanPress(true);
    //     }
    // }, [canPress]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        // document.addEventListener('keyup', handleKeyUp);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            // document.removeEventListener('keyup', handleKeyUp);
        }
    }, [handleKeyDown]);

    console.log(word);

    const restartGame = () => {
        if (gameOver) {
            setWord(generateRandomWord());
            setCells(Array(6).fill('     '));
            setCellColours(Array(30).fill('white'));
            setKeyColours(generateKeyColours());
            setRowIndex(0);
            setColIndex(0);
            setGameOver(false);
        }
    }

    const getDataFromKeyboard = (data) => {
        addLetter(data);
    };

    return (
        <div className='container'>
            {/* <Navbar /> */}

            <table onClick={restartGame}>
                <tbody>
                    <Row guess={0} />
                    <Row guess={1} />
                    <Row guess={2} />
                    <Row guess={3} />
                    <Row guess={4} />
                    <Row guess={5} />
                </tbody>
            </table>

            <p className={gameOver ? `restart--show` : `restart--hide`}>
                Cuvantal era {word}. Apasa grila pentru a incepe o noua partida.
            </p>

            <Keyboard sendData={getDataFromKeyboard} keyColours={keyColours} />
        </div>
    );
}

export default Cuvantle;