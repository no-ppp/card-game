import { INITIAL_STATE, reducer } from "../App";
import { ACTIONS } from "../Actions/ACTIONS";
import { easy, medium } from "../data/levels";

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

  it("should select cards correctly when ACTIONS.SELECT_CARDS is dispatched", () => {
    const initial_state = {
      ...INITIAL_STATE,
      cards: [
        { id: 1, image: "image1", flipped: false, selected: false },
        { id: 2, image: "image2", flipped: false, selected: false },
      ],
    };
    const action = {
      type: ACTIONS.SELECT_CARD,
      payload: 1, // Select card with id 1
    };
    const newState = reducer(initial_state, action);

    // Assert the first card is flipped and selected
    expect(newState.cards[0].flipped).toBe(true);
    expect(newState.cards[0].selected).toBe(true);

    // Assert the second card is unchanged
    expect(newState.cards[1].flipped).toBe(false);
    expect(newState.cards[1].selected).toBe(false);
  });

  it("should check cards correctly when ACTIONS.CHECK_CARDS is dispatched and update the score if cards match", () => {
    const initialState = {
      ...INITIAL_STATE,
      cards: [
        { id: 1, image: "image1", flipped: true, selected: true },
        { id: 2, image: "image1", flipped: true, selected: true },
      ],
      score: 0,
    };

    const action = {
      type: ACTIONS.CHECK_CARDS,
    };

    const newState = reducer(initialState, action);

    // Assert flipped status of cards remains true
    expect(newState.cards[0].flipped).toBe(true);
    expect(newState.cards[1].flipped).toBe(true);

    // Assert selected status is cleared
    expect(newState.cards[0].selected).toBe(false);
    expect(newState.cards[1].selected).toBe(false);

    // Assert score is updated
    expect(newState.score).toBeGreaterThan(0); // Score should be greater than initial score
  });

  it("should update time when menu is not popped // LEVEL_TIMER is dispatched", () => {
    const initial_state = {
      ...INITIAL_STATE,
      choseLevel: false, // False indicate that the timer should increment
      time: 10,
    };
    const action = {
      type: ACTIONS.LEVEL_TIMER,
    };
    const newState = reducer(initial_state, action);

    //Assert time + 1 to indicate that it incremented
    expect(newState.time).toBe(11);
  });

  it("should stop the timer when menu pop // LEVEL_TIMER is dispatched", () => {
    const initial_state = {
      ...INITIAL_STATE,
      choseLevel: true,
      time: 10,
    };
    const action = {
      type: ACTIONS.LEVEL_TIMER,
    };
    const newState = reducer(initial_state, action);
    //Assert int to be equal time , to check if timer is not incrementing
    expect(newState.time).toBe(10);
  });

  it("should pop the menu when ACTIONS.POP_MENU is dispatched", () => {
    const initial_state = {
      ...INITIAL_STATE,
      choseLevel: false,
    };
    const action = {
      type: ACTIONS.POP_MENU,
    };
    const newState = reducer(initial_state, action);
    //Assert true to check if choseLevel is changin
    expect(newState.choseLevel).toBe(true);
  });

  it("should update the level from action payload", () => {
    const initial_state = {
      ...INITIAL_STATE,
      level: easy,
    };
    const action = {
      type: ACTIONS.SET_LEVEL,
      payload: medium,
    };
    const newState = reducer(initial_state, action);
    //Assert new level name to check if state.level is changin
    expect(newState.level).toBe(medium);
  });

  it("should update the score right when ACTIONS.SCORE is dispatched", () => {
    const initial_state = {
      ...INITIAL_STATE,
      score: 0,
      time: 10,
    };
    const action = {
      type: ACTIONS.SCORE,
    };
    const newState = reducer(initial_state, action);
    //Assert score greater than 0 to check if the state.score is changin
    expect(newState.score).toBeGreaterThan(0);
  });

  it(
    "should return true if all cards are flipped to " +
      "indicate that the game is over // ACTIONS.CHECK_END is dispatched",
    () => {
      const initial_state = {
        ...INITIAL_STATE,
        cards: [
          { id: "1", flipped: true },
          { id: "2", flipped: true },
        ], // All cards are flipped
        choseLevel: false,
      };
      const action = {
        type: ACTIONS.CHECK_END,
      };
      const newState = reducer(initial_state, action);

      // Assert that allFlipped is true and choseLevel is toggled
      expect(newState.allFlipped).toBe(true);
      expect(newState.choseLevel).toBe(true); // Assuming choseLevel toggles
    },
  );

  it(
    "should return false if not all cards are flipped to " +
      "indicate that the game is not over // ACTIONS.CHECK_END is dispatched",
    () => {
      const initial_state = {
        ...INITIAL_STATE,
        cards: [
          { id: "1", flipped: true },
          { id: "2", flipped: false },
        ],
      };
      const action = {
        type: ACTIONS.CHECK_END,
      };
      const newState = reducer(initial_state, action);

      // Assert false to indicate that not all cards are flipped
      expect(newState.allFlipped).toBe(false);
    },
  );

  it("should reset the game and update newBestScore when ACTIONS.RESET_GAME is dispatched", () => {
    const initial_state = {
      ...INITIAL_STATE,
      choseLevel: true,
      bestScore: 0,
      score: 10,
      time: 15, // Example time
    };
    const action = {
      type: ACTIONS.RESET_GAME,
    };
    const newState = reducer(initial_state, action);

    // Assert new bestScore to indicate it is updated
    expect(newState.bestScore).toBe(10); // It should be updated to the current score

    // Assert that score is reset to 0
    expect(newState.score).toBe(0);

    // Assert that choseLevel is reset to false
    expect(newState.choseLevel).toBe(false);

    // Assert that time is reset to 0 (or initial value)
    expect(newState.time).toBe(0);
  });
});
