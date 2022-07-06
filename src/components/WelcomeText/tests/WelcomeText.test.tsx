import { render, screen } from "@testing-library/react";
import WelcomeText from "../WelcomeText";

describe("Given a WelcomeText component", () => {
  describe("When its invoked", () => {
    test("Then it should render an image with the alternative text 'trippy logo'", () => {
      render(<WelcomeText />);

      const expectedLogoImage = screen.getByAltText(/trippy logo/i);

      expect(expectedLogoImage).toBeInTheDocument();
    });

    test("Then it should render a paragraph element with the text 'the most lightweight service'", () => {
      render(<WelcomeText />);

      const expectedText = screen.getByText(/the most lightweight service/i);

      expect(expectedText).toBeInTheDocument();
    });

    test("Then it should render a paragraph element with the text 'to store your favorite places'", () => {
      render(<WelcomeText />);

      const expectedText = screen.getByText(/to store your favorite places/i);

      expect(expectedText).toBeInTheDocument();
    });

    test("Then it should render a paragraph element with the text 'in the globe'", () => {
      render(<WelcomeText />);

      const expectedText = screen.getByText(/in the globe/i);

      expect(expectedText).toBeInTheDocument();
    });
  });
});
