import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Time } from "../components/Time.jsx";

describe("Time component", () => {
  it("should render correctly with given data", () => {
    render(<Time seconds={"20"} lastScore={"50"} />);
    const seconds = screen.getByText(/20/i);
    const lastScore = screen.getByText(/50/i);
    expect(lastScore).toBeInTheDocument();
    expect(seconds).toBeInTheDocument();
  });
  it("should render correctly without besttScore", () => {
    render(<Time seconds={"20"} />);
    const seconds = screen.getByText(/20/i);
    expect(seconds).toBeInTheDocument();

    const bestScoreLabel = screen.queryByText(/Best Score:/i);
    expect(bestScoreLabel).not.toBeInTheDocument();
  });
  it("should call onClick handler with button is clicked", () => {
    const handleClick = jest.fn();
    render(<Time seconds={"20"} lastScore={"50"} onClick={handleClick} />);
    const button = screen.getByRole("button");
    button.click();

    expect(handleClick).toBeCalledTimes(1);
  });
  it("should render icon correctly", () => {
    render(<Time seconds={"20"} lastScore={"50"} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    const icon = screen.getByTestId("settings-icon");
    expect(icon).toBeInTheDocument();
  });
  it("should not render bestScore if null val", () => {
    render(<Time seconds={"20"} lastScore={null} />);
    const bestScoreLabel = screen.queryByText("Best Score:");
    expect(bestScoreLabel).toBeNull();
  });
  it("should render bestScore when data is provided", () => {
    render(<Time seconds={"20"} lastScore={"50"} />);
    const bestScoreLabel = screen.getByText("Best Score:");
    expect(bestScoreLabel).toBeInTheDocument();

    const bestScoreValue = screen.getByText("50");
    expect(bestScoreValue).toBeInTheDocument();
  });
});
