import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../redux/store/store";
import WelcomePage from "../WelcomePage";

describe("Given a WelcomePage component", () => {
  describe("When its invoked", () => {
    test("Then it should render a textbox with the text 'EMAIL, 'PASSWORD' and 'SIGN IN'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <WelcomePage />
          </Provider>
        </BrowserRouter>
      );

      const expectedTextEmail = screen.getByRole("textbox", {
        name: /email/i,
      });

      const expectedTextPassword = screen.getByLabelText(/password/i);

      const expectedTextSignIn = screen.getByRole("heading", {
        name: /sign in/i,
      });

      expect(expectedTextEmail).toBeInTheDocument();

      expect(expectedTextPassword).toBeInTheDocument();

      expect(expectedTextSignIn).toBeInTheDocument();
    });

    test("Then it should render 2 images with the alternative text 'Trippy Logo' and 3 svg Icons for social media", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <WelcomePage />
          </Provider>
        </BrowserRouter>
      );

      const expectedLogoImage = screen.getAllByAltText(/trippy logo/i);

      const elementIconButton1 = screen.getByTestId("icon1");
      const elementIconButton2 = screen.getByTestId("icon2");
      const elementIconButton3 = screen.getByTestId("icon3");

      expect(elementIconButton1).toBeInTheDocument();
      expect(elementIconButton2).toBeInTheDocument();
      expect(elementIconButton3).toBeInTheDocument();

      expect(expectedLogoImage).toHaveLength(2);
    });
  });
});
