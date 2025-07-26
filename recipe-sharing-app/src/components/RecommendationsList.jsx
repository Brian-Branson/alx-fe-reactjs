import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Recommended Recipes</h2>
      <button onClick={generateRecommendations} style={{ marginBottom: '1rem' }}>
        Generate Recommendations
      </button>

      {recommendations.length === 0 ? (
        <p>No recommendations yet. Click the button above to get some.</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id} style={{ marginBottom: '1rem' }}>
            <h4>{recipe.title}</h4>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
