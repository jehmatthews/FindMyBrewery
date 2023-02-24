import logo from './logo.svg';
import png from './wei.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={png} className="App-logo" alt="logo" />
        <p>
          REACT KING
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
