import React from "react";

const InventoryItem = ({ item }) => {
  // TODO: Display item details (name, quantity, price)

  return (
    <li className="inventory-item">
      {/* TODO: Use item props to show product name, quantity, and price */}
      <p> <strong>Item name: </strong> {item.name} </p>
      <p> <strong>Quantity: </strong> {item.quantity} pcs</p>
      <p> <strong>Price: </strong> ${item.price}</p>
    </li>
  );
};

export default InventoryItem;
