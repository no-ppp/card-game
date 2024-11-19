import { reducer } from "../App";
import { INITIAL_STATE } from "../App";
import { ACTIONS } from "../Actions/ACTIONS";

describe("reducer tests", () => {
  it("should set cards correctly when ACTIONS.SET_CARDS is dispatched", () => {
    const initial_state = INITIAL_STATE;
    const selectedLevel = ["image1", "image2", "image3"];
    const action = {
      type: ACTIONS.SET_CARDS,
      payload: selectedLevel,
    };
    const newState = reducer(initial_state, action);
    // TESTING THE
    expect(newState.cards).toHaveLength(selectedLevel.length * 2);
    expect(
      newState.cards.filter((card) => card.image === "image1"),
    ).toHaveLength(2);
    expect(
      newState.cards.filter((card) => card.image === "image2"),
    ).toHaveLength(2);
    expect(
      newState.cards.filter((card) => card.image === "image3"),
    ).toHaveLength(2);
  });
});
