import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
