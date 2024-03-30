import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherForecast = ({ cityName }) => {
  const [forecastData, setForecastData] = useState(null);
  const apiKey = "2b2e87bfb47de09513bdee9d38f3009b";
  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`
        );
        setForecastData(response.data);
      } catch (error) {
        console.error("error fetching forecast request", error);
      }
    };
    fetchForecastData();
  }, [cityName, apiKey]);

  if (!forecastData) {
    return <div className="">loading forecast data</div>;
  }
  const today = new Date();
  const nextSixDays = new Array(6).fill().map((_, index) => {
    const date = new Date(today);
    date.setDate(date.getDate() + index);
    return date.toISOString().split('T')[0];
  });
  const filteredForecast = forecastData.list.reduce((accumulator, forecast) => {
    const date = forecast.dt_txt.split(' ')[0];
    if (nextSixDays.includes(date) && !accumulator.some(entry => entry.dt_txt.split(' ')[0] === date)) {
      accumulator.push(forecast);
    }
    return accumulator;
  }, []);  return (
    <div className="flex gap-5">
      {filteredForecast.map((forecast, index) => (
        <div key={index}>
          <p>Date: {forecast.dt_txt.split(' ')[0]}</p>
          <p>Temperature: {forecast.main.temp}°C</p>
          <p>Weather: {forecast.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
}

export default WeatherForecast;
  
 