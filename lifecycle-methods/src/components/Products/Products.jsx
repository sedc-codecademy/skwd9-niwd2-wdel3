import React from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./Products.scss";

export default class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    console.log(result);

    this.setState({
      products: result,
    });
  };

  render() {
    return (
      <>
        <h1>Products</h1>
        <div className="container">
          {this.state.products.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))}
        </div>
      </>
    );
  }
}
