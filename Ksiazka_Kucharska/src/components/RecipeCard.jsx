import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  const imageUrl = recipe.image || "/img/default.jpg";

  return (
    <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card">
        <div className="card-image-container">
          <img 
            src={imageUrl} 
            alt={recipe.name} 
            loading="lazy"
            className="card-img"
            onError={(e) => { e.target.src = "/img/default.jpg" }}
          />
        </div>
        
        <div className="card-body">
          <span className="card-tag">{recipe.category}</span>
          <h3>{recipe.name}</h3>
          <p>{recipe.description.substring(0, 60)}...</p>
          
          <div className="author-info">
            {recipe.author}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;