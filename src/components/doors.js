import React from "react";
import { motion } from "framer-motion";
export default function Doors() {
  return (
    <>
      <motion.div className='doors absolute z-10 flex'>
        <div className='door1'>
          <img src='images/singular-door.svg' alt='door'></img>
        </div>
        <div className='door2'>
          <img src='images/singular-door.svg' alt='door'></img>
        </div>
      </motion.div>
    </>
  );
}
