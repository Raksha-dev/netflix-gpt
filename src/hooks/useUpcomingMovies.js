import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addUpcomingMovie } from "../utils/redux/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovie = useSelector((store) => store.movie.upcomingMovies);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMovie(json.results));
  };

  useEffect(() => {
    !upcomingMovie && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
