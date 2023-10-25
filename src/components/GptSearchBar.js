import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import lang from "../utils/langConst";
import openai from "./openai";
import { addGptMovieResult } from "../utils/redux/gptSlice";

const GptSearchBar = () => {
  const langConfig = useSelector((store) => store.lang.lang);
  const searchText = useRef();
  const dispatch = useDispatch();

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearch = async () => {
    const getQuery =
      "Act as a movie recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example: Gadar, Sholay, Don, Golmal, Koi mil gaya";

    const getResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: getQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!getResults.choices) return;

    const getMovies = getResults.choices[0]?.message.content.split(",");
    const data = getMovies.map((movie) => searchMovieTmdb(movie));
    const tmdbResults = await Promise.all(data);
    dispatch(
      addGptMovieResult({ movieNames: getMovies, movieResults: tmdbResults })
    );
  };

  return (
    <form
      className="pt-[10%] flex justify-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={searchText}
        className="rounded-sm w-[40%] border border-solid p-2"
        type="search"
        placeholder={lang[langConfig].inputPlaceholder}
      />
      <button
        className="text-white rounded-sm bg-slate-500 p-2 w-[5%]"
        onClick={handleGptSearch}
      >
        {lang[langConfig].search}
      </button>
    </form>
  );
};

export default GptSearchBar;
