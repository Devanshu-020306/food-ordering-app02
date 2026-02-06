import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // ➕ ADD TO CART
  const addToCart = (item) => {
    const found = cart.find((i) => i._id === item._id);

    if (found) {
      setCart(
        cart.map((i) =>
          i._id === item._id ? { ...i, qty: i.qty + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  // ➕ INCREASE QTY
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item._id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // ➖ DECREASE QTY
  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item._id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // ❌ REMOVE ITEM
  const removeItem = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  // 🧹 CLEAR CART
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
