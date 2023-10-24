import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);
  return (
    movies.nowPlayingMovies && (
      <div className="px-12 bg-black">
        <div className="-mt-52 relative z-20 ">
          <MovieList title={"Now playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies?.popularMovies} />
          <MovieList
            title={"Upcoming"}
            movies={movies?.upcomingMovies}
          />
          <MovieList
            title={"Top Rated"}
            movies={movies?.topRatedMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
