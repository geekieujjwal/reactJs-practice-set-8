import { useContext } from "react";

import { CartContext } from "../contexts/CartContext";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const removeBtnClick = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div>
      <h1>My Cart</h1>
      <h3>Items: {cart.length}</h3>
      {cart.length === 0 ? (
        <h3>There is nothing in cart. Why don't you go and add something</h3>
      ) : (
        cart.map(({ id, name, description, quantity, category, brand }) => {
          return (
            <div key={id}>
              <p>Name: {name}</p>
              <p>Description: {description}</p>
              <p>Quantity: {quantity}</p>
              <p>Category: {category}</p>
              <p>Brand: {brand}</p>
              <button
                onClick={() => removeBtnClick(id)}
                style={{ cursor: "pointer" }}
              >
                Remove from Cart
              </button>
              <hr style={{ height: "5px", backgroundColor: "black" }} />
            </div>
          );
        })
      )}
    </div>
  );
}
