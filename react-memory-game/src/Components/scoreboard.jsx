import React from 'react';

const Scoreboard = ({ currentScore, bestScore }) => {
  return (
    <div className="bg-blue-500 text-white py-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Memory Game</h2>
        <div className="flex justify-center mt-4">
          <div className="mr-8">
            <p className="text-lg">Current Score</p>
            <p className="text-4xl font-bold">{currentScore}</p>
          </div>
          <div>
            <p className="text-lg">Best Score</p>
            <p className="text-4xl font-bold">{bestScore}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;