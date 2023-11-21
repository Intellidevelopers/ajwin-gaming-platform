import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <p>
          Welcome to <b>AJWIN</b> online game.
    <br> you play you win 
        </p>
        <a
          className="App-link"
          href="https://ajwin.sonicvibe.com.ng"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Get started</button>
        </a>
      </header>
    </div>
  );
}

export default App;
