import React, { useState } from "react";
import "../../css/common.css";
import "../../css/button.css";
import "../../css/input.css";
const WordSearcher_n_Add = () => {
  const [searchWord, setSearchWord] = useState("");
  return (
    <div>
      <div class="b-c d-flex b-rad">
        <input
          value={searchWord}
          onChange={(eve) => setSearchWord(eve.target.value)}
          class="w-100p ip"
          type="text"
        />
        <button class="btn">➕</button>
      </div>
    </div>
  );
};

export default WordSearcher_n_Add;
