import * as React from "react";
import TextArea from "./TextArea";

function TranslationSection() {
  return (
    <div className="flex flex-col items-start mt-8 ml-6 w-full text-sm font-bold text-black max-w-[1167px] max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between ml-3.5 max-w-full whitespace-nowrap w-[660px]">
        <div>Arabic</div>
        <div>Bangla</div>
      </div>

      <div className="flex flex-wrap gap-10 items-start self-stretch mt-2.5 text-black text-opacity-40 max-md:max-w-full">
        <TextArea
          label="Arabic Translation"
          name="arabicTranslation"
          className="grow w-fit max-md:max-w-full"
        />
        <TextArea
          label="Bangla Translation"
          name="banglaTranslation"
          className="grow w-fit max-md:max-w-full"
        />
      </div>

      <TextArea
        label="English"
        name="englishTranslation"
        className="w-[552px] mt-3.5"
      />

      <div className="self-center mt-16 ml-12 text-3xl max-md:mt-10">
        Transliteration
      </div>

      <div className="flex gap-5 w-full max-md:flex-col">
        <TextArea
          label="Bangla Transliteration"
          name="banglaTransliteration"
          className="w-1/2 max-md:w-full"
        />
        <TextArea
          label="English Transliteration"
          name="englishTransliteration"
          className="w-1/2 max-md:w-full"
        />
      </div>
    </div>
  );
}

export default TranslationSection;
