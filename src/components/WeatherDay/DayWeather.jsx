import "./DayWeather.css";

const DayWeather = ({ day, weekDay, weekTime }) => {
  console.log(day);
  return (
    <>
      <div className="green-container">
        <img
          src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`}
          alt="icon"
          className="weath-icon"
        />
        <div className="date-container">
          <h2 className="day">{weekDay}</h2>
          <p className="date">{weekTime}</p>
        </div>
        <h3 className="temp">{Math.round(day.temp.day)}°C</h3>
      </div>
    </>
  );
};

export default DayWeather;
