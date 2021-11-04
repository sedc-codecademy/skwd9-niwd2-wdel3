import "./App.css";
import LifeCycleComponent from "./components/Lifecycle/Lifecycle";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      {/* <LifeCycleComponent
        productName={"Milka Chocolate"}
        randomText={"randomText"}
      /> */}

      <Products />
    </div>
  );
}

export default App;
