import React from 'react';
import { useRecipeStore } from './recipeStore';
//"Link", "react-router-dom"
const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.getFilteredRecipes());

  return (
    <div>
      {filteredRecipes.length === 0 ? (
        <p>No recipes match your search.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '1rem' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
