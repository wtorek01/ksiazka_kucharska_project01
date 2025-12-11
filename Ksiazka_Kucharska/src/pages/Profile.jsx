import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";

function Profile() {
  const [myRecipes, setMyRecipes] = useState([]);

  useEffect(() => {
    fetch("/api/recipes")
      .then((res) => res.json())
      .then((data) => {
        const userRecipes = data.filter(r => r.author === "Ja");
        setMyRecipes(userRecipes);
      });
  }, []);

return (
  <div className="container">
    <div className="profile-header">
      <h1 style={{margin: 0, fontSize: '2.5rem'}}>Cześć, Szefie Kuchni!</h1>
      <p style={{opacity: 0.9}}>Twoje statystyki</p>
      <div style={{ fontSize: "3rem", fontWeight: "bold", marginTop: "10px" }}>
        {myRecipes.length} <span style={{ fontSize: "1.2rem", fontWeight: "normal" }}>opublikowanych przepisów</span>
      </div>
    </div>

    <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Twoja książka kucharska:</h3>
    
    {myRecipes.length > 0 ? (
      <div className="recipes-grid">
        {myRecipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}
      </div>
    ) : (
      <div style={{ textAlign: "center", padding: "60px", color: "#888", background: "white", borderRadius: "12px" }}>
        <p style={{ fontSize: "1.2rem" }}>Jeszcze nic nie ugotowałeś?</p>
        <p>Przejdź do zakładki "Dodaj", aby stworzyć swój pierwszy przepis!</p>
      </div>
    )}
  </div>
);
}

export default Profile;