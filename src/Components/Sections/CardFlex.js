import React from "react";
import bankdollar from "../../Assets/bankdollar.png";
import bankeuro from "../../Assets/euroaccount.png";
import compliance from "../../Assets/compliance.png";

export default function CardFlex() {
  return (
    <div>
      <div className="md:flex md:space-x-10 items-center md:mx-32 mx-4 md:space-y-0 space-y-4 mt-20 mb-10">
        <div className="md:w-[50%] bg-[#EFF1F7] rounded-lg py-4 px-4">
          <h1 className="font-satoshibold md:text-base text-sm text-black mt-4">
            Gain access to international business accounts
          </h1>
          <p className="mt-1 font-satoshiregular text-xs">
            Easily setup international business accounts for your registered
            company and transact without borders, Bank account application is
            subject to approval.
          </p>
          <div className="relative mx-10 mt-14 items-center justify-center flex flex-col">
            <img
              src={bankdollar}
              alt="bank_dollar_img"
              className="w-[40%] mt-20 items-center justify-center flex"
            />
            <img
              src={bankeuro}
              alt="bank_dollar_img"
              className="w-[40%] items mt-4 -center z-10 absolute top-0 right-20"
            />
          </div>
        </div>
        <div className="md:w-[50%] bg-[#EFF1F7] rounded-lg py-4 px-4">
          <h1 className="font-satoshibold md:text-base text-sm text-black mt-4">
            Stay on top of legal and regulatory requirements
          </h1>
          <p className="mt-1 font-satoshiregular text-xs">
            Automate compliance with our ready set of tools to handle tax
            filings, meeting up with all your business and company regulatory
            requirements
          </p>
          <div className="mx-10 mt-2  items-center justify-center flex flex-col">
            <img
              src={compliance}
              alt="bank_dollar_img"
              className="w-[50%] mt-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
