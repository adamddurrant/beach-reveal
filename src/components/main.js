import React from "react";
import Doors from "./doors";
import Cta from "./cta";
import { useState } from "react";
import Video from "./video";
import Title from "./title";
import Beach from "./beach";
import Slide from "./slide";

export default function Main() {
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [zIndex, setzIndex] = useState(false);

  const handleClick = () => {
    setTimeout(() => {
      setzIndex(true);
    }, 500);
  };

  return (
    <>
      <main className='flex flex-wrap justify-center items-center relative h-[100%]'>
        <Title />
        <div className='primary-content flex flex-wrap justify-center items-center relative'>
          <Cta zindex={zIndex} />
          <Doors
            left={left}
            right={right}
            setleft={setLeft}
            setright={setRight}
            setzindex={setzIndex}
          />
          <Video />
          <Beach left={left} />
        </div>
        <Slide
          setLeft={setLeft}
          setRight={setRight}
          handleClick={handleClick}
        />
      </main>
    </>
  );
}
