import searchIcon from "../../assets/search.svg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Home.css";

const Home = (props) => {
  const history = useHistory();

  const hanndleHistory = () => {
    history.push("/weather");
  };

  return (
    <>
      <div className="main-container">
        <div className="middle-container">
          <div className="title-container">
            <h1 className="home-title">The Forecast Weather App</h1>
          </div>
          <div className="input-container">
            <input
              placeholder="Search"
              className="home-input"
              onChange={(event) => props.setLocation(event.target.value)}
            />
            <img
              src={searchIcon}
              alt="search-icon"
              style={{ height: "40px", cursor: "pointer" }}
              onClick={() => props.handleNext()}
            />
            <img
              src={searchIcon}
              alt="search-icon"
              style={{ height: "40px", cursor: "pointer" }}
              onClick={() => props.handleWave()}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
