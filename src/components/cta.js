import React, { useContext } from "react";
import { BsChevronRight } from "react-icons/bs";
import { VideoContext } from "../contexts/VideoContext.js";
import { motion } from "framer-motion";

export default function Cta({ zindex, setzindex }) {
  const { setVideo } = useContext(VideoContext);
  return (
    <>
      <motion.button
        animate={{ opacity: zindex ? 1 : 0 }}
        initial={{ opacity: 0 }}
        transition={{
          type: "tween",
          duration: 0.8,
        }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 },
        }}
        className='p-4 cursor-pointer px-8 rounded absolute shadow-md bg-gradient-to-r from-[#f07baa] to-[#f69f8d] flex items-center text-white font-semibold text-xl'
        style={{ zIndex: zindex ? 41 : 0 }}
        onClick={() => {
          setVideo(true);
          setzindex(false);
        }}
      >
        WATCH VIDEO <BsChevronRight />
      </motion.button>
    </>
  );
}
