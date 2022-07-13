import styled from "styled-components";

const AboutStyled = styled.div`
  .about__container {
    height: 700px;
    margin-left: 35px;
    @media (max-width: 1022px) {
      margin: 0;
    }
  }

  .about__info--container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    @media (max-width: 1022px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0;
    }
  }

  .about__info--text {
    margin-top: 250px;
    margin-left: 80px;
    @media (max-width: 1022px) {
      margin-top: 80px;
      padding-left: 60px;
      padding-right: 60px;
      margin-left: 0;
    }
  }

  .about__paragraph--text {
    font-family: "Cairo", sans-serif;
    font-size: 25px;
    font-weight: 700;
    animation: fadein 5s;
    -moz-animation: fadein 5s;
    -webkit-animation: fadein 5s;
    -o-animation: fadein 5s;
    @media (max-width: 1250px) {
      font-size: 23px;
    }
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

  .about__image--globe {
    animation: move-up 3s forwards;
    @media (max-width: 1250px) {
      height: 500px;
      margin-top: 100px;
    }
    @media (max-width: 1022px) {
      height: 450px;
      margin-top: 0;
    }
    @media (max-width: 600px) {
      height: 400px;
      margin-top: 0;
    }
    @media (max-width: 540px) {
      height: 380px;
      margin-top: 0;
    }
    @media (max-width: 510px) {
      height: 350px;
      margin-top: 0;
    }
    @media (max-width: 470px) {
      height: 330px;
      margin-top: 0;
    }

    @media (max-width: 430px) {
      height: 315px;
      margin-top: 0;
    }
    @media (max-width: 430px) {
      height: 300px;
      margin-top: 0;
    }
    @media (max-width: 405px) {
      height: 290px;
      margin-top: 0;
    }
    @media (max-width: 390px) {
      height: 275px;
      margin-top: 0;
    }
  }

  @keyframes move-up {
    0% {
      opacity: 0;
      transform: translateY(8vh);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default AboutStyled;
