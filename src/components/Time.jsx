import { IoSettingsOutline } from "react-icons/io5";

export function Time({ seconds, onClick, lastScore: bestScore }) {
  return (
    <div className="flex flex-col justify-center items-center col-span-4 font-frijole pb-3">
      <p className="text-2xl">time:</p>
      <p className="text-4xl">{seconds}</p>
      <button
        className="border-2 rounded-xl hover:scale-110 border-yellow-900"
        onClick={onClick}
      >
        <IoSettingsOutline data-testid="settings-icon" size={40} />
      </button>
      {bestScore && (
        <>
          <p className="pt-3">Best Score:</p>
          <p>{bestScore}</p>
        </>
      )}
    </div>
  );
}
