import styled from "styled-components";

const WelcomePageStyled = styled.div`
  .welcome__container {
    display: flex;
    column-gap: 40vw;
    align-items: center;

    @media (min-width: 1500px) and (max-width: 1580px) {
      column-gap: 37vw;
    }

    @media (min-width: 1475px) and (max-width: 1499px) {
      column-gap: 35vw;
    }

    @media (min-width: 1380px) and (max-width: 1474px) {
      column-gap: 32vw;
    }
    @media (min-width: 1330px) and (max-width: 1379px) {
      column-gap: 30vw;
    }

    @media (min-width: 1300px) and (max-width: 1329px) {
      column-gap: 28vw;
    }

    @media (min-width: 1250px) and (max-width: 1299px) {
      column-gap: 25vw;
    }

    @media (min-width: 1220px) and (max-width: 1249px) {
      column-gap: 22vw;
    }

    @media (min-width: 1190px) and (max-width: 1219px) {
      column-gap: 20vw;
    }

    @media (min-width: 1150px) and (max-width: 1189px) {
      column-gap: 18vw;
    }

    @media (min-width: 1100px) and (max-width: 1149px) {
      column-gap: 15vw;
    }

    @media (min-width: 1070px) and (max-width: 1099px) {
      column-gap: 12vw;
    }

    @media (min-width: 1000px) and (max-width: 1069px) {
      column-gap: 10vw;
    }

    @media (max-width: 1022px) {
      flex-direction: column;
    }
    padding-bottom: 200px;

    background: rgb(232, 29, 253);
    background: linear-gradient(176deg, #fd1d89 4%, rgba(252, 124, 69, 1) 100%);
  }
`;

export default WelcomePageStyled;
