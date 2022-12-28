import React, { useState } from "react";

const AddressPage = () => {
  // Declare a state variable to store the address
  const [address, setAddress] = useState("");

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div>
      <h1>Enter your address:</h1>
      <form>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={handleAddressChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddressPage;

