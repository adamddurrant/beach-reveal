import React from "react";
import { motion } from "framer-motion";

export default function Doors({ left, right, setleft, setright, setzindex }) {
  const handleClick = () => {
    setTimeout(() => {
      setzindex(true);
    }, 500);
  };
  return (
    <>
      <motion.div
        onClick={() => {
          setleft(true);
          setright(true);
          handleClick();
        }}
        className='doors absolute flex z-40'
      >
        <motion.div
          animate={{ x: left ? -480 : 0 }}
          initial={{ x: 0 }}
          transition={{ type: "tween", duration: 2 }}
          className='door1 cursor-pointer'
        >
          <img src='images/singular-door.svg' alt='door' />
        </motion.div>
        <motion.div
          onClick={() => {
            setleft(true);
            setright(true);
            handleClick();
          }}
          animate={{ x: right ? 480 : 0 }}
          initial={{ x: 0 }}
          transition={{ type: "tween", duration: 2 }}
          className='door2 cursor-pointer'
        >
          <img src='images/singular-door.svg' alt='door' />
        </motion.div>
      </motion.div>
    </>
  );
}
