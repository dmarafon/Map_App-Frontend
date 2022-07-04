import styled from "styled-components";

const WelcomeTextStyled = styled.div`
  .welcome__text--container {
    margin-left: 100px;
    @media (max-width: 1022px) {
      margin-left: 0;
    }
  }

  .welcome__image--container {
    @media (max-width: 1022px) {
      display: flex;
      justify-content: center;
    }
  }

  .welcome__image--logo {
    margin-top: 75px;
    margin-left: -20px;
    @media (max-width: 590px) {
      max-height: 125px;
    }
  }

  .welcome__paragraph--container {
    margin-top: 50px;
  }

  .welcome__paragraph--regular_text_first {
    font-family: "Cairo", sans-serif;
    font-weight: 700;
    color: #fff;
    font-size: 35px;
    @media (max-width: 590px) {
      font-size: 30px;
    }
  }

  .welcome__paragraph--regular_text_second {
    font-family: "Cairo", sans-serif;
    font-weight: 700;
    color: #fff;
    font-size: 35px;
    margin-top: -40px;
    @media (max-width: 590px) {
      font-size: 30px;
    }
  }
  .welcome__paragraph--regular_text_third {
    font-family: "Cairo", sans-serif;
    font-weight: 700;
    color: #fff;
    font-size: 35px;
    margin-top: -40px;
    @media (max-width: 590px) {
      font-size: 30px;
    }
  }
`;

export default WelcomeTextStyled;
