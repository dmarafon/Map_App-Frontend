import styled from "styled-components";

const WelcomePageStyled = styled.div`
  .welcome__container {
    display: flex;

    align-items: flex-start;
    justify-content: space-around;

    @media (max-width: 1022px) {
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }

    padding-bottom: 50px;

    background: rgb(232, 29, 253);
    background: linear-gradient(176deg, #fd1d89 4%, rgba(252, 124, 69, 1) 100%);
  }

  .welcome__image--marker {
    margin-top: 150px;
    width: 25%;
    fill: none;
    stroke: #7d2d68;
    stroke-width: 17px;

    margin-left: 75px;
    margin-right: 75px;
    @media (max-width: 1022px) {
      width: 30%;
      margin-top: 20px;
    }

    stroke-dasharray: 2750px;
    stroke-dashoffset: 2750px;

    animation: move 3s linear infinite;
    animation-fill-mode: forwards; // Stay on the last frame
    animation-iteration-count: 1;
  }

  @keyframes move {
    100% {
      stroke-dashoffset: 0;
    }
  }
`;

export default WelcomePageStyled;
