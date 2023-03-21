import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "../cart/cart.css";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addtoCart, removetoCart, updateCartItem } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>
          <b>${price}</b>
        </p>
        <div className="countHandler">
          <button onClick={() => removetoCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItem(Number(e.target.value), id)}
          />
          <button onClick={() => addtoCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
