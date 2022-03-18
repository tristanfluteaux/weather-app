import { BrowserRouter} from "react-router-dom";
import "./App.css";
import Home from "./screens/Home/Home";
import WeatherPage from "./screens/ResultPage/WeatherPage";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

function App() {
  const apiKey = "dc2493128fbf8e03f81276ad43afcd4e";
  const [location, setLocation] = useState("");
  const [geoLocation, setGeoLocation] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  let history = useHistory()

  const getGeocoding = async (location) => {
    await axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${apiKey}`
      )
      .then((results) => setGeoLocation(results.data[0]));
  };
  console.log(geoLocation, "mama");

  useEffect(() => {
    if(geoLocation.lat) {
      const getWeather = async() => {
        await axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${geoLocation.lat}&lon=${geoLocation.lon}&exclude=alerts,hourly,minutely&units=metric&lang=fr&appid=${apiKey}`
          )
          .then((results) => setWeatherData(results.data));
        };
        getWeather();
      } else {
        console.log('perdu')
      }
    }, [geoLocation]);
    console.log(weatherData)
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
          <Home setLocation={setLocation} location={location} getGeocoding={getGeocoding} weatherData={weatherData}/>
          </Route>
          <Route exact path='/weather'>
          <WeatherPage weatherData={weatherData}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
