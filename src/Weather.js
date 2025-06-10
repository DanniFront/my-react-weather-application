import React, { useState } from "react";
import ModifyDate from "./ModifyDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      date: new Date(response.data.time * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png",
      city: response.data.city,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="form-wrapper">
          <form>
            <div className="row align-items-center justify-content-center">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Search for a city..."
                  className="form-detail form-control"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  autoFocus="on"
                  className="form-button btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
        </div>
        <h2>{props.defaultCity}</h2>
        <ul>
          <li>
            <ModifyDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6 d-flex align-items-center gap-3">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="weather-icon"
            />
            <span className="temperature">
              {Math.round(weatherData.temperature)}°C
            </span>
          </div>
          <div className="col-6 border-start">
            <ul>
              <li></li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "748d5734be19te1af0e3a12aa9abaofd";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
