import React from "react";
import { Link } from "react-router-dom";
import { data } from "../data/data";

const PopularProducts = () => {
  return (
    <div className="px-4 lg:px-16 bg-[#e9e9ea]">
      <div className="py-6">
        <h4 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold my-5">
          Popular Products
        </h4>

        <section className="text-gray-600 body-font">
          <div className="py-8 mx-auto">
            <div className="flex flex-wrap -m-4">
              {data?.map((f) => (
                <div className="p-4 sm:w-1/2 md:w-1/3" key={f?.id}>
                  <div className="h-full border-2 border-gray-300 bg-[#f6f6f6] border-opacity-60 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-contain object-center bg-gray-200"
                      src={f?.imgUrl}
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest uppercase text-xs title-font font-medium text-gray-400 mb-1">
                        {f?.category}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {f?.title}
                      </h1>
                      <p className="leading-relaxed mb-3">
                        {f?.desc?.slice(0, 50)}...
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <Link
                          to={`/products/${f?.id}`}
                          state={f}
                          className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Read More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PopularProducts;
