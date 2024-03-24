import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const RegisterModal = ({
  onClose,
  registerUser,
  openLoginModal,
  isLoading,
}) => {


  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [avatar, setAvatar] = useState("");
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const onRegister = (e) => {
    e.preventDefault();
    registerUser({ email, password, name, avatar });
  };

  return (
    <ModalWithForm
      name="register"
      title="Sign Up"
      onClose={onClose}
      buttonText="Sign Up"
      onSubmit={onRegister}
    >
      <div>
        <label className="modal__input-title" htmlFor="email-input">
          Email*
        </label>
        <input
          id="email"
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          minLength="1"
          maxLength="50"
          required
          onChange={handleEmailChange}
        ></input>
      </div>

      <div>
        <label className="modal__input-title" htmlFor="password-input">
          Password
        </label>
        <input
          id="password"
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          minLength="1"
          maxLength="50"
          required
          onChange={handlePasswordChange}
        ></input>
      </div>

      <div>
        <label className="modal__input-title" htmlFor="name-input">
          Name
        </label>
        <input
          id="name"
          className="input"
          tpye="text"
          name="name"
          placeholder="Name"
          minLength="1"
          maxLength="50"
          required
          value={name}
          onChange={handleNameChange}
        ></input>
      </div>

      <div>
        <label className="modal__input-title" htmlFor="avatar-input">
          Avatar URL
        </label>
        <input
          id="avatar"
          className="input"
          type="url"
          name="url"
          placeholder="Avatar URL"
          required
          value={avatar}
          onChange={handleAvatarChange}
        ></input>
      </div>
      <div className="modal-form-buttons">
        <button className="modal-form-submit" type="submit">
          {isLoading ? "Submitting..." : "Sign Up"}
        </button>
        <button className="modal__login" type="button" onClick={openLoginModal}>
          Or Log In
        </button>
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
