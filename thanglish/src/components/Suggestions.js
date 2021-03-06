import React from "react";
import Pill from "./Pill";

const RenderPillsList = ({ stringArray }) => {
  return stringArray.map((str) => <Pill>{str}</Pill>);
};

const Suggestions = ({ words }) => {
  return (
    <div class={"Suggestions"}>
      <RenderPillsList stringArray={words} />
    </div>
  );
};

export default Suggestions;
