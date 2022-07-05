import { screen, render } from "@testing-library/react";
import ReactPortal from "../ReactPortal";

describe("Given a ReactPortal component", () => {
  describe("When its invoked", () => {
    test("Then it should mutate the DOM by creating a div container with the test id 'custom-element'", () => {
      render(<ReactPortal />);

      const elementReactPortal = screen.getByTestId("custom-element");

      expect(elementReactPortal).toBeInTheDocument();

      elementReactPortal.remove();
    });
  });

  describe("When its invoked twice", () => {
    test("Then it should render 2 React Portal, but with only 1 div element as a custom wrapper for both of them, hence 3 divs in total", () => {
      render(
        <>
          <ReactPortal />
          <ReactPortal />
        </>
      );

      const elementReactPortal = screen.getAllByTestId("custom-element");

      expect(elementReactPortal).toHaveLength(2);

      // eslint-disable-next-line testing-library/no-node-access
      const divElement = document.querySelectorAll("div");

      expect(divElement).toHaveLength(3);
    });
  });
});
