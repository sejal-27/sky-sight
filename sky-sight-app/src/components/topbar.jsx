import React, { useEffect, useState } from "react";
import DateBar from "./DateBar/Datebar ";
import SearchBar from "./SearchBar/searchBar";
import Weather from "./weather";
import WeatherForecast from "./ForecastData/ForecastData";
import TempToggle from "./Toggle/TempToggle";
import WeatherIcon, { DayIcons } from "../utils/WeatherIcons";

const Topbar = () => {
  const [cityName, setCityName] = useState("");
  const [unit, setUnit] = useState("metric");
  const [dataKey, setDataKey] = useState(0);

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
  };

  useEffect(() => {
    setDataKey((prevKey) => prevKey + 1);
  }, [unit]);

  const handleSearch = (city) => {
    setCityName(city);
    console.log(cityName, "646546");
  };
  useEffect(() => {
    if (!cityName) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=2b2e87bfb47de09513bdee9d38f3009b`
            )
              .then((response) => response.json())
              .then((data) => {
                const city = data.name;
                setCityName(city);
              })
              .catch((error) =>
                console.error("Error fetching weather data:", error)
              );
          },
          (error) => {
            console.error("Error getting geolocation:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    }
  }, [cityName]);
  console.log(cityName, "84928647823642");
  const condition="Clear";
  return (
    <>
      <div className="  flex-col gap-2 sm:flex sm:flex-row sm:gap-0 justify-between">
        <SearchBar onSearch={handleSearch} />
       <div className="flex-col gap-2 sm:flex sm:flex-row sm:gap-0 justify-center items-center">
        <TempToggle onChange={handleUnitChange} />
        <DateBar />
        </div>
      </div>
      <Weather cityName={cityName} unit={unit} />
      <WeatherForecast cityName={cityName} unit={unit} key={dataKey} />
      
      
    </>
  );
};

export default Topbar;
