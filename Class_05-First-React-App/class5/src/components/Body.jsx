import React from "react";
import BigMovie from "./BigMovie";
import "./Body.scss";

const Body = (props) => {
  const { children } = props;
  console.log(props.randomText);
  const movieNameOne = "Harry Potter and the half blood prince";

  const returnMovieNameTwo = () => {
    return `The Hobbit: Battle of the five armies`;
  };

  const movieNames = [
    "The Gentlemen",
    "Hateful Eight",
    "The Shawshank Redemption", // ITS A MUST
    "Kill Bill",
    "Kill Bill",
  ];

  const mainMovies = [
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
  ];

  return (
    <>
      <div>{children}</div>
      <div className="container">
        <h1>Movie list:</h1>

        {/* ***** SIMPLE HARDCODED APPROACH ***** */}

        {/* Movie One  */}

        <div className="container__movie">
          {/* <h2>Movie name: Harry Potter and the half blood prince</h2> */}
          <h2>Movie name: {movieNameOne} </h2>
          <h4>Release date: 15 July 2009</h4>
          <h4>Director: David Yates</h4>
        </div>

        {/* Movie two */}

        <div className="container__movie">
          {/* <h2>Movie name: The Hobbit: Battle of the five armies</h2> */}
          <h2>Movie name: {returnMovieNameTwo()}</h2>
          <h4>Release date: {new Date("15 Dec 2014").toDateString()} </h4>
          <h4>Director: Peter Jackson</h4>
        </div>
      </div>

      {/* ***** DYNAMIC ARRAY MAPPING OF MOVIES ***** */}
      {/* TO DESTRUCURE USE {id, name, releaseDate, director} */}
      {mainMovies.map((movie) => (
        //   ****** FIRST APPROACH

        // <div key={movie.id}>
        //   <div className="container__movie">
        //     <h2>Movie name: {movie.name} </h2>
        //     <h4>Release date: {movie.releaseDate} </h4>
        //     <h4>Director: {movie.director}</h4>
        //   </div>
        // </div>

        //   ****** SECOND REFACTORE APPROACH

        <BigMovie
          key={movie.id}
          movieName={movie.name}
          releaseDate={movie.releaseDate}
          director={movie.director}
        />
      ))}
      {/* Interate through an array */}
      {/* KEY MUST BE UNIQUE */}
      {/* IF ELEMENTS HAS ID PROP, WE PUT ID AS KEY */}

      <div className="movies">
        <h2>Other movie names</h2>
        <div className="movies__wrapper">
          {movieNames.map((movieName, index) => (
            <span key={index}>{movieName}</span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
