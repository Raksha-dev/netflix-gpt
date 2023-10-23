import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { backgroundVideo } from "../utils/redux/movieSlice";

const useBackgroundVideo = (videoId) => {
  //fetch trailer data and update it with store
  const dispatch = useDispatch((store) => store.movie?.trailerVideo);
  const getMovieVideo = async () => {
    const videoData = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        videoId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await videoData.json();
    const filteredTrailers = json.results.filter(
      (item) => item.type === "Trailer"
    );
    const mainTrailer = filteredTrailers.length
      ? filteredTrailers[0]
      : json.results[0];
    dispatch(backgroundVideo(mainTrailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useBackgroundVideo;
