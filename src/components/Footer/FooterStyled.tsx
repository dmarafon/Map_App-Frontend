import styled from "styled-components";

const FooterStyled = styled.footer`
  font-family: "IBM Plex Sans", sans-serif;
  margin-top: 5vh;
  padding-top: 34px;
  padding-bottom: 34px;
  color: #7d2d68;

  background: rgb(232, 29, 253);
  background: linear-gradient(176deg, #fd1d89 4%, rgba(252, 124, 69, 1) 100%);

  @media (max-width: 920px) {
    font-size: 20px;
    display: flex;
    margin-top: 30vh;
  }

  > * {
    flex: 1 100%;
  }

  .footer__container {
    display: flex;
    flex-flow: row wrap;
    margin-right: 10px;
    margin-left: 10px;
    @media (max-width: 800px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 5vh;
    }
  }

  .footer__text--listitem {
    display: flex;
  }

  .footer__text--container {
    float: right;
  }

  .footer__address-list {
    flex: 100;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    zoom: 1;
  }

  .footer__social-media {
    display: flex;
  }
  .footer__social-media--facebook {
    filter: invert(50%) sepia(43%) saturate(1864%) hue-rotate(278deg)
      brightness(50%) contrast(100%);
    margin-top: 43px;
    padding-right: 20px;
    height: 22px;
    margin-right: 10px;
    cursor: pointer;
    @media (max-width: 920px) {
      height: 45px;
      margin-right: 40px;
    }
  }

  .footer__social-media--twitter {
    filter: invert(50%) sepia(43%) saturate(1864%) hue-rotate(278deg)
      brightness(50%) contrast(100%);
    margin-top: 43px;
    padding-right: 20px;
    height: 25px;
    cursor: pointer;
    @media (max-width: 920px) {
      height: 50px;
    }
  }

  .footer__social-media--instagram {
    filter: invert(50%) sepia(43%) saturate(1864%) hue-rotate(278deg)
      brightness(50%) contrast(100%);
    margin-top: 43px;
    padding-right: 20px;
    height: 25px;
    margin-left: 7px;
    cursor: pointer;
    @media (max-width: 920px) {
      height: 50px;
      margin-left: 30px;
    }
  }

  .footer__image--container {
    margin-left: 50px;
    margin-top: 40px;
  }

  .footer__image--logo {
    filter: invert(50%) sepia(43%) saturate(1864%) hue-rotate(278deg)
      brightness(50%) contrast(100%);
  }
`;

export default FooterStyled;
