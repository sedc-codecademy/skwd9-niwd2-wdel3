import React, { useEffect, useState } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import { ProductCard } from "../product-card/ProductCard";

export const ProductDetails = ({ addToCart }) => {
  const params = useParams();
  const { id } = params;
  console.log(id);

  // constructor(props){
  //   super(props)

  //   this.state = {
  //     product = {}
  //   }
  // }

  // this.setState({product: 'new value'})

  const [product, setProduct] = useState({
    category: "",
    description: "",
    id: 0,
    image: "",
    price: 0,
    rating: {},
    title: "",
  });

  const fetchSingleProduct = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`); //GET METHOD BY DEFAULT IN JS
    const product = await response.json();
    console.log("Result: ", product);

    setProduct(product);
  };

  useEffect(() => {
    //COMPONENT DID MOUNT

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

  return (
    <div>
      <Link to={"/products"}>
        <p>Go back to all products</p>
      </Link>

      <h1>Product: </h1>
      {product.title ? (
        <ProductCard product={product} addToCart={addToCart} />
      ) : (
        <p>Loading...</p>
      )}

      {/* RENDER THE NESTED ROUTE t.e. NESTED COMPONENT HERE */}
      {/* SO OUTLET SPESIFICIRAME DO MESTOTO KADE KE SE RENDERIRA CHILD ILI VGEZDENATA RUTTA */}
      <Outlet />
    </div>
  );
};
