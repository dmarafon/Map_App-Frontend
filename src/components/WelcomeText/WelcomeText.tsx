import WelcomeTextStyled from "./WelcomeTextStyled";

const WelcomeText = (): JSX.Element => {
  return (
    <WelcomeTextStyled>
      <div className="welcome__text--container">
        <div className="welcome__image--container">
          <img
            className="welcome__image--logo"
            src="/images/trippy_logo314.webp"
            alt="trippy logo"
            height={150}
          />
        </div>
        <div className="welcome__paragraph--container">
          <p className="welcome__paragraph--regular_text_first">
            The most Lightweight service
          </p>
          <p className="welcome__paragraph--regular_text_second">
            to Store your favorite places
          </p>
          <p className="welcome__paragraph--regular_text_third">
            in the Globe!
          </p>
        </div>
      </div>
    </WelcomeTextStyled>
  );
};

export default WelcomeText;
