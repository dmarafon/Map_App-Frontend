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
  describe("When the user fills all the Register field correctly, but an unknown error occours in the server", () => {
    test("Then a modal will open warning the user about the unknown error", async () => {
      const textInput = [
        "testname",
        "testsurname",
        "test@test.com",
        "12345",
        "testcity",
        "testcountry",
      ];

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterLoginForm />
          </Provider>
        </BrowserRouter>
      );

      userEvent.click(screen.getByText(/don't have an account\?/i));

      const firstnameField = screen.getByRole("textbox", {
        name: /first name/i,
      });

      const surnameField = screen.getByRole("textbox", {
        name: /surname/i,
      });

      const emailField = screen.getByRole("textbox", {
        name: /email/i,
      });

      const passwordField = screen.getByLabelText(/password/i);

      const cityField = screen.getByRole("textbox", {
        name: /city/i,
      });

      const countryField = screen.getByRole("textbox", {
        name: /country/i,
      });

      userEvent.type(firstnameField, textInput[0]);
      userEvent.type(surnameField, textInput[1]);
      userEvent.type(emailField, textInput[2]);
      userEvent.type(passwordField, textInput[3]);
      userEvent.type(cityField, textInput[4]);
      userEvent.type(countryField, textInput[5]);

      const signInButton = screen.getByRole("button", {
        name: /register/i,
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

  describe("When the user fills all the Register field correctly, but that same user is already present in the database", () => {
    test("Then a modal will open warning the user about the existence of that user already", async () => {
      const textInput = [
        "testname",
        "testsurname",
        "test@test.com",
        "12345",
        "testcity",
        "testcountry",
      ];

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterLoginForm />
          </Provider>
        </BrowserRouter>
      );

      userEvent.click(screen.getByText(/don't have an account\?/i));

      const firstnameField = screen.getByRole("textbox", {
        name: /first name/i,
      });

      const surnameField = screen.getByRole("textbox", {
        name: /surname/i,
      });

      const emailField = screen.getByRole("textbox", {
        name: /email/i,
      });

      const passwordField = screen.getByLabelText(/password/i);

      const cityField = screen.getByRole("textbox", {
        name: /city/i,
      });

      const countryField = screen.getByRole("textbox", {
        name: /country/i,
      });

      userEvent.type(firstnameField, textInput[0]);
      userEvent.type(surnameField, textInput[1]);
      userEvent.type(emailField, textInput[2]);
      userEvent.type(passwordField, textInput[3]);
      userEvent.type(cityField, textInput[4]);
      userEvent.type(countryField, textInput[5]);

      const signInButton = screen.getByRole("button", {
        name: /register/i,
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
          payload: "User alr",
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
