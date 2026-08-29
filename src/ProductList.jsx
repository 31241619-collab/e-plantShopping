import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  {
    category: "Aromatic Plants",
    items: [
      { id: 1, name: "Lavender", price: 12, image: "https://via.placeholder.com/150?text=Lavender" },
      { id: 2, name: "Mint", price: 8, image: "https://via.placeholder.com/150?text=Mint" },
      { id: 3, name: "Rosemary", price: 14, image: "https://via.placeholder.com/150?text=Rosemary" },
      { id: 4, name: "Basil", price: 10, image: "https://via.placeholder.com/150?text=Basil" },
      { id: 5, name: "Thyme", price: 9, image: "https://via.placeholder.com/150?text=Thyme" },
      { id: 6, name: "Sage", price: 11, image: "https://via.placeholder.com/150?text=Sage" }
    ]
  },
  {
    category: "Medicinal Plants",
    items: [
      { id: 7, name: "Aloe Vera", price: 15, image: "https://via.placeholder.com/150?text=Aloe+Vera" },
      { id: 8, name: "Tulsi", price: 10, image: "https://via.placeholder.com/150?text=Tulsi" },
      { id: 9, name: "Neem", price: 18, image: "https://via.placeholder.com/150?text=Neem" },
      { id: 10, name: "Ashwagandha", price: 20, image: "https://via.placeholder.com/150?text=Ashwagandha" },
      { id: 11, name: "Giloy", price: 16, image: "https://via.placeholder.com/150?text=Giloy" },
      { id: 12, name: "Brahmi", price: 17, image: "https://via.placeholder.com/150?text=Brahmi" }
    ]
  },
  {
    category: "Indoor Plants",
    items: [
      { id: 13, name: "Snake Plant", price: 18, image: "https://via.placeholder.com/150?text=Snake+Plant" },
      { id: 14, name: "Peace Lily", price: 20, image: "https://via.placeholder.com/150?text=Peace+Lily" },
      { id: 15, name: "Money Plant", price: 14, image: "https://via.placeholder.com/150?text=Money+Plant" },
      { id: 16, name: "Spider Plant", price: 13, image: "https://via.placeholder.com/150?text=Spider+Plant" },
      { id: 17, name: "Areca Palm", price: 22, image: "https://via.placeholder.com/150?text=Areca+Palm" },
      { id: 18, name: "ZZ Plant", price: 24, image: "https://via.placeholder.com/150?text=ZZ+Plant" }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  return (
    <div>
      <nav style={{ background: "green", color: "white", padding: "10px" }}>
        <h2>Paradise Nursery</h2>
      </nav>

      <h1>Product Listing</h1>

      {plants.map((group) => (
        <div key={group.category}>
          <h2>{group.category}</h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {group.items.map((plant) => (
              <div
                key={plant.id}
                style={{
                  border: "1px solid gray",
                  padding: "10px",
                  width: "180px",
                  textAlign: "center"
                }}
              >
                <img src={plant.image} alt={plant.name} width="150" height="150" />
                <h3>{plant.name}</h3>
                <p>$ {plant.price}</p>

                <button
                  disabled={addedItems.includes(plant.id)}
                  onClick={() => handleAdd(plant)}
                >
                  {addedItems.includes(plant.id) ? "Added to Cart" : "Add to Cart"}
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
