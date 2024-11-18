import exampleImage from "../assets/images/card1.png";

export function Card({image}) {
    return (<div
        className=" bg-second-theme border-yellow-900 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-lg border-2 shadow-lg cursor-pointer hover:shadow-2xl transition duration-300 hover:scale-105"
        style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}
    ></div>)
}