import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertCelcius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={convertFahrenheit}>
            °F
          </a>
        </span>{" "}
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={convertCelcius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
