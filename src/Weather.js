import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
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
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      city: response.data.city,
    });
  }

  function search() {
    const apiKey = "748d5734be19te1af0e3a12aa9abaofd";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="row align-items-center justify-content-center">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Search for a city..."
                  autoFocus="on"
                  className="form-detail form-control"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="form-button btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
