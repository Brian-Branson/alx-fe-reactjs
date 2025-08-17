import { Link } from "react-router-dom";
import Recipe from "./RecipeDetail";

<Link to={`/recipe/${recipe.id}`} key={recipe.id}>
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transform transition duration-300">
    <img
      src={recipe.image}
      alt={recipe.title}
      className="w-full h-40 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
      <p className="text-gray-600">{recipe.summary}</p>
    </div>
  </div>
</Link>
