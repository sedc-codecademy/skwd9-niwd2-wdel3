import React from "react";
import { ProductCard } from "../product-card/ProductCard";

export const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      {!!cart.length ? (
        cart.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleRemoveProduct={handleRemoveFromCart}
          />
        ))
      ) : (
        <h1>Nothing in the cart </h1>
      )}
    </div>
  );
};
