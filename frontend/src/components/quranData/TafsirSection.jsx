import * as React from "react";
import TextArea from "./TextArea";
import { useState } from "react";

function TafsirSection({ data }) {
  const { source, setSource } = useState("");
  const { content, setContent } = useState("");
  return (
    <div className="flex flex-col items-start mt-28 ml-6 w-full text-sm font-bold max-w-[1233px] max-md:mt-10 max-md:max-w-full">
      <div className="self-center text-3xl font-bold text-black">Tafsir</div>

      <TextArea
        label="Tafsir Name"
        name="tafsirName"
        className="w-[1212px] max-w-full"
        value={source}
      />

      <TextArea
        label="Content"
        name="tafsirContent"
        className="self-stretch pb-72 mt-6 max-md:pb-28"
        value={content}
      />
    </div>
  );
}

export default TafsirSection;
