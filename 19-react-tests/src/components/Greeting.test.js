import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as text", () => {
    render(<Greeting />);

    const textElement = screen.getByText(/hello world/i);
    expect(textElement).toBeInTheDocument();
  });

  test("renders it's good to see you if the button was not clicked", () => {
    render(<Greeting />);

    const textElement = screen.getByText(/it's good to see you/i);
    expect(textElement).toBeInTheDocument();
  });

  test("renders changed if the button was clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const textElement = screen.getByText(/changed/i);
    expect(textElement).toBeInTheDocument();
  });

  test("does not renders it's good to see you if the button was clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const textElement = screen.queryByText(/it's good to see you/i);
    expect(textElement).toBeNull();
  });
});
