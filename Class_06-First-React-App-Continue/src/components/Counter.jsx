import React, { Component } from "react";
import "./Counter.scss";

//Counter extends React.Component
export default class Counter extends Component {
  // Constructor-ot se izvrshuva najprvo pri kreiranje na instanca od klasata
  constructor(props) {
    super(props); //bez super(props) kje nemozeme da pristapime to state properinjata na ovaa komponenta

    this.state = {
      number: 0,
    };

    this.incrementNumber = this.incrementNumber.bind(this);
  }

  incrementNumber() {
    this.setState(
      {
        number: this.state.number + 1,
      },
      () => console.log("State was updated successfully")
    );
  }

  //   incrementNumber = () => {
  //     this.setState(
  //       {
  //         number: this.state.number + 1,
  //       },
  //       () => console.log("State was updated successfully")
  //     );
  //   };
  //EXAMPLE 1

  //   decrementNumber = () => {
  //     this.setState(
  //       () => ({
  //         number: this.state.number - 1,
  //       }),
  //       () => console.log("Decrement state occured")
  //     );
  //   };

  //EXAMPLE 2
  //if(prevState.number === 0){prevState.number}else {prevState.number - 1}
  decrementNumber = () => {
    this.setState((prevState) => ({
      number: prevState.number === 0 ? prevState.number : prevState.number - 1,
    }));
  };

  render() {
    return (
      <>
        <div className="wrapper">
          <div className="wrapper__buttons">
            <button
              className="wrapper__buttons-options"
              //   Example 1
              //   onClick={() =>
              //     this.setState(
              //       {
              //         number: this.state.number + 1,
              //       },
              //       () => console.log("State was updated successfully")
              //     )
              //   }
              // Example 2
              onClick={this.incrementNumber}
            >
              Increment
            </button>
            <button
              onClick={this.decrementNumber}
              className="wrapper__buttons-options"
            >
              Decrement
            </button>
          </div>
          <div className="wrapper__result">Result: {this.state.number}</div>
        </div>
      </>
    );
  }
}
