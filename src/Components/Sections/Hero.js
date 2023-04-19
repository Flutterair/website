import React from "react";
import heroimg from "../../Assets/heroimg.png";
import { Star, StarOutline } from "react-ionicons";

export default function Hero() {
  return (
    <div className="bg-black">
      <div className="md:mx-32 mx-6 pt-40 pb-20">
        <h1 className="font-satoshimedium text-sm text-white">Introducing:</h1>
        <h1 className="font-satoshimedium text-sm text-white">
          Africas Startup and Business Launchpad 🚀
        </h1>
        <div className="md:flex justify-between md:items-end items-center">
          <div className="md:w-[76%]">
            <h1 className="font-satoshibold md:text-5xl text-3xl text-white mt-2">
              Empowering Startups to Succeed
            </h1>
            <h1 className="font-satoshimedium text-base mt-4 text-white md:w-[80%]">
              Flutterair is your one-stop solution for launching, growing, and
              scaling your business in Africa. We offer seamless business
              registrations and incorporations while providing one-click growth
              tools that offer endless possibilities for your business.
            </h1>
            <div className="flex items-center md:space-x-8 mt-10 space-x-4">
              <div className=" rounded-full py-3 md:px-12 px-4 cursor-pointer bg-[#fff] inline-block">
                <h1 className="font-satoshibold text-xs text-black">
                  Launch my business
                </h1>
              </div>
              <h1 className="font-satoshimedium text-xs text-white cursor-pointer">
                Already Incorporated ?
              </h1>
            </div>
          </div>
          <div>
            <img
              src={heroimg}
              alt="heroimg"
              className="md:w-[80%] ml-10 w-[30%] md:mt-0 mt-10 md:flex hidden"
            />
          </div>
        </div>

        <div className="mt-32 mb-20">
          <div className="flex space-x-4 items-center">
            <div className="bg-[#8a8a8a] h-20 w-0.5"></div>
            <div className="space-y-4">
              <h1 className="font-satoshibold text-sm text-white">
                Trusted Users
              </h1>
              <div className="flex items-center space-x-1">
                <Star color={"#FDCC0D"} height="20px" width="20px" />
                <Star color={"#FDCC0D"} height="20px" width="20px" />
                <Star color={"#FDCC0D"} height="20px" width="20px" />
                <Star color={"#FDCC0D"} height="20px" width="20px" />
                <StarOutline color={"#FDCC0D"} height="20px" width="20px" />
              </div>
              <h1 className="font-satoshilight text-lg text-white mt-2">
                Rated 4.0 by 200K Customers
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
