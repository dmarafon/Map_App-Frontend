import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import store from "../../../redux/store/store";
import About from "../About";

describe("Given an About component", () => {
  describe("When its invoked and the user does not scrolls 100 pixels down", () => {
    test("Then it should not render an image with the text 'illustration of a world spinning with markers'", () => {
      render(
        <Provider store={store}>
          <About />
        </Provider>
      );

      const expectedImage = screen.queryByRole("img", {
        name: /illustration of a world spinning with markers/i,
      });

      expect(expectedImage).not.toBeInTheDocument();
    });
  });
});
