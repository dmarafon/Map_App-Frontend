import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import RegisterLoginForm from "../../components/RegisterLoginForm/RegisterLoginForm";
import WelcomeText from "../../components/WelcomeText/WelcomeText";
import WelcomePageStyled from "./WelcomePageStyled";

const WelcomePage = (): JSX.Element => {
  return (
    <WelcomePageStyled>
      <div className="welcome__container">
        <WelcomeText />
        <svg
          className="welcome__image--marker"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1000 1000"
          enableBackground="new 0 0 1000 1000"
          xmlSpace="preserve"
        >
          <metadata>
            {" "}
            Svg Vector Icons : http://www.onlinewebfonts.com/icon{" "}
          </metadata>
          <g>
            <path d="M500,42.7c162.1,0,294,131.9,294,294c0,51.6-13.7,102.4-39.5,147L500,924.7l-254.5-441c-25.8-44.6-39.5-95.4-39.5-147C206,174.5,337.9,42.7,500,42.7L500,42.7z M500,451c63,0,114.3-51.3,114.3-114.3c0-63-51.3-114.3-114.3-114.3c-63,0-114.3,51.3-114.3,114.3C385.7,399.7,437,451,500,451z M500,10c-180.4,0-326.7,146.3-326.7,326.7c0,59.6,16,115.3,43.9,163.3L500,990l282.8-490c27.8-48.1,43.9-103.8,43.9-163.3C826.6,156.3,680.4,10,500,10L500,10L500,10z M500,418.3c-45.1,0-81.7-36.5-81.7-81.6c0-45.1,36.6-81.6,81.7-81.6c45.1,0,81.6,36.6,81.6,81.6C581.7,381.8,545.1,418.3,500,418.3L500,418.3z" />
          </g>
        </svg>
        <RegisterLoginForm />
      </div>
      <About />
      <Footer />
    </WelcomePageStyled>
  );
};

export default WelcomePage;
