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
          <div className="login__input--container">
            <input
              id="email"
              value={formData.email}
              type="text"
              onChange={changeData}
              required
              placeholder="EMAIL"
              className="login__input--email"
            />
            <label className="login__label--email" htmlFor="email">
              EMAIL
            </label>
            <input
              autoComplete="current-password"
              id="password"
              type="password"
              value={formData.password}
              onChange={changeData}
              required
              placeholder="PASSWORD"
              className="login__input--password"
            />
            <label className="login__label--password" htmlFor="password">
              PASSWORD
            </label>
          </div>
          <div className="login__button--container">
            <button className="login__button" type="submit" disabled={false}>
              LOGIN
            </button>
          </div>
          <div className="login__text--container">
            <p className="login__text--register_access_first">
              Don't have an Account?
            </p>
            <p className="login__text--register_access_second">
              Click here to{" "}
              <span className="login__text--special_color">sign up</span> right
              now
            </p>
          </div>
        </form>
      </div>
    </RegisterLoginFormStyled>
  );
};

export default RegisterLoginForm;
