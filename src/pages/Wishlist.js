import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function Wishlist() {
  const { wishlist, setWishlist } = useContext(CartContext);

  const removeBtnClick = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div>
      <h1>My Wishlist</h1>
      {wishlist.length === 0 ? (
        <h3>
          There is nothing in wishlist. Why don't you go and add something
        </h3>
      ) : (
        wishlist.map(({ id, name, description, quantity, category, brand }) => {
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
                Remove from Wishlist
              </button>
              <hr style={{ height: "5px", backgroundColor: "black" }} />
            </div>
          );
        })
      )}
    </div>
  );
}
