import React, { Component } from "react";
import { v4 as uuid } from "uuid"; // Library to generate UNIQUE IDS for us
// V1 Generates and timestamp

import Movie from "./Movie";
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
          editable: false,
        },
        {
          id: 2,
          name: "The Hobbit: Battle of the five armies",
          releaseDate: "15 Dec 2014",
          director: "Peter Jackson",
          editable: false,
        },
      ],

      // FIRST APPROACH
      name: "",
      releaseDate: "",
      director: "",

      // SECOND APPROACH
      newMovieToBeAdded: {
        id: "",
        name: "",
        releaseDate: "",
        director: "",
        editable: false,
      },
    };
  }

  //FIRST APPROACH

  // handleMovieName = (e) => {
  //   this.setState({
  //     name: e.target.value,
  //   });
  // };

  // handleReleaseDate = (e) => {
  //   this.setState({
  //     releaseDate: e.target.value,
  //   });
  // };

  // handleMovieDirector = (e) => {
  //   this.setState({
  //     director: e.target.value,
  //   });
  // };

  //SECOND APPROACH

  handleMovieName = (e) => {
    this.setState({
      newMovieToBeAdded: {
        ...this.state.newMovieToBeAdded, //gi zimame site vrednost koishto bile vo ovoj objekt
        name: e.target.value,
      },
    });
  };

  handleReleaseDate = (e) => {
    this.setState({
      newMovieToBeAdded: {
        ...this.state.newMovieToBeAdded,
        releaseDate: e.target.value,
      },
    });
  };

  handleMovieDirector = (e) => {
    // this.setState({
    //   newMovieToBeAdded: {
    //     ...this.state.newMovieToBeAdded,
    //     director: e.target.value
    //   }
    // });

    this.setState((prevState) => ({
      newMovieToBeAdded: {
        ...prevState.newMovieToBeAdded,
        director: e.target.value,
      },
    }));
  };

  /**
   * @e => ovoj argument e samiot event od button
   * TELL NOT WHY
   */

  handleMovieToAddOrEdit = (e, isThereMovieToEdit) => {
    e.preventDefault();

    //isThereMovieToEdit === false
    if (!isThereMovieToEdit) {
      const newMovie = {
        id: uuid(),
        name: this.state.name,
        releaseDate: this.state.releaseDate,
        director: this.state.director,
      };

      console.log(newMovie);

      //FIRST APPROACH

      // this.setState({
      //   mainMovies: [...this.state.mainMovies, newMovie],
      // });

      //SECOND APPROACH

      const movieToAdd = { ...this.state.newMovieToBeAdded, id: uuid() };

      this.setState({
        mainMovies: [...this.state.mainMovies, movieToAdd],
      });
    } else {
      //OVDE SE MOVIES KOISHTO GI EDITIRAME
      const movieToEdit = this.state.mainMovies.map((movie) => {
        if (movie.editable) {
          movie = { ...this.state.newMovieToBeAdded, editable: false };
        }
        return movie;
      });

      this.setState({
        mainMovies: movieToEdit,
        newMovieToBeAdded: {
          id: "",
          name: "",
          releaseDate: "",
          director: "",
          editable: false,
        },
      });
    }
  };

  handleRemoveMovie = (id) => {
    const updatedMovies = this.state.mainMovies.filter(
      (movie) => movie.id !== id
    );

    this.setState({
      mainMovies: updatedMovies,
    });
  };

  handleMovieToBeEdited = (id, name, releaseDate, director) => {
    const movieToEdit = this.state.mainMovies.map((movie) => {
      if (movie.id === id) {
        movie = { ...movie, editable: true };
      }
      return movie;
    });

    this.setState({
      mainMovies: movieToEdit,
    });

    this.setState({
      newMovieToBeAdded: {
        id,
        name,
        releaseDate,
        director,
      },
    });
  };

  isThereMovieToEdit = () => {
    return this.state.mainMovies.some((movie) => movie.editable);
  };

  render() {
    return (
      <>
        <div>{this.props.children}</div>
        <div className="container">
          <div>
            <h1>{!!this.state.mainMovies.length ? "Movie list:" : ""} </h1>
            {!!this.state.mainMovies.length ? (
              this.state.mainMovies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  movieName={movie.name}
                  releaseDate={movie.releaseDate}
                  director={movie.director}
                  removeMovie={this.handleRemoveMovie}
                  //Good practice
                  handleMovieToBeEdit={this.handleMovieToBeEdited}
                />
              ))
            ) : (
              <h1>No movies in the list</h1>
            )}
          </div>
          <div>
            <h1>Add new movie</h1>
            <label htmlFor="movieName">Movie name:</label>
            <input
              onChange={this.handleMovieName}
              //FIRST APPROACH
              // value={this.state.name}
              //SECOND APPROACH
              value={this.state.newMovieToBeAdded.name || ""}
              name="movieName"
              type="text"
            />

            <label htmlFor="releaseDate">Release date:</label>
            <input
              onChange={this.handleReleaseDate}
              // FIRST APPRAOCH
              // value={this.state.releaseDate}
              //SECOND APPROACH
              value={this.state.newMovieToBeAdded.releaseDate || ""}
              name="releaseDate"
              type="text"
            />

            <label htmlFor="director">Director:</label>
            <input
              onChange={this.handleMovieDirector}
              //FIRST APPRAOCH
              // value={this.state.director}
              //SECOND APPROACH
              value={this.state.newMovieToBeAdded.director || ""}
              name="director"
              type="text"
            />
            {this.isThereMovieToEdit() ? (
              <button onClick={(e) => this.handleMovieToAddOrEdit(e, true)}>
                Save Movie
              </button>
            ) : (
              <button onClick={(e) => this.handleMovieToAddOrEdit(e, false)}>
                Add Movie
              </button>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Body;
