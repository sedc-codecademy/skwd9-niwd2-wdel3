import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Products } from "./components/products/Products";
import { AddProduct } from "./components/add-product/AddProduct";

// import { Playground } from "./components/playground/Playground";

//REACT HOOKS;

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("Component did mount");
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();

    console.log(result);
    setProducts(result);
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
            element={<Products products={products} />}
          />
          <Route path={"/add-product"} element={<AddProduct />} />
        </Routes>
      </Router>
      {/* <Playground /> */}
    </>
  );
}

export default App;

// <Switch>
// <Header />
//
//   {/* OVA E DEFAULT-NA RUTTA  localhost:3000 */}

//   <Route path={"/"} element={<Home />} />
//   <Route path={"/products"} element={<Products />} />
//   <Route path={"/add-product"} element={<AddProduct />} />
//
// </Switch>
