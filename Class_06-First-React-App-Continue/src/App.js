import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import Counter from "./components/Counter";
import ListOfMovies from "./components/ListOfMovies";
// JSX Syntax
// React.Fragment is wrapper and is same as <> </>
// something = new Counter()
function App() {
  return (
    <React.Fragment>
      <Header></Header>

      <Body randomText={"Hello world"}>
        <h1>HELLO FROM APP</h1>
      </Body>

      <Counter />
      <ListOfMovies></ListOfMovies>
    </React.Fragment>
  );
}

export default App;
