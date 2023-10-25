import GptSearchBar from "./GptSearchBar";
import { BG_IMAGE } from "../utils/constant";
import GptMovieSearchResults from "./GptMovieSearchResults";

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG_IMAGE} alt="image" />
      </div>
      <GptSearchBar />
      <GptMovieSearchResults />
    </div>
  );
};

export default GptSearchPage;
