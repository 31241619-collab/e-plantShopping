import React from "react";

function CartItem({ item, updateQuantity, removeItem }) {
  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>

      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
        -
      </button>

      <span>{item.quantity}</span>

      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
        +
      </button>

      <button onClick={() => removeItem(item.id)}>
        Delete
      </button>
    </div>
  );
}

export default CartItem;
