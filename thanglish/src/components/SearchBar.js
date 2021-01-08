import React from "react";

const SearchBar = ({ searchText = "", onSearchTextChng = () => {} }) => {
  return (
    <input
      class={"searchbar"}
      type="text"
      value={searchText}
      onChange={(ent) => onSearchTextChng(ent.target.value)}
    />
  );
};

export default SearchBar;
