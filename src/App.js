import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Time } from "./components/Time";
import { Player } from "./components/Player";
import { Header } from "./components/Header";
import card1 from "./assets/images/card1.png";
import card2 from "./assets/images/card2.png";
import card3 from "./assets/images/card3.png";
import card4 from "./assets/images/card4.png";
import card5 from "./assets/images/card5.png";
import card6 from "./assets/images/card6.png";
import card7 from "./assets/images/card7.png";
import card8 from "./assets/images/card8.png";

const cardImages = [card1, card2, card3, card4, card5, card6, card7, card8];

function generateCards() {
  const cards = [
    ...cardImages.map((image, index) => ({ image, id: index, flipped: false })),
    ...cardImages.map((image, index) => ({
      image,
      id: index + 100,
      flipped: false,
    })),
  ];

  return cards.sort(() => Math.random() - 0.5);
}

function App() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);

  useEffect(() => {
    setCards(generateCards());
  }, []);

  const handleCardClick = (cardId) => {
    if (flippedCards.length === 2) return;

    console.log(flippedCards.length);

    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, flipped: true } : card,
      ),
    );

    setFlippedCards((prevFlippedCards) => {
      const newFlippedCards = [...prevFlippedCards, cardId];

      if (newFlippedCards.length === 2) {
        const [firstId, secondId] = newFlippedCards;
        const firstCard = cards.find((card) => card.id === firstId);
        const secondCard = cards.find((card) => card.id === secondId);

        if (firstCard.image !== secondCard.image) {
          setTimeout(() => {
            setCards((prevCards) =>
              prevCards.map((card) =>
                card.id === firstId || card.id === secondId
                  ? { ...card, flipped: false }
                  : card,
              ),
            );
          }, 1000);
        }

        return [];
      }

      return newFlippedCards;
    });
  };
  return (
    <div className="h-screen bg-main-theme">
      <Header />
      <div className="pt-10 flex justify-center">
        <div className="bg-second-theme sm:p-6 sm:pb-4 border-yellow-800 border rounded-xl grid grid-cols-4 sm:gap-4 gap-0 md:w-[80vw] 2xl:w-[55vw] h-auto items-center justify-center shadow-2xl">
          <Player />

          {cards.map((card, index) => {
            return (
              <Card
                key={index}
                image={card.image}
                flipped={card.flipped}
                onClick={() => handleCardClick(card.id)}
              />
            );
          })}

          <Time />
        </div>
      </div>
    </div>
  );
}

export default App;
