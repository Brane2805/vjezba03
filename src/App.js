import logo from './logo.svg';
import './App.css';
import FuncKomp from './components/FuncKomp';
import KlasKomp from './components/KlasKomp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FuncKomp />
        <KlasKomp />
      </header>
    </div>
  );
}

export default App;
