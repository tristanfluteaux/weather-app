import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BackButton from "../../components/button/BackButtonn";
import CurrentWeather from "../../components/WeatherDay/CurrentWeather";
import DayWeather from "../../components/WeatherDay/DayWeather";
import "./WeatherPage.css";

const WeatherPage = (props) => {
  const { weatherData } = props;
  let location = useLocation("/weather");
  return (
    <div style={{ backgroundColor: "Grey", height: "110vh" }}>
      <BackButton />
      {props.weatherData ? <CurrentWeather weatherData={weatherData} /> : null}
      <div className="day-container">
        {weatherData &&
          weatherData.daily
            .map((day) => <DayWeather props={day} />)}
        <DayWeather />
      </div>
    </div>
  );
};

export default WeatherPage;
