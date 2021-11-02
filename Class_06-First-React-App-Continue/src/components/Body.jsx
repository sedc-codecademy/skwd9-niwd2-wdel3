import React, { Component } from "react";
import { v4 as uuid } from "uuid"; // Library to generate UNIQUE IDS for us
// V1 Generates and timestamp

import BigMovie from "./BigMovie";
import "./Body.scss";

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainMovies: [
        {
          id: 1,
          name: "Harry Potter and the half blood prince",
          releaseDate: "15 July 2009",
          director: "David Yates",
        },
        {
          id: 2,
          name: "The Hobbit: Battle of the five armies",
          releaseDate: "15 Dec 2014",
          director: "Peter Jackson",
        },
      ],

      name: "",
      releaseDate: "",
      director: "",
    };
  }

  //FIRST APPROACH
  handleMovieName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleReleaseDate = (e) => {
    this.setState({
      releaseDate: e.target.value,
    });
  };

  handleMovieDirector = (e) => {
    this.setState({
      director: e.target.value,
    });
  };

  handleAddNewMovie = (e) => {
    e.preventDefault();

    const newMovie = {
      id: uuid(),
      name: this.state.name,
      releaseDate: this.state.releaseDate,
      director: this.state.director,
    };

    console.log(newMovie);

    this.setState({
      mainMovies: [...this.state.mainMovies, newMovie],
    });
  };

  render() {
    return (
      <>
        <div>{this.props.children}</div>
        <div className="container">
          <div>
            <h1>Movie list:</h1>
            {this.state.mainMovies.map((movie) => (
              <BigMovie
                key={movie.id}
                movieName={movie.name}
                releaseDate={movie.releaseDate}
                director={movie.director}
              />
            ))}
          </div>
          <div>
            <h1>Add new movie</h1>
            <label htmlFor="movieName">Movie name:</label>
            <input
              onChange={this.handleMovieName}
              value={this.state.name}
              name="movieName"
              type="text"
            />

            <label htmlFor="releaseDate">Release date:</label>
            <input
              onChange={this.handleReleaseDate}
              value={this.state.releaseDate}
              name="releaseDate"
              type="text"
            />

            <label htmlFor="director">Director:</label>
            <input
              onChange={this.handleMovieDirector}
              value={this.state.director}
              name="director"
              type="text"
            />

            <button onClick={(e) => this.handleAddNewMovie(e)}>
              Add Movie
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Body;
