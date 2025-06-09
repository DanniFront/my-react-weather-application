import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const apiKey = "748d5734be19te1af0e3a12aa9abaofd";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query={stockholm}&key={748d5734be19te1af0e3a12aa9abaofd}&units=metric`;
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
      <h2>Stockholm</h2>
      <ul>
        <li>Monday 15:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6 d-flex align-items-center gap-3">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAe9QTFRFAAAA3t7e29vb2dnZ5OTk9vb22tra3Nzc2NjY4ODgy8vLvb29T8HcTsDbT8Ha////Oq3GT8HbTcDaTsHaTb/ZSr7UTsDcTb/aTb/YT8DcTsHbUMDcTL/ZTr/aT8DbSL7VTsDZT8DaTsDaUMDbN7XCzv//TsLb29vb2tra2dnZ2dnZ29vb2tra2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2tra2tra2dnZ2dnZ2dnZ2dnZ2dnZ2tra2dnZ2dnZ2dnZ2dnZ2tra2dnZ29vb2dnZ2dnZ2tra2tra2tra2dnZ2dnZ2dnZ3Nzc2dnZ29vb2tra2dnZ2dnZ2dnZ2dnZ2tra2dnZ2dnZ2dnZ2dnZ2dnZ5eXl2dnZ2dnZ2dnZ2tra2tra2dnZ2dnZ2dnZ2dnZ2dnZ2tra2tra2dnZ2dnZ2dnZ2tra2tra2dnZ2dnZ2tra2tra2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ4uLi2dnZ2dnZ2dnZ2dnZ2tra2dnZ2dnZ2dnZT8LdTsDaTcDaTsDbTsDaTb/ZTb/ZTsDZTcDaTb/ZTb/ZT8HbTb/ZTcDaTcDZTb/ZTb/ZTb/ZTb/ZTb/ZTr/aTcDZTb/ZTb/ZT8HbTsDZTb/ZTcDaTsHcT8HcTcDaTb/ZTb/aT8LbTsDaUMDc2dnZTb/ZAAAAiPoSyQAAAKJ0Uk5TAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxEbHAQaYKTL3cylXhgIzvvNWwgPjfb1ig78B19cGQMb+nHcA/QCJuKC3/4wvP0RML8B0y4dAife+OHGkj8Gbu+PFgSqqxIF7kCRbdvFAZC049Y9Eh4aARQUAVbOz1cr280GmRND7/xydL8UQehJA0F3QAMDVsxUARMBWsyWZAAAAAFiS0dEAIgFHUgAAAAJcEhZcwAAAEgAAABIAEbJaz4AAAJDSURBVFjD7ZXnW9NQFIdLLt7gxlIHdeMggTQplqZoS7GAAgFtrXsLLsC9t8UBFGRaphNP/lGjD4+mQE9yrfqp78ffk/Pee09Och2OHP+EPK5UEMuEco78UTmXL3lkxeut2OWrXJTHXk/8PjUAPwlU7d7DvAkaDFXDL8I1eyljvT8UAROBmlomA19QF4Y0wvWExUAkFeZQsY/uFxpEoZSz0VCeeCJzBY1N9bKiaYrskfI5KwHXLMM8Whpn26H6/FbvhAoKIFSHghb9IKKGCSAS8uMG2oALIFxXwGdxBANVQtrAHTjYFLUQRDwk0xZ4Uhk7FAcr5OYM75KSw0eOWpYDKMcWPgMhx1Ub5QCauLCASids1WcS8Cdj9urh1OkzYvDsvGmg587bFFyItmptFy9dTldQcsVm/SxX2zvIYrOg8xqbAOLXO8y9oDeqGAUQb79pOgUp87IK4NZtkp0A7jhoNkcAaDP9HGg5axMhfaQ4cpddcM88k8T2IP3mvvnO4R7E4qyCh0vM00ilR49bWYg+eZr2VdGlz56z8aKT8db8zyx7meh6tRxPMFasfP3mbXfhKixBcfb06nqyy4klGEV9/brx+DsnkqC4BgZ1fWh49RokwQUjxnKj79diCS5Ijelj4+uKsQTvwcTk1PQHN5pkxv1xeio1UYQmGOs3jBu7TbmwBGVjYtTo14gLSzA2bR4e0vXBAReSoGxJJI3l+vu2IglKyY/He3ucWIKybfun5OcvO9xYgrPz68zMt2I8yZHj7/MdREoiB3x/okcAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTUtMDMtMDNUMTE6MTM6MDQrMDI6MDCPCCr8AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE1LTAzLTAzVDExOjEzOjA0KzAyOjAw/lWSQAAAAABJRU5ErkJggg=="
            alt="Mostly cloudy"
            className="weather-icon"
          />
          <span className="temperature">15°C</span>
        </div>
        <div className="col-6 border-start">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
