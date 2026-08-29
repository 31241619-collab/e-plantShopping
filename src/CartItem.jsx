import React from 'react';

function CartItem({ item, updateQuantity, removeItem }) {
  const total = item.price * item.quantity;

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} width="100" />

      <h3>{item.name}</h3>
      <p>Unit Price: ${item.price}</p>
      <p>Total Cost: ${total}</p>

      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>

      <button onClick={() => removeItem(item.id)}>Delete</button>
    </div>
  );
}

export default CartItem;
