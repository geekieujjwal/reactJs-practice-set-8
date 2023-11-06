import { useParams } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../contexts/CartContext";

export default function ProductDetail() {
  const { mobileData } = useContext(CartContext);
  const { gadgetId } = useParams();
  // console.log(mobileData);
  return (
    <div>
      <h1>About</h1>
      {mobileData
        .filter((item) => item.id === Number(gadgetId))
        .map(({ id, name, description, quantity, category, brand }) => {
          return (
            <div key={id}>
              <p>Name: {name}</p>
              <p>Description: {description}</p>
              <p>Quantity: {quantity}</p>
              <p>Category: {category}</p>
              <p>Brand: {brand}</p>
            </div>
          );
        })}
    </div>
  );
}
