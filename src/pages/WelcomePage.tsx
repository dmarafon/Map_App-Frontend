import RegisterLoginForm from "../components/RegisterLoginForm/RegisterLoginForm";
import WelcomeText from "../components/WelcomText/WelcomeText";

const WelcomePage = (): JSX.Element => {
  return (
    <>
      <WelcomeText />
      <RegisterLoginForm />
    </>
  );
};

export default WelcomePage;
