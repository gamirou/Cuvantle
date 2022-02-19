import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WORDS from './constants/words';
import VALID_GUESSES from './constants/validGuesses';
import reportWebVitals from './reportWebVitals';

// Loader that I can reuse
// Add loader to html
// const loader = document.createElement('div');
// loader.className = 'loader';
// document.body.appendChild(loader);

// // Define functions
// const showLoader = () => loader.classList.remove('loader--hide');
// const hideLoader = () => loader.classList.add('loader--hide');
// const loadWordFile = () => {
//   fetch('/cuvinte.txt')
//     .then((r) => r.text())
//     .then(text  => {
//       console.log(text);
//       const words = text.split('\n');
//       hideLoader();
//       ReactDOM.render(
//         <React.StrictMode>
//           <App words={words} />
//         </React.StrictMode>,
//         document.getElementById('root')
//       );
//     })  
//   }    


// showLoader();
// loadWordFile();

// const loadWordFile = () => {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', './src/main/words.txt', true);
//   xhr.onload = () => {
//     if (xhr.status === 200) {
//       const words = xhr.responseText.split('\n');
//       hideLoader();
//       ReactDOM.render(
//         <App words={words} />,
//         document.getElementById('root')
//       );
//     }
//   };
//   xhr.send();
// };

ReactDOM.render(
  <React.StrictMode>
    <App words={WORDS} validGuesses={VALID_GUESSES} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
