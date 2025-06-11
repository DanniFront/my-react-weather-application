import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleRespons(respons) {
    console.log(respons.data.coordinates);
  }

  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiKey = "748d5734be19te1af0e3a12aa9abaofd";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleRespons);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col mb-2">Wed</div>
        <div>
          <WeatherIcon code="clear-sky-day" size={32} />{" "}
        </div>
        <div>
          <span className="WeatherForecast-temperature">14°</span>
          <span className="WeatherForecast-temperature-min">9°</span>
        </div>
      </div>
    </div>
  );
}
