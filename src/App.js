import axios from "axios";
import { Route, Switch, useHistory } from "react-router-dom";
import Home from "./screens/Home/Home";
import { useState, useEffect, useRef } from "react";
import WeatherPage from "./screens/ResultPage/WeatherPage";
import "./App.css";

function App() {
  const history = useHistory();
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  // const prevWeatherData = useRef(null);

  const apiKey = "b89f649771ae2998035bab6646ec8d79";
  // const apiKey = "dc4c0a44f56e7bf980477899188cf012";

  function getGeocoding() {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${apiKey}`
      )
      .then((result) => {
        getWeather(result.data[0]);
      });
  }

  function getWeather({ lat, lon, name }) {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,hourly,minutely&units=metric&lang=fr&appid=${apiKey}`
      )
      .then((results) => {
        setWeatherData({ ...results.data, cityName: name });
        history.push("/weather");
      });
  }

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home setLocation={setLocation} getLocation={getGeocoding} />
        </Route>
        <Route exact path="/weather">
          <WeatherPage weatherData={weatherData} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
