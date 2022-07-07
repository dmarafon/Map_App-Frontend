import styled from "styled-components";

const AboutStyled = styled.div`
  .about__container {
    height: 600px;
    margin-left: 35px;
  }

  .about__info--container {
    display: flex;
    justify-content: space-around;
    align-items: center;

    gap: 10px;
  }

  .about__paragraph--text {
    font-family: "Cairo", sans-serif;
    font-size: 30px;
    font-weight: 700;
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

  .about__image--globe {
    display: inline-block;
    animation: move-up 1.5s forwards;
  }

  @keyframes move-up {
    0% {
      opacity: 0;
      transform: translateY(20vh);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default AboutStyled;
