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
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=2b2e87bfb47de09513bdee9d38f3009b`)
              .then(response => response.json())
              .then(data => {
                const city = data.name;
                setCityName(city);
              })
              .catch(error => console.error("Error fetching weather data:", error));
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
  console.log(cityName,"84928647823642");
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