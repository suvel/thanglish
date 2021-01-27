import React from "react";
import "../../css/context.css";
const Context = ({ children }) => {
  return (
    <div>
      <p className='context'>{children}</p>
    </div>
  );
};

export default Context;
