// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>App Component</h1>
        <Home />
      </div>
    </div>
  );
}

export default App;
/*

<header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/
