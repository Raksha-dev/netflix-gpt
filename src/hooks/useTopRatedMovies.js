import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTopRatedMovie } from "../utils/redux/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovie = useSelector((store) => store.movie.topRatedMovies);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovie(json.results));
  };

  useEffect(() => {
    !topRatedMovie && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
