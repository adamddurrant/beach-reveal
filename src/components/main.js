import React from "react";
import Doors from "./doors";
import Cta from "./cta";
import { BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState } from "react";
import Video from "./video";

export default function Main() {
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [zIndex, setzIndex] = useState(false);

  const handleClick = () => {
    setTimeout(() => {
      setzIndex(true);
    }, 1000);
  };

  return (
    <>
      <main className='flex flex-wrap justify-center items-center relative h-screen'>
        <div className='w-full flex justify-center pt-24'>
          <h1 className='uppercase text-white text-3xl font-medium pb-8'>
            This is a campaign for a destination
          </h1>
        </div>
        <Cta zindex={zIndex} />
        <Doors left={left} right={right} />
        <Video />

        <div className='beach flex items-center justify-center'>
          <motion.img
            src='images/beach.svg'
            alt='beach illustration'
          ></motion.img>
        </div>
        <div className='callout w-full text-center flex justify-center'>
          <div
            className='callout-container w-[400px] cursor-pointer'
            onClick={() => {
              setLeft(true);
              setRight(true);
              handleClick();
            }}
          >
            <div className='flex justify-center'>
              <BsChevronRight
                className='text-pink-400 rotate-180 font-medium'
                size={30}
              />
              <BsChevronRight className='text-pink-400 font-medium' size={30} />
            </div>
            <h2 className='uppercase text-pink-400 text-3xl font-medium'>
              slide the window to explore
            </h2>
          </div>
        </div>
      </main>
    </>
  );
}
