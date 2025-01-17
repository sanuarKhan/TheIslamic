import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

function Quran() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <SearchBar />
      <Link to="/quran/recite">
        <button className="self-center px-16 py-6 mt-12 max-w-full text-5xl font-bold text-center text-white whitespace-nowrap bg-green-500 rounded-xl w-[647px] max-md:px-5 max-md:mt-10 max-md:text-4xl">
          Recite
        </button>
      </Link>
      <button className="self-center px-16 py-6 mt-12 max-w-full text-5xl font-bold text-center text-white whitespace-nowrap bg-green-500 rounded-xl w-[647px] max-md:px-5 max-md:mt-10 max-md:text-4xl">
        Translation
      </button>
    </div>
  );
}

export default Quran;
