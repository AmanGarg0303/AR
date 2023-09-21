import React, { useEffect } from "react";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import RemoveCircleOutlineSharpIcon from "@mui/icons-material/RemoveCircleOutlineSharp";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";

const Cart = () => {
  useEffect(() => {
    const toTop = () => {
      window.scrollTo(0, 0);
    };
    toTop();
  }, []);

  return (
    <div className="px-4 lg:px-16 bg-[#f5f5f7]">
      <div className="py-6">
        <h4 className="text-left md:text-center text-xl sm:text-2xl md:text-3xl font-semibold mt-5">
          Your Cart
        </h4>

        <button
          type="button"
          className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-4 md:px-6 focus:outline-none hover:bg-indigo-600 rounded"
        >
          Clear Cart
        </button>

        <section className="text-gray-600 body-font bg-[#e9e9ea] my-5 rounded-lg">
          <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
            <div className="lg:max-w-sm lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded max-h-80"
                alt="hero"
                src="https://res.cloudinary.com/dzh0wkv97/image/upload/v1694946053/AR%20glbs/Screenshot_997_jptp5t.png"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Astranaut Suit
              </h1>
              <p className="mb-8 leading-relaxed">
                This astranaut suit is wore by Neil Armstrong
              </p>
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
                <div className="flex gap-2">
                  <span>SIZE:</span>
                  <p className="leading-relaxed">M</p>
                </div>

                <div className="flex gap-2">
                  <span>COLOR:</span>
                  <p className=" leading-relaxed">White</p>
                </div>

                <div className="flex gap-2">
                  <span>PRICE:</span>

                  <p className="leading-relaxed">₹ 400</p>
                </div>

                <div className="flex gap-2">
                  <span>TOTAL PRICE:</span>
                  <p className="mb-8 leading-relaxed">₹ 400</p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="flex gap-2">
                  <div className="flex gap-3 items-center">
                    <IconButton>
                      <RemoveCircleOutlineSharpIcon className="text-2xl disabled:cursor-not-allowed " />
                    </IconButton>

                    <span className="font-bold text-lg">1</span>

                    <IconButton>
                      <AddCircleOutlineSharpIcon className="text-2xl" />
                    </IconButton>
                  </div>
                </div>
                <button className="ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Remove from Cart
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="flex sm:justify-end">
          <div className="w-full sm:w-fit bg-red-100 p-5 flex flex-col sm:items-end sm:justify-end gap-2 ">
            <h6 className="text-xl lg:text-2xl font-semibold">SUBTOTAL</h6>

            <p className="text-lg">
              <span className="font-medium">1 </span>
              items : ₹<span className="font-medium"> 400</span>
            </p>

            <div>
              <Link to="/login">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Login to Order
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
