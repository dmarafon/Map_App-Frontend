import styled from "styled-components";

const RegisterLoginFormStyled = styled.div`
  .login__form--container {
    width: 350px;
    height: 600px;
    padding: 40px;
    margin-top: 120px;

    background: rgba(255, 255, 255, 0.753);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
    border-radius: 10px;

    display: inline-block;
    animation: move-left 1.5s forwards;
  }

  @keyframes move-left {
    0% {
      opacity: 0;
      transform: translateX(5vw);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .register__form--container {
    width: 420px;
    height: 600px;
    padding: 40px;
    margin-top: 120px;
    @media (max-width: 1022px) {
      width: 350px;
      height: 900px;
      display: inline-block;
    }

    background: rgba(255, 255, 255, 0.753);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
    border-radius: 10px;

    display: flex;
    justify-content: center;
    gap: 100px;
    animation: move-left 1.5s forwards;
  }

  @keyframes move-left {
    0% {
      opacity: 0;
      transform: translateX(5vw);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .login__title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;

    font-family: "Cairo", sans-serif;
    font-size: 30px;
    font-weight: 800;

    color: rgba(252, 124, 69, 1);
    text-transform: uppercase;
    text-decoration: underline;
    text-underline-offset: 13px;
  }

  .register__title {
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

  .register__label--firstname {
    color: #fd1d89;
    font-family: "IBM Plex Sans";
    font-size: 15px;

    transition: all 200ms ease-in-out;

    position: relative;
    pointer-events: none;
    top: -60px;
    transition: 0.2s ease all;
  }

  .register__label--surname {
    color: #fd1d89;
    font-family: "IBM Plex Sans";
    font-size: 15px;

    transition: all 200ms ease-in-out;

    position: relative;
    pointer-events: none;
    top: -60px;
    transition: 0.2s ease all;
  }

  .register__label--email {
    color: #fd1d89;
    font-family: "IBM Plex Sans";
    font-size: 15px;

    transition: all 200ms ease-in-out;

    position: relative;
    pointer-events: none;
    top: -60px;
    transition: 0.2s ease all;
  }

  .register__label--password {
    color: #fd1d89;
    font-family: "IBM Plex Sans";
    font-size: 15px;

    transition: all 200ms ease-in-out;

    position: relative;
    pointer-events: none;
    top: -60px;
    transition: 0.2s ease all;
  }

  .register__label--city {
    color: #fd1d89;
    font-family: "IBM Plex Sans";
    font-size: 15px;

    transition: all 200ms ease-in-out;

    position: relative;
    pointer-events: none;
    top: -60px;
    transition: 0.2s ease all;
  }

  .register__label--country {
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
    top: -80px;
    padding-bottom: 3px;
    font-size: 10px;
  }

  .login__input--email:focus ~ .login__label--email,
  .login__input--email:not(:focus):valid ~ .login__label--email {
    top: -80px;
    padding-bottom: 3px;
    font-size: 10px;
  }

  .register__input--firstname:focus ~ .register__label--firstname,
  .register__input--firstname:not(:focus):valid ~ .register__label--firstname {
    top: -80px;
    padding-bottom: 3px;
    font-size: 10px;
  }

  .register__input--surname:focus ~ .register__label--surname,
  .register__input--surname:not(:focus):valid ~ .register__label--surname {
    top: -80px;
    padding-bottom: 3px;
    font-size: 10px;
  }

  .register__input--email:focus ~ .register__label--email,
  .register__input--email:not(:focus):valid ~ .register__label--email {
    top: -80px;
    padding-bottom: 3px;
    font-size: 10px;
  }

  .register__input--password:focus ~ .register__label--password,
  .register__input--password:not(:focus):valid ~ .register__label--password {
    top: -80px;
    padding-bottom: 3px;
    font-size: 10px;
  }

  .register__input--city:focus ~ .register__label--city,
  .register__input--city:not(:focus):valid ~ .register__label--city {
    top: -80px;
    padding-bottom: 3px;
    font-size: 10px;
  }

  .register__input--country:focus ~ .register__label--country,
  .register__input--country:not(:focus):valid ~ .register__label--country {
    top: -80px;
    padding-bottom: 3px;
    font-size: 10px;
  }

  .login__input--container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 250px;

    color: rgba(252, 124, 69, 1);
  }

  .register__input--container {
    display: flex;
    flex-direction: row;
    gap: 25px;
    align-items: flex-start;
    @media (max-width: 1022px) {
      flex-direction: column;
      align-items: center;
      width: 250px;
    }

    width: 350px;

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

  .register__input--firstname:focus {
    outline: none;
    border-bottom: 1px solid #fd1d89;
  }

  .register__input--surname:focus {
    outline: none;
    border-bottom: 1px solid #fd1d89;
  }

  .register__input--email:focus {
    outline: none;
    border-bottom: 1px solid #fd1d89;
  }

  .register__input--password:focus {
    outline: none;
    border-bottom: 1px solid #fd1d89;
  }

  .register__input--city:focus {
    outline: none;
    border-bottom: 1px solid #fd1d89;
  }

  .register__input--country:focus {
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

  .login__paragraph--warning {
    color: rgba(252, 124, 69, 1);
    font-family: "IBM Plex Sans";
    font-size: 14px;
    margin-top: -40px;
    position: absolute;
    z-index: 10;
  }

  .register__input--firstname {
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

  .register__input--firstname::-webkit-input-placeholder {
    color: transparent;
    font-family: "IBM Plex Sans";
    font-size: 15px;
  }

  .register__input--firstname::-ms-input-placeholder {
    color: transparent;
    font-family: "IBM Plex Sans";
    font-size: 15px;
  }

  .register__input--firstname::placeholder {
    color: transparent;
    font-family: "IBM Plex Sans";
    font-size: 15px;
  }

  .register__input--surname {
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

  .register__input--surname::-webkit-input-placeholder {
    color: transparent;
    font-family: "IBM Plex Sans";
    font-size: 15px;
  }

  .register__input--surname::-ms-input-placeholder {
    color: transparent;
    font-family: "IBM Plex Sans";
    font-size: 15px;
  }

  .register__input--surname::placeholder {
    color: transparent;
    font-family: "IBM Plex Sans";
    font-size: 15px;
  }

  .register__input--email {
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

  .register__input--email::-webkit-input-placeholder {
    color: transparent;
    font-family: "IBM Plex Sans";
    font-size: 15px;
  }

  .register__input--email::-ms-input-placeholder {
    color: transparent;
    font-family: "IBM Plex Sans";
    font-size: 15px;
  }

  .register__input--email::placeholder {
    color: transparent;
    font-family: "IBM Plex Sans";
    font-size: 15px;
  }

  .register__input--password {
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

  .register__input--password::-webkit-input-placeholder {
    color: transparent;
    font-family: "IBM Plex Sans";
    font-size: 15px;
  }

  .register__input--password::-ms-input-placeholder {
    color: transparent;
    font-family: "IBM Plex Sans";
    font-size: 15px;
  }

  .register__input--password::placeholder {
    color: transparent;
    font-family: "IBM Plex Sans";
    font-size: 15px;
  }

  .register__input--city {
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

  .register__input--city::-webkit-input-placeholder {
    color: transparent;
    font-family: "IBM Plex Sans";
    font-size: 15px;
  }

  .register__input--city::-ms-input-placeholder {
    color: transparent;
    font-family: "IBM Plex Sans";
    font-size: 15px;
  }

  .register__input--city::placeholder {
    color: transparent;
    font-family: "IBM Plex Sans";
    font-size: 15px;
  }

  .register__input--city {
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

  .register__input--country::-webkit-input-placeholder {
    color: transparent;
    font-family: "IBM Plex Sans";
    font-size: 15px;
  }

  .register__input--country::-ms-input-placeholder {
    color: transparent;
    font-family: "IBM Plex Sans";
    font-size: 15px;
  }

  .register__input--country::placeholder {
    color: transparent;
    font-family: "IBM Plex Sans";
    font-size: 15px;
  }

  .register__input--country {
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
    margin-top: 40px;

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
