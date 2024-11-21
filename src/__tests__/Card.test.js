import { fireEvent, screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "../components/Card";
import defaultImg from "../assets/images/card1.png";

describe("<Card/> Tests", () => {
  it("should render the correct background image when flipped is true", () => {
    const image = "image"; // Możesz tutaj użyć odpowiedniego URL
    render(<Card image={image} flipped={true} />);
    const cardDiv = screen.getByTestId("card");

    //Assert the correct image url
    expect(cardDiv).toHaveStyle(`background-image: url(${image})`);
  });
  it("should render the default background image when flipped is false", () => {
    render(<Card image={defaultImg} flipped={false} />);
    const cardDiv = screen.getByTestId("card");
    expect(cardDiv).toHaveStyle(`background-image: url(${defaultImg})`);
  });
  it("should correctly handle the button click", () => {
    const onClickHandler = jest.fn();
    render(<Card onClick={onClickHandler} />);
    const cardDiv = screen.getByTestId("card");
    fireEvent.click(cardDiv);
    expect(onClickHandler).toHaveBeenCalledTimes(1);
  });
  it(
    "should correctly disable click scaling " +
      "on hovering when pair is valid ",
    () => {
      const bolen = true;
      render(<Card flipped={bolen} />);
      const divCard = screen.getByTestId("card");
      fireEvent.mouseOver(divCard);
      expect(divCard).not.toHaveStyle("hover:scale-105 hover:shadow-2xl");
    },
  );
  it(
    "should correctly scale div " + "on hovering when we hover unmatched pair ",
    () => {
      const bolen = false;
      render(<Card flipped={bolen} />);
      const divCard = screen.getByTestId("card");
      fireEvent.mouseOver(divCard);
      expect(divCard).toHaveClass("hover:scale-105");
      expect(divCard).toHaveClass("hover:shadow-2xl");
    },
  );
});
