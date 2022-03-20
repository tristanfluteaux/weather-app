import "./CurrentWeather.css";

const CurrentWeather = ({weatherData, currentDate}) => {
  return (
    <>
      <div className="current-container">
        <div className="title-container">
          <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`} alt="icon" className="current-icon"/>
          <h2 className="current-date">{currentDate}</h2>
        </div>
        <div className="data-container">
          <div className="left-container">
            <p className="data-p">
              Jour - {weatherData.sunrise} °C
            </p>
            <p className="data-p">
              Nuit - {weatherData.sunset} °C
            </p>
            <p className="data-p">
              Humidité - {weatherData.humidity} %
            </p>
          </div>
          <div className="right-container">
            <p className="data-p">
              Pression - {weatherData.pressure}hPa
            </p>
            <p className="data-p">
              Vent - {weatherData.wind_speed} Km/h
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
