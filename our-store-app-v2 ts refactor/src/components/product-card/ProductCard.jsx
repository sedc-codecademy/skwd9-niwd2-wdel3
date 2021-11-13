import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";

export const ProductCard = ({ product }) => {
  // console.log(product.rating);

  const raitingObject = product.rating;
  const raiting = Object.keys(raitingObject);
  // console.log(raiting);
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

      {raiting.map((value, index) => (
        <div key={index}>
          <p>
            {value}: {raitingObject[value]}{" "}
          </p>
        </div>
      ))}
    </div>
  );
};
