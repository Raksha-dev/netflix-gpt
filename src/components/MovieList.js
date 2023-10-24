import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  if (!movies) return;

  return (
    <div>
      <h1 className="text-2xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        {movies.map((movie) => (
          <MovieCards key={movie.id} posterPath={movie.backdrop_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
