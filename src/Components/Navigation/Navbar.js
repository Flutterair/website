import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import { Close, Menu } from "react-ionicons";

export default function Navbar() {
  const [open, setopen] = useState(false);

  return (
    <div
      className={
        open == true ? "bg-black fixed w-[100%]" : "bg-black fixed w-[100%] z-20"
      }
    >
      <div className="flex justify-between items-center md:mx-16 py-4 mx-4">
          <Link to="/">
        <div className="flex space-x-2 items-center cursor-pointer">
          <img src={logo} alt="logo" className="h-12 w-12" />
          <h1 className="font-satoshibold text-base text-white">flutterair</h1>
        </div>
          </Link>
        <div className="md:flex space-x-8 items-center hidden">
          <h1 className="font-satoshimedium text-sm text-white cursor-pointer">
            Products
          </h1>
          <h1 className="font-satoshimedium text-sm text-white cursor-pointer">
            Company
          </h1>
          <h1 className="font-satoshimedium text-sm text-white cursor-pointer">
            Pricing
          </h1>
          <h1 className="font-satoshimedium text-sm text-white cursor-pointer">
            Integrations
          </h1>
          <h1 className="font-satoshimedium text-sm text-white cursor-pointer">
            Resources
          </h1>
        </div>
        <div className="flex items-center md:space-x-8 space-x-3">
          <h1 className="font-satoshimedium text-sm text-white cursor-pointer md:flex hidden">
            Sign In
          </h1>
          <div className="rounded-full py-3 md:px-12 px-6 cursor-pointer bg-[#fff] md:flex hidden">
            <h1 className="font-satoshibold md:text-sm text-xs text-black">
              Get Started
            </h1>
          </div>
          <div
            className="flex md:hidden cursor-pointer"
            onClick={() => setopen(!open)}
          >
            {open == true ? <Close color={"#fff"} /> : <Menu color={"#fff"} />}
          </div>
        </div>
      </div>
      {/*MOBILE NAV MENU*/}
      <div
        className={
          open == true
            ? "bg-white z-10 h-screen w-[100%] md:hidden px-4 pt-10"
            : "hidden"
        }
      >
        <h1 className="font-satoshimedium text-xs text-[#434343]">PRODUCTS</h1>
        <div className="flex space-x-3 mt-6">
          <div className="h-8 w-8 bg-[#fff5cb] rounded-lg"></div>
          <div>
            <h1 className="font-satoshibold text-base text-[#2c2222]">
              Launchpad
            </h1>
            <h1 className="font-satoshiregular text-xs">
              Register your company in Nigeria, the US and Uk
            </h1>
          </div>
          
        </div>
        <div className="flex space-x-3 mt-6">
          <div className="h-8 w-8 bg-[#fff5cb] rounded-lg"></div>
          <div>
            <h1 className="font-satoshibold text-base text-[#2c2222]">
              Compliance
            </h1>
            <h1 className="font-satoshiregular text-xs">
              Meet up with government regulations as regarding your business
            </h1>
          </div>
          
        </div>
      </div>
    </div>
  );
}
