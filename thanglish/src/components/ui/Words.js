import React, { useContext } from "react";
import "../../css/common.css";
import "../../css/word.css";
import { WordContext } from "../../context/WordProvider";
const Word = ({ children }) => {
  return <span className="word">{children}</span>;
};
const Words = () => {
  const { wordList = [] } = useContext(WordContext);
  return (
    <div className="word-container d-flex f-wrap p-2">
      {wordList.map(({ wrd }) => (
        <Word>{wrd}</Word>
      ))}
    </div>
  );
};

export default Words;
