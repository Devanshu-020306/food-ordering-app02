function RestaurantHeader() {
  return (
    <div
  style={{
    backgroundImage:
      "url(https://images.unsplash.com/photo-1600891964599-f61ba0e24092)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "70px 30px",
    color: "white",
    borderRadius: "0 0 25px 25px",
    marginBottom: "40px", // ✅ ADD THIS
  }}
>

      <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
        🍔 Devanshu Foods
      </h1>
      <p style={{ fontSize: "18px" }}>
        Fast Food • Burgers • Pizza
      </p>
      <p>⭐ 4.5 (1.2k ratings)</p>
    </div>
  );
}

export default RestaurantHeader;
