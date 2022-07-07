import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../redux/store/store";
import { loginUserThunk } from "../../../redux/thunks/userThunks";
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

  describe("When the user leaves the email field in blank and fill with an invalid  password the given inputs", () => {
    test("Then a warning will show for the invalid Email and another for the Password field explaining that its blank", async () => {
      const textInput = ["1234"];

      const actionToBeDispatched = {
        payload: "Email Blank & Password Invalid",
        type: "ui/apiResponse",
      };

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterLoginForm />
          </Provider>
        </BrowserRouter>
      );

      const passwordField = screen.getByLabelText(/password/i);

      userEvent.type(passwordField, textInput[0]);

      const signInButton = screen.getByRole("button", {
        name: /login/i,
      });

      userEvent.click(signInButton);

      expect(mockDispatch).toHaveBeenCalledWith(actionToBeDispatched);

      await waitFor(() => {
        store.dispatch(actionToBeDispatched);
      });

      const expectedEmailWarning = screen.queryByText(/empty email field/i);

      const expectedPasswordWarning = screen.getByText(
        /password should have 5 to 15 char./i
      );

      expect(expectedEmailWarning).toBeInTheDocument();

      expect(expectedPasswordWarning).toBeInTheDocument();
    });
  });

  describe("When the user adds an invalid email and an invalid password as well", () => {
    test("Then a warning will show for the invalid Email and another for the Password field explaining that both are invalid", async () => {
      const textInput = ["test", "1234"];

      const actionToBeDispatched = {
        payload: "Email Invalid & Password Invalid",
        type: "ui/apiResponse",
      };

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

      expect(mockDispatch).toHaveBeenCalledWith(actionToBeDispatched);

      await waitFor(() => {
        store.dispatch(actionToBeDispatched);
      });

      const expectedEmailWarning = screen.queryByText(/invalid email address/i);

      const expectedPasswordWarning = screen.getByText(
        /password should have 5 to 15 char./i
      );

      expect(expectedEmailWarning).toBeInTheDocument();

      expect(expectedPasswordWarning).toBeInTheDocument();
    });
  });

  describe("When the user leaves the email in blank but adds a valid password", () => {
    test("Then only a warning will show that the email field is blank", async () => {
      const textInput = ["12345"];

      const actionToBeDispatched = {
        payload: "Email Blank",
        type: "ui/apiResponse",
      };

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterLoginForm />
          </Provider>
        </BrowserRouter>
      );

      const passwordField = screen.getByLabelText(/password/i);

      userEvent.type(passwordField, textInput[0]);

      const signInButton = screen.getByRole("button", {
        name: /login/i,
      });

      userEvent.click(signInButton);

      expect(mockDispatch).toHaveBeenCalledWith(actionToBeDispatched);

      await waitFor(() => {
        store.dispatch(actionToBeDispatched);
      });

      const expectedEmailWarning = screen.queryByText(/empty email field/i);

      const expectedPasswordWarning = screen.queryByText(
        /password should have 5 to 15 char./i
      );

      expect(expectedEmailWarning).toBeInTheDocument();

      expect(expectedPasswordWarning).not.toBeInTheDocument();
    });
  });

  describe("When the user adds an invalid email but adds a valid password", () => {
    test("Then only a warning will show that the email field is invalid", async () => {
      const textInput = ["test", "12345"];

      const actionToBeDispatched = {
        payload: "Email Invalid",
        type: "ui/apiResponse",
      };

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

      expect(mockDispatch).toHaveBeenCalledWith(actionToBeDispatched);

      await waitFor(() => {
        store.dispatch(actionToBeDispatched);
      });

      const expectedEmailWarning = screen.queryByText(/invalid email address/i);

      const expectedPasswordWarning = screen.queryByText(
        /password should have 5 to 15 char./i
      );

      expect(expectedEmailWarning).toBeInTheDocument();

      expect(expectedPasswordWarning).not.toBeInTheDocument();
    });
  });

  describe("When the user adds an valid email but adds an invalid password", () => {
    test("Then only a warning will show that the password field is invalid", async () => {
      const textInput = ["test@test.com", "1234"];

      const actionToBeDispatched = {
        payload: "Password Length",
        type: "ui/apiResponse",
      };

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

      expect(mockDispatch).toHaveBeenCalledWith(actionToBeDispatched);

      await waitFor(() => {
        store.dispatch(actionToBeDispatched);
      });

      const expectedEmailWarning = screen.queryByText(/invalid email address/i);

      const expectedPasswordWarning = screen.queryByText(
        /password should have 5 to 15 char./i
      );

      expect(expectedEmailWarning).not.toBeInTheDocument();

      expect(expectedPasswordWarning).toBeInTheDocument();
    });
  });

  describe("When the user adds  valid email and a valid password", () => {
    test("Then the dispatch function should be called with the Thunk", async () => {
      const textInput = ["test@test.com", "12345"];

      const actionToBeDispatched = loginUserThunk({
        email: "test@test.com",
        password: "12345",
      });

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

      console.log(mockDispatch.mock.calls[0]);

      expect(mockDispatch).toHaveBeenCalledWith(expect.any(Function));

      await waitFor(() => {
        store.dispatch(actionToBeDispatched);
      });
    });
  });
});
