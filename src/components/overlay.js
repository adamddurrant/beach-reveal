import React from "react";
import { useContext } from "react";
import { VideoContext } from "../contexts/VideoContext.js";
import { motion } from "framer-motion";

export default function Overlay() {
  const { video } = useContext(VideoContext);

  return (
    <>
      {video && (
        <motion.div
          animate={{ opacity: video ? 0.5 : 0 }}
          initial={{ opacity: 0 }}
          transition={{ type: "tween", duration: 2 }}
          className='opacity-50 bg-black fixed top-0 left-0 h-full w-full z-10'
        ></motion.div>
      )}
    </>
  );
}
