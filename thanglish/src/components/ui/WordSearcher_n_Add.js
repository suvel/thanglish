import React, { useState, useContext, useRef } from "react";
import { DataFlowManagerContext } from "../../context/DataFlowManagerProvider";
import "../../css/common.css";
import "../../css/button.css";
import "../../css/input.css";
const WordSearcher_n_Add = () => {
  const [searchWord, setSearchWord] = useState("");
  const { addWord } = useContext(DataFlowManagerContext);
  const addBtnRef = useRef(null);
  const handelAddWord = () => {
    if (searchWord === "") {
      alert("emty string not allowed");
      return;
    }
    const newWrd = searchWord;
    addWord(newWrd).then(() => {
      setSearchWord("");
    });
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addBtnRef.current.click();
    }
  };
  return (
    <div>
      <div class="b-c d-flex b-rad">
        <input
          value={searchWord}
          onChange={(eve) => setSearchWord(eve.target.value)}
          class="w-100p ip"
          type="text"
          onKeyPress={handleKeyPress}
        />
        <button class="btn" ref={addBtnRef} onClick={handelAddWord}>
          ➕
        </button>
      </div>
    </div>
  );
};

export default WordSearcher_n_Add;
