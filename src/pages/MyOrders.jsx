import React, { useEffect } from "react";

const MyOrders = () => {
  useEffect(() => {
    const toTop = () => {
      window.scrollTo(0, 0);
    };
    toTop();
  }, []);

  return (
    <div>
      <div className="py-4 lg:py-8 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
        <div className="flex justify-start item-start space-y-2 flex-col ">
          <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
            Your Orders
          </h1>
        </div>
        <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div className="flex flex-col justify-start items-start bg-gray-100 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
              <div className="flex flex-col gap-4 sm:flex-row justify-between items-center w-full">
                <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
                  Order ID: 3895734573546
                </p>
                <p className="text-base font-semibold leading-4 text-gray-600">
                  Status:{" "}
                  <span className={`text-lg font-medium text-green-500`}>
                    Delivered
                  </span>
                </p>
              </div>
              <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                <div className="pb-4 md:pb-8 w-full md:w-40">
                  <img
                    className="w-full hidden md:block"
                    src="https://res.cloudinary.com/dzh0wkv97/image/upload/v1694946053/AR%20glbs/Screenshot_997_jptp5t.png"
                    alt=""
                  />
                  <img
                    className="w-full md:hidden"
                    src="https://res.cloudinary.com/dzh0wkv97/image/upload/v1694946053/AR%20glbs/Screenshot_997_jptp5t.png"
                    alt=""
                  />
                </div>
                <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                  <div className="w-full flex flex-col justify-start items-start space-y-8">
                    <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                      Astranaut Suit
                    </h3>
                    <div className="flex justify-start items-start flex-col space-y-2">
                      <p className="text-sm leading-none text-gray-800">
                        <span className="text-gray-400">Size: </span>M
                      </p>
                      <p className="text-sm leading-none text-gray-800">
                        <span className="text-gray-400">Color: </span>
                        White
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between space-x-8 items-start w-full">
                    <p className="text-base xl:text-lg leading-6 text-gray-800">
                      1 items
                    </p>
                    <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                      ₹400
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center w-full pt-3">
                <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
                  Total Amount Paid:
                </p>
                <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
                  ₹400
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
