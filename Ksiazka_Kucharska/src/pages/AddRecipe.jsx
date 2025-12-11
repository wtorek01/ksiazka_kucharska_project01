import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRecipe() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "",
    category: "Śniadanie",
    description: "",
    author: "Ja" 
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
    .then((res) => {
      if (res.ok) {
        navigate("/"); 
      } else {
        alert("Błąd dodawania!");
      }
    })
    .catch(err => alert("Błąd połączenia: " + err));
  };

  return (
    <div className="container" style={{ maxWidth: "600px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Dodaj nowy przepis 📝</h2>
      
      <div className="card" style={{ padding: "30px" }}>
        <form onSubmit={handleSubmit}>
          <label>Nazwa potrawy</label>
          <input
            required
            type="text"
            placeholder="np. Spaghetti Carbonara"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <label>Kategoria</label>
            <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
            <option>Śniadanie</option>
            <option>Obiad</option>
            <option>Kolacja</option>
            <option>Deser</option>
            </select>

          <label>Opis przygotowania</label>
          <textarea
            required
            rows="5"
            placeholder="Opisz krok po kroku..."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />

          <button type="submit">Opublikuj Przepis</button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipe;