import React, { createContext, useState } from "react";
import "../css/common.css";
import "../css/loading.css";
export const LoadingContext = createContext(null);

const LoadingCmp = ({}) => {
  return <div className="loading-cmp">Loading...</div>;
};

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        setLoading,
      }}
    >
      <div className="p-absolute t-0-5rem">{loading ? <LoadingCmp /> : ""}</div>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
