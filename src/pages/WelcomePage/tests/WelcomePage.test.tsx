import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../redux/store/store";
import WelcomePage from "../WelcomePage";

describe("Given a WelcomePage component", () => {
  describe("When its invoked", () => {
    test("Then it should render a textbox with the text 'EMAIL and 'PASSWORD', 'SIGN IN' to be in the document", () => {
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
  });
});
