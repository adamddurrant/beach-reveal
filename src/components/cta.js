import React from "react";
import { BsChevronRight } from "react-icons/bs";

export default function Cta({ zindex }) {
  return (
    <>
      <button
        className='p-4 cursor-pointer px-7 rounded absolute shadow-md bg-gradient-to-r from-[#f07baa] to-[#f69f8d] flex items-center text-white font-semibold'
        style={{ zIndex: zindex ? 11 : 0 }}
      >
        WATCH VIDEO <BsChevronRight />
      </button>
    </>
  );
}
