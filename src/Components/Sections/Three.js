import React from "react";

export default function Three() {
  return (
    <div className="mt-20 mb-20">
      <div className=" mx-10 flex md:justify-between items-center md:flex-row flex-col md:space-y-0 space-y-8 justify-center md:mx-28">
        <div className="flex items-center space-x-4">
          <div className="h-8 w-10 bg-[#E9E9E9]"></div>
          <div>
            <h1 className="font-satoshimedium text-lg text-black">Speed</h1>
            <h1 className="font-satoshiregular text-xs text-black md:w-[80%]">
              Register a business or company from anywhere in the world in under
              20 minutes
            </h1>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="h-8 w-10 bg-[#E9E9E9]"></div>
          <div>
            <h1 className="font-satoshimedium text-lg text-black">Security</h1>
            <h1 className="font-satoshiregular text-xs text-black md:w-[80%]">
              Our Grade-A encryption security systems, keeps safe all your
              documents and files safe.
            </h1>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="h-8 w-10 bg-[#E9E9E9]"></div>
          <div>
            <h1 className="font-satoshimedium text-lg text-black">Support</h1>
            <h1 className="font-satoshiregular text-xs text-black md:w-[80%]">
              Access our well vast support team, ready with all the answers and
              solutions you need
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
