import React from "react";
import Doors from "./doors";
import Cta from "./cta";
import { motion } from "framer-motion";

export default function Main() {
  return (
    <>
      <main className='flex justify-center items-center relative'>
        <Doors />
        <motion.img
          src='images/beach.svg'
          alt='beach illustration'
        ></motion.img>
        <Cta />
      </main>
    </>
  );
}
