import { useEffect, useState } from "react";
import Recipe from "./Recipe";

const App = () => {
  const API_ID = "38c096d3";
  const API_KEY = "a1a82f75690399a91651e289b934aac8";
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=pork&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar" />
        <button type="submit" className="search-button">
          search
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          title={recipe.recipe.label}
          directions={recipe.recipe.url}
          calories={recipe.recipe.calories}
          totalTime={recipe.recipe.totalTime}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;
