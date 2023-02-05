import React, { useContext } from "react";
import { BsChevronRight } from "react-icons/bs";
import { VideoContext } from "../contexts/VideoContext.js";
import { motion } from "framer-motion";

export default function Cta({ zindex }) {
  const { setVideo } = useContext(VideoContext);
  return (
    <>
      <button
        className='p-4 cursor-pointer px-7 rounded absolute shadow-md bg-gradient-to-r from-[#f07baa] to-[#f69f8d] flex items-center text-white font-semibold'
        style={{ zIndex: zindex ? 11 : 0 }}
        onClick={() => {
          setVideo(true);
        }}
      >
        WATCH VIDEO <BsChevronRight />
      </button>
    </>
  );
}
