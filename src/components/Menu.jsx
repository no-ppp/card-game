import { GoCheck } from "react-icons/go";
import { MdOutlineArrowBack } from "react-icons/md";

export function Menu({ onContinue, onLevelSelect, goBack, currentScore }) {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-main-theme opacity-90 p-6 rounded-lg shadow-xl flex flex-col items-center space-y-4">
        <div className="flex space-x-2 justify-center">
          <button onClick={goBack} className="hover:scale-90">
            <MdOutlineArrowBack size={50} />
          </button>
          <h2 className="text-xl font-frijole text-center mb-4 text-black">
            Your current score !
          </h2>
        </div>
        <h1 className="text-5xl font-frijole text-center mb-4 text-black">
          > {currentScore}
        </h1>
        <p className="text-xl font-frijole text-center mb-4 text-black">
          >Chose level !
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
        <div className="flex items-center justify-center">
          <GoCheck size={40} className="text-green-500 animate-pulse" />
        </div>
        <button
          className="h-10 w-40 bg-third-theme rounded-sm shadow-inner font-frijole text-center text-white ${

          transition-all duration-300 ease-in-out"
          onClick={onContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
