import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      {" "}
      <div className="container mt-5">
        <h1>React Weather App</h1>
        <Weather defaultCity="Sydney" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/danielamure/"
            target="_blank"
            rel="noreferrer"
          >
            Daniela Mure
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/DanniFront/my-react-weather-application.git"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
