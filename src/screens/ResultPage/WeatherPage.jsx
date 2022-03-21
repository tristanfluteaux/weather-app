import BackButton from "../../components/button/BackButtonn";
import CurrentWeather from "../../components/WeatherDay/CurrentWeather";
import DayWeather from "../../components/WeatherDay/DayWeather";
import "./WeatherPage.css";

const WeatherPage = ({ weatherData }) => {
  console.log(weatherData);

  const options = { month: "long", day: "numeric" };
  const opt_weekday = { weekday: "long" };
  const today = new Date();
  const weekday = toTitleCase(today.toLocaleDateString("fr-FR", opt_weekday));

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  const currentDate =
    weekday + " " + today.toLocaleDateString("fr-FR", options);

  const weekDay = (idx) => {
    const upDate = new Date();
    upDate.setDate(upDate.getDate() + (idx + 1));
    const week = toTitleCase(upDate.toLocaleDateString("fr-FR", opt_weekday));
    return week;
  };
  const weekTime = (idx) => {
    const upDate = new Date();
    upDate.setDate(upDate.getDate() + (idx + 1));
    const frDate = upDate.toLocaleDateString("fr-FR", options);
    return frDate;
  };
  console.log(weatherData);
  return (
    <div className="weather-page-background">
      <div className="city-container">
        <BackButton />
        <h1 className="city">{weatherData.cityName}</h1>
      </div>
      {weatherData ? (
        <CurrentWeather
          weatherData={weatherData.current}
          currentDate={currentDate}
        />
      ) : null}
      <div className="day-container">
        {weatherData?.daily.map((day, idx) => {
          if (idx <= 6) {
            return (
              <DayWeather
                key={idx}
                day={day}
                weekDay={weekDay(idx)}
                weekTime={weekTime(idx)}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default WeatherPage;
