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
  describe("When it's invoked", () => {
    test("Then it renders a textbox with the text 'EMAIL'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterLoginForm />
          </Provider>
        </BrowserRouter>
      );

      const expectedText = screen.getByRole("textbox", {
        name: /email/i,
      });

      expect(expectedText).toBeInTheDocument();
    });

    test("Then it renders a label with the text 'PASSWORD'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterLoginForm />
          </Provider>
        </BrowserRouter>
      );

      const expectedText = screen.getByLabelText(/password/i);

      expect(expectedText).toBeInTheDocument();
    });

    test("Then it renders a heading with the text 'SIGN IN'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterLoginForm />
          </Provider>
        </BrowserRouter>
      );

      const expectedText = screen.getByRole("heading", {
        name: /sign in/i,
      });

      expect(expectedText).toBeInTheDocument();
    });

    test("Then it renders a button with the text 'LOGIN'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterLoginForm />
          </Provider>
        </BrowserRouter>
      );

      const expectedText = screen.getByRole("button", {
        name: /login/i,
      });

      expect(expectedText).toBeInTheDocument();
    });
  });

  describe("When it's invoked and an user clicks on the text that redirects to the Register Form", () => {
    test("Then it renders a heading with the text 'SIGN UP'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterLoginForm />
          </Provider>
        </BrowserRouter>
      );
      userEvent.click(screen.getByText(/don't have an account\?/i));

      const expectedText = screen.getByRole("heading", {
        name: /sign up/i,
      });

      expect(expectedText).toBeInTheDocument();
    });
  });

  test("Then it renders a textbox with the text 'FIRSTNAME'", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <RegisterLoginForm />
        </Provider>
      </BrowserRouter>
    );
    userEvent.click(screen.getByText(/don't have an account\?/i));

    const expectedText = screen.getByRole("textbox", {
      name: /first name/i,
    });

    expect(expectedText).toBeInTheDocument();
  });

  test("Then it renders a textbox with the text 'SURNAME'", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <RegisterLoginForm />
        </Provider>
      </BrowserRouter>
    );
    userEvent.click(screen.getByText(/don't have an account\?/i));

    const expectedText = screen.getByRole("textbox", {
      name: /surname/i,
    });
  });

  test("Then it renders a textbox with the text 'EMAIL'", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <RegisterLoginForm />
        </Provider>
      </BrowserRouter>
    );

    userEvent.click(screen.getByText(/don't have an account\?/i));

    const expectedText = screen.getByRole("textbox", {
      name: /email/i,
    });

    expect(expectedText).toBeInTheDocument();
  });

  test("Then it renders a label with the text 'PASSWORD'", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <RegisterLoginForm />
        </Provider>
      </BrowserRouter>
    );

    userEvent.click(screen.getByText(/don't have an account\?/i));

    const expectedText = screen.getByLabelText(/password/i);

    expect(expectedText).toBeInTheDocument();
  });

  test("Then it renders a textbox with the text 'CITY'", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <RegisterLoginForm />
        </Provider>
      </BrowserRouter>
    );

    userEvent.click(screen.getByText(/don't have an account\?/i));

    const expectedText = screen.getByRole("textbox", {
      name: /city/i,
    });

    expect(expectedText).toBeInTheDocument();
  });

  test("Then it renders a textbox with the text 'COUNTRY'", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <RegisterLoginForm />
        </Provider>
      </BrowserRouter>
    );

    userEvent.click(screen.getByText(/don't have an account\?/i));

    const expectedText = screen.getByRole("textbox", {
      name: /country/i,
    });

    expect(expectedText).toBeInTheDocument();
  });

  test("Then it renders a button with the text 'REGISTER'", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <RegisterLoginForm />
        </Provider>
      </BrowserRouter>
    );

    userEvent.click(screen.getByText(/don't have an account\?/i));

    const expectedText = screen.getByRole("button", {
      name: /register/i,
    });

    expect(expectedText).toBeInTheDocument();
  });
});
// describe("When the user fills the name, username and password fields", () => {
//   test("Then the login button should be enabled", () => {
//     const textInput = ["jose", "1234"];

//     render(
//       <BrowserRouter>
//         <Provider store={store}>
//           <LoginForm />
//         </Provider>
//       </BrowserRouter>
//     );

//     const usernameField = screen.getByLabelText("EMAIL");
//     const passwordField = screen.getByLabelText("PASSWORD");

//     const signInButton = screen.getByRole("button", { name: "SIGN IN" });

//     userEvent.type(usernameField, textInput[0]);
//     userEvent.type(passwordField, textInput[1]);

//     expect(signInButton).not.toBeDisabled();
//   });
// });

// describe("When the user does not fills the name, username and password fields", () => {
//   test("Then a modal response will open to warn the user to fill the fields and will disappear when the user clicks in the 'X' button", async () => {
//     const textInput = ["", ""];

//     render(
//       <BrowserRouter>
//         <Provider store={store}>
//           <LoginForm />
//         </Provider>
//       </BrowserRouter>
//     );

//     const usernameField = screen.getByLabelText("EMAIL");
//     const passwordField = screen.getByLabelText("PASSWORD");

//     userEvent.type(usernameField, textInput[0]);
//     userEvent.type(passwordField, textInput[1]);

//     const signInButton = screen.getByRole("button", { name: "SIGN IN" });
//     userEvent.click(signInButton);

//     await waitFor(() => {
//       const uIaction = {
//         type: "ui/apiResponse",
//         payload: "Blank",
//       };

//       store.dispatch(uIaction);
//     });

//     expect(mockDispatch).toHaveBeenCalled();

//     const closeModal = screen.getByRole("button", {
//       name: /×/i,
//     });

//     userEvent.click(closeModal);

//     const element = screen.getByTestId("custom-element");

//     await waitFor(() => {
//       const uIaction = {
//         type: "ui/cleanApiResponse",
//         payload: "new",
//       };

//       store.dispatch(uIaction);
//     });

//     expect(element).not.toBeInTheDocument();
//   });
// });

// describe("When the user  fills the name, username and password fields and submit, and receives a 500 error from the API", () => {
//   test("Then a modal response will open to warn the user and will disappear when the user clicks in the 'X' button", async () => {
//     const textInput = ["Jose", "1234"];

//     render(
//       <BrowserRouter>
//         <Provider store={store}>
//           <LoginForm />
//         </Provider>
//       </BrowserRouter>
//     );

//     const usernameField = screen.getByLabelText("EMAIL");
//     const passwordField = screen.getByLabelText("PASSWORD");

//     userEvent.type(usernameField, textInput[0]);
//     userEvent.type(passwordField, textInput[1]);

//     const signInButton = screen.getByRole("button", { name: "SIGN IN" });
//     userEvent.click(signInButton);

//     await waitFor(() => {
//       const uIaction = {
//         type: "ui/apiResponse",
//         payload: "Bad Request",
//       };

//       store.dispatch(uIaction);
//     });

//     expect(mockDispatch).toHaveBeenCalled();

//     const closeModal = screen.getByRole("button", {
//       name: /×/i,
//     });

//     userEvent.click(closeModal);

//     const element = screen.getByTestId("custom-element");

//     await waitFor(() => {
//       const uIaction = {
//         type: "ui/cleanApiResponse",
//         payload: "new",
//       };

//       store.dispatch(uIaction);
//     });

//     expect(element).not.toBeInTheDocument();
//   });
