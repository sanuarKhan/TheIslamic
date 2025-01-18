function SearchBar() {
  return (
    <div className="flex w-full justify-center items-center opacity-70   rounded-ful max-md:px-5 max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
      <div className="flex justify-center items-center  max-md:flex-col relative">
        <input
          type="search"
          className="w-[300px] relative py-2 bg-gray-400 opacity-80 rounded-full"
          name=""
          id=""
        />
        <svg
          className="absolute top-2 right-5 text-xl"
          stroke="currentColor"
          fill="currentColor"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
            clip-rule="evenodd"
          ></path>
          <path
            fill-rule="evenodd"
            d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default SearchBar;
