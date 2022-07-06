import { SyntheticEvent, useState } from "react";
import { apiResponseActionCreator } from "../../redux/features/uiSlice";
import {
  loginUserThunk,
  registerUserThunk,
} from "../../redux/thunks/userThunks";
import { useAppDispatch } from "../hooks";
import RegisterLoginFormStyled from "./RegisterLoginFormStyled";

const RegisterLoginForm = (): JSX.Element => {
  const loginFormInitialState = { email: "", password: "" };

  const registerFormInitialState = {
    firstname: "",
    surname: "",
    email: "",
    password: "",
    city: "",
    country: "",
  };

  const [openingForm, setOpeningForm] = useState("loginForm");

  const [loginFormData, setLoginFormData] = useState<{
    email: string;
    password: string;
  }>(loginFormInitialState);

  const [registerFormData, setRegisterFormData] = useState<{
    firstname: string;
    surname: string;
    email: string;
    password: string;
    city: string;
    country: string;
  }>(registerFormInitialState);

  const dispatch = useAppDispatch();

  const changeLoginData = (event: SyntheticEvent) => {
    setLoginFormData({
      ...loginFormData,
      [(event.target as HTMLInputElement).id]: (
        event.target as HTMLInputElement
      ).value,
    });
  };

  const changeRegisterData = (event: SyntheticEvent) => {
    setRegisterFormData({
      ...registerFormData,
      [(event.target as HTMLInputElement).id]: (
        event.target as HTMLInputElement
      ).value,
    });
  };

  const changeForm = () => {
    if (openingForm === "loginForm") {
      setOpeningForm("registerForm");
    } else {
      setOpeningForm("loginForm");
    }
  };

  const resetForm = () => {
    setLoginFormData(loginFormInitialState);
    setRegisterFormData(registerFormInitialState);
  };

  const submitForm = (event: SyntheticEvent) => {
    event.preventDefault();

    if (openingForm === "loginForm") {
      const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      switch (true) {
        case loginFormData.email === "" && loginFormData.password === "":
          dispatch(apiResponseActionCreator("Blank"));
          break;

        case loginFormData.email === "":
          dispatch(apiResponseActionCreator("Email Blank"));
          break;

        case !loginFormData.email.match(validRegex):
          dispatch(apiResponseActionCreator("Email Invalid"));
          break;

        case loginFormData.password === "":
          dispatch(apiResponseActionCreator("Password Blank"));
          break;

        case loginFormData.password.length < 5:
          dispatch(apiResponseActionCreator("Password Length"));
          break;

        default:
          const dataToDispatch = { ...loginFormData };

          dispatch(loginUserThunk(dataToDispatch));
          resetForm();
      }
    } else {
      const dataToDispatch = { ...registerFormData };

      dispatch(registerUserThunk(dataToDispatch));
    }
  };

  return (
    <RegisterLoginFormStyled>
      {openingForm === "loginForm" ? (
        <div className="login__form--container">
          <form onSubmit={submitForm} noValidate autoComplete="off">
            <h2 className="login__title">SIGN IN</h2>
            <div className="login__input--container">
              <input
                id="email"
                value={loginFormData.email}
                type="text"
                onChange={changeLoginData}
                required
                placeholder="EMAIL"
                className="login__input--email"
                aria-invalid="false"
                aria-required="true"
              />
              <label className="login__label--email" htmlFor="email">
                EMAIL
              </label>
              <input
                autoComplete="current-password"
                id="password"
                type="password"
                value={loginFormData.password}
                onChange={changeLoginData}
                required
                placeholder="PASSWORD"
                className="login__input--password"
                aria-invalid="false"
                aria-required="true"
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
            <div className="login__text--container" onClick={changeForm}>
              <p className="login__text--register_access_first">
                Don't have an Account?
              </p>
              <p className="login__text--register_access_second">
                Click here to{" "}
                <span className="login__text--special_color">sign up</span>{" "}
                right now
              </p>
            </div>
          </form>
        </div>
      ) : (
        <div className="register__form--container">
          <form onSubmit={submitForm} noValidate autoComplete="off">
            <h2 className="register__title">Sign Up</h2>
            <div className="register__input--container">
              <div className="register__input--first_column">
                <input
                  id="firstname"
                  value={registerFormData.firstname}
                  type="text"
                  onChange={changeRegisterData}
                  required
                  placeholder="FIRST NAME"
                  className="register__input--firstname"
                />
                <label
                  className="register__label--firstname"
                  htmlFor="firstname"
                >
                  FIRST NAME
                </label>
                <input
                  id="surname"
                  value={registerFormData.surname}
                  type="text"
                  onChange={changeRegisterData}
                  required
                  placeholder="SURNAME"
                  className="register__input--surname"
                />
                <label className="register__label--surname" htmlFor="surname">
                  SURNAME
                </label>
                <input
                  id="email"
                  value={registerFormData.email}
                  type="text"
                  onChange={changeRegisterData}
                  required
                  placeholder="EMAIL"
                  className="register__input--email"
                />
                <label className="register__label--email" htmlFor="email">
                  EMAIL
                </label>
              </div>
              <div className="register__input--second_column">
                <input
                  autoComplete="current-password"
                  id="password"
                  type="password"
                  value={registerFormData.password}
                  onChange={changeRegisterData}
                  required
                  placeholder="PASSWORD"
                  className="register__input--password"
                />
                <label className="register__label--password" htmlFor="password">
                  PASSWORD
                </label>
                <input
                  id="city"
                  value={registerFormData.city}
                  type="text"
                  onChange={changeRegisterData}
                  required
                  placeholder="CITY"
                  className="register__input--city"
                />
                <label className="register__label--city" htmlFor="city">
                  CITY
                </label>
                <input
                  id="country"
                  value={registerFormData.country}
                  type="text"
                  onChange={changeRegisterData}
                  required
                  placeholder="COUNTRY"
                  className="register__input--country"
                />
                <label className="register__label--country" htmlFor="country">
                  COUNTRY
                </label>
              </div>
            </div>
            <div className="login__button--container">
              <button className="login__button" type="submit" disabled={false}>
                REGISTER
              </button>
            </div>
            <div className="login__text--container" onClick={changeForm}>
              <p className="login__text--register_access_first">
                Already have an Account?
              </p>
              <p className="login__text--register_access_second">
                Click here to{" "}
                <span className="login__text--special_color">sign in</span>{" "}
              </p>
            </div>
          </form>
        </div>
      )}
    </RegisterLoginFormStyled>
  );
};

export default RegisterLoginForm;
