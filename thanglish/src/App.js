import React from "react";
import "./App.css";
import {Firebase } from "./components";
import LoadingProvider from "./context/LoadingProvider";
import WordManager from "./components/WordManager";

function App() {
  return (
    <div className="app center">
      <Firebase>
        <LoadingProvider>
          {/* <Thanglish /> */}
          <WordManager />
        </LoadingProvider>
      </Firebase>
    </div>
  );
}

export default App;

// const Thanglish = () => {
//   const [word, setWord] = useState("");
//   const [matchedWord /*setMatchedWord*/] = useState(["hellow", "bye"]);

//   return (
//     <>
//       <SearchBar searchText={word} onSearchTextChng={setWord} />
//       <Suggestions words={matchedWord} />
//     </>
//   );
// };