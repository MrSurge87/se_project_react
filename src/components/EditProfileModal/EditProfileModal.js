import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const EditProfileModal = ({ onClose, updateUser }) => {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [avatar, setAvatar] = useState("");
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateUser({ name, avatar });
  };

  useEffect(() => {
    setName(currentUser.name);
    setAvatar(currentUser.avatar);
  }, [currentUser.name, currentUser.avatar]);

  return (
    <ModalWithForm
      name="edit-profile"
      title="Change profile data"
      onClose={onClose}
      buttonText="Save Changes"
      onSubmit={onSubmit}
    >
      <div>
        <label className="modal__input-title" htmlFor="name-input">
          Name
        </label>
        <input
          id="name"
          className="modal__input"
          type="text"
          name="name"
          placeholder={currentUser.name}
          minLength="1"
          maxLength="50"
          required
          value={name}
          onChange={handleNameChange}
        ></input>
      </div>

      <div>
        <label className="modal__input-title" htmlFor="avatar-input">
          Avatar
        </label>
        <input
          id="avatar"
          className="modal__input"
          type="url"
          name="url"
          placeholder={currentUser.avatar}
          minLength="1"
          maxLength="400"
          required
          value={avatar}
          onChange={handleAvatarChange}
        ></input>
      </div>
    </ModalWithForm>
  );
};

export default EditProfileModal;
