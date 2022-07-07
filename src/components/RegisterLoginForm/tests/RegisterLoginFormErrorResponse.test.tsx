import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../redux/store/store";
import RegisterLoginForm from "../RegisterLoginForm";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a RegisterLogin Page", () => {
  describe("When the user does not fills the email and password fields and clicks in the LOGIN button", () => {
    test("Then a warning will show for the Email and Password field explaining that they're in blank", async () => {
      const actionToBeDispatched = {
        payload: "Blank",
        type: "ui/apiResponse",
      };

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterLoginForm />
          </Provider>
        </BrowserRouter>
      );

      const signInButton = screen.getByRole("button", {
        name: /login/i,
      });

      userEvent.click(signInButton);

      expect(mockDispatch).toHaveBeenCalledWith(actionToBeDispatched);

      await waitFor(() => {
        store.dispatch(actionToBeDispatched);
      });

      const expectedEmailWarning = screen.getByText(/empty email field/i);

      const expectedPasswordWarning = screen.getByText(/empty password field/i);

      expect(expectedEmailWarning).toBeInTheDocument();

      expect(expectedPasswordWarning).toBeInTheDocument();
    });
  });

  describe("When the user fills the email in an valid way and not the password field", () => {
    test("Then a warning will not show for the Email but only for the Password field explaining that its blank", async () => {
      const textInput = ["test@test.com"];

      const actionToBeDispatched = {
        payload: "Email Valid & Password Blank",
        type: "ui/apiResponse",
      };

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterLoginForm />
          </Provider>
        </BrowserRouter>
      );

      const usernameField = screen.getByRole("textbox", {
        name: /email/i,
      });

      userEvent.type(usernameField, textInput[0]);

      const signInButton = screen.getByRole("button", {
        name: /login/i,
      });

      userEvent.click(signInButton);

      expect(mockDispatch).toHaveBeenCalledWith(actionToBeDispatched);

      await waitFor(() => {
        store.dispatch(actionToBeDispatched);
      });

      const expectedEmailWarning = screen.queryByText(/empty email field/i);

      const expectedPasswordWarning = screen.getByText(/empty password field/i);

      expect(expectedEmailWarning).not.toBeInTheDocument();

      expect(expectedPasswordWarning).toBeInTheDocument();
    });
  });

  describe("When the user fills the email in an invalid way and not the password field", () => {
    test("Then a warning will show for the invalid Email and another for the Password field explaining that its blank", async () => {
      const textInput = ["test"];

      const actionToBeDispatched = {
        payload: "Email Invalid & Password Blank",
        type: "ui/apiResponse",
      };

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterLoginForm />
          </Provider>
        </BrowserRouter>
      );

      const usernameField = screen.getByRole("textbox", {
        name: /email/i,
      });

      userEvent.type(usernameField, textInput[0]);

      const signInButton = screen.getByRole("button", {
        name: /login/i,
      });

      userEvent.click(signInButton);

      expect(mockDispatch).toHaveBeenCalledWith(actionToBeDispatched);

      await waitFor(() => {
        store.dispatch(actionToBeDispatched);
      });

      const expectedEmailWarning = screen.queryByText(/invalid email address/i);

      const expectedPasswordWarning = screen.getByText(/empty password field/i);

      expect(expectedEmailWarning).toBeInTheDocument();

      expect(expectedPasswordWarning).toBeInTheDocument();
    });
  });
});
