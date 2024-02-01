import React, { useState } from "react";
import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  const [temperatureUnit, setTemperatureUnit] = useState("Celsius");
  const getCurrentDate = () => {
    const currentDate = new Date();
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const dayOfMonth = currentDate.getDate();
    const formattedDate = `${dayOfWeek} ${month} ${dayOfMonth}`;

    return formattedDate;
  };
  const toggleTemperatureUnit = () => {
    setTemperatureUnit((prevUnit) =>
      prevUnit === "Celsius" ? "Fahrenheit" : "Celsius"
    );
  };
  const convertTemperature = (celsiusTemperature) => {
    if (temperatureUnit === "Fahrenheit") {
      return (celsiusTemperature * 9) / 5 + 32;
    }
    return celsiusTemperature;
  };

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
          <br></br>
        </div>

        <small>
          <span className="date">{getCurrentDate()}</span>
        </small>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <p className="temperature">
          {" "}
          {Math.round(convertTemperature(data.main.temp))}°
          {temperatureUnit.charAt(0)}
        </p>

        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">
              min/max:</span>
              <span className="parameter-value">
                {Math.round(convertTemperature(data.main.temp_min))}° /
                {Math.round(convertTemperature(data.main.temp_max))}°
              </span>
            
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind Speed</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind Direction</span>
            <span className="parameter-value">{data.wind.deg} km/h</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hpa</span>
          </div>
        </div>
      </div>
      <div className="toggle-buttons">
        <button
          onClick={toggleTemperatureUnit}
          disabled={temperatureUnit === "Celsius"}
        >
          Celsius
        </button>
        <button
          onClick={toggleTemperatureUnit}
          disabled={temperatureUnit === "Fahrenheit"}
        >
          Fahrenheit
        </button>
      </div>
    </div>
  );
};
export default CurrentWeather;
