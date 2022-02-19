import './App.css';
import Cuvantle from './components/main/Cuvantle';
import Navbar from './components/navbar/Navbar';
import Help from './components/help/Help';
import { useState } from 'react';

const App = ({ words, validGuesses }) => {
  // useEffect(hideLoader);

  const [showHelp, setShowHelp] = useState(true);

  // const handleUpdate = (updatedShowHelp) => {
  //   setShowHelp(updatedShowHelp);
  // }

  return (
    <>
      <div className='App'>
        <Navbar showHelp={showHelp} setShowHelp={setShowHelp}/>
        <Cuvantle words={words} validGuesses={validGuesses} />
      </div>
      <Help showHelp={showHelp} setShowHelp={setShowHelp} />
    </>
  );
}

export default App;