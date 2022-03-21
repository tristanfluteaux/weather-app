import "./button.css";
import Arrow from "../../assets/arrow.svg";
import { NavLink } from "react-router-dom";

const BackButton = () => {
  return (
    <NavLink to="/" className="back-btn">
      <div>
        <img
          src={Arrow}
          alt="icon"
          style={{ width: "32.74px", height: "27.4" }}
        />
      </div>
    </NavLink>
  );
};

export default BackButton;
