import { CDN_IMAGE_URL } from "../utils/constant";

const MovieCards = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="max-w-[50%] mr-2">
      <img
        className="max-w-none"
        src={CDN_IMAGE_URL + posterPath}
        alt="movies"
      />
    </div>
  );
};

export default MovieCards;
