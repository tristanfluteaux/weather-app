import axios from "axios";
import { useEffect, useState } from "react";
import "./CurrentWeather.css";

const CurrentWeather = (props) => {
  // const options = { month: "long", day: "numeric" };
  // const opt_weekday = { weekday: "long" };
  // const today = new Date();
  // const weekday = toTitleCase(today.toLocaleDateString("fr-FR", opt_weekday));

  // function toTitleCase(str) {
  //   return str.replace(/\w\S*/g, function (txt) {
  //     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  //   });
  // }

  // const currentDate =
  //   weekday + " " + today.toLocaleDateString("fr-FR", options);
  const [icon, setIcon] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://openweathermap.org/img/wn/${props.weatherData.current.weather[0].icon}@4x.png`
  //     )
  //     .then((result) => setIcon(result));
  // }, []);
  return (
    <>
      <div className="current-container">
        <div className="title-container">
          {/* <img src={icon} alt="icon" /> */}
          <h2 className="current-date">{props.currentDate}</h2>
        </div>
        <div className="data-container">
          <div className="left-container">
            <p className="data-p">
              Jour - {props.props.sunrise}
              {/* {props.weatherData.current.sunrise} °C */}
            </p>
            <p className="data-p">
              Nuit - {props.props.sunset}
              {/* {props.weatherData.current.sunset} °C */}
            </p>
            <p className="data-p">
              Humidité - {props.props.humidity}
              {/* {props.weatherData.current.humidity} % */}
            </p>
          </div>
          <div className="right-container">
            <p className="data-p">
              Pression - {props.props.pressure}
              {/* {props.weatherData.current.pressure}hPa */}
            </p>
            <p className="data-p">
              Vent - {props.props.wind_speed}
              {/* {props.weatherData.current.wind_speed} Km/h */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
