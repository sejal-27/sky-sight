import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherData from "./WeatherData/WeatherData";
// import { motion, AnimatePresence } from "framer-motion";

const Weather = ({ cityName, unit }) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = "2b2e87bfb47de09513bdee9d38f3009b";

  console.log(cityName, "222");

  useEffect(() => {
    async function fetchData() {
      try {
        // console.log(cityName, "11111");
        if (!cityName) return;
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${unit}`
        );
        setWeather(response.data);
        setError(null);
      } catch (error) {
        setError("Error fetching weather data");
        setWeather(null);
      }
    }
    fetchData();
  }, [cityName, apiKey, unit]);
  console.log(`Rendering Weather for ${cityName} with unit ${unit}`);

  return (
    <div>
      {error && <p>{error}</p>}
      {weather && (
        <WeatherData
          name={weather.name}
          temp={weather.main.temp}
          icon={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          description={weather.weather[0].description}
          unit={unit}
          condition={weather.weather[0].main}
        />
      )}
    </div>
  );
};
export default Weather;
