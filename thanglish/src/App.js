import React, { useState } from "react";
import "./App.css";
import { SearchBar, Suggestions } from "./components";

const Thanglish = () => {
  const [word, setWord] = useState("");
  const [matchedWord, setMatchedWord] = useState(['hellow','bye']);

  return (
    <>
      <SearchBar searchText={word} onSearchTextChng={setWord} />
      <Suggestions words={matchedWord} />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Thanglish />
    </div>
  );
}

export default App;
