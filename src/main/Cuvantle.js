import React, { useCallback, useState, useEffect } from 'react';
import './Cuvantle.css';
import Keyboard from './Keyboard';

export const Cuvantle = ({ words }) => {

    const generateRandomWord = () => {
        return words[Math.floor(Math.random() * words.length)].toUpperCase();
    }

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

    const handleKeyDown = useCallback((event) => {
        // console.log(event.keyCode)
        if (rowIndex === 6) {
            return;
        }

        const newCells = [...cells];

        // Backspace
        if (event.keyCode === 8) {
            if (colIndex === 0) {
                return;
            }
            newCells[rowIndex] = newCells[rowIndex].substring(0, colIndex - 1);
            setColIndex(colIndex - 1);
            setCells(newCells);
            return;
        }

        // Enter - submit the word
        if (event.keyCode === 13 && colIndex === 5) {
            // Check if word is correct
            // Change cells colours
            setCellColours(cellColours.map((colour, index) => {
                const indexWord = Math.floor(index / 5);
                if (indexWord !== rowIndex) {
                    return colour;
                }

                const indexCol = index % 5;
                const letter = cells[rowIndex][indexCol];
                if (word.includes(letter)) {
                    if (word[indexCol] === letter) {
                        return 'green';
                    } else {
                        return 'orange';
                    }
                }

                return 'grey';
            }));

            setColIndex(0);
            setRowIndex(rowIndex + 1);

            // Check if word is correct
            if (word === newCells[rowIndex]) {
                console.log("Correct!");
                setGameOver(true);
            }
        }

        // Letters
        if (event.keyCode >= 65 && event.keyCode <= 90 && !gameOver) {
            if (colIndex === 5) {
                return;
            }

            const letter = String.fromCharCode(event.keyCode);
            newCells[rowIndex] = newCells[rowIndex].substring(0, colIndex) + letter;
            setCells(newCells);
            setColIndex(colIndex + 1);
        }
    }, [cells, rowIndex, colIndex, word, cellColours, gameOver]);

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
        setWord(generateRandomWord());
        setCells(Array(6).fill('     '));
        setCellColours(Array(30).fill('white'));
        setRowIndex(0);
        setColIndex(0);
        setGameOver(false);
    }

    return (
        <div className='container'>
            <h1>Cuvantle</h1>

            <table>
                <tbody>
                    <Row guess={0} />
                    <Row guess={1} />
                    <Row guess={2} />
                    <Row guess={3} />
                    <Row guess={4} />
                    <Row guess={5} />
                </tbody>
            </table>

            <button onClick={restartGame} className={gameOver ? `restart--show` : `restart--hide`}>Restart</button>
        
            <Keyboard />
        </div>
    );
}

export default Cuvantle;