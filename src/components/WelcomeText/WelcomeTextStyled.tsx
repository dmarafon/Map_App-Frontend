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
    margin-top: 40px;
    margin-left: -20px;
    @media (min-width: 485) and (max-width: 590px) {
      max-height: 125px;
    }
    @media (max-width: 485px) {
      max-height: 100px;
    }
  }

  .welcome__paragraph--container {
    margin-top: 50px;

    @media (max-width: 1022px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    animation: fadein 2s;
    -moz-animation: fadein 2s;
    -webkit-animation: fadein 2s;
    -o-animation: fadein 2s;
  }
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .welcome__paragraph--regular_text_first {
    font-family: "Cairo", sans-serif;
    font-weight: 700;
    color: #fff;
    font-size: 35px;
    @media (max-width: 590px) {
      font-size: 30px;
    }
    @media (max-width: 485px) {
      font-size: 25px;
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
    @media (max-width: 485px) {
      font-size: 25px;
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
    @media (max-width: 485px) {
      font-size: 25px;
    }
  }
`;

export default WelcomeTextStyled;
