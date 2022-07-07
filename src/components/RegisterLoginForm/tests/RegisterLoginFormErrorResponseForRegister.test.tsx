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
  describe("When the user does not fills any of the Register fields and clicks in the REGISTER button", () => {
    test("Then a warning will show for all fields showing that they're in blank", async () => {
      const actionToBeDispatched = {
        payload: "Register Blank",
        type: "ui/apiResponse",
      };

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterLoginForm />
          </Provider>
        </BrowserRouter>
      );

      userEvent.click(screen.getByText(/don't have an account\?/i));

      const signInButton = screen.getByRole("button", {
        name: /register/i,
      });

      userEvent.click(signInButton);

      expect(mockDispatch).toHaveBeenCalledWith(actionToBeDispatched);

      await waitFor(() => {
        store.dispatch(actionToBeDispatched);
      });

      const expectedFirstnameWarning = screen.getByText(
        /empty firstname field/i
      );

      const expectedSurnameWarning = screen.getByText(/empty surname field/i);

      const expectedEmailWarning = screen.getByText(/empty email field/i);

      const expectedPasswordWarning = screen.getByText(/empty password field/i);

      const expectedCitylWarning = screen.getByText(/empty city field/i);

      const expectedCountryWarning = screen.getByText(/empty country field/i);

      expect(expectedFirstnameWarning).toBeInTheDocument();

      expect(expectedSurnameWarning).toBeInTheDocument();

      expect(expectedEmailWarning).toBeInTheDocument();

      expect(expectedPasswordWarning).toBeInTheDocument();

      expect(expectedCitylWarning).toBeInTheDocument();

      expect(expectedCountryWarning).toBeInTheDocument();
    });
  });

  describe("When the user does fill all fields correctly except the password field and press the 'REGISTER' button", () => {
    test("Then a warning will show only for the password field explaining that it's incorrect and dispatch will not be called", async () => {
      const textInput = [
        "testname",
        "testsurname",
        "test@test.com",
        "1234",
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

      const expectedFirstnameWarning = screen.queryByText(
        /empty firstname field/i
      );

      const expectedSurnameWarning = screen.queryByText(/empty surname field/i);

      const expectedEmailWarning = screen.queryByText(/empty email field/i);

      const expectedPasswordWarning = screen.getByText(/minimun 5 char\./i);

      const expectedCitylWarning = screen.queryByText(/empty city field/i);

      const expectedCountryWarning = screen.queryByText(/empty country field/i);

      expect(expectedFirstnameWarning).not.toBeInTheDocument();

      expect(expectedSurnameWarning).not.toBeInTheDocument();

      expect(expectedEmailWarning).not.toBeInTheDocument();

      expect(expectedPasswordWarning).toBeInTheDocument();

      expect(expectedCitylWarning).not.toBeInTheDocument();

      expect(expectedCountryWarning).not.toBeInTheDocument();

      expect(mockDispatch).not.toHaveBeenCalled();
    });
  });

  describe("When the user does fill all fields correctly except the email field and press the 'REGISTER' button", () => {
    test("Then a warning will show only for the email field explaining that it's incorrect and dispatch will not be called", async () => {
      const textInput = [
        "testname",
        "testsurname",
        "test",
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

      const expectedFirstnameWarning = screen.queryByText(
        /empty firstname field/i
      );

      const expectedSurnameWarning = screen.queryByText(/empty surname field/i);

      const expectedEmailWarning = screen.getByText(/invalid email address/i);

      const expectedPasswordWarning =
        screen.queryByText(/empty password field/i);

      const expectedCitylWarning = screen.queryByText(/empty city field/i);

      const expectedCountryWarning = screen.queryByText(/empty country field/i);

      expect(expectedFirstnameWarning).not.toBeInTheDocument();

      expect(expectedSurnameWarning).not.toBeInTheDocument();

      expect(expectedEmailWarning).toBeInTheDocument();

      expect(expectedPasswordWarning).not.toBeInTheDocument();

      expect(expectedCitylWarning).not.toBeInTheDocument();

      expect(expectedCountryWarning).not.toBeInTheDocument();

      expect(mockDispatch).not.toHaveBeenCalled();
    });
  });

  describe("When the user does fill all fields correctly and press the 'REGISTER' button", () => {
    test("Then the dispatch function should be called with the Thunk", async () => {
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

      const expectedFirstnameWarning = screen.queryByText(
        /empty firstname field/i
      );

      const expectedSurnameWarning = screen.queryByText(/empty surname field/i);

      const expectedEmailWarning = screen.queryByText(/empty email field/i);

      const expectedPasswordWarning =
        screen.queryByText(/empty password field/i);

      const expectedCitylWarning = screen.queryByText(/empty city field/i);

      const expectedCountryWarning = screen.queryByText(/empty country field/i);

      expect(expectedFirstnameWarning).not.toBeInTheDocument();

      expect(expectedSurnameWarning).not.toBeInTheDocument();

      expect(expectedEmailWarning).not.toBeInTheDocument();

      expect(expectedPasswordWarning).not.toBeInTheDocument();

      expect(expectedCitylWarning).not.toBeInTheDocument();

      expect(expectedCountryWarning).not.toBeInTheDocument();

      expect(mockDispatch).toHaveBeenCalledWith(expect.any(Function));
    });
  });
});
