import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Menu } from "../components/Menu.jsx";

describe("Menu tests", () => {
  it("should render correctly full component" + "with dummy data", () => {
    render(<Menu currentScore={"30"} />);

    // Test if the score is rendered correctly
    const score = screen.getByText("> 30");
    expect(score).toBeInTheDocument();
  });
  it("should correctly handle the buttons click", () => {
    const goBackHandler = jest.fn();
    const onContinueHandler = jest.fn();
    const onLevelSelectHandler = jest.fn();

    render(
      <Menu
        goBack={goBackHandler}
        onContinue={onContinueHandler}
        onLevelSelect={onLevelSelectHandler}
        currentScore={"30"}
      />,
    );

    const goBackButton = screen.getByTestId("back-icon");
    const onContinueButton = screen.getByText("Continue");
    const onLevelSelectButtonEasy = screen.getByText(">Easy");
    const onLevelSelectButtonMedium = screen.getByText(">Medium");
    const onLevelSelectButtonHard = screen.getByText(">Hard");

    // Simulate the click
    fireEvent.click(onContinueButton);
    fireEvent.click(goBackButton);
    fireEvent.click(onLevelSelectButtonEasy);
    fireEvent.click(onLevelSelectButtonMedium);
    fireEvent.click(onLevelSelectButtonHard);

    //Check if buttons renders
    expect(goBackButton).toBeInTheDocument();
    expect(onContinueButton).toBeInTheDocument();
    expect(onLevelSelectButtonEasy).toBeInTheDocument();
    expect(onLevelSelectButtonMedium).toBeInTheDocument();

    //Check if buttons click works
    expect(onLevelSelectButtonHard).toBeInTheDocument();
    expect(goBackHandler).toHaveBeenCalledTimes(1);
    expect(onContinueHandler).toHaveBeenCalledTimes(1);
    expect(onLevelSelectHandler).toHaveBeenCalledTimes(3); // Asert 3 times easy/medium/hard
  });
  it("should pass the data from || onLevelSelect ||", () => {
    const onLevelSelectHandler = jest.fn();

    render(<Menu onLevelSelect={onLevelSelectHandler} />);

    const onLevelSelectButtonEasy = screen.getByText(">Easy");
    const onLevelSelectButtonMedium = screen.getByText(">Medium");
    const onLevelSelectButtonHard = screen.getByText(">Hard");
    fireEvent.click(onLevelSelectButtonEasy);
    fireEvent.click(onLevelSelectButtonMedium);
    fireEvent.click(onLevelSelectButtonHard);

    //Assert the val passed
    expect(onLevelSelectHandler).toHaveBeenCalledWith("easy");
    expect(onLevelSelectHandler).toHaveBeenCalledWith("medium");
    expect(onLevelSelectHandler).toHaveBeenCalledWith("hard");
  });
  it("should render current score", () => {
    render(<Menu currentScore={"30"} />);
    const currentScore = screen.getByText("> 30");

    //Assert 30 in doc
    expect(currentScore).toBeInTheDocument();
  });
  it("should check the slider event", () => {
    const handleVolumeChange = jest.fn();

    const setVolume = jest.fn();

    render(<Menu volume={20} setVolume={setVolume} />);

    const input = screen.getByTestId("volume");
    fireEvent.change(input, { target: { value: 40 } });

    expect(setVolume).toHaveBeenCalledWith("40");
    expect(setVolume).toHaveBeenCalledTimes(1);
  });
});
