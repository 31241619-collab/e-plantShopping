import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  {
    category: "Aromatic Plants",
    items: [
      { id: 1, name: "Lavender", price: 12, image: "https://via.placeholder.com/150?text=Lavender" },
      { id: 2, name: "Mint", price: 8, image: "https://via.placeholder.com/150?text=Mint" }
    ]
  },
  {
    category: "Medicinal Plants",
    items: [
      { id: 3, name: "Aloe Vera", price: 15, image: "https://via.placeholder.com/150?text=Aloe+Vera" },
      { id: 4, name: "Tulsi", price: 10, image: "https://via.placeholder.com/150?text=Tulsi" }
    ]
  },
  {
    category: "Indoor Plants",
    items: [
      { id: 5, name: "Snake Plant", price: 18, image: "https://via.placeholder.com/150?text=Snake+Plant" },
      { id: 6, name: "Peace Lily", price: 20, image: "https://via.placeholder.com/150?text=Peace+Lily" }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Paradise Nursery - Product Listing</h1>

      {plants.map((group) => (
        <div key={group.category}>
          <h2>{group.category}</h2>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {group.items.map((plant) => (
              <div
                key={plant.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  width: "180px",
                  textAlign: "center"
                }}
              >
                <img
                  src={plant.image}
                  alt={plant.name}
                  width="150"
                  height="150"
                />

                <h3>{plant.name}</h3>

                <p>$ {plant.price}</p>

                <button onClick={() => dispatch(addItem(plant))}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
