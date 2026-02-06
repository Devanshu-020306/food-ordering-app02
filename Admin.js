import { useEffect, useState } from "react";

function Admin() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then(res => res.json())
      .then(setOrders);
  }, []);

  const update = (id, status) => {
    fetch(`http://localhost:5000/order/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    }).then(() => window.location.reload());
  };

  return (
    <div>
      <h2>Orders</h2>
      {orders.map(o => (
        <div key={o._id}>
          <p>Total ₹{o.total}</p>
          <p>Status: {o.status}</p>
          <button onClick={()=>update(o._id,"Preparing")}>Preparing</button>
          <button onClick={()=>update(o._id,"Delivered")}>Delivered</button>
        </div>
      ))}
    </div>
  );
}

export default Admin;
