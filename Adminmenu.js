import { useEffect, useState } from "react";

function AdminMenu() {
  const [foods, setFoods] = useState([]);
  const [form, setForm] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then(res => res.json())
      .then(setFoods);
  }, []);

  const addFood = () => {
    fetch("http://localhost:5000/foods", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then(() => window.location.reload());
  };

  const del = (id) => {
    fetch(`http://localhost:5000/foods/${id}`, { method: "DELETE" })
      .then(() => window.location.reload());
  };

  return (
    <div>
      <h2>Admin Menu</h2>
      <input placeholder="Name" onChange={e => setForm({...form,name:e.target.value})}/>
      <input placeholder="Price" onChange={e => setForm({...form,price:e.target.value})}/>
      <button onClick={addFood}>Add</button>

      {foods.map(f => (
        <p key={f._id}>{f.name} <button onClick={()=>del(f._id)}>❌</button></p>
      ))}
    </div>
  );
}

export default AdminMenu;
