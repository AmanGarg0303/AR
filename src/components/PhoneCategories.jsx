import React from "react";
import { Link } from "react-router-dom";
import { dummyCategories } from "../data/data";

const PhoneCategories = () => {
  return (
    <div className="px-4 lg:px-16 bg-[#f5f5f7] ">
      <div className="py-4">
        <h4 className="text-left md:text-center text-xl sm:text-2xl md:text-3xl font-semibold">
          Categories
        </h4>

        <div className="grid grid-cols-2 place-items-center gap-5 sm:grid-cols-3 pt-5 sm:pt-8">
          {dummyCategories?.map((d) => (
            <div key={d?.id} className="w-full h-full">
              <Link to={`/products?cat=${d?.categoryName}`}>
                <div className="border-2 px-5 py-3 rounded-md bg-[#e2d5ec]">
                  <h6 className="uppercase text-center">{d?.title}</h6>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhoneCategories;
