import styled from "styled-components";

const AboutStyled = styled.div`
  .about__container {
    height: 600px;
  }

  .about__image--globe {
    display: inline-block;
    animation: move-up 2s forwards;
  }

  @keyframes move-up {
    0% {
      opacity: 0;
      transform: translateY(5vh);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default AboutStyled;
