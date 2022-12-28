import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Cart = (props) => {

  const [selectedValue, setSelectedValue] = useState("");

  // Declare a function to handle the change event of the select element
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const [address, setAddress] = useState("");

  const [number, setNumber] = useState("");

const handleAddressChange = (event) => {
  setAddress(event.target.value);
};

  const [isConfirmed, setConfirmed] = useState(false);

  const { selectedFood } = props;
  
  const [items, setItems] = useState([]);

  const [showMessage, setShowMessage] = useState(false);

  
  const addItem = (item) => {
    setItems([...items, item]);
  };
  const confirmOrder = () => {
    // set the order as confirmed
    setConfirmed(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowMessage(true);
  };
  
  const removeLatestItem = () => {
    setItems(items.slice(0, -1));
    };
    
    if (isConfirmed) {
      
      return (
        <div style={{ textAlign: "center" }}>
        <h3>Enter your address:</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={handleAddressChange}
          />
        </label>
        <label>
          Mobile number:
          <input
            type="text"
            value={number}
            onChange={handleNumberChange}
          />
          </label>
          <label>
          Payment Method:
          <select value={selectedValue} onChange={handleChange}>
          <option value="">Select an option</option>
          <option value="option1">Cash on delivery</option>
          <option value="option2">Mobile Banking</option>
          <option value="option3">Credit Card</option>
        </select>
        </label>
        <input type="submit" value= "Submit" />
        {showMessage && <p>Your order has been confirmed</p>}
      </form>
      
      </div>
      )
    }

  return (
    <div style={{ textAlign: "center" }}>
        {selectedFood && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Add the selected food item to the array */}
          <button onClick={() => addItem(selectedFood)}>Add</button>
          <button onClick={removeLatestItem}>Remove Latest Item</button>
          {/* Add a button to confirm the order */}
        
        <button onClick={confirmOrder}>Confirm Order</button>
        
        
        </div>
      )}
      
        <h2>Your Cart</h2>
{/* Render a list of items in the cart */}
<ul>
{items.map((item, index) => (
<li key={index}>{item}</li>
))}
</ul>
    </div>
  );
};

export default Cart;
