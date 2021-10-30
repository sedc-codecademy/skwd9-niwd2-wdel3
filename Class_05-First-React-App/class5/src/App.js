import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";

// JSX Syntax
// React.Fragment is wrapper and is same as <> </>
function App() {
  return (
    <React.Fragment>
      {/* <h1>Hello world</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, eligendi.
      </p> */}
      <Header></Header>

      <Body randomText={"Hello world"}>
        <h1>HELLO FROM APP</h1>
      </Body>
    </React.Fragment>
  );
}

export default App;
