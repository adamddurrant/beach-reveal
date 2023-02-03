import React from "react";
import Doors from "./doors";
import Cta from "./cta";

export default function Main() {
  return (
    <>
      <main className='flex justify-center items-center relative'>
        <img src='images/beach.svg' alt='beach illustration'></img>
        <Cta />
      </main>
    </>
  );
}
