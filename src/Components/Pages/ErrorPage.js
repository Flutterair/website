import React from "react";
import notfound from "../../Assets/notfound.png";

export default function ErrorPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="flex flex-col items-center justify-center text-center">
        <img src={notfound} />
      </div>
    </div>
  );
}
