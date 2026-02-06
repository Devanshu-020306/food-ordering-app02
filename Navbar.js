import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const count = cart.reduce((s, i) => s + i.qty, 0);

  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#fff" : "#ffdede",
    marginRight: 25,
    textDecoration: "none",
    fontWeight: "600",
    borderBottom: isActive ? "2px solid #fff" : "none",
    paddingBottom: "5px",
  });

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        padding: "12px 25px",
        background: "linear-gradient(90deg,#e23744,#ff6f61)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <h3 style={{ color: "white", marginRight: 40 }}>
        🍽️ DevanshuFoods
      </h3>

      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>
      <NavLink to="/cart" style={linkStyle}>
        Cart ({count})
      </NavLink>
      <NavLink to="/admin" style={linkStyle}>
        Admin
      </NavLink>
    </nav>
  );
}

export default Navbar;
