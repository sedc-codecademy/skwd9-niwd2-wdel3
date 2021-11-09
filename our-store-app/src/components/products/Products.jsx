import React from "react";
import { ProductCard } from "../product-card/ProductCard";
import "./Products.scss";

export const Products = (props) => {
  console.log(props);

  const { products } = props;

  return (
    <>
      <div className="products">
        {!!products.length ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <h3>No products in the list mon ami :/</h3>
        )}
      </div>
    </>
  );
};
