import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../data";

export const CartContext = createContext();

export function ContextProvider({ children }) {
  const [mobileData, setMobileData] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const handleClick = (item) => {
    setCart((prev) => [...prev, item]);
  };

  console.log(cart);

  const handleWishlistClick = (item) => {
    setWishlist((prev) => [...prev, item]);
  };

  useEffect(() => {
    fakeFetch("https://example.com/api/products").then((data) => {
      setMobileData(data.data.products);
    });
  }, []);

  // console.log(mobileData);
  return (
    <CartContext.Provider
      value={{
        mobileData,
        cart,
        setCart,
        handleClick,
        wishlist,
        setWishlist,
        handleWishlistClick
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
