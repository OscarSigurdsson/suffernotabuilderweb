import sntatl from './images/sntatl.png';
import './App.css';
import ModelLine from "./displaycomponent/ModelLine";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sntatl} alt="logo" />
        <ModelLine />
      </header>
    </div>
  );
}

export default App;
