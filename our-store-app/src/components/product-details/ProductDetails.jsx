import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

export const ProductDetails = () => {
  const params = useParams();
  const { id } = params;
  console.log(id);

  const fetchSingleProduct = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const result = await response.json();
    console.log("Result: ", result);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Every 2 seconds");
    }, 2000);

    fetchSingleProduct(id);

    return () => {
      //COMPONENT WILL UNMOUNT

      console.log("COMPONENT WILL UNMOUNT");
      clearInterval(interval);
    };
  }, [id]);

  return <h1>Product details</h1>;
};
