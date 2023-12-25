import "./Header.css";
import logoImage from "../../images/Logo.svg";
import avatarImage from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import {Link} from "react-router-dom";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

const Header = ({ onCreateModal, city }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
          <img src={logoImage} alt="logo" />
          </Link>
        </div>
        <div className="header__date">
          {currentDate}, {city}
        </div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch/>
        <div>
          <button
            className="header__button"
            type="text"
            onClick={onCreateModal}
          >
            + Add Clothes
          </button>
        </div>
        <Link to="/profile" className="header__name">MrSurge</Link>
        <div>
          <img src={avatarImage} alt="avartar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
