import React from "react";
import { ProductCard } from "../product-card/ProductCard";
import "./Products.scss";

export const Products = (props) => {
  const {
    products,
    handleFilterName,
    handlePageNumber,
    addToCart,
    handleRemoveProduct,
  } = props;

  return (
    <div className="container">
      <div className="container__filter">
        <input
          type="text"
          placeholder="Search Product"
          className="container__filter-input"
          onChange={handleFilterName}
        />
      </div>
      <div className="products">
        {!!products.length ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              handleRemoveProduct={handleRemoveProduct}
            />
          ))
        ) : (
          <h3>No products in the list mon ami :/</h3>
        )}
      </div>

      <div className="container__navigation">
        <h1 onClick={() => handlePageNumber(false)}>Previous</h1>
        <h1 onClick={() => handlePageNumber(true)}>Next</h1>
      </div>
    </div>
  );
};
