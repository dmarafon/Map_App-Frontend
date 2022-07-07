import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import RegisterLoginForm from "../components/RegisterLoginForm/RegisterLoginForm";
import WelcomeText from "../components/WelcomeText/WelcomeText";
import WelcomePageStyled from "./WelcomePageStyled";

const WelcomePage = (): JSX.Element => {
  return (
    <WelcomePageStyled>
      <div className="welcome__container">
        <WelcomeText />
        <RegisterLoginForm />
      </div>
      <About />
      <Footer />
    </WelcomePageStyled>
  );
};

export default WelcomePage;
