import RegisterLoginForm from "../components/RegisterLoginForm/RegisterLoginForm";
import WelcomePageStyled from "./WelcomePageStyled";

const WelcomePage = (): JSX.Element => {
  return (
    <WelcomePageStyled>
      <div className="welcome__text--container">
        <img
          className="welcome__image--logo"
          src="/images/trippy_logo314.webp"
          alt="trippy logo"
          height={150}
        />{" "}
        <p className="welcome__paragraph--regular_text_first">
          The most Lightweight service
        </p>
        <p className="welcome__paragraph--regular_text_second">
          to Store your favorite places
        </p>
        <p className="welcome__paragraph--regular_text_third">in the Globe!</p>
      </div>
      <RegisterLoginForm />
    </WelcomePageStyled>
  );
};

export default WelcomePage;
