  import RecipeDetails from './RecipeDetails';
import { useRecipeStore } from './recipeStore.js';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
      <div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <RecipeDetails recipeId={recipe.id} onBack={() => console.log('Back to list')} />
            <hr />
          </div>
        ))}
      </div>
    );
  };

  export default RecipeList;