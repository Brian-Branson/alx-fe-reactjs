import React from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';

const App = () => {
  return (
    <div className='app-container' style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto'  }}>
      <h1>My Recipes</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
};

export default App;
