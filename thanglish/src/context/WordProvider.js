import React, { createContext, useState } from "react";

export const WordContext = createContext(null);

const WordProvider = ({ children }) => {
  const [wordList, setWordList] = useState([]);

  return (
    <WordContext.Provider
      value={{
        wordList,
        setWordList,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};

export default WordProvider;
