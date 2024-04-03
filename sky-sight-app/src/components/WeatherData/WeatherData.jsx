import React, { Children } from "react";
import "../../components/WeatherData/WeatherData.css";
import WeatherIcon from "../../utils/WeatherIcons";
const WeatherData = ({ name, temp, icon, description, unit, condition }) => {
  console.log(condition, "condition");

  return (
    <div className="w-full flex-col items-center mt-20 sm:flex sm:flex-row gap-6 ">
      <div className="flex flex-col">
        <div className="font-edit">{name}</div>{" "}
        <div className="temperature font-edit">
          <p>
            Temperature: {temp} {unit === "metric" ? "°C" : "°F"}
          </p>
        </div>
        <div className="condition">{description}</div>
      </div>
      <div className="ml-0 sm:flex sm:items-center sm:justify-center lg:ml-20 xl:ml-32">
        <WeatherIcon condition={condition} />
      </div>
    </div>
  );
};

export default WeatherData;
