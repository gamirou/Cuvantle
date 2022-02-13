import './App.css';
import Cuvantle from './main/Cuvantle';

const App = ({ words, hideLoader }) => {
  // useEffect(hideLoader);

  return (
    <div className="App">
      <Cuvantle words={words}/> 
    </div>
  );
}

export default App;