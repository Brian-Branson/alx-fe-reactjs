import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) =>
    set({ recipes }),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
  getRecipe: (id) =>
    (state) => state.recipes.find((recipe) => recipe.id === id),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),
}));


export { useRecipeStore };
