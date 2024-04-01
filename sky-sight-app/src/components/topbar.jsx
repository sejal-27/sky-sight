import React, { useEffect, useState } from "react";
import DateBar from "./DateBar/Datebar ";
import SearchBar from "./SearchBar/searchBar";
import Weather from "./weather";
import WeatherForecast from "./ForecastData/ForecastData";

const Topbar = () => {
  const [cityName, setCityName] = useState("");
  const handleSearch = (city) => {
    setCityName(city);
    console.log(cityName, "646546");
  };

  useEffect(() => {
    if (!cityName) {
      fetch(
        "https://api.geoapify.com/v1/ipinfo?&apiKey=16590201230e496a9ed7eeb4677e9b7f"
      )
        .then((response) => response.json())
        .then((result) => {
          const { city } = result;
          setCityName(city.name);
        })
        .catch((error) => console.error("error fetching your location"));
    }
  }, [cityName]);
 

  return (
    <>
      <div>
        <div className="flex justify-between items-center m-5 mt-10">
          <SearchBar onSearch={handleSearch} />
          <DateBar />
        </div>
        <Weather cityName={cityName} />
        <WeatherForecast cityName={cityName} />
      </div>
    </>
  );
};

export default Topbar;
