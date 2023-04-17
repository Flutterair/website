import React from "react";

export default function Card() {
  return (
    <div className="md:mx-32 mt-20 mb-10 mx-4">
      <div className="bg-[#00A856] md:flex justify-between items-center rounded-2xl">
        <div className="md:py-20 py-8 md:px-16 px-6 md:w-[70%]">
          <div className="border border-white py-2 px-4 cursor-pointer rounded-full inline-block">
            <h1 className="text-white text-xs font-satoshimedium">Launchpad</h1>
          </div>
          <h1 className="font-satoshibold md:text-2xl text-xl text-white mt-4">
            Register your business
          </h1>
          <h1 className="font-satoshibold md:text-2xl text-xl text-white">
            and get off the ground with ease
          </h1>
          <h1 className="font-satoshiregular text-base mt-4 text-white">
            Takeoff strong with a fully automated registration process, no legal
            paper work hassles, start compliantly ready, access to our global
            customer support for any questions, and a big smile on your face
          </h1>
          <div className="mt-6 rounded-full py-3 md:px-12 px-6 cursor-pointer bg-[#fff] inline-block">
            <h1 className="font-satoshibold text-sm text-black">
              Launch my business
            </h1>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
