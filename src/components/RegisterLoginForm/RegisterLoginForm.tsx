import { SyntheticEvent, useState } from "react";
import {
  apiResponseActionCreator,
  cleanApiResponseActionCreator,
} from "../../redux/features/uiSlice";
import {
  loginUserThunk,
  registerUserThunk,
} from "../../redux/thunks/userThunks";
import { useAppDispatch, useAppSelector } from "../hooks";
import ModalText from "../ModalText/ModalText";
import RegisterLoginFormStyled from "./RegisterLoginFormStyled";

const RegisterLoginForm = (): JSX.Element => {
  const apiMessage = useAppSelector((store) => store.ui.apiResponse);
  const feedback = useAppSelector((store) => store.ui.feedback);

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

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (openingForm === "loginForm") {
      switch (true) {
        case loginFormData.email === "" && loginFormData.password === "":
          dispatch(apiResponseActionCreator("Blank"));
          break;

        case loginFormData.email.match(validRegex) &&
          loginFormData.password === "":
          dispatch(apiResponseActionCreator("Email Valid & Password Blank"));
          break;

        case !loginFormData.email.match(validRegex) &&
          loginFormData.password === "":
          dispatch(apiResponseActionCreator("Email Invalid & Password Blank"));
          break;

        case loginFormData.email === "" && loginFormData.password.length < 5:
          dispatch(apiResponseActionCreator("Email Blank & Password Invalid"));
          break;

        case !loginFormData.email.match(validRegex) &&
          loginFormData.password.length < 5:
          dispatch(
            apiResponseActionCreator("Email Invalid & Password Invalid")
          );
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
      switch (true) {
        case registerFormData.firstname === "" ||
          registerFormData.surname === "" ||
          registerFormData.email === "" ||
          registerFormData.password === "" ||
          registerFormData.city === "" ||
          registerFormData.country === "":
          dispatch(apiResponseActionCreator("Register Blank"));
          break;

        case registerFormData.password.length <= 5:
          break;

        case !registerFormData.email.match(validRegex):
          break;

        default:
          const dataToDispatch = { ...registerFormData };

          dispatch(registerUserThunk(dataToDispatch));
      }
    }
  };

  const submitClosingModalResponse = () => {
    dispatch(cleanApiResponseActionCreator());
  };

  return (
    <RegisterLoginFormStyled>
      {openingForm === "loginForm" ? (
        <div className="login__form--container">
          {apiMessage === "Incorrect Email" && (
            <ModalText
              handleClose={submitClosingModalResponse}
              isOpen={feedback}
              customFunction={""}
            >
              Wrong Email or Password
              <p className="login__modal--break_text">
                {" "}
                Please, try again to Sign In
              </p>
            </ModalText>
          )}
          <form onSubmit={submitForm} noValidate autoComplete="off">
            <h2 className="login__title">SIGN IN</h2>
            <div>
              <div className="login__input--container">
                <input
                  id="email"
                  value={loginFormData.email}
                  type="text"
                  onChange={changeLoginData}
                  required
                  placeholder="EMAIL"
                  className="login__input--email"
                />
                <label className="login__label--email" htmlFor="email">
                  EMAIL
                </label>
              </div>
            </div>
            {apiMessage === "Email Invalid" ||
            apiMessage === "Email Invalid & Password Blank" ||
            apiMessage === "Email Invalid & Password Invalid" ? (
              <p className="login__paragraph--warning">Invalid Email Address</p>
            ) : (
              ""
            )}
            {(apiMessage === "Blank" && !loginFormData.email) ||
            (apiMessage === "Email Blank" && !loginFormData.email) ||
            (apiMessage === "Email Blank & Password Invalid" &&
              !loginFormData.email) ? (
              <p className="login__paragraph--warning">Empty Email field</p>
            ) : (
              ""
            )}
            <div className="login__input--container">
              <input
                autoComplete="current-password"
                id="password"
                type="password"
                value={loginFormData.password}
                onChange={changeLoginData}
                required
                placeholder="PASSWORD"
                className="login__input--password"
                maxLength={15}
              />
              <label className="login__label--password" htmlFor="password">
                PASSWORD
              </label>
            </div>
            {(apiMessage === "Blank" && !loginFormData.password) ||
            (apiMessage === "Password Blank" && !loginFormData.password) ||
            (apiMessage === "Email Valid & Password Blank" &&
              !loginFormData.password) ||
            (apiMessage === "Email Invalid & Password Blank" &&
              !loginFormData.password) ? (
              <p className="login__paragraph--warning">Empty Password field</p>
            ) : (
              ""
            )}
            {apiMessage === "Password Length" ||
            apiMessage === "Email Blank & Password Invalid" ||
            apiMessage === "Email Invalid & Password Invalid" ? (
              <p className="login__paragraph--warning">
                Password Should Have 5 to 15 Char.
              </p>
            ) : (
              ""
            )}
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
                  maxLength={33}
                />
                <label
                  className="register__label--firstname"
                  htmlFor="firstname"
                >
                  FIRST NAME
                </label>
                {apiMessage === "Register Blank" &&
                !registerFormData.firstname ? (
                  <p className="login__paragraph--warning">
                    Empty Firstname field
                  </p>
                ) : (
                  ""
                )}
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
                {apiMessage === "Register Blank" &&
                !registerFormData.surname ? (
                  <p className="login__paragraph--warning">
                    Empty Surname field
                  </p>
                ) : (
                  ""
                )}
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
                {apiMessage === "Register Blank" && !registerFormData.email ? (
                  <p className="login__paragraph--warning">Empty Email field</p>
                ) : (
                  ""
                )}
                {registerFormData.email.length > 0 &&
                !registerFormData.email.match(
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                ) ? (
                  <p className="login__paragraph--warning">
                    Invalid Email Address
                  </p>
                ) : (
                  ""
                )}
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
                  maxLength={15}
                />
                <label className="register__label--password" htmlFor="password">
                  PASSWORD
                </label>
                {apiMessage === "Register Blank" &&
                !registerFormData.password ? (
                  <p className="login__paragraph--warning">
                    Empty Password field
                  </p>
                ) : (
                  ""
                )}
                {registerFormData.password.length > 0 &&
                registerFormData.password.length < 5 ? (
                  <p className="login__paragraph--warning">Minimun 5 Char.</p>
                ) : (
                  ""
                )}
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
                {apiMessage === "Register Blank" && !registerFormData.city ? (
                  <p className="login__paragraph--warning">Empty City field</p>
                ) : (
                  ""
                )}
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
                {apiMessage === "Register Blank" &&
                !registerFormData.country ? (
                  <p className="login__paragraph--warning">
                    Empty Country field
                  </p>
                ) : (
                  ""
                )}
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
