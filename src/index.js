import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WORDS from './constants/words';
import VALID_GUESSES from './constants/validGuesses';

ReactDOM.render(
  <React.StrictMode>
    <App words={WORDS} validGuesses={VALID_GUESSES} />
  </React.StrictMode>,
  document.getElementById('root')
);

