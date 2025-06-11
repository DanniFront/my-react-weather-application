import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
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
