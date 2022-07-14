import styled from "styled-components";

const WelcomePageStyled = styled.div`
  .welcome__container {
    display: flex;
    column-gap: 38vw;
    align-items: flex-start;
    justify-content: space-around;

    @media (min-width: 1475px) and (max-width: 1580px) {
      column-gap: 30vw;
    }

    @media (min-width: 1380px) and (max-width: 1474px) {
      column-gap: 23vw;
    }
    @media (min-width: 1330px) and (max-width: 1379px) {
      column-gap: 21vw;
    }

    @media (min-width: 1300px) and (max-width: 1329px) {
      column-gap: 19vw;
    }

    @media (min-width: 1250px) and (max-width: 1299px) {
      column-gap: 17vw;
    }

    @media (min-width: 1220px) and (max-width: 1249px) {
      column-gap: 15vw;
    }

    @media (min-width: 1190px) and (max-width: 1219px) {
      column-gap: 11vw;
    }

    @media (min-width: 1150px) and (max-width: 1189px) {
      column-gap: 9vw;
    }

    @media (min-width: 1100px) and (max-width: 1149px) {
      column-gap: 7vw;
    }

    @media (min-width: 1070px) and (max-width: 1099px) {
      column-gap: 6vw;
    }

    @media (min-width: 1000px) and (max-width: 1069px) {
      column-gap: 5vw;
    }

    @media (max-width: 1022px) {
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }

    padding-bottom: 50px;

    background: rgb(232, 29, 253);
    background: linear-gradient(176deg, #fd1d89 4%, rgba(252, 124, 69, 1) 100%);
  }
`;

export default WelcomePageStyled;
