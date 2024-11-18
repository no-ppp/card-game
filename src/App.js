import exampleImage from "./assets/images/card1.png";
import { FaCheck } from "react-icons/fa";
import { Card } from "./components/Card";
import { Time } from "./components/Time";
import { Player } from "./components/Player";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="h-screen bg-main-theme">
      <Header />
      <div className="pt-10 flex justify-center">
        <div className="bg-second-theme sm:p-6 sm:pb-4 border-yellow-800 border rounded-xl grid grid-cols-4 sm:gap-4 gap-0 md:w-[80vw] 2xl:w-[55vw] h-auto items-center justify-center shadow-2xl">
          <Player />

          <Card image={exampleImage} />
          <Card image={exampleImage} />
          <Card image={exampleImage} />
          <Card image={exampleImage} />
          <Card image={exampleImage} />
          <Card image={exampleImage} />
          <Card image={exampleImage} />
          <Card image={exampleImage} />
          <Card image={exampleImage} />
          <Card image={exampleImage} />
          <Card image={exampleImage} />
          <Card image={exampleImage} />
          <Card image={exampleImage} />
          <Card image={exampleImage} />
          <Card image={exampleImage} />
          <Card image={exampleImage} />

          <Time />
        </div>
      </div>
    </div>
  );
}

export default App;
