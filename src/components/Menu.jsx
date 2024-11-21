import { GoCheck } from "react-icons/go";
import { MdOutlineArrowBack } from "react-icons/md";
import { useState } from "react";

export function Menu({
  onContinue,
  onLevelSelect,
  goBack,
  currentScore,
  setVolume,
  volume,
}) {
  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-main-theme opacity-90 p-6 rounded-lg shadow-xl flex flex-col items-center space-y-4 w-96">
        <div className="flex space-x-2 justify-center">
          <button onClick={goBack} className="hover:scale-90">
            <MdOutlineArrowBack data-testid="back-icon" size={50} />
          </button>
          <h2 className="text-xl font-frijole text-center mb-4 text-black">
            Your current score!
          </h2>
        </div>
        <h1 className="text-5xl font-frijole text-center mb-4 text-black">
          > {currentScore}
        </h1>
        <p className="text-xl font-frijole text-center mb-4 text-black">
          >Choose level!
        </p>
        <button
          onClick={() => onLevelSelect("easy")}
          className="text-xl font-frijole text-center mb-4 text-black transition-all hover:scale-110"
        >
          >Easy
        </button>
        <button
          onClick={() => onLevelSelect("medium")}
          className="text-xl font-frijole text-center mb-4 text-black transition-all hover:scale-110"
        >
          >Medium
        </button>
        <button
          onClick={() => onLevelSelect("hard")}
          className="text-xl font-frijole text-center mb-4 text-black transition-all hover:scale-110"
        >
          >Hard
        </button>

        <button
          className="transition-all hover:scale-105 hover:animate-pulse-border h-10 w-40 bg-black/25 border-2 border-black/20 rounded-lg shadow-inner font-frijole text-center text-white"
          onClick={onContinue}
        >
          Continue
        </button>

        <div className="mt-4 w-full text-center">
          <label className="text-xl font-frijole text-black mb-2">Volume</label>
          <div className="flex flex-col items-center justify-center mt-2 w-full">
            <input
              data-testid="volume"
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className="appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[50px] [&::-webkit-slider-thumb]:w-[50px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-second-theme"
              aria-labelledby="volume"
            />
            <span className="ml-2 text-2xl text-black font-frijole ">
              {volume}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
