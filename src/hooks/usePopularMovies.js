import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovie } from "../utils/redux/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovie = useSelector((store) => store.movie.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovie(json.results));
  };

  useEffect(() => {
    !popularMovie && getPopularMovies();
  }, []);
};

export default usePopularMovies;
