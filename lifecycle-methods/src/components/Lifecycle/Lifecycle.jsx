import React from "react";

export default class LifeCycleComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Random Message",
    };

    console.log("HELLO FROM CONSTRUCTOR");
  }

  setNewMessage = () => {
    this.setState({
      message: "Hello world",
    });
  };

  //DEPRECTED
  componentWillMount() {
    console.log("COMPONENT WILL MOUNT");
  }

  //DEPRECTED
  componentWillReceiveProps(nextProps) {
    console.log(
      "COMPONENT WILL RECIEVE PROPS",
      this.props.productName,
      nextProps
    );
  }

  //DEPRECATED
  componentWillUpdate() {
    console.log("COMPONENT WILL UPDATE");
  }

  //MORA DA VRATI BOOLEAN
  //BY DEFAULT IT REUTURNS TRUE
  shouldComponentUpdate(nextProps, nextState) {
    console.log("SHOULD COMPONENT UPDATE", nextProps, nextState);
    if (nextState.message === "Hello world") {
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("COMPONENT DID UPDATE", prevProps, prevState);

    if (prevState.message !== this.props.message) {
      alert("MESSAGE HAS BEEN CHANGED!");
    }
  }

  componentWillUnmount() {
    console.log("COMPONENT WILL DIE :(");
  }

  componentDidMount() {
    console.log("COMPONENT DID MOUNT!");
  }

  render() {
    console.log("RENDERING!!!!!!!");
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={this.setNewMessage}>Click me</button>
      </>
    );
  }
}
