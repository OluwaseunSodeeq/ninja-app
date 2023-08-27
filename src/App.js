// import logo from './logo.svg';
import Navbar from "./Components/Navbar";
import Home from "./Home";
import Createe from "./Createe";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { create } from "./create";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Createe />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
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
