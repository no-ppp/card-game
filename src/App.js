import clickSound from "./assets/sounds/425725__moogy73__click04.wav";
import { useEffect, useState, useReducer, useRef } from "react";
import { ACTIONS } from "./Actions/ACTIONS";
import { scoreMeter } from "./utils/scoreMeter";
import { Card } from "./components/Card";
import { Time } from "./components/Time";
import { Player } from "./components/Player";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { easy, medium, hard } from "./data/levels";
//-----------------------------------------
//  | === INITIAL VARS === |
const LEVELS = { easy, medium, hard };
export const INITIAL_STATE = {
  cards: [],
  allFlipped: false,
  level: easy,
  choseLevel: true,
  time: 0,
  score: 0,
  bestScore: null,
};
//-----------------------------------------

export function reducer(state, action) {
  switch (action.type) {
    // === GAME LOGIC ===
    case ACTIONS.SET_CARDS:
      const selectedLevel = action.payload;
      const cards = [
        ...selectedLevel.map((image) => ({
          image,
          id: Date.now() + Math.random(),
          flipped: false,
          selected: false,
        })),
        ...selectedLevel.map((image) => ({
          image,
          id: Date.now() + Math.random(),
          flipped: false,
          selected: false,
        })),
      ];
      return {
        ...state,
        cards: cards.sort(() => Math.random() - 0.5),
        allFlipped: false,
      };

    case ACTIONS.SELECT_CARD:
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload
            ? { ...card, flipped: true, selected: true }
            : card,
        ),
      };

    case ACTIONS.CHECK_CARDS:
      const [firstCard, secondCard] = state.cards.filter(
        (card) => card.selected,
      );
      if (firstCard.image === secondCard.image) {
        return {
          ...state,
          score: (state.score += scoreMeter(state.time)),
          cards: state.cards.map((card) =>
            card.selected ? { ...card, selected: false } : card,
          ),
        };
      } else {
        return {
          ...state,
          cards: state.cards.map((card) =>
            card.selected ? { ...card, selected: false, flipped: false } : card,
          ),
        };
      }
    // === MENU ACTIONS ===
    case ACTIONS.LEVEL_TIMER:
      if (state.choseLevel) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        time: state.time + 1,
      };
    case ACTIONS.POP_MENU:
      return {
        ...state,
        choseLevel: !state.choseLevel,
      };
    case ACTIONS.SET_LEVEL:
      return {
        ...state,
        level: action.payload,
      };
    case ACTIONS.SCORE:
      return {
        ...state,
        score: (state.score += scoreMeter(state.time)),
      };
    // === ENDING OPTIONS ===
    case ACTIONS.CHECK_END:
      const allFlipped = state.cards.every((card) => card.flipped);
      if (allFlipped) {
        return {
          ...state,
          allFlipped,
          choseLevel: !state.choseLevel,
        };
      }
      return {
        ...state,
        allFlipped,
      };
    case ACTIONS.RESET_GAME:
      const lastScore = state.score;
      const newBestScore =
        lastScore > state.bestScore ? lastScore : state.bestScore;
      return {
        ...INITIAL_STATE,
        choseLevel: (state.choseLevel = false),
        bestScore: newBestScore,
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const [isClickedBlocked, setClickedBlocked] = useState(false);
  const [volume, setVolume] = useState(50);
  const clickRef = useRef(null);

  useEffect(() => {
    clickRef.current = new Audio(clickSound);
    clickRef.current.volume = volume / 100;
    if (state.cards.length === 0) {
      dispatch({ type: ACTIONS.SET_CARDS, payload: state.level });
    }
  }, [state.cards.length, state.level, volume]);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: ACTIONS.LEVEL_TIMER });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const selectedCards = state.cards.filter((card) => card.selected);

    if (selectedCards.length === 2) {
      setClickedBlocked(true);
      setTimeout(() => {
        dispatch({ type: ACTIONS.CHECK_CARDS });
      }, 1000);
      dispatch({ type: ACTIONS.CHECK_END });
    } else {
      setClickedBlocked(false);
    }
  }, [state.cards]);

  const handleCardClick = (cardId) => {
    if (!isClickedBlocked) {
      clickRef.current.currentTime = 0;
      clickRef.current.play();
      dispatch({ type: ACTIONS.SELECT_CARD, payload: cardId });
    }
  };
  const handleLevelSelection = (selectedLevel) => {
    const levelCards = LEVELS[selectedLevel] || LEVELS.easy;
    clickRef.current.currentTime = 0;
    clickRef.current.play();
    dispatch({ type: ACTIONS.POP_MENU });
    dispatch({ type: ACTIONS.RESET_GAME });
    dispatch({ type: ACTIONS.SET_CARDS, payload: levelCards });
  };

  return (
    <div className="h-screen bg-main-theme overflow-y-auto">
      <Header />
      <div className="pt-10 flex justify-center ">
        <div className="bg-second-theme sm:p-6 sm:pb-4 border-yellow-800 border rounded-xl grid grid-cols-4 sm:gap-4 gap-0 md:w-[80vw] 2xl:w-[55vw] h-auto items-center justify-center shadow-2xl">
          <Player score={state.score} />

          {state.cards.map((card, index) => {
            return (
              <Card
                key={index}
                image={card.image}
                flipped={card.flipped}
                // This statement disable clicking on a valid pair
                onClick={
                  card.flipped ? undefined : () => handleCardClick(card.id)
                }
              />
            );
          })}

          <Time
            onClick={() => dispatch({ type: ACTIONS.POP_MENU })}
            seconds={state.time}
            lastScore={state.bestScore || null}
          />
        </div>
      </div>
      {state.choseLevel && (
        <Menu
          currentScore={state.score}
          goBack={() => dispatch({ type: ACTIONS.POP_MENU })}
          onLevelSelect={handleLevelSelection}
          onContinue={() => dispatch({ type: ACTIONS.POP_MENU })}
          setVolume={setVolume}
          volume={volume}
        />
      )}
    </div>
  );
}

export default App;
