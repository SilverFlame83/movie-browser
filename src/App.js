import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={About}></Route>
      </Switch>
    </div>
  );
}

export default App;
