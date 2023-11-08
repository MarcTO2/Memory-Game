import React from 'react';

const Card = ({ data, onClick }) => {
  const { image, title, isFlipped } = data || {};

  return (
    <div
      className={`m-2 p-2 border border-gray-300 rounded-md cursor-pointer ${
        isFlipped ? 'bg-gray-200' : ''
      }`}
      onClick={onClick}
    >
      <div className="relative w-32 h-32">
        {isFlipped ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-blue-500 text-white text-lg font-bold">
            Click to reveal
          </div>
        )}
      </div>
      <p className="text-center mt-2">{title}</p>
    </div>
  );
};

export default Card;
