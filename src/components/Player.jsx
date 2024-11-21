import { GoCheck } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { useState } from "react";

export function Player({ score }) {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  function handleInputChange(e) {
    e.preventDefault();
    setInputValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setInputValue("");
    setIsFocused(false);
  }

  return (
    <>
      <div className="col-span-2 pl-2 pt-2 pb-2">
        <form
          data-testid="player-form"
          noValidate={true}
          onSubmit={(e) => handleSubmit(e)}
          className="flex items-center justify-center space-x-2 "
        >
          <input
            onClick={() => setIsFocused(true)}
            onChange={handleInputChange}
            className={`h-10 w-32 bg-third-theme shadow-inner font-frijole text-center  rounded-2xl
        ${isFocused ? "h-10 w-32 border-2 animate-pulse-border" : ""} focus:outline-none focus:animate-pulse-border focus:placeholder-black invalid:border-transparent focus:underline`}
            type="text"
            placeholder="player"
          />
          {!isFocused && <GoArrowLeft size={20} />}
          {isFocused && (
            <button data-testid={"submit-button"}>
              <GoCheck size={20} />{" "}
            </button>
          )}
        </form>
      </div>
      <div className="col-span-2 text-center">
        <p className="font-frijole"> score: </p>
        <p className="font-frijole">{score}</p>
      </div>
    </>
  );
}
