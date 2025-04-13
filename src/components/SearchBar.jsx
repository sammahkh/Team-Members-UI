import React from "react";
import { FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    <div className="search-bar">
      <FiSearch className="search-icon" />
      <input type="text" placeholder="Find members" className="search-input" />
    </div>
  );
}

export default SearchBar;
