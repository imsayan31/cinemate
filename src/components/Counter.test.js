import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

// Test 1: Initial render
test("renders initial count", () => {
  render(<Counter />);
  expect(screen.getByTestId("count")).toHaveTextContent("Count: 0");
});

test("renders increment and decrement buttons", () => {
  render(<Counter />);
  expect(screen.getByText("Increment")).toBeInTheDocument();
  expect(screen.getByText("Decrement")).toBeInTheDocument();
});

test("increments count when Increment button is clicked", () => {
  render(<Counter />);
  expect(screen.getByTestId("count")).toHaveTextContent("Count: 0");
  /* const incrementButton = screen.getByText("Increment");
  incrementButton.click(); */
  fireEvent.click(screen.getByText("Increment"));
  expect(screen.getByTestId("count")).toHaveTextContent("Count: 1");
});

test("decrements count when Decrement button is clicked", () => {
  render(<Counter />);
  expect(screen.getByTestId("count")).toHaveTextContent("Count: 0");
  /* const decrementButton = screen.getByText("Decrement");
  decrementButton.click(); */
  fireEvent.click(screen.getByText("Decrement"));
  expect(screen.getByTestId("count")).toHaveTextContent("Count: -1");
});