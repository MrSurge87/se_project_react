import React, { useContext } from "react";
import avatar from "../../images/avatar.svg";
import "./SideBar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SideBar = ({ onSignOut, onEditProfile }) => {
  const {  currentUser } = useContext(CurrentUserContext);
  console.log(currentUser);

  const userName = currentUser ? currentUser?.name : "No User";

  return (
    <div className="sidebar-container">
      <div className="profile__logo">
        <img className="profile__avatar-image" src={avatar} alt="Avatar" />
        <p className="profile__user-name">{userName}</p>
      </div>
      {currentUser && (
        <>
          <button
            className="sidebar__change_profile_data-button"
            onClick={onEditProfile}
          >
            Change Profile Data{" "}
          </button>
          <button className="sidebar__logout-button" onClick={onSignOut}>
            Log Out
          </button>
        </>
      )}
    </div>
  );
};

export default SideBar;
