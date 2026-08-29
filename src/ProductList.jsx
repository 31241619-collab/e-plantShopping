import React from "react";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulents" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor Plants" },
  { id: 3, name: "Peace Lily", price: 20, category: "Flowering Plants" },
  { id: 4, name: "Money Plant", price: 12, category: "Indoor Plants" },
];

function ProductList() {
  return (
    <div>
      <h2>Paradise Nursery Products</h2>

      {["Succulents", "Indoor Plants", "Flowering Plants"].map((category) => (
        <div key={category}>
          <h3>{category}</h3>

          {plants
            .filter((plant) => plant.category === category)
            .map((plant) => (
              <div key={plant.id}>
                <h4>{plant.name}</h4>
                <p>Price: ${plant.price}</p>
                <button>Add to Cart</button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
