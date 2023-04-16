import React from "react";
import logo from "../../Assets/logo.png";
import { Menu } from "react-ionicons";

export default function Navbar() {
  return (
    <div className="bg-black fixed w-[100%]">
      <div className="flex justify-between items-center md:mx-16 py-4 mx-4">
        <div className="flex space-x-2 items-center">
          <img src={logo} alt="logo" className="h-12 w-12" />
          <h1 className="font-satoshibold text-base text-white">flutterair</h1>
        </div>
        <div className="md:flex space-x-8 items-center hidden">
          <h1 className="font-satoshimedium text-sm text-white cursor-pointer">Products</h1>
          <h1 className="font-satoshimedium text-sm text-white cursor-pointer">Company</h1>
          <h1 className="font-satoshimedium text-sm text-white cursor-pointer">Pricing</h1>
          <h1 className="font-satoshimedium text-sm text-white cursor-pointer">Integrations</h1>
          <h1 className="font-satoshimedium text-sm text-white cursor-pointer">Resources</h1>
        </div>
        <div className="flex items-center md:space-x-8 space-x-3">
        <h1 className="font-satoshimedium text-sm text-white cursor-pointer md:flex hidden">Sign In</h1>
        <div className=" rounded-full py-3 md:px-12 px-6 cursor-pointer bg-[#fff]">
        <h1 className="font-satoshibold md:text-sm text-xs text-black">Get Started</h1>
        </div>
        <div className="flex md:hidden">
            <Menu
            color={"#fff"}

            />
        </div>
        </div>
      </div>
    </div>
  );
}
