import { useState } from 'react';
import { useRecipeStore } from './recipeStore.js';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = ({ recipeId, onBack }) => {
  const [isEditing, setIsEditing] = useState(false);
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );


  return (
    <div>
      {isEditing ? (
        <EditRecipeForm
          recipeId={recipeId}
          onFinish={() => setIsEditing(false)}
        />
      ) : (
        <>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <DeleteRecipeButton
            recipeId={recipeId}
            onDeleted={onBack} // Optional: go back or update UI after deletion
          />
        </>
      )}
    </div>
  );
};

export default RecipeDetails;
