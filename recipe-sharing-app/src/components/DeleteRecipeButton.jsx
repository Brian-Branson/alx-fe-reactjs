import { useRecipeStore } from './recipeStore.js';

const DeleteRecipeButton = ({ recipeId, onDeleted }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this recipe?');
    if (confirmDelete) {
      deleteRecipe(recipeId);
      if (onDeleted) onDeleted(); // Optional: callback to navigate or update view
    }
  };

  return (
    <button onClick={handleDelete} style={{ color: 'red', marginTop: '1rem' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
