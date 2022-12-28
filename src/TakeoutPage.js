import React, { useState } from "react";
import Cart from "./Cart";

const ChilloxPage = () => {
  // state to store the selected food item
  const [selectedFood, setSelectedFood] = useState("");

  const handleFoodChange = (event) => {
    setSelectedFood(event.target.value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Takeout Page</h1>
      <label>
        Select food:
        <select value={selectedFood} onChange={handleFoodChange}>
          <option value="">Select a food item</option>
          <option value="Classic Burger">Classic Burger</option>
          <option value="Hawaiian Burger">Hawaiian Burger</option>
          <option value="Double Decker Burger">Double Decker Burger</option>
          <option value="Double Cheese Burger">Double Cheese Burger</option>

        </select>
      </label>
      {selectedFood && <p>You selected: {selectedFood}</p>}
      {/* Pass the selectedFood state as a prop to the Cart component */}
      <Cart selectedFood={selectedFood} />
    </div>
  );
};

export default ChilloxPage;
