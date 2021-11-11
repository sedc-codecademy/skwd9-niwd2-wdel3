import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Products } from "./components/products/Products";
import { AddProduct } from "./components/add-product/AddProduct";
import { ProductDetails } from "./components/product-details/ProductDetails";
import { NotFound } from "./components/NotFound";
import { EditProduct } from "./components/edit-product/EditProduct";
import { CedevitaTest } from "./components/cedevita-test/CedevitaTest";

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

          <Route
            path={"/add-product"}
            element={
              <AddProduct setProducts={setProducts} products={products} />
            }
          />
          {/* NESTING ROUTES/ VGEZDUVANJE NA RUTI COMES FROM V6 from REACT ROUTER DOM*/}

          <Route path={"/product/:id"} element={<ProductDetails />}>
            {/* localhost:3000/product/:id/edit */}
            <Route path={"edit"} element={<EditProduct />} />
            <Route path={"cedevita"} element={<CedevitaTest />} />
          </Route>

          <Route path="*" element={<NotFound />} />
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
