import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeItem,
    clearCart,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const placeOrder = () => {
    alert("Order placed successfully ✅");
    clearCart();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty 😅</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item._id}
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                marginBottom: "10px",
                borderRadius: "8px",
              }}
            >
              <h4>{item.name}</h4>
              <p>Price: ₹{item.price}</p>

              {/* Quantity buttons */}
              <button onClick={() => decreaseQty(item._id)}>-</button>
              <span style={{ margin: "0 10px" }}>{item.qty}</span>
              <button onClick={() => increaseQty(item._id)}>+</button>

              <br />

              <button
                onClick={() => removeItem(item._id)}
                style={{
                  marginTop: "8px",
                  background: "none",
                  color: "red",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Remove ❌
              </button>
            </div>
          ))}

          <h3>Total Amount: ₹{total}</h3>

          <button
            onClick={placeOrder}
            style={{
              background: "#e23744",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Place Order 🍔
          </button>

          {/* 🔳 QR PAYMENT SECTION */}
          <h3 style={{ marginTop: "30px" }}>Pay via QR / UPI</h3>

          <div
            style={{
              display: "flex",
              gap: "30px",
              flexWrap: "wrap",
              marginTop: "15px",
            }}
          >
            {/* QR 1 */}
            <div style={{ textAlign: "center" }}>
              <img
                src="https://i.imgur.com/7kQEsHU.png"
                alt="UPI QR"
                style={{ width: "180px" }}
              />
              <p><b>UPI QR (GPay / PhonePe)</b></p>
              <p>devanshu@upi</p>
            </div>

            {/* QR 2 */}
            <div style={{ textAlign: "center" }}>
              <img
                src="C:\Users\devan\OneDrive\Documents\one drive\OneDrive\Desktop\certificate\qr.png"
                alt="Alternate QR"
                style={{ width: "180px" }}
              />
              <p><b>Alternate QR</b></p>
              <p>restaurant@upi</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
