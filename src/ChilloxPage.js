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
      <h1>Chillox Page</h1>
      <label>
        Select food:
        <select value={selectedFood} onChange={handleFoodChange}>
          <option value="">Select a food item</option>
          <option value="Beef Burger">Beef Burger</option>
          <option value="Beef Cheese Burger">Beef Cheese Burger</option>
          <option value="Chicken Burger">Chicken Burger</option>
          <option value="Chicken Cheese Burger">Chicken Cheese Burger</option>

        </select>
      </label>
      {selectedFood && <p>You selected: {selectedFood}</p>}
      {/* Pass the selectedFood state as a prop to the Cart component */}
      <Cart selectedFood={selectedFood} />
    </div>
  );
};

export default ChilloxPage;


