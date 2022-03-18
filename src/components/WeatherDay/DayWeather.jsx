import "./DayWeather.css";

const DayWeather = (props) => {
  return (
    <>
      <div className="green-container">
        <img
          src={``}
          alt=""
          className="weath-icon"
        />
        <div className="date-container">
          <h2 className="day">{props.WeekDay}</h2>
          <p className="date">{props.WeekTime}</p>
        </div>
        <h3 className="temp">{props.props.wind_speed}°C</h3>
      </div>
    </>
  );
};

export default DayWeather;
