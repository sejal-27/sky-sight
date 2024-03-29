import React, { useState, useEffect } from "react";
import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const apiKey = "2b2e87bfb47de09513bdee9d38f3009b";
  const cityName = "London";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }
    fetchData();
  }, [cityName]);

  return (
    <div>
      {weather && (
        <div className="">
          <div className=""> Weather in {weather.name}</div>
          <div className=""> Temperature: {weather.main.temp}°C</div>
          <div className="">
            {" "}
            feels like Temperature: {weather.main.feels_like}°C
          </div>
          <div className=""> Condition: {weather.weather[0].description}</div>
          <div className=""> Humidity:{weather.main.humidity}</div>
          <div className=""> Visibility:{weather.visibility} mtr</div>
          <div className=""> Wind:{weather.wind.speed} m/s</div>
          {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{duration:0.5 , delay:0.5}}>
            I have some content in here
          </motion.div>
          <AnimatePresence>
            <motion.div exit={{ x: "-100vh", opacity: 0 }}>
              Watch me go woosh!
            </motion.div>
          </AnimatePresence>
<motion.div whileHover={{height:"4em", width:"5em", backgroundColor:"wheat"}} style={{height:"2em", width:"2em", backgroundColor:"red"}}>
hi
</motion.div> */}

        </div>
      )}
    </div>
  );
};
export default Weather;
