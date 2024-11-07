import React from "react";

function button({ text ,link}) {
  return (
    <>
      <a href={link ? link :"#"}>
      <button className="px-[22px] py-[9px] bg-[#6666b3] w-auto rounded-[5px] justify-start items-center gap-2.5 inline-flex text-white text-2xl font-semibold">
        {text}
      </button>
      </a>
    </>
  );
}

export default button;
