import styled from "styled-components";

const RegisterLoginFormStyled = styled.div`
  .register_login__form--container {
  }

  .login__title {
    font-family: "Cairo", sans-serif;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .login__input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }

  .register_login__input {
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
  }
  .login__button:active,
  .login__button:focus {
    background-color: rgba(252, 124, 69, 1);
    color: #ffeba7;
    box-shadow: 0 8px 24px 0 rgba(16, 39, 112, 0.2);
  }
  .login__button:hover {
    background-color: rgba(252, 124, 69, 1);
    color: #ffeba7;
    box-shadow: 0 8px 24px 0 rgba(16, 39, 112, 0.2);
  }
`;

export default RegisterLoginFormStyled;
