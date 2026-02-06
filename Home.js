import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import RestaurantHeader from "../components/RestaurantHeader";
import "../pages/Home.css";

function Home() {
  const { addToCart } = useContext(CartContext);
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then(res => res.json())
      .then(setFoods);
  }, []);

  const filtered = foods.filter(f =>
    f.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || f.category === category)
  );

  return (
    <>
      <RestaurantHeader />

      <div className="filters">
        <input placeholder="Search..." onChange={e => setSearch(e.target.value)} />
        {["All","Burger","Pizza","Drinks"].map(c => (
          <button key={c} onClick={() => setCategory(c)}>{c}</button>
        ))}
      </div>

      <div className="food-grid">
        {filtered.map(f => (
          <div className="food-card" key={f._id}>
            <img src={f.image} />
            {f.bestseller && <span className="tag">🌶️ Bestseller</span>}
            {f.special && <span className="tag special">🆕 Special</span>}
            <h3>{f.name}</h3>
            <p>₹{f.price}</p>
            <button onClick={() => addToCart(f)}>Add</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
