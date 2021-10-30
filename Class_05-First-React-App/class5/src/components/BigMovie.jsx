import React, { Component } from "react";
import "./Body.scss";

// export default class BigMovie extends React.Component {

// }

export default class BigMovie extends Component {
  render() {
    return (
      <>
        <div>
          <div className="container__movie">
            <h2>Movie name: {this.props.movieName} </h2>
            <h4>Release date: {this.props.releaseDate} </h4>
            <h4>Director: {this.props.director}</h4>
          </div>
        </div>
      </>
    );
  }
}
