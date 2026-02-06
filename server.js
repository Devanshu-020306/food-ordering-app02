const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/foods", (req, res) => {
  res.json([
    // 🍔 BURGERS
    { _id: "1", name: "Cheese Burger", price: 120, category: "Burger", image: "https://images.unsplash.com/photo-1550547660-d9450f859349", bestseller: true, special: false },
    { _id: "2", name: "Veg Burger", price: 100, category: "Burger", image: "https://images.unsplash.com/photo-1603064752734-4c48eff53d05", bestseller: false, special: false },
    { _id: "3", name: "Chicken Burger", price: 180, category: "Burger", image: "https://images.unsplash.com/photo-1550317138-10000687a72b", bestseller: true, special: true },
    { _id: "4", name: "Paneer Burger", price: 150, category: "Burger", image: "https://images.unsplash.com/photo-1606755962773-0e3f9b1f8f2a", bestseller: false, special: false },

    // 🍕 PIZZAS
    { _id: "5", name: "Veg Pizza", price: 250, category: "Pizza", image: "https://images.unsplash.com/photo-1601924638867-3ec62f6b39c3", bestseller: true, special: true },
    { _id: "6", name: "Cheese Pizza", price: 280, category: "Pizza", image: "https://images.unsplash.com/photo-1548365328-8b849e6b9c1a", bestseller: true, special: false },
    { _id: "7", name: "Paneer Pizza", price: 300, category: "Pizza", image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e", bestseller: false, special: false },
    { _id: "8", name: "Chicken Pizza", price: 320, category: "Pizza", image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143", bestseller: true, special: false },

    // 🍟 SNACKS
    { _id: "9", name: "French Fries", price: 80, category: "Snacks", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877", bestseller: true, special: false },
    { _id: "10", name: "Peri Peri Fries", price: 110, category: "Snacks", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90", bestseller: false, special: true },
    { _id: "11", name: "Veg Momos", price: 100, category: "Snacks", image: "https://images.unsplash.com/photo-1604908554161-8b5f2c4c4f5a", bestseller: false, special: false },
    { _id: "12", name: "Chicken Momos", price: 140, category: "Snacks", image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56", bestseller: true, special: false },

    // 🥤 DRINKS    
    { _id: "13", name: "Coke", price: 50, category: "Drinks", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce", bestseller: true, special: false },
    { _id: "14", name: "Pepsi", price: 50, category: "Drinks", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce", bestseller: true, special: false },
    { _id: "15", name: "Sprite", price: 50, category: "Drinks", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce", bestseller: false, special: false },
    { _id: "16", name: "Fanta", price: 50, category: "Drinks", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce", bestseller: false, special: true },
  ]);
});

app.listen(5000, () => {
  console.log("✅ Backend running on http://localhost:5000");
});
