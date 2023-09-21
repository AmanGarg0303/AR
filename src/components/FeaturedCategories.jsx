import React from "react";
import { Link } from "react-router-dom";
import { dummyCategories } from "../data/data";

const FeaturedCategories = () => {
  return (
    <div className="px-4 lg:px-16 bg-[#f5f5f7]">
      <div className="py-6">
        <h4 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold my-5">
          Featured Categories
        </h4>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {dummyCategories?.map((c) => (
            <Link to={`/products?cat=${c?.title}`} key={c?.id}>
              <div className="flex gap-4 h-full">
                <img src={c.img} alt="" className="flex-1 w-40 rounded-sm" />

                <div className="flex-1 bg-red-400 flex flex-col justify-center items-center">
                  <h6 className="text-xl font-medium">{c?.title}</h6>
                  <span>10k+</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
