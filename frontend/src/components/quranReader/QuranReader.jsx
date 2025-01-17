import React, { useEffect, useState } from "react";
import ParentComponent from "../filtering/Parent";
import { getQuranData } from "../../api/api";
export function QuranReader() {
  const [currentPage, setCurrentPage] = useState(1); // For pagination (if applicable)
  const [quranData, setQuranData] = useState([]);

  useEffect(() => {
    console.log(getQuranData);
    async function fetchData() {
      try {
        const data = await getQuranData();
        console.log(data);
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
      className="flex flex-col justify-start pt-8 pb-20 bg-red-50 overflow-hidden"
      role="main"
    >
      <ParentComponent />
      <h1
        className="mt-16 text-5xl font-semibold text-center text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl"
        lang="ar"
        dir="rtl"
      >
        {quranData[0]?.surah_name?.arabic || "Surah Name"}
        {/* Safely access surah name */}
      </h1>
      {quranData.length > 0 ? (
        quranData.map((verse, index) => (
          <div
            key={index}
            className="flex flex-col justify-end mt-7 w-full font-semibold text-start text-black max-md:px-5 max-md:max-w-full"
            lang="ar"
            dir="rtl"
          >
            {/* Top Separator */}
            <div className="shrink-0 self-start max-w-full h-1 border border-black border-solid w-[1302px]" />
            {/* Verse Display */}
            <div className="flex shrink gap-3.5 self-stsrt text-4xl basis-auto grow-0">
              <span
                className="basis-auto text-start self-start"
                lang="ar"
                dir="rtl"
              >
                {verse.arabicText}
              </span>
              <span className="px-7 py-2 whitespace-nowrap rounded-full border border-black border-solid bg-zinc-300 bg-opacity-0 max-md:px-5">
                {verse.ayah_number}
              </span>
            </div>
            <div
              className="flex flex-wrap gap-7 self-start  text-start mt-3.5 w-full max-w-[1256px] max-md:max-w-full"
              role="region"
              aria-label={`Verse ${verse.ayah_number}`}
            ></div>
            {/* Bottom Separator */}
            <div className="shrink-0 self-start mt-4 max-w-full h-1 border border-black border-solid w-[1302px]" />
          </div>
        ))
      ) : (
        <p className="mt-10 text-center text-2xl text-gray-700">
          Loading verses...
        </p>
      )}

      {/* Pagination Button */}
      <button
        onClick={() => setCurrentPage((prev) => prev + 1)}
        className="self-center px-16 py-4 mt-36 max-w-full text-4xl text-white whitespace-nowrap bg-violet-700 rounded-xl w-[232px] max-md:px-5 max-md:mt-10 focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
        aria-label="Next page"
      >
        Next
      </button>
    </main>
  );
}
