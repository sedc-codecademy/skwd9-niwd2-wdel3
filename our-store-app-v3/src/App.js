import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Products } from "./components/products/Products";
import { AddProduct } from "./components/add-product/AddProduct";
import { ProductDetails } from "./components/product-details/ProductDetails";
import { NotFound } from "./components/NotFound";
import { EditProduct } from "./components/edit-product/EditProduct";
import { CedevitaTest } from "./components/cedevita-test/CedevitaTest";
import { paginateArray } from "./utils/pagination";
import { Cart } from "./components/cart/Cart";

// import { Playground } from "./components/playground/Playground";

//REACT HOOKS;

function App() {
  const [products, setProducts] = useState([]);
  const [filteredName, setFilterName] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log("Component did mount");
    fetchProducts();
  }, []);

  useEffect(() => {
    console.log("New product is pushed to the cart list ");
  }, [cart]);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();

    console.log(result);
    setProducts(result);
  };

  const handleFilterName = (e) => {
    const value = e.target.value;
    setFilterName(value.trim().toLowerCase());
  };

  const handlePageNumber = (increment) => {
    increment ? setPageNumber(pageNumber + 1) : setPageNumber(pageNumber - 1);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveProduct = (id) => {
    const filteredArray = products.filter((product) => product.id !== id);
    setProducts(filteredArray);
  };

  const handleRemoveFromCart = (id) => {
    const filteredArray = cart.filter((product) => product.id !== id);
    setCart(filteredArray);
  };

  // const filteredProducts = () => {
  //   return products.filter((product) =>
  //     product.title.trim().toLowerCase().includes(filteredName)
  //   );
  // };

  // FILTERING WITH PAGINATION

  const filteredProducts = () => {
    return paginateArray(
      products.filter((product) =>
        product.title.trim().toLowerCase().includes(filteredName)
      ),
      4,
      pageNumber
    );
  };

  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* OVA E DEFAULT-NA RUTTA  localhost:3000 */}

          <Route path={"/"} element={<Home />} />
          <Route
            path={"/products"}
            element={
              <Products
                // products={products}
                // FILTERED PRODUCTS
                products={filteredProducts()}
                handleFilterName={handleFilterName}
                handlePageNumber={handlePageNumber}
                addToCart={addToCart}
                handleRemoveProduct={handleRemoveProduct}
              />
            }
          />

          <Route
            path={"/add-product"}
            element={
              <AddProduct setProducts={setProducts} products={products} />
            }
          />
          {/* NESTING ROUTES/ VGEZDUVANJE NA RUTI COMES FROM V6 from REACT ROUTER DOM*/}

          <Route
            path={"/product/:id"}
            element={<ProductDetails addToCart={addToCart} />}
          >
            {/* localhost:3000/product/:id/edit */}
            <Route path={"edit"} element={<EditProduct />} />
            <Route path={"cedevita"} element={<CedevitaTest />} />
          </Route>

          <Route
            path={"/cart"}
            element={
              <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>

      {/* <Playground /> */}
    </>
  );
}

export default App;
