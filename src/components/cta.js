import React from "react";
import { BsChevronRight } from "react-icons/bs";

export default function Cta() {
  return (
    <>
      <button className='p-4 px-7 rounded absolute shadow-md bg-gradient-to-r from-[#f07baa] to-[#f69f8d] flex items-center text-white font-semibold'>
        WATCH VIDEO <BsChevronRight />
      </button>
    </>
  );
}
