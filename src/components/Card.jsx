import defaultImage from "../assets/images/card1.png";

export function Card({ image, onClick, flipped, disabled }) {
  const backgroundImage = flipped ? `url(${image})` : `url(${defaultImage})`;
  return (
    <div
      data-testid="card"
      onClick={onClick}
      className={`bg-second-theme border-yellow-900 w-20 h-20 sm:w-24 sm:h-24
      md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-lg border-2
      shadow-lg cursor-pointer  transition duration-300
      
      ${!flipped ? "hover:scale-105 hover:shadow-2xl" : ""}`}
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}
