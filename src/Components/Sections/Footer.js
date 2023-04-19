import React from "react";
import logo from "../../Assets/logo.png";

export default function Footer() {
  return (
    <div className="bg-black">
      <div className="md:mx-16 py-6 pt-20 mx-4 ">
        <div className="md:flex justify-between items-start">
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
          <div className="flex justify-between md:space-x-16 md:mt-0 mt-8">

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

          <div>
            <div className=" space-y-6 items-start md:mt-0 mt-6">
              <h1 className="font-satoshibold text-base text-white">Support</h1>
              <h1 className="font-satoshimedium text-sm text-white cursor-pointer">
                support@flutterair.com
              </h1>
            </div>
          </div>

        </div>
        <div className="h-0.5 w-[100%] bg-[#6d6d6d] mt-10 mb-10"></div>
        <div className="mt-6 mb-10">
          <p className="mt-1 font-satoshiregular text-xs text-white">
            Flutterair provides a suite of services to help African startups and
            businesses launch, grow, and scale. We work with licensed partners
            in their respective jurisdictions to ensure compliance with local
            regulations. All trademarks and brand names belong to their
            respective owners. Use of these trademarks and brand names does not
            represent endorsement by or association with Flutterair. IMPORTANT
            INFORMATION ABOUT BUSINESS REGISTRATIONS: To comply with local
            regulations and ensure a smooth registration process, we require
            accurate and up-to-date information from all applicants. When you
            work with us to register your business, we may ask for your personal
            and business information, including your company name, address, and
            other details that will allow us to complete the registration
            process on your behalf.
          </p>
        </div>
      </div>
    </div>
  );
}
