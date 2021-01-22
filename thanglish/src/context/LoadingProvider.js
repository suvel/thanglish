import React, { createContext, useState, useEffect } from "react";

export const LoadingContext = createContext(null);

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log({ loading });
  }, [loading]);
  return (
    <LoadingContext.Provider
      value={{
        setLoading,
      }}
    >
      <div>
        <h4>{loading ? "loading..." : ""}</h4>
      </div>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
