import React from "react";

export default function CreateAccount() {
  return (
    <div className="pt-28 items-center justify-center flex flex-col bg-[#F6F6F6] pb-28">
      <div className="mx-10 bg-[#fff] rounded-lg py-10 px-6 w-[54%]">
        <h1 className="font-satoshibold md:text-sm text-xs text-black">
          We are almost ready for the public
        </h1>
        <p className="font-satoshimedium text-xs mt-1">
          We are currently in private BETA, fill this form to join the waitlist
        </p>
        <div className="mt-8 flex flex-col items-start ">
          <label className="font-satoshimedium text-sm ">First Name</label>
          <input
            type="text"
            className="w-[100%] border border-[#eee] rounded-lg py-3 px-3 font-satoshiregular mt-1 text-sm focus:outline-0"
            placeholder="First Name"
          ></input>
        </div>
        <div className="mt-4 flex flex-col items-start ">
          <label className="font-satoshimedium text-sm ">Last Name</label>
          <input
            type="text"
            className="w-[100%] border border-[#eee] rounded-lg py-3 px-3 font-satoshiregular mt-1 text-sm focus:outline-0"
            placeholder="Last Name"
          ></input>
        </div>
        <div className="mt-4 flex flex-col items-start ">
          <label className="font-satoshimedium text-sm ">Email Address</label>
          <input
            type="email"
            className="w-[100%] border border-[#eee] rounded-lg py-3 px-3 font-satoshiregular mt-1 text-sm focus:outline-0"
            placeholder="youremail@gmail.com"
          ></input>
        </div>
        <div className="mt-4 flex flex-col items-start ">
          <label className="font-satoshimedium text-sm ">
            Product of Interest
          </label>
          <select
            className="w-[100%] border border-[#eee] rounded-lg h-10 px-3 font-satoshiregular mt-1 text-sm focus:outline-0"
            placeholder="First Name"
          >
            <option>SELECT POI</option>
            <option value={"All the Products"}>All the Products</option>
            <option value={"Launchpad"}>
              Launchpad (Register my business)
            </option>
            <option value={"Compliance"}>Compliance</option>
            <option value={"Integrations"}>Integrations</option>
            <option value={"International Registration"}>
              International Registration (US)
            </option>
            <option value={"Virtual Mailing"}>Virtual Mailing</option>
          </select>
        </div>
        <div className="mt-8 rounded-lg py-3 px-3 items-center justify-center text-center flex bg-[#000] cursor-pointer">
          <h1 className="font-satoshimedium text-white text-sm ">Sign me up</h1>
        </div>
      </div>
    </div>
  );
}
