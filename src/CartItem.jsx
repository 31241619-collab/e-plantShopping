import React from 'react';

function CartItem({ cartItems, updateQuantity, removeItem }) {
  const grandTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cartItems.map((item) => {
        const total = item.price * item.quantity;

        return (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} width="100" />

            <h3>{item.name}</h3>
            <p>Unit Price: ${item.price}</p>
            <p>Item Total: ${total}</p>

            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
            <span> {item.quantity} </span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>

            <button onClick={() => removeItem(item.id)}>Delete</button>
            <hr />
          </div>
        );
      })}

      <h2>Total Cart Amount: ${grandTotal}</h2>
    </div>
  );
}

export default CartItem;
