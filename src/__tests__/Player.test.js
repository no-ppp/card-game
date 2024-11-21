import { fireEvent, screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Player } from "../components/Player";

describe("<Player /> Tests", () => {
  it("should render player props data correctly", () => {
    render(<Player score={"30"} />);
    const score = screen.getByText("30");
    expect(score).toBeInTheDocument();
  });
  it("should handle the input value", () => {
    const handleSubmit = jest.fn();
    render(<Player score={"30"} handleSubmit={handleSubmit} />);
    const input = screen.getByPlaceholderText("player");
    fireEvent.click(input);
    const button = screen.getByRole("button");
    fireEvent.change(input, { target: { value: "PlayerName" } });
    fireEvent.click(button);
    expect(input.value).toBe("PlayerName");
  });
});
