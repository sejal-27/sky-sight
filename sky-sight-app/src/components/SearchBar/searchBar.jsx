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
    <div className="">
    <form className="flex w-full justify-center" onSubmit={handleSubmit}>
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
    </div>
  );
};

export default SearchBar;
