import React from "react";
const Recipe = ({ title, directions, calories, totalTime, image }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{calories}</p>
      <img src={image} alt="" />
    </div>
  );
};
export default Recipe;
