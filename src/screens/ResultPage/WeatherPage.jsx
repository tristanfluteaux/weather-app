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
  const fakeCurrent = [
    {
      sunrise: 111000,
      sunset: 110,
      humidity: 10,
      pressure: 10,
      wind_speed: 10
    }
  ]
  const fake6days = [
    {
      sunrise: 111000,
      sunset: 110,
      humidity: 10,
      pressure: 10,
      wind_speed: 10
    },
    {
      sunrise: 111000,
      sunset: 110,
      humidity: 10,
      pressure: 10,
      wind_speed: 10
    },
    {
      sunrise: 111000,
      sunset: 110,
      humidity: 10,
      pressure: 10,
      wind_speed: 10
    },
    {
      sunrise: 111000,
      sunset: 110,
      humidity: 10,
      pressure: 10,
      wind_speed: 10
    },
    {
      sunrise: 111000,
      sunset: 110,
      humidity: 10,
      pressure: 10,
      wind_speed: 10
    },
    {
      sunrise: 111000,
      sunset: 110,
      humidity: 10,
      pressure: 10,
      wind_speed: 10
    },
    {
      sunrise: 111000,
      sunset: 110,
      humidity: 10,
      pressure: 10,
      wind_speed: 10
    }
  ]

  const options = { month: "long", day: "numeric" };
  const opt_weekday = { weekday: "long" };
  const today = new Date();
  const weekday = toTitleCase(today.toLocaleDateString("fr-FR", opt_weekday));

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  const currentDate =  weekday + " " + today.toLocaleDateString("fr-FR", options);

const WeekDay = (idx) => {
  const upDate = new Date();
  upDate.setDate(upDate.getDate() + (idx ));
  const week = toTitleCase(upDate.toLocaleDateString("fr-FR", opt_weekday));
  return week
}
const WeekTime = (idx) => {
  const upDate = new Date();
  upDate.setDate(upDate.getDate() + (idx ));
  const frDate = upDate.toLocaleDateString("fr-FR", options)
  return frDate
}

  return (
    <div style={{ backgroundColor: "Grey", position: "relative", height:"100vh" }}>
      <BackButton />
      <h1 className="city">City</h1>
      {/* {props.weatherData ? <CurrentWeather weatherData={weatherData} /> : null} */}
      {fakeCurrent && fakeCurrent.map((current, idx) => <CurrentWeather key={idx} props={current} currentDate={currentDate}/>)}
      <div className="day-container">
        {/* {weatherData &&
          weatherData.daily
            .map((day) => <DayWeather props={day} />)} */}
        {fake6days && fake6days.map((day, idx) => <DayWeather key={idx} props={day} WeekDay={WeekDay(idx)} WeekTime={WeekTime(idx)}/>)}
      </div>
    </div>
  );
};

export default WeatherPage;
