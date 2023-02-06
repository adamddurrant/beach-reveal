import React from "react";
import { motion } from "framer-motion";

export default function Beach(props) {
  return (
    <div
      id='animation-wrap'
      className={props.left ? "beach beach-open" : "beach"}
    >
      <div className='flex items-center justify-center'>
        <motion.img
          className='contain'
          src='images/beach.svg'
          alt='beach illustration'
        ></motion.img>
      </div>
    </div>
  );
}
