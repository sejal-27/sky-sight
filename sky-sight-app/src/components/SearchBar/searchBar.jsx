import React, { useState } from "react";
import { ReactDOM } from "react";
import "../../components/SearchBar/searchBar.css";

const SearchBar = ({ onSearch }) => {
  const [cityName, setCityName] = useState("");
  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(cityName);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <input
        placeholder="Search..."
        className="js-search"
        type="text"
        value={cityName}
        onChange={handleChange}
      />
      <button type="submit">
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
