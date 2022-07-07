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

describe("Given a RegisterLogin component", () => {
  describe("When the user fills the password field and email, but incorrectly, and receives a message modal and press the 'X' button of the modal", () => {
    test("Then the modal should be closed", async () => {
      const textInput = ["test@test.com", "12345"];

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterLoginForm />
          </Provider>
        </BrowserRouter>
      );

      const emailField = screen.getByRole("textbox", {
        name: /email/i,
      });
      const passwordField = screen.getByLabelText(/password/i);

      userEvent.type(emailField, textInput[0]);
      userEvent.type(passwordField, textInput[1]);

      const signInButton = screen.getByRole("button", {
        name: /login/i,
      });

      userEvent.click(signInButton);

      await waitFor(() => {
        const uIaction = {
          type: "ui/loading",
        };

        store.dispatch(uIaction);
      });

      await waitFor(() => {
        const uIaction = {
          type: "ui/finishedLoading",
        };

        store.dispatch(uIaction);
      });

      await waitFor(() => {
        const uIaction = {
          type: "ui/apiResponse",
          payload: "Incorrect Email",
        };

        store.dispatch(uIaction);
      });

      const element = screen.getByTestId("custom-element");

      expect(element).toBeInTheDocument();

      expect(mockDispatch).toHaveBeenCalled();

      const buttonCloseModal = screen.getByRole("button", {
        name: /×/i,
      });

      userEvent.click(buttonCloseModal);

      await waitFor(() => {
        const uIaction = {
          type: "ui/cleanApiResponse",
        };

        store.dispatch(uIaction);
      });

      expect(element).not.toBeInTheDocument();
    });
  });

  describe("When the user fills the password field and email, but an unknown error happens", () => {
    test("Then a modal should open warning the user about the server error", async () => {
      const textInput = ["test@test.com", "12345"];

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterLoginForm />
          </Provider>
        </BrowserRouter>
      );

      const emailField = screen.getByRole("textbox", {
        name: /email/i,
      });
      const passwordField = screen.getByLabelText(/password/i);

      userEvent.type(emailField, textInput[0]);
      userEvent.type(passwordField, textInput[1]);

      const signInButton = screen.getByRole("button", {
        name: /login/i,
      });

      userEvent.click(signInButton);

      await waitFor(() => {
        const uIaction = {
          type: "ui/loading",
        };

        store.dispatch(uIaction);
      });

      await waitFor(() => {
        const uIaction = {
          type: "ui/finishedLoading",
        };

        store.dispatch(uIaction);
      });

      await waitFor(() => {
        const uIaction = {
          type: "ui/apiResponse",
          payload: "Unknown Error",
        };

        store.dispatch(uIaction);
      });

      const element = screen.getByTestId("custom-element");

      expect(element).toBeInTheDocument();

      expect(mockDispatch).toHaveBeenCalled();

      const buttonCloseModal = screen.getByRole("button", {
        name: /×/i,
      });

      userEvent.click(buttonCloseModal);

      await waitFor(() => {
        const uIaction = {
          type: "ui/cleanApiResponse",
        };

        store.dispatch(uIaction);
      });

      expect(element).not.toBeInTheDocument();
    });
  });
});
