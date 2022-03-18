import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./screens/Home/Home";
import { useEffect, useState } from "react";
import WeatherPage from "./screens/ResultPage/WeatherPage";
import "./App.css";

function App() {
  const apiKey = "b89f649771ae2998035bab6646ec8d79";
  // const apiKey = "dc4c0a44f56e7bf980477899188cf012";
  const [location, setLocation] = useState("");
  const [geoLocation, setGeoLocation] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [search, setSearch] = useState("");

    const getGeocoding = async() => {
      await axios
        .get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${apiKey}`
        )
        .then((results) => setGeoLocation(results.data[0]))
      };

      const getWeather = async() => {
        await axios
        // .get(
        //   `https://api.openweathermap.org/data/2.5/onecall?lat=48.8588897&lon=2.3200410217200766&exclude=alerts,hourly,minutely&units=metric&lang=fr&appid=${apiKey}`
        //   )
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${geoLocation.lat}&lon=${geoLocation.lon}&exclude=alerts,hourly,minutely&units=metric&lang=fr&appid=${apiKey}`
          )
          .then((results) => setWeatherData(results.data))
        };
        
        const handleData = () => {
          getGeocoding()
    }
        const handleWave = () => {
          getWeather()
    }

  useEffect(() => {
    console.log(geoLocation, "geoloc")
    console.log(weatherData, "weatherData")
  }, [weatherData]);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home setLocation={setLocation} handleNext={handleData} handleWave={handleWave}/>
          </Route>
          <Route exact path="/weather">
            <WeatherPage weatherData={weatherData} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
