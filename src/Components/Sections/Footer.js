import React from "react";
import logo from "../../Assets/logo.png";

export default function Footer() {
  return (
    <div className="bg-black">
      <div className="mx-16 py-6 pt-20 ">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex space-x-2 items-center cursor-pointer">
              <img src={logo} alt="logo" className="h-12 w-12" />
              <h1 className="font-satoshibold text-base text-white">
                flutterair
              </h1>
            </div>
            <p className="mt-1 font-satoshiregular text-xs text-white">
              Flutterair © 2023
            </p>
          </div>
          <div></div>
          <div>
            <div className=" space-y-6 items-start">
              <h1 className="font-satoshibold text-base text-white">
                Quick Links
              </h1>
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
          </div>
          <div>
            <div className=" space-y-6 items-start">
              <h1 className="font-satoshibold text-base text-white">Support</h1>
              <h1 className="font-satoshimedium text-sm text-white cursor-pointer">
                support@flutterair.com
              </h1>
            </div>
          </div>
          <div>
            <div className=" space-y-6 items-start">
              <h1 className="font-satoshibold text-base text-white">
                Social Links
              </h1>
              <h1 className="font-satoshimedium text-sm text-white cursor-pointer">
                Instagram
              </h1>
              <h1 className="font-satoshimedium text-sm text-white cursor-pointer">
                Linkedin
              </h1>
              <h1 className="font-satoshimedium text-sm text-white cursor-pointer">
                Twitter
              </h1>
              <h1 className="font-satoshimedium text-sm text-white cursor-pointer">
                Telegram
              </h1>
            </div>
          </div>
        </div>
        <div className="h-0.5 w-[100%] bg-[#6d6d6d] mt-10 mb-10"></div>
        <div className="mt-6 mb-10">
          <p className="mt-1 font-satoshiregular text-xs text-white">
            * Flutterair offers its products and services in partnership with
            licensed transmitters in their respective jurisdictions. * All
            trademarks and brand names belong to their respective owners. Use of
            these trademarks and brand names do not represent endorsement by or
            association with Payday * IMPORTANT INFORMATION ABOUT PROCEDURES FOR
            OPENING A NEW ACCOUNT: To help the government fight the funding of
            terrorism and money laundering activities, federal law requires all
            financial institutions to obtain, verify, and record information
            that identifies each person who opens an Account. What this means
            for you: When you open an Account, we will ask for your name,
            address, date of birth, and other information that will allow us to
            identify you. We may also ask to see a copy of your driver’s
            license.
          </p>
        </div>
      </div>
    </div>
  );
}
