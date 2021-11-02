import React from "react";
import BigMovie from "./BigMovie";
import "./Body.scss";

const Body = (props) => {
  const { children } = props;
  console.log(props.randomText);

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

        {mainMovies.map((movie) => (
          <BigMovie
            key={movie.id}
            movieName={movie.name}
            releaseDate={movie.releaseDate}
            director={movie.director}
          />
        ))}
      </div>
    </>
  );
};

export default Body;
