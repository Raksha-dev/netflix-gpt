import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovie } from "../utils/redux/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovie = useSelector((store) => store.movie.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovie(json.results));
  };

  useEffect(() => {
    !nowPlayingMovie && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
