import React from "react";
import { motion } from "framer-motion";

export default function Doors({ left, right }) {
  return (
    <>
      <motion.div className='doors absolute flex z-20'>
        <motion.div
          animate={{ x: left ? -480 : 0 }}
          initial={{ x: 0 }}
          transition={{ type: "tween", duration: 2 }}
          className='door1'
        >
          <img src='images/singular-door.svg' alt='door' />
        </motion.div>
        <motion.div
          animate={{ x: right ? 480 : 0 }}
          initial={{ x: 0 }}
          transition={{ type: "tween", duration: 2 }}
          className='door2'
        >
          <img src='images/singular-door.svg' alt='door' />
        </motion.div>
      </motion.div>
    </>
  );
}
