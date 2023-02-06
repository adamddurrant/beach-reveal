import React from "react";
import { FaChevronRight } from "react-icons/fa";

export default function Slide(props) {
  return (
    <div className='callout w-full text-center flex justify-center pt-8 pb-24'>
      <div
        className='callout-container w-[400px] cursor-pointer'
        onClick={() => {
          props.setLeft(true);
          props.setRight(true);
          props.handleClick();
        }}
      >
        <div className='flex justify-center pb-2'>
          <FaChevronRight
            className='text-pink-400 rotate-180 font-medium'
            size={30}
          />
          <FaChevronRight className='text-pink-400 font-medium' size={30} />
        </div>
        <h2 className='uppercase text-white text-4xl font-medium'>
          slide the window to explore
        </h2>
      </div>
    </div>
  );
}
