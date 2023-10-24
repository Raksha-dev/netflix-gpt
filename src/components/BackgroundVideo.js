import { useSelector } from "react-redux";
import useBackgroundVideo from "../hooks/useMovieTrailer";

const BackgroundVideo = ({ videoId }) => {
  const trailer = useSelector((store) => store.movie?.trailerVideo);
  useBackgroundVideo(videoId);

  return (
    <iframe
      className="w-screen aspect-video"
      src={
        "https://www.youtube.com/embed/" + trailer?.key + "?&autoplay=0&mute=1"
      }
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
    ></iframe>
  );
};

export default BackgroundVideo;
