import React, { createContext, useState } from "react";

export const StorageContext = createContext(null);

const Firebase = ({ children }) => {
  const [crtSpellings, setCrtSpellings] = useState([]);
  const [suvelSpellings, setSuvelSpellings] = useState([]);

  const value = {
    crtSpellings, setCrtSpellings,
    suvelSpellings, setSuvelSpellings,
  };
  return (
    <StorageContext.Provider value={value}>{children}</StorageContext.Provider>
  );
};

export default Firebase;
