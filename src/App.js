import './App.css';
import Cuvantle from './components/main/Cuvantle';
import Navbar from './components/navbar/Navbar';

const App = ({ words, hideLoader }) => {
  // useEffect(hideLoader);

  return (
    <div className="App">
      <Navbar />      
      <Cuvantle words={words}/> 
    </div>
  );
}

export default App;