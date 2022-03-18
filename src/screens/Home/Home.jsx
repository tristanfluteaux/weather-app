import searchIcon from "../../assets/search.svg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = (props) => {
  let location = useLocation("/");
  let history = useHistory();

  const handleNext = () => {
    props.getGeocoding(props.location);
    // history.push("/weather");
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
              onClick={handleNext()}
            />
              <NavLink to="/weather">
                <button>lala</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
