import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import SearchView from "./components/SearchView";

function App() {
  const [searchResult, setSearchResult] = useState("Hello from App");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          const http= data.results.map(data => data.original_title)
        setSearchResult(http)});
    }
  }, [searchText]);

  return (
    <div className="App">
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route
          path="/search"
          element={
            <SearchView keyword={searchText} searchResult={searchResult} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
