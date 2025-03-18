import React from "react";
import "./../App.css"; // Import styles

const InventoryForm = () => {
  return (
    <div className="inventory-form">
      <h2>Add New Item</h2>
      <form>
        {/* TODO: Add input fields for name, quantity, and price */}
        
        {/* TODO: Add a submit button */}
        <div>
          <label> Name:</label>
          <input type="text" placeholder="Enter the name"/> 
        </div>
        <div>
          <label> Quantity:</label>
          <input type="number" placeholder="Enter the quantity"/> 
        </div>
        <div>
          <label>Price:</label>
          <input type="number" placeholder="Enter the price"/> 
        </div>

        <button type="submit"> ADD ITEM </button>
      </form>
    </div>
  );
};

export default InventoryForm;
