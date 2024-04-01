import React, { useState, useEffect } from "react";
import axios from "axios";
import "../ForecastData/ForecastData.css";
import { IMAGES } from "../../utils/constants";

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
      <div class="relative flex flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12">
        <div class="mx-auto px-4 w-full">
          <h2 class="mb-4 font-bold text-xl text-gray-600">Weather in upcoming days:</h2>
          <div class="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {filteredForecast.map((forecast, index) => (
              <div key={index}>
                <div class="relative flex flex-col shadow-md rounded-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                  <div class="h-auto overflow-hidden"></div>
                  <div class="card-bg py-4 px-3">
                    <h3 class="text-md mb-2 font-medium">
                      {forecast.dt_txt.split(" ")[0]}
                    </h3>
                    <div class="flex  justify-between items-center">
                      <p class="text-sm">{forecast.main.temp}</p>
                      <p class="text-sm">{forecast.weather[0].description}</p>
                      <div class="relative z-40 flex items-center gap-2">
                        <img
                          src={IMAGES.sampleImg}
                          alt=""
                          className="h-5 w-5"
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
