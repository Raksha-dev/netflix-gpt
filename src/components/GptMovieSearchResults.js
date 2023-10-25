import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSearchResults = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="bg-black px-20 py-10 mt-8 opacity-80">
      <div>
        {movieNames.map((movie, index) => (
          <MovieList key={movie} title={movie} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSearchResults;
