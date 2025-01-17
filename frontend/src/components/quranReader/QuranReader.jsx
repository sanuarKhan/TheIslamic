import React, { useEffect, useState } from "react";
import ParentComponent from "../filtering/Parent";
import { getQuranData } from "../../api/api";
export function QuranReader() {
  //const [currentPage, setCurrentPage] = useState(1); // For pagination (if applicable)
  const [quranData, setQuranData] = useState([]);

  useEffect(() => {
    // console.log(getQuranData);
    async function fetchData() {
      try {
        const data = await getQuranData();
        // console.log(data);
        if (Array.isArray(data)) {
          setQuranData(data); // Expecting an array of verses
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching Quran data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <main
      className="flex flex-col justify-start pt-8 pb-20 bg-red-50 overflow-hidden w-full px-4 sm:px-6 lg:px-8"
      role="main"
    >
      <ParentComponent />
      <h1
        className="mt-8 sm:mt-16 text-3xl sm:text-4xl lg:text-5xl font-semibold text-center text-black"
        lang="ar"
        dir="rtl"
      >
        {quranData[0]?.surah_name?.arabic || "Surah Name"}
      </h1>
      {quranData.length > 0 ? (
        quranData.map((verse, index) => (
          <div
            key={index}
            className="flex flex-col justify-end mt-4 sm:mt-7 w-full font-semibold text-start text-black px-2 sm:px-4"
            lang="ar"
            dir="rtl"
          >
            {/* Top Separator */}
            <div className="shrink-0 self-start w-full h-1 border border-black border-solid" />
            {/* Verse Display */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3.5 text-2xl sm:text-3xl lg:text-4xl">
              <span className="flex-grow text-start" lang="ar" dir="rtl">
                {verse.arabicText}
              </span>
              <span className="px-4 sm:px-7 py-2 whitespace-nowrap rounded-full border border-black border-solid bg-zinc-300 bg-opacity-0">
                {verse.ayah_number}
              </span>
            </div>
            <div
              className="flex flex-wrap gap-4 sm:gap-7 mt-3.5 w-full"
              role="region"
              aria-label={`Verse ${verse.ayah_number}`}
            ></div>
            {/* Bottom Separator */}
            <div className="shrink-0 self-start mt-4 w-full h-1 border border-black border-solid" />
          </div>
        ))
      ) : (
        <p className="mt-6 sm:mt-10 text-xl sm:text-2xl text-center text-gray-700">
          Loading verses...
        </p>
      )}

      {/* Pagination Button */}
      <button
        onClick={() => setCurrentPage((prev) => prev + 1)}
        className="self-center px-8 sm:px-16 py-3 sm:py-4 mt-16 sm:mt-24 lg:mt-36 text-2xl sm:text-3xl lg:text-4xl text-white whitespace-nowrap bg-violet-700 rounded-xl w-fit hover:bg-violet-800 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
        aria-label="Next page"
      >
        Next
      </button>
    </main>
  );
}
