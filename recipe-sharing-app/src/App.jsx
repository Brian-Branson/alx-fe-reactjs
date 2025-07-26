// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const HomePage = () => (
  <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
    <h1>My Recipes</h1>
    <SearchBar />
    <RecipeList />
    <FavoritesList />
    <RecommendationsList />
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetailsWrapper />} />
      </Routes>
    </Router>
  );
};

// Wrapper to extract recipeId from route
import { useParams, useNavigate } from 'react-router-dom';

const RecipeDetailsWrapper = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();

  return (
    <RecipeDetails
      recipeId={recipeId}
      onBack={() => navigate('/')} // called after delete
    />
  );
};

export default App;
