import React from "react";
import { Link } from "react-router-dom";

const PhoneSettings = () => {
  return (
    <div className="px-4 lg:px-16 bg-[#f5f5f7] ">
      <div className="py-4">
        <h4 className="text-left md:text-center text-xl sm:text-2xl md:text-3xl font-semibold">
          Settings
        </h4>

        <div className="flex flex-col gap-4 pt-5 sm:pt-8">
          <Link to="/about">
            <div className="grid place-items-center px-5 py-3 border-2 rounded-md bg-[#f6f6f5] shadow-md">
              <h6 className="text-base sm:text-lg">About</h6>
            </div>
          </Link>

          <Link to="/register">
            <div className="grid place-items-center px-5 py-3 border-2 rounded-md bg-[#f6f6f5] shadow-md">
              <h6 className="text-base sm:text-lg">Signup</h6>
            </div>
          </Link>
          <Link to="/login">
            <div className="grid place-items-center px-5 py-3 border-2 rounded-md bg-[#f6f6f5] shadow-md">
              <h6 className="text-base sm:text-lg">Login</h6>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhoneSettings;
