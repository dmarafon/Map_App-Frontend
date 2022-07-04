import { SyntheticEvent, useState } from "react";
import { loginUserThunk } from "../../redux/thunks/userThunks";
import { useAppDispatch } from "../hooks";
import RegisterLoginFormStyled from "./RegisterLoginFormStyled";

const RegisterLoginForm = (): JSX.Element => {
  const formInitialState = { email: "", password: "" };

  const [formData, setFormData] = useState(formInitialState);
  const dispatch = useAppDispatch();

  const changeData = (event: SyntheticEvent) => {
    setFormData({
      ...formData,
      [(event.target as HTMLInputElement).id]: (
        event.target as HTMLInputElement
      ).value,
    });
  };

  const submitLogin = (event: SyntheticEvent) => {
    event.preventDefault();

    const dataToDispatch = { ...formData };

    dispatch(loginUserThunk(dataToDispatch));
  };

  return (
    <RegisterLoginFormStyled>
      <div className="register_login__form--container">
        <form onSubmit={submitLogin} noValidate autoComplete="off">
          <h2 className="login__title">SIGN IN</h2>
          <div className="login__input">
            <label htmlFor="email" />
            <input
              id="email"
              value={formData.email}
              type="email"
              onChange={changeData}
              required
              placeholder="EMAIL"
              maxLength={33}
              className="register_login__input"
            />
            <label htmlFor="password" />
            <input
              autoComplete="current-password"
              id="password"
              type="password"
              value={formData.password}
              onChange={changeData}
              required
              placeholder="PASSWORD"
              minLength={5}
              maxLength={15}
              className="register_login__input"
            />
          </div>
          <div className="login__button--container">
            <button className="login__button" type="submit" disabled={false}>
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </RegisterLoginFormStyled>
  );
};

export default RegisterLoginForm;
