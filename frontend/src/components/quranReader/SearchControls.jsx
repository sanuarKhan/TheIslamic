import React from "react";

export function SearchControls() {
  const [paraNumber, setParaNumber] = React.useState("");
  const [suraName, setSuraName] = React.useState("");
  const [verse, setVerse] = React.useState("");

  return (
    <div
      className="flex flex-wrap gap-10 pt-3.5 pr-20 pb-1 pl-3 mt-12 max-w-full bg-zinc-300 w-full max-md:pr-5 max-md:mt-10"
      role="search"
    >
      <div className="flex shrink justify-between gap-10 my-auto text-sm font-semibold text-center text-black basis-auto grow-0">
        <button
          onClick={() => setParaNumber((prev) => !prev)}
          className="flex gap-2 self-start px-3.5 py-1 bg-neutral-100"
          aria-expanded={paraNumber}
          aria-label="Select para number"
        >
          <span className="grow my-auto">Para number</span>
        </button>
        <button
          onClick={() => setSuraName((prev) => !prev)}
          className="flex gap-4 px-3 py-1 bg-neutral-100"
          aria-expanded={suraName}
          aria-label="Select sura name"
        >
          <span className="my-auto">Sura name</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/befed9eb6f159358bb032f84dd91594c9ff1619a1f9552ac17d701bd8fedcb4d?placeholderIfAbsent=true&apiKey=7cc451b09be74ab394917394dfb5a2db"
            alt=""
            className="object-contain shrink-0 aspect-[0.49] w-[17px]"
          />
        </button>
      </div>
      <div className="flex flex-auto gap-10 max-md:max-w-full">
        <div className="flex flex-col justify-center items-end self-start px-20 py-3 mt-2.5 rounded-3xl bg-zinc-100 max-md:pl-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/05795338f489feb3376d9092b2b5d2f8e0917ecc04ff975c64c730abc53a7093?placeholderIfAbsent=true&apiKey=7cc451b09be74ab394917394dfb5a2db"
            alt=""
            className="object-contain aspect-[0.82] w-[9px]"
          />
        </div>
        <button
          onClick={() => setVerse((prev) => !prev)}
          className="flex gap-10 px-5 py-1 my-auto text-sm font-semibold text-center text-black whitespace-nowrap bg-neutral-100"
          aria-expanded={verse}
          aria-label="Select verse"
        >
          <span className="my-auto">Vers</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/befed9eb6f159358bb032f84dd91594c9ff1619a1f9552ac17d701bd8fedcb4d?placeholderIfAbsent=true&apiKey=7cc451b09be74ab394917394dfb5a2db"
            alt=""
            className="object-contain shrink-0 aspect-[0.49] w-[17px]"
          />
        </button>
        <button
          className="flex flex-col text-sm font-semibold text-center text-black whitespace-nowrap"
          aria-label="Filter results"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ea64fb0a49d191832d5ac938a78f809211412bd66b8a0ebc3a76ceb1040bd95?placeholderIfAbsent=true&apiKey=7cc451b09be74ab394917394dfb5a2db"
            alt=""
            className="object-contain aspect-[1.14] w-[42px]"
          />
          <span className="self-start mt-1.5">Filter</span>
        </button>
      </div>
    </div>
  );
}
