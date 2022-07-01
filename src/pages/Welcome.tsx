import RegisterLoginForm from "../components/RegisterLoginForm/RegisterLoginForm";
import WelcomePageStyled from "./WelcomeStyled";

const WelcomePage = (): JSX.Element => {
  return (
    <WelcomePageStyled>
      <header>
        <img src="/images/trippy_logo314.webp" alt="trippy logo" height={314} />{" "}
      </header>
      <RegisterLoginForm />
    </WelcomePageStyled>
  );
};

export default WelcomePage;
