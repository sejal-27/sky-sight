import React, { useState, useEffect } from "react";
import axios from "axios";
import "../ForecastData/ForecastData.css";
import { IMAGES } from "../../utils/constants";

const WeatherForecast = ({ cityName, unit }) => {
  const [forecastData, setForecastData] = useState(null);
  const apiKey = "2b2e87bfb47de09513bdee9d38f3009b";
  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${unit}`
        );
        setForecastData(response.data);
      } catch (error) {
        console.error("error fetching forecast request", error);
      }
    };
    fetchForecastData();
  }, [cityName, apiKey]);

  if (!forecastData) {
    return <div className=""></div>;
  }
  const today = new Date();
  const nextSixDays = new Array(6).fill().map((_, index) => {
    const date = new Date(today);
    date.setDate(date.getDate() + index);
    return date.toISOString().split("T")[0];
  });
  const filteredForecast = forecastData.list.reduce((accumulator, forecast) => {
    const date = forecast.dt_txt.split(" ")[0];
    if (
      nextSixDays.includes(date) &&
      !accumulator.some((entry) => entry.dt_txt.split(" ")[0] === date)
    ) {
      accumulator.push(forecast);
    }
    return accumulator;
  }, []);
  return (
    <>
      <div className="relative flex flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12">
        <div className="mx-auto w-full">
          <h2 className=" pb-4 font-bold text-xl text-gray-600">Weather in upcoming days:</h2>
          
          <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {filteredForecast.map((forecast, index) => (
              <div key={index}>
                <div className="relative flex flex-col shadow-md rounded-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="h-auto overflow-hidden"></div>
                  <div className="card-bg py-4 px-3">
                    <h3 className="text-md pb-2 font-medium">
                      {forecast.dt_txt.split(" ")[0]}
                    </h3>
                    <div className="flex  justify-between items-center">
                    <p>Temperature: {forecast.main.temp} {unit === 'metric' ? '°C' : '°F'}</p>
                      <p className="text-sm">{forecast.weather[0].description}</p>
                      <div className="relative z-40 flex items-center gap-2">
                        <img
                          src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                          alt=""
                          className="h-8 w-8"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        
      </div>
    </>
  );
};

export default WeatherForecast;
