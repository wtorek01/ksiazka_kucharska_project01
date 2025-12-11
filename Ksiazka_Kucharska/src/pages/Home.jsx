import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Wszystkie");

  useEffect(() => {
    fetch("/api/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Błąd:", err);
        setLoading(false);
      });
  }, []);

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = selectedCategory === "Wszystkie" || recipe.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = ["Wszystkie", "Śniadanie", "Obiad", "Kolacja", "Deser"];

  return (
    <div className="container">
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1>PatrykGotuje to najwiekszy zbiór przepisow, najpyszniejszych potraw na swiecie!!!</h1>
        <p>Zerknij na to!</p>
      </div>

      <input
        type="text"
        placeholder="Szukaj przepisu (np. Pizza)..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ padding: "15px", fontSize: "1.1rem", marginBottom: "20px" }}
      />

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "30px", justifyContent: "center" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              width: "auto", 
              padding: "8px 20px",
              borderRadius: "20px",
              border: "2px solid #ff6b6b",
              backgroundColor: selectedCategory === cat ? "#ff6b6b" : "transparent",
              color: selectedCategory === cat ? "white" : "#ff6b6b",
              cursor: "pointer",
              transition: "0.3s"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <p style={{ textAlign: "center" }}>Ładowanie przepisów...</p>
      ) : (
        <div className="recipes-grid">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
      
      {!loading && filteredRecipes.length === 0 && (
        <div style={{ textAlign: "center", marginTop: "50px", color: "#888" }}>
          <h3>Nic nie znaleziono</h3>
          <p>Spróbuj zmienić kategorię lub wpisać inną nazwę.</p>
        </div>
      )}
    </div>
  );
}

export default Home;