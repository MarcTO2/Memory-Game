import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Components/card';
import Scoreboard from './Components/scoreboard';

const App = () => {
  const [cards, setCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await axios.get('https://api.giphy.com/v2/emoji?api_key=T1lAjmpMolDZZMXJYf0Ik7BQKzp5ByB7&limit=10&offset=0');
      if (response.data && Array.isArray(response.data.data)) {
        // Add isFlipped and isMatched properties to each card
        const cardsWithFlipped = response.data.data.map(card => ({ ...card, isFlipped: false, isMatched: false }));
        setCards(cardsWithFlipped);
      } else {
        console.error('API response does not contain an array of cards:', response.data);
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const shuffleCards = () => {
    // Create a new shuffled copy of the cards array
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  };

  const handleCardClick = (clickedCard) => {
    if (clickedCard.isFlipped || clickedCard.isMatched) {
      // Card is already flipped or matched, you may handle this differently
      return;
    }
  
    // Flip the card
    clickedCard.isFlipped = true;
  
    // Check if it matches any other flipped card by comparing image URLs
    const flippedCards = cards.filter((card) => card.isFlipped && !card.isMatched);
  
    if (flippedCards.length === 2) {
      if (flippedCards[0].imageUrl === flippedCards[1].imageUrl) {
        // Cards match
        flippedCards[0].isMatched = true;
        flippedCards[1].isMatched = true;
        // Update score
        setCurrentScore(currentScore + 2);
      } else {
        // Cards do not match
        // Reset the flipped status after a delay
        setTimeout(() => {
          flippedCards[0].isFlipped = false;
          flippedCards[1].isFlipped = false;
        }, 1000);
      }
    }
  };
  

  return (
    <div>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <div className="card-container">
        {cards.map((card) => (
          <Card
            key={card.id}
            isFlipped={card.isFlipped}
            isMatched={card.isMatched}
            imageUrl={card.imageUrl}
            onClick={() => handleCardClick(card)}
          />
        ))}
      </div>
      <button onClick={shuffleCards}>Shuffle Cards</button>
    </div>
  );
};

export default App;
