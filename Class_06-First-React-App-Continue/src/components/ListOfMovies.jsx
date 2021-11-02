import React, { Component } from "react";
import "./ListOfMovies.scss";

export default class ListOfMovies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieNames: [
        "The Gentlemen",
        "Hateful Eight",
        "The Shawshank Redemption",
        "Kill Bill",
        "Kill Bill",
      ],
      newMovieName: "",
    };
  }

  handleName = (e) => {
    const userInput = e.target.value;

    this.setState(() => ({
      newMovieName: userInput,
    }));
  };

  addMovieName = () => {
    console.log(this.state.newMovieName);
    const newMovieName = this.state.newMovieName;

    if (!!newMovieName) {
      // DO NOT MUTATE STATE
      // DO NOT USE! WE DO NOT WANT TO MUTATE STATE DIRECTLY

      //   this.state.movieNames.push(newMovieName);
      //   console.log(this.state.movieNames);

      //#1
      // let copyOfTheArray = [...this.state.movieNames, newMovieName];
      // this.setState(() => ({
      //   movieNames: copyOfTheArray,
      // }));

      //#2
      // this.setState((prevState) => ({
      //   movieNames: [...prevState.movieNames, newMovieName],
      // }));

      //#3
      this.setState({
        movieNames: [...this.state.movieNames, newMovieName],
      });
    } else {
      alert("No movie name mon amigo ;) ");
    }
  };
  render() {
    return (
      <>
        <div className="movies">
          <div>
            <h2>Other movie names</h2>
            <div className="movies__wrapper">
              {this.state.movieNames.map((movieName, index) => (
                <span key={index}>{movieName}</span>
              ))}
            </div>
          </div>

          <div>
            <h2>Add Movie</h2>
            <input
              type="text"
              onChange={this.handleName}
              value={this.state.newMovieName}
            />
            <button
              disabled={!this.state.newMovieName}
              onClick={this.addMovieName}
            >
              Add Movie
            </button>
          </div>
        </div>
      </>
    );
  }
}
