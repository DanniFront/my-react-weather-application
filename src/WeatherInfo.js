import React from "react";
import ModifyDate from "./ModifyDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>{props.data.city}</h2>
      <ul>
        <li>
          <ModifyDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6 d-flex align-items-center gap-3">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="weather-icon"
          />
          <span className="temperature">
            {Math.round(props.data.temperature)}°C
          </span>
        </div>
        <div className="col-6 border-start">
          <ul>
            <li></li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
