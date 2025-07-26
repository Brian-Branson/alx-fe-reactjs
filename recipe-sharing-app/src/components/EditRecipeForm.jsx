import { useState, useEffect } from 'react';
import { useRecipeStore } from './recipeStore.js';

const EditRecipeForm = ({ recipeId, onFinish }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === recipeId)
  );
  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
//["event.preventDefault"]
  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ id: recipeId, title, description });
    if (onFinish) onFinish(); // Close form or trigger refresh
  };

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
      <div>
        <label>Title</label><br />
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </div>
      <div style={{ marginTop: '0.5rem' }}>
        <label>Description</label><br />
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
      </div>
      <div style={{ marginTop: '0.5rem' }}>
        <button type="submit">Save</button>
        <button type="button" onClick={onFinish} style={{ marginLeft: '0.5rem' }}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditRecipeForm;
