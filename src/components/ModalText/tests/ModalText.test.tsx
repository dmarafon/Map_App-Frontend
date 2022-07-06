import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../redux/store/store";
import ModalText from "../ModalText";

describe("Given a Modal component", () => {
  describe("When its invoked", () => {
    test("Then it should render a button element", () => {
      const testFunction = () => "test";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <ModalText
              children={"Test Modal"}
              handleClose={testFunction}
              isOpen={true}
              customFunction={""}
            />
          </Provider>
        </BrowserRouter>
      );

      const testButton = screen.getByRole("button");

      expect(testButton).toBeInTheDocument();
    });
    describe("When its invoked and the user clicks in the close button", () => {
      test("Then the modal should trigger the passed function, in this test case the string 'test' logged in the console", () => {
        const testFunction = () => console.log("test");

        const expectedFunction = (console.log = jest.fn());

        const expectedConsoledText = "test";

        render(
          <BrowserRouter>
            <Provider store={store}>
              <ModalText
                children={"Test Modal"}
                handleClose={testFunction}
                isOpen={true}
                customFunction={""}
              />
            </Provider>
          </BrowserRouter>
        );

        const testButton = screen.getByRole("button");

        userEvent.click(testButton);

        expect(expectedFunction).toHaveBeenCalledWith(expectedConsoledText);
      });
    });
  });
});
