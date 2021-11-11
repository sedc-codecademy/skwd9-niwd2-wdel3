import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export const AddProduct = (props) => {
  const { setProducts, products } = props;
  const [product, addProduct] = useState({
    title: "",
    image: "",
    description: "",
    price: "",
  });

  const handleProductName = (e) => {
    const value = e.target.value;
    addProduct({
      ...product,
      title: value,
    });
  };

  const handleProductImage = (e) => {
    addProduct({
      ...product,
      image: e.target.value,
    });
  };

  const handleProductDescription = (e) => {
    addProduct({
      ...product,
      description: e.target.value,
    });
  };

  const handleProductPrice = (e) => {
    addProduct({
      ...product,
      price: e.target.value,
    });
  };

  const createProduct = (e) => {
    e.preventDefault();

    const productToBeCreated = { ...product, id: uuid() };

    console.log(productToBeCreated);
    setProducts([...products, productToBeCreated]);
    resetValues();
  };

  const resetValues = () => {
    addProduct({ title: "", image: "", description: "", price: "" });
  };
  return (
    <>
      <form onSubmit={createProduct}>
        <h2>Add new product</h2>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder={"Product name: "}
          value={product.title || ""}
          onChange={handleProductName}
        />

        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          placeholder={"Product image: "}
          value={product.image || ""}
          onChange={handleProductImage}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          placeholder={"Product description: "}
          value={product.description || ""}
          onChange={handleProductDescription}
        />

        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          placeholder={"Product price: "}
          value={product.price || ""}
          onChange={handleProductPrice}
        />
        {/* BY DEFAULT Button-ot trigerira SUBMIT */}
        <button>Add product</button>
      </form>
    </>
  );
};
