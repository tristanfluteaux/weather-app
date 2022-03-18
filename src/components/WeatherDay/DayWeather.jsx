import "./DayWeather.css";

const DayWeather = (props) => {
  return (
    <>
      <div className="green-container">
        <img
          src={`https://openweathermap.org/img/wn/10d4x.png`}
          alt=""
          className="weath-icon"
        />
        <div className="date-container">
          <h2 className="day">Mercredi</h2>
          <p className="date">9 Mars</p>
        </div>
        <h3 className="temp">°C</h3>
      </div>
    </>
  );
};

export default DayWeather;
