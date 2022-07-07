import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../redux/store/store";
import RegisterLoginForm from "../RegisterLoginForm";

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

  test("Then it renders a paragraph with the text 'don't have an account' and another paragraph with the text 'click here to right now' anda  span with the text 'sign up'", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <RegisterLoginForm />
        </Provider>
      </BrowserRouter>
    );

    const expectedFirstParagraph = screen.getByText(/don't have an account\?/i);

    const expectedSecondParagraph = screen.getByText(
      /click here to right now/i
    );

    const expectedSpanText = screen.getByText(/sign up/i);

    expect(expectedFirstParagraph).toBeInTheDocument();
    expect(expectedSecondParagraph).toBeInTheDocument();
    expect(expectedSpanText).toBeInTheDocument();
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

      expect(expectedText).toBeInTheDocument();
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

    test("Then it renders a paragraph with the text 'already have an account' and another paragraph with the text 'click here to' anda  span with the text 'sign in'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterLoginForm />
          </Provider>
        </BrowserRouter>
      );

      userEvent.click(screen.getByText(/don't have an account\?/i));

      const expectedFirstParagraph = screen.getByText(
        /already have an account\?/i
      );

      const expectedSecondParagraph = screen.getByText(/click here to/i);

      const expectedSpanText = screen.getByText(/sign in/i);

      expect(expectedFirstParagraph).toBeInTheDocument();
      expect(expectedSecondParagraph).toBeInTheDocument();
      expect(expectedSpanText).toBeInTheDocument();
    });
  });

  describe("When it's invoked and an user clicks on the text that redirects to the Register Form and then into the text that redirects to the Login Form", () => {
    test("Then it renders a paragraph with the text 'don't have an account' and another paragraph with the text 'click here to right now' anda  span with the text 'sign up'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterLoginForm />
          </Provider>
        </BrowserRouter>
      );

      userEvent.click(screen.getByText(/don't have an account\?/i));

      userEvent.click(screen.getByText(/already have an account\?/i));

      const expectedFirstParagraph = screen.getByText(
        /don't have an account\?/i
      );

      const expectedSecondParagraph = screen.getByText(
        /click here to right now/i
      );

      const expectedSpanText = screen.getByText(/sign up/i);

      expect(expectedFirstParagraph).toBeInTheDocument();
      expect(expectedSecondParagraph).toBeInTheDocument();
      expect(expectedSpanText).toBeInTheDocument();
    });
  });
});
