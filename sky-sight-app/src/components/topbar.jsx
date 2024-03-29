import React, { useState } from "react";
import DateBar from "./DateBar/Datebar ";
import SearchBar from "./SearchBar/searchBar";
import Weather from "./weather";

const Topbar = () => {
  const [cityName, setCityName] = useState("");
  const handleSearch = (city) => {
    setCityName(city);
    console.log(cityName,"646546");

  };

  return (
    <>
      <div className=" flex justify-between items-center m-5">
        <SearchBar onSearch={handleSearch} />
        <DateBar />
      </div>
      <Weather cityName={cityName} />
    </>
  );
};

export default Topbar;
