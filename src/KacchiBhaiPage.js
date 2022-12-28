import React, { useState } from "react";
import Cart from "./Cart";

const KacchiBhaiPage = () => {
  // state to store the selected food item
  const [selectedFood, setSelectedFood] = useState("");

  const handleFoodChange = (event) => {
    setSelectedFood(event.target.value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Kacchi Bhai Page</h1>
      <label>
        Select food:
        <select value={selectedFood} onChange={handleFoodChange}>
          <option value="">Select a food item</option>
          <option value="Basmati Kacchi">Basmati Kacchi</option>
          <option value="Kacchi Khadok">Kacchi Khadok</option>
          <option value="Borhani">Borhani</option>
          <option value="Firni">Firni</option>
        </select>
      </label>
      {selectedFood && <p>You selected: {selectedFood}</p>}
      {/* Pass the selectedFood state as a prop to the Cart component */}
      <Cart selectedFood={selectedFood} />
    </div>
  );
};

export default KacchiBhaiPage;
