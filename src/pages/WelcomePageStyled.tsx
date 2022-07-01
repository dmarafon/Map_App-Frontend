import styled from "styled-components";

const WelcomePageStyled = styled.div`
  background: rgb(232, 29, 253);
  background: linear-gradient(176deg, #fd1d89 4%, rgba(252, 124, 69, 1) 100%);

  .welcome__text--container {
    margin-left: 100px;
  }

  .welcome__image--logo {
    margin-top: 50px;
    margin-left: -20px;
  }

  .welcome__paragraph--regular_text_first {
    font-family: "Cairo", sans-serif;
    font-weight: 700;
    color: #fff;
    font-size: 35px;
  }

  .welcome__paragraph--regular_text_second {
    font-family: "Cairo", sans-serif;
    font-weight: 700;
    color: #fff;
    font-size: 35px;
    margin-top: -40px;
  }
  .welcome__paragraph--regular_text_third {
    font-family: "Cairo", sans-serif;
    font-weight: 700;
    color: #fff;
    font-size: 35px;
    margin-top: -40px;
  }
`;

export default WelcomePageStyled;
