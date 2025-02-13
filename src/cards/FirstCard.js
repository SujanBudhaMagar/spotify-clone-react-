import React from "react";

const FirstCard = ({ name, listeners }) => {
  return (
    <div>
      <h1 className="text-6xl font-bold">{name}</h1>
      <p className="text-gray-300">{listeners}</p>
    </div>
  );
};

export default FirstCard;
