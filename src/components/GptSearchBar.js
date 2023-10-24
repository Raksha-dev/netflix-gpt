import { useSelector } from "react-redux";
import lang from "../utils/langConst";

const GptSearchBar = () => {
  const langConfig = useSelector((store) => store.lang.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <input
        className="rounded-sm w-[40%] border border-solid p-2"
        type="search"
        placeholder={lang[langConfig].inputPlaceholder}
      />
      <button className="text-white rounded-sm bg-slate-500 p-2 w-[5%]">
        {lang[langConfig].search}
      </button>
    </div>
  );
};

export default GptSearchBar;
