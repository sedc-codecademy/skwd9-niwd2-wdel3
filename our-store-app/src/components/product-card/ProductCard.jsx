import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";

export const ProductCard = ({ product }) => {
  return (
    <div className="product">
      <h3 className="product__info">Product details: </h3>
      <p>Product name {product.title} </p>
      <p>Product description {product.description} </p>
      <p>Product price {product.price}</p>
      <img className="product__image" src={product.image} alt={product.title} />

      {/* <Link to={`product/${product.id}`}>
        <p>Product details</p>{" "}
      </Link> */}

      <Link to={`/product/${product.id}`}>
        <p>Product details</p>{" "}
      </Link>
    </div>
  );
};
