import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`/api/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!recipe) return <div className="container"><p>Ładowanie przepisu...</p></div>;

  return (
    <div className="container" style={{ maxWidth: "800px" }}>
      <Link to="/" style={{ textDecoration: "none", color: "#666", marginBottom: "20px", display: "inline-block" }}>
        &larr; Wróć do listy
      </Link>

      <div className="card" style={{ padding: "0" }}>
        <div style={{ padding: "40px", background: "#ff6b6b", color: "white", textAlign: "center" }}>
          <h1 style={{ margin: 0 }}>{recipe.name}</h1>
          <p style={{ marginTop: "10px", opacity: 0.9 }}>Kategoria: {recipe.category}</p>
        </div>
        
        <div style={{ padding: "40px" }}>
          <h3>Sposób przygotowania:</h3>
          <p style={{ whiteSpace: "pre-line", lineHeight: "1.8", fontSize: "1.1rem" }}>
            {recipe.description}
          </p>
          
          <div style={{ marginTop: "30px", borderTop: "1px solid #eee", paddingTop: "20px", color: "#888" }}>
            Autor przepisu: <strong>{recipe.author}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;