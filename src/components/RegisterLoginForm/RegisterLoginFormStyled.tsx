import styled from "styled-components";

const RegisterLoginFormStyled = styled.div`
  .register_login__form--container {
    width: 350px;
    padding: 40px;
    margin-top: 120px;

    background: rgba(255, 255, 255, 0.753);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
    border-radius: 10px;
  }

  .login__title {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: "Cairo", sans-serif;
    font-size: 30px;
    font-weight: 800;

    color: rgba(252, 124, 69, 1);
    text-transform: uppercase;
    text-decoration: underline;
    text-underline-offset: 13px;
  }

  .login__label--password {
    color: #fd1d89;
    font-family: "IBM Plex Sans";
    font-size: 15px;
    transition: all 200ms ease-in-out;

    position: relative;
    pointer-events: none;
    top: -60px;
    transition: 0.2s ease all;
  }

  .login__label--email {
    color: #fd1d89;
    font-family: "IBM Plex Sans";
    font-size: 15px;

    transition: all 200ms ease-in-out;

    position: relative;
    pointer-events: none;
    top: -60px;
    transition: 0.2s ease all;
  }

  .login__input--password:focus ~ .login__label--password,
  .login__input--password:not(:focus):valid ~ .login__label--password {
    top: -70px;
    padding-bottom: 3px;
    font-size: 10px;
  }

  .login__input--email:focus ~ .login__label--email,
  .login__input--email:not(:focus):valid ~ .login__label--email {
    top: -70px;
    padding-bottom: 3px;
    font-size: 10px;
  }

  .login__input--container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding-bottom: 20px;
    margin-bottom: 20px;
    width: 240px;

    color: rgba(252, 124, 69, 1);
  }

  .login__input--email:focus {
    outline: none;
    border-bottom: 1px solid #fd1d89;
  }

  .login__input--password:focus {
    outline: none;
    border-bottom: 1px solid #fd1d89;
  }

  .login__input--email::-webkit-input-placeholder {
    color: transparent;
    font-family: "IBM Plex Sans";
    font-size: 15px;
  }
  .login__input--email:-ms-input-placeholder {
    color: transparent;
    font-family: "IBM Plex Sans";
    font-size: 15px;
  }

  .login__input--email::placeholder {
    color: transparent;
    font-family: "IBM Plex Sans";
    font-size: 15px;
  }

  .login__input--email {
    width: 100%;
    padding: 10px 0;
    margin-bottom: 30px;

    font-size: 16px;
    color: #fd1d89;

    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
  }

  .login__input--password::-webkit-input-placeholder {
    color: transparent;
    font-family: "IBM Plex Sans";
    font-size: 15px;
  }
  .login__input--password:-ms-input-placeholder {
    color: transparent;
    font-family: "IBM Plex Sans";
    font-size: 15px;
  }

  .login__input--password::placeholder {
    color: transparent;
    font-family: "IBM Plex Sans";
    font-size: 15px;
  }

  .login__input--password {
    width: 100%;
    padding: 10px 0;
    margin-bottom: 30px;

    font-size: 16px;
    color: #fd1d89;

    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
  }

  .login__button--container {
    display: flex;
    justify-content: center;
  }

  .login__button {
    border-radius: 4px;
    height: 44px;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;

    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
    padding: 0 30px;
    letter-spacing: 1px;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    -ms-justify-content: center;
    justify-content: center;
    -ms-flex-pack: center;
    text-align: center;

    border: none;
    background-color: #ffeba7;
    color: #000000;
    box-shadow: 0 8px 24px 0 rgba(255, 235, 167, 0.2);

    cursor: pointer;
  }

  .login__button:hover {
    background-color: rgba(252, 124, 69, 1);
    color: #ffeba7;
    box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.2);
  }

  .login__button:active {
    opacity: 0.4;
  }

  .login__text--container {
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
  }

  .login__text--register_access_first {
    font-family: "Cairo", sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: rgba(252, 124, 69, 1);
    margin-top: 20px;
    margin-bottom: -20px;
  }

  .login__text--register_access_second {
    font-family: "Cairo", sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: rgba(252, 124, 69, 1);
  }

  .login__text--special_color {
    color: #fd1d89;
  }
`;

export default RegisterLoginFormStyled;
