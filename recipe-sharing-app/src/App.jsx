import React from 'react'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'

//"Router", "path", "react-router-dom", "Route", "Routes"]
function App() {
  return (
    
      <div>
        <AddRecipeForm/>
        <RecipeList/>
        
      </div>
      
  )
}

export default App
