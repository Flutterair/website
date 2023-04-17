import React from "react";
import international from "../../Assets/international.png";

export default function International() {
  return (
    <div className="md:mx-32 mt-20 mb-10 mx-4">
      <div className="bg-[#000] md:flex justify-between items-center rounded-2xl">
        <div className="md:py-20 py-6 md:px-16 px-6 md:w-[70%]">
          <div className="border border-white py-2 px-4 cursor-pointer rounded-full inline-block">
            <h1 className="text-white text-xs font-satoshimedium">
              International
            </h1>
          </div>
          <h1 className="font-satoshibold md:text-2xl text-xl text-white mt-4">
            Register your business
          </h1>
          <h1 className="font-satoshibold md:text-2xl text-xl text-white">
            and get off the ground with ease
          </h1>
          <h1 className="font-satoshiregular text-base mt-4 text-white">
            Expand your business internationally and navigate global
            regulations. Register your company in the US and the UK, and stay
            compliant through our large range of tools, go Global from anywhere
            in the world
          </h1>
          <div className="mt-6 rounded-full py-3 md:px-12 px-6 cursor-pointer bg-[#fff] inline-block">
            <h1 className="font-satoshibold text-sm text-black">
              Go International
            </h1>
          </div>
        </div>
        <div className="py-4 px-4 md:flex hidden">
          <img src={international} alt="international_globe" />
        </div>
      </div>
    </div>
  );
}
