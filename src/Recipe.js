import React from "react";
const Recipe = ({ title, directions, calories, totalTime, image }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{calories}</p>
      <img src={image} alt="" />
      <a href={directions} target="_blank" rel="noreferrer">
        Directions
      </a>
    </div>
  );
};
export default Recipe;
