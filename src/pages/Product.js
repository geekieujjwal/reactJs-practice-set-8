import { NavLink } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../contexts/CartContext";

export default function Product() {
  const {
    mobileData,
    cart,
    handleClick,
    wishlist,
    handleWishlistClick
  } = useContext(CartContext);
  // console.log(mobileData);

  const getActive = ({ isActive }) => ({
    fontWeight: "700",
    color: "red"
  });

  return (
    <div>
      <h1>Product Listing Page</h1>
      <nav>
        <NavLink style={getActive} to="/cart">
          My Cart
        </NavLink>{" "}
        {cart.length === 0
          ? null
          : `(${cart.length} ${cart.length === 1 ? "item" : "items"} in cart)`}
        <br />
        <NavLink style={getActive} to="/wishlist">
          My Wishlist
        </NavLink>{" "}
        {wishlist.length === 0
          ? null
          : `(${wishlist.length} ${
              wishlist.length === 1 ? "item" : "items"
            } in wishlist)`}
      </nav>
      {mobileData.length === 0 ? (
        <h1>Loading . . .</h1>
      ) : (
        <main>
          {mobileData.map((item) => {
            const { id, name, description, price } = item;
            return (
              <div key={id}>
                <h4>{name}</h4>
                <p>{description}</p>
                <p>Price: {price}</p>
                <NavLink
                  to={`/product/${id}`}
                  style={() => {
                    return { color: "blue", fontWeight: "700" };
                  }}
                >
                  Visit Item
                </NavLink>
                <br />
                <br />
                <button
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClick(item)}
                >
                  Add to Cart
                </button>
                <br />
                <br />
                <button
                  style={{ cursor: "pointer" }}
                  onClick={() => handleWishlistClick(item)}
                >
                  Add to Wishlist
                </button>
                <hr />
              </div>
            );
          })}
        </main>
      )}
    </div>
  );
}
