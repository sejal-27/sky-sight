import React from "react";

const WeatherIcon = ({ condition }) => {
  const weatherIcons = {
    Clear: "/DayIcons/sun.png",
    Clouds: "/DayIcons/clouds.png",
    Haze: "/DayIcons/fog.png",
    Thunderstorm: "/DayIcons/storm.png",
    Drizzle: "/DayIcons/drizzle.png",
    Rain: "/DayIcons/heavy-rain.png",
    Snow: "/DayIcons/snow.png",
    Atmosphere: "/DayIcons/fog.png",
  };

  const iconPath = weatherIcons[condition];

  return (
    <img
      src={iconPath}
      alt={condition}
      style={{ width: "80%", height: "auto"}}
          />
  );
};

export default WeatherIcon;
