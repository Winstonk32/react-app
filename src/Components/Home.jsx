import React from "react";
import { ReactTyped } from "react-typed";
import ClickButton from 'react';
  
const Home = () => {
  return (
    <div className="text-white">
      <div className="max-w[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-1"> My Portfolio</p>
        <h1 className="md:text-5x1 sm:text-4xl text-xl font-bold"> My name is Winston</h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5x1 sm:text-4xl text-xl font-bold"> </p>
        <ReactTyped className="md:text-5x1 sm:text-4xl text-xl font-bold" strings={['Im a uspiring Web developer']}
         typeSpeed={120}
         backSpeed={140}
         loop
         />
        </div>
        <div>
        <button  className="bg-[#00df9a] W-[400PX] rounded-md font-medium my-6 mx-auto px-10 text-black">Get to know me</button>
        </div>
      </div>
    </div>
  );
}



export default Home;

